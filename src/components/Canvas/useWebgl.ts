import { useCallback, useEffect, useRef, useState } from 'react';
import { Scene } from '../../core/scene';

export const useWebGL = (shader: string) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<Scene | null>(null);
  const timeout = useRef<any>(null);
  const previousShader = useRef<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fps, setFps] = useState<number>(0);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    scene.current = Scene.createScene(canvas.current);
    scene.current?.init();
    scene.current?.setOnFpsUpdate(setFps);
    scene.current?.draw();
  }, []);

  const _handleUpdateShader = useCallback((shader: string, preventUpdate?: boolean) => {
    setIsUpdating(!preventUpdate && true);
    setTimeout(() => setIsUpdating(false), 1500);
    try {
      scene.current?.setShader(shader);
      setError(null);
    } catch (error: any) {
      setError(error.message.split('ERROR:')[1]);
    }
  }, []);

  const updateShader = useCallback((shader: string) => {
    if (!previousShader.current) {
      previousShader.current = shader;
      _handleUpdateShader(shader, true);
    } else {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => _handleUpdateShader(shader), 750);
    }
  }, []);

  useEffect(() => {
    updateShader(shader);
  }, [shader]);

  return { canvas, fps, isUpdating, error, scene };
};
