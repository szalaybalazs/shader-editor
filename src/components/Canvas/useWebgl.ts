import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { errorAtom } from '../../atoms/shader';
import { Scene } from '../../core/scene';

import { parser, generate } from '@shaderfrog/glsl-parser';
import preprocess from '@shaderfrog/glsl-parser/dist/preprocessor';

const processShader = (code: string) => {
  const versioned = `${code.startsWith('#version') ? '' : '#version 300 es\n'}${code}`;
  const shader = versioned.trim().replace(/\n(\n)+/g, '\n');

  const lines = shader.split('\n');

  return { code: shader, lines, originalLines: code.split('\n') };
};

export const useWebGL = (shader: string, options: { animated?: boolean; timestamp?: number } = { animated: true }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<Scene | null>(null);
  const timeout = useRef<any>(null);
  const previousShader = useRef<string | null>(null);
  const [errors, setErrors] = useRecoilState(errorAtom);
  const [fps, setFps] = useState<number>(0);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    try {
      scene.current = Scene.createScene(canvas.current);
      scene.current?.init();
      scene.current?.setOnFpsUpdate(setFps);
      if (options.animated) scene.current?.draw();
    } catch (error) {}
  }, [options.animated]);

  const _handleUpdateShader = useCallback((shader: string, preventUpdate?: boolean) => {
    const { code, lines, originalLines } = processShader(shader);
    setIsUpdating(!preventUpdate && true);
    setTimeout(() => setIsUpdating(false), 1500);
    try {
      scene.current?.setShader(code);
      setErrors([]);
    } catch (error: any) {
      const errors = error.message
        .split('\n')
        .filter((l) => l !== '[SHADER_ERROR]')
        .filter((l) => l.trim().startsWith('ERROR:'));

      console.log(errors);
      const markers = errors.map((error) => {
        const [_, _line, _field, message] = error.replace('ERROR: ', '').trim().split(':');
        const word = _field.trim().replace(/(^')|('$)/g, '');

        const lineContent = lines[_line - 1].trim();
        const originalLine = originalLines.find((l) => l.trim() === lineContent);
        const line = originalLines.indexOf(originalLine) + 1;

        const splits = originalLine.split(word);
        const column =
          splits.length < 3
            ? originalLine.indexOf(word) + 1
            : originalLine.length - originalLine.trimStart().length + 1; // todo: find first non-space character
        const length = splits.length < 3 ? word.length : originalLine.length; // todo: find first non-space character

        console.log({ lineContent, originalLine, line, message, word, column });

        return {
          line,
          column,
          message,
          length,
          word,
        };
      });

      setErrors(markers);

      // const parsedShader = shaderCode.replace(/\n(\n)+/g, '\n').split('\n');
      // const lines = shader.split('\n');

      // console.log('lines', lines);
      // console.log('parsed', parsedShader);

      // const markers = errors.map((error) => {
      //   const [_, lineIndex, field, message] = error.replace('ERROR: ', '').split(':');
      //   if (!lineIndex || !message) return;

      //   const keyWord = field.trim().replace(/(^')|('$)/g, '');
      //   const parsedLine = parsedShader[lineIndex - 1];
      //   const line = lines.indexOf(parsedLine);

      //   const occurences = parsedLine.split(keyWord);
      //   const fieldOccurences = occurences.length - 1;
      //   let column = 0;
      //   let length = parsedLine.length;

      //   if (fieldOccurences === 1) {
      //     column = occurences[0].length + 1;
      //     length = keyWord.length;
      //   }

      //   console.log({
      //     error,
      //     message,
      //     line,
      //     column,
      //     length,
      //     fieldOccurences,
      //     occurences,
      //     parsedLine,
      //   });

      //   return {
      //     line: line + 1,
      //     length,
      //     column,
      //     message,
      //   };
      // });
      // setErrors(markers.filter(Boolean));
      // const res = parser.parse(shader);
      // console.log(res);
      // console.log(
      //   preprocess(shader, {
      //     preserveComments: true,
      //   }),
      // );
      // console.log(generate(res));
      // console.log(error);
      // const errorMessage = error.message.split('ERROR:')[1];
      // const [_, column, word, message] = errorMessage.split(':');
      // const keyword = word.trim().replace(/(^')|('$)/g, '');
      // const line = shader.split('\n').findIndex((l) => l[column] === keyword) + 1;
      // setError({
      //   line: Number(line),
      //   column: Number(column),
      //   length: keyword.length,
      //   message: message.trim().replace(/\n./, ''),
      //   // keyword,
      // });
    }
  }, []);

  const updateShader = useCallback(
    (shader: string) => {
      if (!previousShader.current) {
        previousShader.current = shader;
        _handleUpdateShader(shader, true);
      } else {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => _handleUpdateShader(shader), 750);
      }
    },
    [_handleUpdateShader],
  );

  useEffect(() => {
    updateShader(shader);
  }, [shader, updateShader]);

  return { canvas, fps, isUpdating, errors, scene };
};
