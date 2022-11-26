export const functions = {
  abs: {
    name: 'return the absolute value of the parameter',
    descriptionMD: '`abs` returns the absolute value of _`x`_.',
    support: 1.1,
    declaration: 'genType abs(genType x);',
    params: [['x', 'Specify the value of which to return the absolute.']],
    seealso: ['sign'],
  },
  acos: {
    name: 'return the arccosine of the parameter',
    descriptionMD:
      '`acos` returns the angle whose trigonometric cosine is $x$. The range of values returned by `acos` is $\\[0,\\\\pi\\]$. The result is undefined if $\\\\left| x \\\\right| > 1$.',
    support: 1.1,
    declaration: 'genType acos(genType x);',
    params: [['x', 'Specify the value whose arccosine to return.']],
    seealso: ['sin', 'cos', 'asin', 'tan'],
  },
  acosh: {
    name: 'return the arc hyperbolic cosine of the parameter',
    descriptionMD:
      '`acosh` returns the arc hyperbolic cosine of $x$; the non-negative inverse of [cosh](cosh.xhtml). The result is undefined if $x < 1$.',
    support: 1.3,
    declaration: 'genType acosh(genType x);',
    params: [['x', 'Specify the value whose arc hyperbolic cosine to return.']],
    seealso: ['sin', 'cos', 'sinh', 'cosh'],
  },
  all: {
    name: 'check whether all elements of a boolean vector are true',
    descriptionMD:
      '`all` returns true if all elements of _`x`_ are true and false otherwise. It is functionally equivalent to:',
    support: 1.1,
    declaration: 'bool all(bvec x);',
    params: [['x', 'Specifies the vector to be tested for truth.']],
    seealso: ['any', 'not'],
  },
  any: {
    name: 'check whether any element of a boolean vector is true',
    descriptionMD:
      '`any` returns true if any element of _`x`_ is true and false otherwise. It is functionally equivalent to:',
    support: 1.1,
    declaration: 'bool any(bvec x);',
    params: [['x', 'Specifies the vector to be tested for truth.']],
    seealso: ['all', 'not'],
  },
  asin: {
    name: 'return the arcsine of the parameter',
    descriptionMD:
      '`atan` returns the angle whose trigonometric sine is $x$. The range of values returned by `asin` is $\\[-{\\\\pi \\\\over 2}, {\\\\pi \\\\over 2}\\]$. The result is undefined if $\\\\left| x \\\\right| > 1$.',
    support: 1.1,
    declaration: 'genType asin(genType x);',
    params: [['x', 'Specify the value whose arcsine to return.']],
    seealso: ['sin', 'cos', 'acos', 'tan'],
  },
  asinh: {
    name: 'return the arc hyperbolic sine of the parameter',
    descriptionMD: '`asinh` returns the arc hyperbolic sine of x; the inverse of [sinh](sinh.xhtml).',
    support: 1.3,
    declaration: 'genType asinh(genType x);',
    params: [['x', 'Specify the value whose arc hyperbolic sine to return.']],
    seealso: ['sin', 'cos', 'sinh', 'cosh'],
  },
  atan: {
    name: 'return the arc-tangent of the parameters',
    descriptionMD:
      '`atan` returns either the angle whose trigonometric arctangent is $y \\\\over x$ or _`y_over_x`_, depending on which overload is invoked. In the first overload, the signs of $y$ and $x$ are used to determine the quadrant that the angle lies in. The value returned by `atan` in this case is in the range $\\[-\\\\pi,\\\\pi\\]$. The result is undefined if $x = 0$.',
    support: 1.1,
    declaration: 'genType atan(\n              genType y, \n              genType x);',
    params: [
      ['y', 'Specify the numerator of the fraction whose arctangent to return.'],
      ['x', 'Specify the denominator of the fraction whose arctangent to return.'],
      ['y_over_x', 'Specify the fraction whose arctangent to return.'],
    ],
    seealso: ['sin', 'cos', 'tan'],
  },
  atanh: {
    name: 'return the arc hyperbolic tangent of the parameter',
    descriptionMD:
      '`atanh` returns the arc hyperbolic tangent of $x$; the inverse of [tanh](tanh.xhtml). The result is undefined if $\\\\left| x \\\\right| > 1$.',
    support: 1.1,
    declaration: 'genType atanh(genType x);',
    params: [['x', 'Specify the value whose arc hyperbolic tangent to return.']],
    seealso: ['sin', 'cos', 'sinh', 'cosh'],
  },
  atomicAdd: {
    name: 'perform an atomic addition to a variable',
    descriptionMD:
      '`atomicAdd` performs an atomic addition of _`data`_ to the contents of _`mem`_ and returns the original contents of _`mem`_ from before the addition occurred. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration: 'int atomicAdd(\n              inout int mem, \n              int data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be added to mem.'],
    ],
    seealso: ['atomicAnd', 'atomicOr', 'atomicXor', 'atomicMin', 'atomicMax', 'atomicExchange', 'atomicCompSwap'],
  },
  atomicAnd: {
    name: 'perform an atomic logical AND operation to a variable',
    descriptionMD:
      '`atomicAnd` performs an atomic logical AND with _`data`_ to the contents of _`mem`_ and returns the original contents of _`mem`_ from before the logical operation occurred. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration: 'int atomicAnd(\n              inout int mem, \n              int data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be logically ANDed with to mem.'],
    ],
    seealso: ['atomicAdd', 'atomicOr', 'atomicXor', 'atomicMin', 'atomicMax', 'atomicExchange', 'atomicCompSwap'],
  },
  atomicCompSwap: {
    name: 'perform an atomic compare-exchange operation to a variable',
    descriptionMD:
      '`atomicCompSwap` performs an atomic comparison of _`compare`_ with the contents of _`mem`_. If the content of _`mem`_ is equal to _`compare`_, then the content of _`data`_ is written into _`mem`_, otherwise the content of _`mem`_ is unmodifed. The function returns the original content of _`mem`_ regardless of the outcome of the comparison. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration:
      'int atomicCompSwap(\n              inout int mem, \n              uint compare, \n              uint data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be compared and potentially exchanged with mem.'],
    ],
    seealso: ['atomicAdd', 'atomicAnd', 'atomicOr', 'atomicXor', 'atomicMin', 'atomicMax', 'atomicExchange'],
  },
  atomicCounter: {
    name: 'return the current value of an atomic counter',
    descriptionMD: '`atomicCounter` returns the current value of the atomic counter _`c`_.',
    support: 4.2,
    declaration: 'uint atomicCounter(atomic_uint c);',
    params: [['c', 'Specify the handle to the atomic counter whose value to return.']],
    seealso: ['atomicCounterIncrement', 'atomicCounterDecrement'],
  },
  atomicCounterDecrement: {
    name: 'atomically decrement a counter and return the prior value',
    descriptionMD:
      '`atomicCounterDecrement` atomically decrements the value of the atomic counter _`c`_ and returns its new value.',
    support: 4.2,
    declaration: 'uint atomicCounterDecrement(atomic_uint c);',
    params: [['c', 'Specify the handle to the atomic counter to decrement.']],
    seealso: ['atomicCounterIncrement', 'atomicCounter'],
  },
  atomicCounterIncrement: {
    name: 'atomically increment a counter and return the prior value',
    descriptionMD:
      '`atomicCounterIncrement` atomically increments the value of the atomic counter _`c`_ and returns its prior value.',
    support: 4.2,
    declaration: 'uint atomicCounterIncrement(atomic_uint c);',
    params: [['c', 'Specify the handle to the atomic counter to increment.']],
    seealso: ['atomicCounterDecrement', 'atomicCounter'],
  },
  atomicExchange: {
    name: 'perform an atomic exchange operation to a variable',
    descriptionMD:
      '`atomicExchange` performs an atomic exhange of _`data`_ with the contents of _`mem`_. The content of _`data`_ is written into _`mem`_ and the original contents of _`mem`_ are returned. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration: 'int atomicExchange(\n              inout int mem, \n              int data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be exchanged with mem.'],
    ],
    seealso: ['atomicAdd', 'atomicAnd', 'atomicOr', 'atomicXor', 'atomicMin', 'atomicMax', 'atomicCompSwap'],
  },
  atomicMax: {
    name: 'perform an atomic max operation to a variable',
    descriptionMD:
      '`atomicMax` performs an atomic comparison of _`data`_ to the contents of _`mem`_, writes the maximum value into _`mem`_ and returns the original contents of _`mem`_ from before the comparison occurred. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration: 'int atomicMax(\n              inout int mem, \n              int data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be compared to mem.'],
    ],
    seealso: ['atomicAdd', 'atomicAnd', 'atomicOr', 'atomicXor', 'atomicMin', 'atomicExchange', 'atomicCompSwap'],
  },
  atomicMin: {
    name: 'perform an atomic min operation to a variable',
    descriptionMD:
      '`atomicMin` performs an atomic comparison of _`data`_ to the contents of _`mem`_, writes the minimum value into _`mem`_ and returns the original contents of _`mem`_ from before the comparison occurred. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration: 'int atomicMin(\n              inout int mem, \n              int data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be compared to mem.'],
    ],
    seealso: ['atomicAdd', 'atomicAnd', 'atomicOr', 'atomicXor', 'atomicMax', 'atomicExchange', 'atomicCompSwap'],
  },
  atomicOr: {
    name: 'perform an atomic logical OR operation to a variable',
    descriptionMD:
      '`atomicOr` performs an atomic logical OR with _`data`_ to the contents of _`mem`_ and returns the original contents of _`mem`_ from before the logical operation occurred. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration: 'int atomicOr(\n              inout int mem, \n              int data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be logically ORed with to mem.'],
    ],
    seealso: ['atomicAdd', 'atomicAnd', 'atomicXor', 'atomicMin', 'atomicMax', 'atomicExchange', 'atomicCompSwap'],
  },
  atomicXor: {
    name: 'perform an atomic logical exclusive OR operation to a variable',
    descriptionMD:
      '`atomicXor` performs an atomic logical exclusive OR with _`data`_ to the contents of _`mem`_ and returns the original contents of _`mem`_ from before the logical operation occurred. The contents of the memory being updated by the atomic operation are guaranteed not to be modified by any other assignment or atomic memory function in any shader invocation between the time the original value is read and the time the new value is written.',
    support: 4.3,
    declaration: 'int atomicXor(\n              inout int mem, \n              int data);',
    params: [
      ['mem', 'The variable to use as the target of the operation.'],
      ['data', 'The data to be logically exclusive ORed with to mem.'],
    ],
    seealso: ['atomicAdd', 'atomicAnd', 'atomicOr', 'atomicMin', 'atomicMax', 'atomicExchange', 'atomicCompSwap'],
  },
  barrier: {
    name: 'synchronize execution of multiple shader invocations',
    descriptionMD:
      '_Available only in the Tessellation Control and Compute Shaders_, `barrier` provides a partially defined order of execution between shader invocations. For any given static instance of `barrier`, in a tessellation control shader, all invocations for a single input patch must enter it before any will be allowed to continue beyond it. For any given static instance of `barrier` in a compute shader, all invocations within a single work group must enter it before any are allowed to continue beyond it. This ensures that values written by one invocation prior to a given static instance of `barrier` can be safely read by other invocations after their call to the same static instance of `barrier`. Because invocations may execute in undefined order between these `barrier` calls, the values of a per-vertex or per-patch output variable, or any shared variable will be undefined in a number of cases.',
    support: 4,
    declaration: 'void barrier(void);',
    params: [],
    seealso: [],
  },
  bitCount: {
    name: 'counts the number of 1 bits in an integer',
    descriptionMD: '`bitCount` returns the number of bits that are set to 1 in the binary representation of _`value`_.',
    support: 4,
    declaration: 'genIType bitCount(genIType value);',
    params: [['value', 'Specifies the value whose bits to count.']],
    seealso: ['findLSB', 'findMSB'],
  },
  bitfieldExtract: {
    name: 'extract a range of bits from an integer',
    descriptionMD:
      '`bitfieldExtract` extracts a subset of the bits of _`value`_ and returns it in the least significant bits of the result. The range of bits extracted is \\[_`offset`_, _`offset`_ + _`bits`_ - 1\\].',
    support: 4,
    declaration:
      'genIType bitfieldExtract(\n              genIType value, \n              int offset, \n              int bits);',
    params: [
      ['value', 'Specifies the integer from which to extract bits.'],
      ['offset', 'Specifies the index of the first bit to extract.'],
      ['bits', 'Specifies the number of bits to extract.'],
    ],
    seealso: ['bitfieldExtract'],
  },
  bitfieldInsert: {
    name: 'insert a range of bits into an integer',
    descriptionMD:
      '`bitfieldInsert` inserts the _`bits`_ least significant bits of _`insert`_ into _`base`_ at offset _`offset`_. The returned value will have bits \\[_`offset`_, _`offset`_ + _`bits`_ + 1\\] taken from \\[0, _`bits`_ - 1\\] of _`insert`_ and all other bits taken directly from the corresponding bits of _`base`_. If _`bits`_ is zero, the result will simply be the original value of _`base`_. The result will be undefined if _`offset`_ or _`bits`_ is negative, or if the sum of _`offset`_ and _`bits`_ is greater than the number of bits used to store the operand.',
    support: 4,
    declaration:
      'genIType bitfieldInsert(\n              genIType base, \n              genIType insert, \n              int offset, \n              int bits);',
    params: [
      ['base', 'Specifies the integer into which to insert insert.'],
      ['insert', 'Specifies the value of the bits to insert.'],
      ['offset', 'Specifies the index of the first bit to insert.'],
      ['bits', 'Specifies the number of bits to insert.'],
    ],
    seealso: ['bitfieldExtract'],
  },
  bitfieldReverse: {
    name: 'reverse the order of bits in an integer',
    descriptionMD:
      '`bitfieldReverse` returns the reversal of the bits of value. The bit numbered _n_ will be taken from bit (_bits_ - 1) - _n_ of _`value`_, where _bits_ is the total number of bits used to represent _`value`_.',
    support: 4,
    declaration: 'genIType bitfieldReverse(genIType value);',
    params: [['value', 'Specifies the value whose bits to reverse.']],
    seealso: ['bitfieldExtract', 'bitfieldInsert', 'bitCount'],
  },
  ceil: {
    name: 'find the nearest integer that is greater than or equal to the parameter',
    descriptionMD: '`ceil` returns a value equal to the nearest integer that is greater than or equal to _`x`_.',
    support: 1.1,
    declaration: 'genType ceil(genType x);',
    params: [['x', 'Specify the value to evaluate.']],
    seealso: ['floor', 'round'],
  },
  clamp: {
    name: 'constrain a value to lie between two further values',
    descriptionMD:
      '`clamp` returns the value of _`x`_ constrained to the range _`minVal`_ to _`maxVal`_. The returned value is computed as [min](min.xhtml)([max](max.xhtml)(_`x`_, _`minVal`_), _`maxVal`_).',
    support: 1.1,
    declaration:
      'genType clamp(\n              genType x, \n              genType minVal, \n              genType maxVal);',
    params: [
      ['x', 'Specify the value to constrain.'],
      ['minVal', 'Specify the lower end of the range into which to constrain x.'],
      ['maxVal', 'Specify the upper end of the range into which to constrain x.'],
    ],
    seealso: ['min', 'max'],
  },
  cos: {
    name: 'return the cosine of the parameter',
    descriptionMD: '`cos` returns the trigonometric cosine of _`angle`_.',
    support: 1.1,
    declaration: 'genType cos(genType angle);',
    params: [['angle', 'Specify the quantity, in radians, of which to return the cosine.']],
    seealso: ['sin'],
  },
  cosh: {
    name: 'return the hyperbolic cosine of the parameter',
    descriptionMD:
      '`cosh` returns the hyperbolic cosine of x. The hyperbolic cosine of x is computed as e x + e − x 2 .',
    support: 1.3,
    declaration: 'genType cosh(genType x);',
    params: [['x', 'Specify the value whose hyperbolic cosine to return.']],
    seealso: ['sin', 'cos', 'sinh'],
  },
  cross: {
    name: 'calculate the cross product of two vectors',
    descriptionMD:
      '`cross` returns the cross product of two vectors, _`x`_ and _`y`_, i.e. $\\\\begin{pmatrix} { x\\[1\\] \\\\times y\\[2\\] - y\\[1\\] \\\\times x\\[2\\] } \\\\\\\\ { x\\[2\\] \\\\times y\\[0\\] - y\\[2\\] \\\\times x\\[0\\] } \\\\\\\\ { x\\[0\\] \\\\times y\\[1\\] - y\\[0\\] \\\\times x\\[1\\] } \\\\end{pmatrix}$.',
    support: 1.1,
    declaration: 'vec3 cross(\n              vec3 x, \n              vec3 y);',
    params: [
      ['x', 'Specifies the first of two vectors'],
      ['y', 'Specifies the second of two vectors'],
    ],
    seealso: ['dot'],
  },
  degrees: {
    name: 'convert a quantity in radians to degrees',
    descriptionMD:
      '`degrees` converts a quantity specified in radians into degrees. The return value is ${ 180 \\\\times radians } \\\\over \\\\pi$.',
    support: 1.1,
    declaration: 'genType degrees(genType radians);',
    params: [['radians', 'Specify the quantity, in radians, to be converted to degrees.']],
    seealso: ['radians'],
  },
  determinant: {
    name: 'calculate the determinant of a matrix',
    descriptionMD: '`determinant` returns the determinant of the matrix _`m`_.',
    support: 1.5,
    declaration: 'float determinant(mat2 m);',
    params: [['m', 'Specifies the matrix of which to take the determinant.']],
    seealso: ['transpose', 'inverse'],
  },
  dFdx: {
    name: 'dFdx, return the partial derivative of an argument with respect to x or y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the partial derivative of expression _`p`_ with respect to the window $x$ coordinate (for `dFdx*`) and $y$ coordinate (for `dFdy*`).',
    support: 1.1,
    declaration: 'genType dFdx(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['fwidth', 'glHint'],
  },
  dFdxCoarse: {
    name: 'dFdx, return the partial derivative of an argument with respect to x or y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the partial derivative of expression _`p`_ with respect to the window $x$ coordinate (for `dFdx*`) and $y$ coordinate (for `dFdy*`).',
    support: 1.1,
    declaration: 'genType dFdx(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['fwidth', 'glHint'],
  },
  dFdxFine: {
    name: 'dFdx, return the partial derivative of an argument with respect to x or y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the partial derivative of expression _`p`_ with respect to the window $x$ coordinate (for `dFdx*`) and $y$ coordinate (for `dFdy*`).',
    support: 1.1,
    declaration: 'genType dFdx(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['fwidth', 'glHint'],
  },
  dFdy: {
    name: 'dFdx, return the partial derivative of an argument with respect to x or y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the partial derivative of expression _`p`_ with respect to the window $x$ coordinate (for `dFdx*`) and $y$ coordinate (for `dFdy*`).',
    support: 1.1,
    declaration: 'genType dFdx(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['fwidth', 'glHint'],
  },
  dFdyCoarse: {
    name: 'dFdx, return the partial derivative of an argument with respect to x or y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the partial derivative of expression _`p`_ with respect to the window $x$ coordinate (for `dFdx*`) and $y$ coordinate (for `dFdy*`).',
    support: 1.1,
    declaration: 'genType dFdx(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['fwidth', 'glHint'],
  },
  dFdyFine: {
    name: 'dFdx, return the partial derivative of an argument with respect to x or y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the partial derivative of expression _`p`_ with respect to the window $x$ coordinate (for `dFdx*`) and $y$ coordinate (for `dFdy*`).',
    support: 1.1,
    declaration: 'genType dFdx(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['fwidth', 'glHint'],
  },
  distance: {
    name: 'calculate the distance between two points',
    descriptionMD:
      '`distance` returns the distance between the two points _`p0`_ and _`p1`_. i.e., `` `length`(_`p0`_ - _`p1`_); ``',
    support: 1.1,
    declaration: 'float distance(\n              genType p0, \n              genType p1);',
    params: [
      ['p0', 'Specifies the first of two points'],
      ['p1', 'Specifies the second of two points'],
    ],
    seealso: ['length', 'normalize'],
  },
  dot: {
    name: 'calculate the dot product of two vectors',
    descriptionMD:
      '`dot` returns the dot product of two vectors, _`x`_ and _`y`_. i.e., x \\[ 0 \\] ⋅ y \\[ 0 \\] + x \\[ 1 \\] ⋅ y \\[ 1 \\] + ...',
    support: 1.1,
    declaration: 'float dot(\n              genType x, \n              genType y);',
    params: [
      ['x', 'Specifies the first of two vectors'],
      ['y', 'Specifies the second of two vectors'],
    ],
    seealso: ['cross'],
  },
  EmitStreamVertex: {
    name: 'emit a vertex to a specified stream',
    descriptionMD:
      '_Available only in the Geometry Shader_, `EmitStreamVertex` emits the current values of output variables to the current output primitive on stream _`stream`_. The argument _`stream`_ must be a constant integral expression. On return from this call, the value of all output variables for all streams are undefined.',
    support: 4,
    declaration: 'void EmitStreamVertex(int stream);',
    params: [['stream', 'Specifies the stream upon which the vertex will be emitted.']],
    seealso: ['EmitVertex', 'EndStreamPrimitive', 'EndPrimitive'],
  },
  EmitVertex: {
    name: 'emit a vertex to the first vertex stream',
    descriptionMD:
      '_Available only in the Geometry Shader_, `EmitVertex` emits the current values of output variables to the current output primitive on the first (and possibly only) primitive stream. It is equivalent to calling [EmitStreamVertex](EmitStreamVertex.xhtml) with _`stream`_ set to 0.',
    support: 1.5,
    declaration: 'void EmitVertex(void);',
    params: [],
    seealso: ['EmitStreamVertex', 'EndStreamPrimitive', 'EndPrimitive'],
  },
  EndPrimitive: {
    name: 'complete the current output primitive on the first vertex stream',
    descriptionMD:
      '_Available only in the Geometry Shader_, `EndPrimitive` completes the current output primitive on the first (and possibly only) vertex stream and starts a new one.No vertex is emitted. Calling `EndPrimitive` is equivalent to calling [EmitStreamVertex](EmitStreamVertex.xhtml) with _`stream`_ set to 0.',
    support: 1.5,
    declaration: 'void EndPrimitive(void);',
    params: [],
    seealso: ['EmitVertex', 'EmitStreamVertex', 'EndStreamPrimitive'],
  },
  EndStreamPrimitive: {
    name: 'complete the current output primitive on a specified stream',
    descriptionMD:
      '_Available only in the Geometry Shader_, `EndStreamPrimitive` completes the current output primitive on stream _`stream`_ and starts a new one. The argument to _`stream`_ must be a constant integral expression. No vertex is emitted.',
    support: 4,
    declaration: 'void EndStreamPrimitive(int stream);',
    params: [['stream', 'Specifies the stream upon which the current primitive will be ended.']],
    seealso: ['EmitVertex', 'EmitStreamVertex', 'EndPrimitive'],
  },
  equal: {
    name: 'perform a component-wise equal-to comparison of two vectors',
    descriptionMD:
      '`equal` returns a boolean vector in which each element _i_ is computed as _`x`_\\[_i_\\] == _`y`_\\[_i_\\].',
    support: 1.1,
    declaration: 'bvec equal(\n              vec x, \n              vec y);',
    params: [
      ['x', 'Specifies the first vector to be used in the comparison operation.'],
      ['x', 'Specifies the second vector to be used in the comparison operation.'],
    ],
    seealso: ['lessThan', 'lessThanEqual', 'greaterThan', 'greaterThanEqual', 'notEqual', 'any', 'all', 'not'],
  },
  exp: {
    name: 'return the natural exponentiation of the parameter',
    descriptionMD: '`exp` returns the natural exponentiation of _`x`_. i.e., ex.',
    support: 1.1,
    declaration: 'genType exp(genType x);',
    params: [['x', 'Specify the value to exponentiate.']],
    seealso: ['sin', 'cos', 'sinh', 'cosh'],
  },
  exp2: {
    name: 'return 2 raised to the power of the parameter',
    descriptionMD: '`exp2` returns 2 raised to the power of _`x`_. i.e., 2x.',
    support: 1.1,
    declaration: 'genType exp2(genType x);',
    params: [['x', 'Specify the value of the power to which 2 will be raised.']],
    seealso: ['exp', 'log', 'log2'],
  },
  faceforward: {
    name: 'return a vector pointing in the same direction as another',
    descriptionMD:
      '`faceforward` orients a vector to point away from a surface as defined by its normal. If [dot](dot.xhtml)``(_`Nref`_, _`I`_) < 0`` `faceforward` returns _`N`_, otherwise it returns ``-_`N`_``.',
    support: 1.1,
    declaration:
      'genType faceforward(\n              genType N, \n              genType I, \n              genType Nref);',
    params: [
      ['N', 'Specifies the vector to orient.'],
      ['I', 'Specifies the incident vector.'],
      ['Nref', 'Specifies the reference vector.'],
    ],
    seealso: ['reflect', 'refract'],
  },
  findLSB: {
    name: 'find the index of the least significant bit set to 1 in an integer',
    descriptionMD:
      '`findLSB` returns the bit number of the least significant bit that is set to 1 in the binary representation of _`value`_. If _`value`_ is zero, -1 will be returned.',
    support: 4,
    declaration: 'genIType findLSB(genIType value);',
    params: [['value', 'Specifies the value whose bits to scan.']],
    seealso: ['findMSB'],
  },
  findMSB: {
    name: 'find the index of the most significant bit set to 1 in an integer',
    descriptionMD:
      '`findMSB` returns the bit number of the most significant bit that is set to 1 in the binary representation of _`value`_. For positive integers, the result will be the bit number of the most significant bit that is set to 1. For negative integers, the result will be the bit number of the most significant bit set to 0. For a _`value`_ of zero or negative 1, -1 will be returned.',
    support: 4,
    declaration: 'genIType findMSB(genIType value);',
    params: [['value', 'Specifies the value whose bits to scan.']],
    seealso: ['findLSB'],
  },
  floatBitsToInt: {
    name: 'produce the encoding of a floating point value as an integer',
    descriptionMD:
      '`floatBitsToInt` and `floatBitsToUint` return the encoding of their floating-point parameters as `int` or `uint`, respectively. The floating-point bit-level representation is preserved.',
    support: 3.3,
    declaration: 'genIType floatBitsToInt(genType x);',
    params: [['x', 'Specifies the value whose floating point encoding to return.']],
    seealso: ['intBitsToFloat'],
  },
  floatBitsToUint: {
    name: 'produce the encoding of a floating point value as an integer',
    descriptionMD:
      '`floatBitsToInt` and `floatBitsToUint` return the encoding of their floating-point parameters as `int` or `uint`, respectively. The floating-point bit-level representation is preserved.',
    support: 3.3,
    declaration: 'genIType floatBitsToInt(genType x);',
    params: [['x', 'Specifies the value whose floating point encoding to return.']],
    seealso: ['intBitsToFloat'],
  },
  floor: {
    name: 'find the nearest integer less than or equal to the parameter',
    descriptionMD: '`floor` returns a value equal to the nearest integer that is less than or equal to _`x`_.',
    support: 1.1,
    declaration: 'genType floor(genType x);',
    params: [['x', 'Specify the value to evaluate.']],
    seealso: ['trunc', 'round'],
  },
  fma: {
    name: 'perform a fused multiply-add operation',
    descriptionMD:
      '`fma` performs, where possible, a fused multiply-add operation, returning `a * b + c`. In use cases where the return value is eventually consumed by a variable declared as `precise`:',
    support: 4,
    declaration: 'genType fma(\n              genType a, \n              genType b, \n              genType c);',
    params: [
      ['a', 'Specifies the first multiplicand.'],
      ['b', 'Specifies the second multiplicand.'],
      ['c', 'Specifies the value to be added to the result.'],
    ],
    seealso: [],
  },
  fract: {
    name: 'compute the fractional part of the argument',
    descriptionMD:
      '`fract` returns the fractional part of _`x`_. This is calculated as _`x`_ - [floor](floor.xhtml)(_`x`_).',
    support: 1.1,
    declaration: 'genType fract(genType x);',
    params: [['x', 'Specify the value to evaluate.']],
    seealso: ['floor', 'round'],
  },
  frexp: {
    name: 'split a floating point number',
    descriptionMD:
      '`frexp` extracts _`x`_ into a floating-point significand in the range \\[0.5, 1.0) and in integral exponent of two, such that:',
    support: 4,
    declaration: 'genType frexp(\n              genType x, \n              out genIType exp);',
    params: [
      ['x', 'Specifies the value from which significand and exponent are to be extracted.'],
      ['out exp', 'Specifies the variable into which to place the exponent'],
    ],
    seealso: ['ldexp'],
  },
  fwidth: {
    name: 'return the sum of the absolute value of derivatives in x and y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the sum of the absolute derivatives in $x$ and $y$ using local differencing for the input argument _`p`_. `fwidth` is equivalent to `` `abs`(_`dFdx`_(p)) + `abs`(_`dFdy`_(p)) `` . `fwidthCoarse` is equivalent to `` `abs`(_`dFdxCoarse`_(p)) + `abs`(_`dFdyCoarse`_(p)) `` . `fwidthFine` is equivalent to `` `abs`(_`dFdxFine`_(p)) + `abs`(_`dFdyFine`_(p)) `` .',
    support: 1.1,
    declaration: 'genType fwidth(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['dFdx'],
  },
  fwidthCoarse: {
    name: 'return the sum of the absolute value of derivatives in x and y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the sum of the absolute derivatives in $x$ and $y$ using local differencing for the input argument _`p`_. `fwidth` is equivalent to `` `abs`(_`dFdx`_(p)) + `abs`(_`dFdy`_(p)) `` . `fwidthCoarse` is equivalent to `` `abs`(_`dFdxCoarse`_(p)) + `abs`(_`dFdyCoarse`_(p)) `` . `fwidthFine` is equivalent to `` `abs`(_`dFdxFine`_(p)) + `abs`(_`dFdyFine`_(p)) `` .',
    support: 1.1,
    declaration: 'genType fwidth(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['dFdx'],
  },
  fwidthFine: {
    name: 'return the sum of the absolute value of derivatives in x and y',
    descriptionMD:
      '_Available only in the fragment shader_, these functions return the sum of the absolute derivatives in $x$ and $y$ using local differencing for the input argument _`p`_. `fwidth` is equivalent to `` `abs`(_`dFdx`_(p)) + `abs`(_`dFdy`_(p)) `` . `fwidthCoarse` is equivalent to `` `abs`(_`dFdxCoarse`_(p)) + `abs`(_`dFdyCoarse`_(p)) `` . `fwidthFine` is equivalent to `` `abs`(_`dFdxFine`_(p)) + `abs`(_`dFdyFine`_(p)) `` .',
    support: 1.1,
    declaration: 'genType fwidth(genType p);',
    params: [['p', 'Specifies the expression of which to take the partial'], ['derivative.']],
    seealso: ['dFdx'],
  },
  gl_ClipDistance: {
    name: 'provides a forward-compatible mechanism for vertex clipping',
    descriptionMD:
      'The `gl_ClipDistance` variable provides a forward compatible mechanism for controlling user clipping. The element _`gl_ClipDistance`_\\[_i_\\] specifies a clip distance for each user clip plane _i_. A distance of 0.0 means that the vertex is on the plane, a positive distance means that the vertex is inside the clip plane, and a negative distance means that the point is outside the clip plane. The clip distances will be linearly interpolated across the primitive and the portion of the primitive with interpolated distances less than 0.0 will be clipped.',
    support: 1.3,
    declaration: '',
    params: [],
    seealso: ['gl_CullDistance', 'gl_PointSize'],
  },
  gl_CullDistance: {
    name: 'provides a mechanism for controlling user culling',
    descriptionMD:
      'The `gl_CullDistance` variable provides a mechanism for controlling user culling. The element _`gl_CullDistance`_\\[_i_\\] specifies a cull distance for each plane _i_. A distance of 0.0 means that the vertex is on the plane, a positive distance means that the vertex is inside the cull volume, and a negative distance means that the point is outside the cull volume. Primitives whose vertices all have a negative clip distance for plane _i_ will be discarded.',
    support: 4.5,
    declaration: '',
    params: [],
    seealso: ['gl_ClipDistance', 'gl_PointSize'],
  },
  gl_FragCoord: {
    name: 'contains the window-relative coordinates of the current fragment',
    descriptionMD:
      "Available only in the fragment language, `gl_FragCoord` is an input variable that contains the window relative coordinate (x, y, z, 1/w) values for the fragment. If multi-sampling, this value can be for any location within the pixel, or one of the fragment samples. This value is the result of fixed functionality that interpolates primitives after vertex processing to generate fragments. The z component is the depth value that would be used for the fragment's depth if no shader contained any writes to [gl\\_FragDepth](gl_FragDepth.xhtml).",
    support: 1.1,
    declaration: '',
    params: [],
    seealso: ['gl_FragDepth'],
  },
  gl_FragDepth: {
    name: 'establishes a depth value for the current fragment',
    descriptionMD:
      "Available only in the fragment language, `gl_FragDepth` is an output variable that is used to establish the depth value for the current fragment. If depth buffering is enabled and no shader writes to `gl_FragDepth`, then the fixed function value for depth will be used (this value is contained in the z component of [gl\\_FragCoord](gl_FragCoord.xhtml)) otherwise, the value written to `gl_FragDepth` is used. If a shader statically assigns to `gl_FragDepth`, then the value of the fragment's depth may be undefined for executions of the shader that take that path. That is, if the set of linked fragment shaders statically contain a write to `gl_FragDepth`, then it is responsible for always writing it.",
    support: 1.1,
    declaration: '',
    params: [],
    seealso: ['gl_FragCoord'],
  },
  gl_FrontFacing: {
    name: 'indicates whether a primitive is front or back facing',
    descriptionMD:
      'Available only in the fragment language, `gl_FrontFacing` is an input variable whose value is `true` if the fragment belongs to a front-facing primitive and false otherwise. The determination of whether a triangle primitive is front-facing is made by examining the sign of the area of the triangle, including a possible reversal of this sign as controlled by `glFrontFace`. One way to compute this area is:',
    support: 1.1,
    declaration: '',
    params: [],
    seealso: ['gl_FragCoord', 'glClipControl'],
  },
  gl_GlobalInvocationID: {
    name: 'contains the global index of work item currently being operated on by a compute shader',
    descriptionMD:
      'In the compute language, `gl_GlobalInvocationID` is a derived input variable containing the n-dimensional index of the work invocation within the global work group that the current shader is executing on. The value of `gl_GlobalInvocationID` is equal to `gl_WorkGroupID` \\* `gl_WorkGroupSize` + `gl_LocalInvocationID`.',
    support: 4.3,
    declaration: '',
    params: [],
    seealso: ['gl_NumWorkGroups', 'gl_WorkGroupID', 'gl_WorkGroupSize', 'gl_LocalInvocationID'],
  },
  gl_HelperInvocation: {
    name: 'indicates whether a fragment shader invocation is a helper invocation',
    descriptionMD:
      'The value `gl_HelperInvocation` is true if the fragment shader invocation is considered a helper invocation and is false otherwise. A helper invocation is a fragment-shader invocation that is created solely for the purposes of evaluating derivatives for use in non-helper fragment-shader invocations. Such derivatives are computed implicitly in the built-in function [texture](texture.xhtml)(), and explicitly in the derivative functions [dFdx](dFdx.xhtml)() and `dFdy`.',
    support: 4.5,
    declaration: '',
    params: [],
    seealso: ['dFdx', 'texture'],
  },
  gl_InstanceID: {
    name: 'contains the index of the current primitive in an instanced draw command',
    descriptionMD:
      '`gl_InstanceID` is a vertex language input variable that holds the integer index of the current primitive in an instanced draw command such as `glDrawArraysInstanced`. If the current primitive does not originate from an instanced draw command, the value of `gl_InstanceID` is zero.',
    support: 1.4,
    declaration: '',
    params: [],
    seealso: ['gl_VertexID'],
  },
  gl_InvocationID: {
    name: 'contains the invocation index of the current shader',
    descriptionMD:
      'In the tessellation control language, `gl_InvocationID` contains the index of the output patch vertex assigned to the shader invocation. It is assigned an integer value in the range \\[0, N-1\\] where N is the number of output patch vertices.',
    support: 1.5,
    declaration: '',
    params: [],
    seealso: ['gl_InstanceID'],
  },
  gl_Layer: {
    name: 'contains the selected layer of a multi-layer framebuffer attachment',
    descriptionMD:
      'In the geometry language, `gl_Layer` is used to select a specific layer (or face and layer of cube map) in a multi-layer framebuffer attachment. The actual layer used will come from one of the vertices in the primitive being shaded. Which vertex the layer comes from is undefined and as such it is recommended to write the same value to `gl_Layer` for all vertices in the primitive. If a shader statically assigns a value to `gl_Layer`, layered rendering mode is enabled. If a shader statically assigns a value to `gl_Layer`, and there is an execution path through the shader that does not set `gl_Layer`, then the value of `gl_Layer` is undefined for invocations of the shader that take that path.',
    declaration: '',
    params: [],
    seealso: ['gl_ViewportIndex'],
  },
  gl_LocalInvocationID: {
    name: 'contains the index of work item currently being operated on by a compute shader',
    descriptionMD:
      'In the compute language, `gl_LocalInvocationID` is an input variable containing the n-dimensional index of the local work invocation within the work group that the current shader is executing in. The possible values for this variable range across the local work group size, i.e., (0,0,0) to (`gl_WorkGroupSize.x` - 1, `gl_WorkGroupSize.y` - 1, `gl_WorkGroupSize.z` - 1).',
    support: 4.3,
    declaration: '',
    params: [],
    seealso: ['gl_NumWorkGroups', 'gl_WorkGroupID', 'gl_WorkGroupSize', 'gl_GlobalInvocationID'],
  },
  gl_LocalInvocationIndex: {
    name: 'contains the local linear index of work item currently being operated on by a compute shader',
    descriptionMD:
      'In the compute language, `gl_LocalInvocationIndex` is a derived input variable containing the 1-dimensional linearized index of the work invocation within the work group that the current shader is executing on. The value of `gl_LocalInvocationIndex` is equal to `gl_LocalInvocationID.z` \\* `gl_WorkGroupSize.x` \\* `gl_WorkGroupSize.y` + `gl_LocalInvocationID.y` \\* `gl_WorkGroupSize.x` + `gl_LocalInvocationID.x`.',
    support: 4.3,
    declaration: '',
    params: [],
    seealso: ['gl_NumWorkGroups', 'gl_WorkGroupID', 'gl_WorkGroupSize', 'gl_LocalInvocationID'],
  },
  gl_NumSamples: {
    name: 'contains the total number of samples in the framebuffer',
    descriptionMD:
      '`gl_NumSamples` is a fragment language input variable that contains the number of samples in the framebuffer, or 1 if rendering to a non-multisample framebuffer. `gl_NumSamples` is the sample count of the framebuffer regardless of whether multisample rasterization is enabled or not.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_SamplePosition', 'gl_SampleID'],
  },
  gl_NumWorkGroups: {
    name: 'contains the number of workgroups that have been dispatched to a compute shader',
    descriptionMD:
      'In the compute language, `gl_NumWorkGroups` contains the total number of work groups that will execute the compute shader. The components of `gl_NumWorkGroups` are equal to the _`num_groups_x`_, _`num_groups_y`_, and _`num_groups_z`_ parameters passed to the `glDispatchCompute` command.',
    support: 4.3,
    declaration: '',
    params: [],
    seealso: ['gl_WorkGroupSize', 'gl_WorkGroupID', 'gl_LocalInvocationID'],
  },
  gl_PatchVerticesIn: {
    name: 'contains the number of vertices in the current patch',
    descriptionMD:
      'Available only in the tessellation control and evaluation languages, `gl_PatchVerticesIn` contains the number of vertices in the input being processed by the shader. A single tessellation control or evaluation shader can read patches of differing sizes, and so th value of `gl_PatchVertexIn` may differ between patches.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_TessLevelOuter', 'gl_TessLevelInner', 'gl_TessCoord'],
  },
  gl_PointCoord: {
    name: 'contains the coordinate of a fragment within a point',
    descriptionMD:
      '`gl_PointCoord` is a fragment language input variable that contains the two-dimensional coordinates indicating where within a point primitive the current fragment is located. If the current primitive is not a point, then values read from `gl_PointCoord` are undefined.',
    support: 1.1,
    declaration: '',
    params: [],
    seealso: ['gl_FragCoord', 'gl_FragDepth'],
  },
  gl_PointSize: {
    name: 'contains size of rasterized points, in pixels',
    descriptionMD:
      'In the vertex, tessellation evaluation and geometry languages, a single global instance of the `gl_PerVertex` named block is available and its `gl_PointSize` member is an output that receives the intended size of the point to be rasterized, in pixels. It may be written at any time during shader execution. If `GL_PROGRAM_POINT_SIZE` is enabled, `gl_PointSize` is used to determine the size of rasterized points, otherwise it is ignored by the rasterization stage.',
    support: 1.1,
    declaration: '',
    params: [],
    seealso: ['gl_Position', 'gl_ClipDistance'],
  },
  gl_Position: {
    name: 'contains the position of the current vertex',
    descriptionMD:
      'In the vertex, tessellation evaluation and geometry languages, a single global instance of the `gl_PerVertex` named block is available and its `gl_Position` member is an output that receives the homogeneous vertex position. It may be written at any time during shader execution. The value written to `gl_Position` will be used by primitive assembly, clipping, culling and other fixed functionality operations, if present, that operate on primitives after vertex processing has occurred.',
    support: 1.1,
    declaration: '',
    params: [],
    seealso: ['gl_PointSize', 'gl_ClipDistance'],
  },
  gl_PrimitiveID: {
    name: 'contains the index of the current primitive',
    descriptionMD:
      '`gl_PrimitiveID` is a tessellation control, tessellation evaluation and fragment language input variable. For the tessellation control and tessellation evaluation languages, it holds the number of primitives processed by the shader since the current set of rendering primitives was started. The first primitive processed by the drawing command is numbered zero and the primitive ID counter is incremented after every individual point, line or triangle primitive is processed. For triangles drawn in point or line mode, the primitive ID counter is incremented only once, even through multiple points or lines may actually be drawn. Restarting a primitive topology using the primitive restart index has no effect on the primitive ID counter.',
    support: 1.5,
    declaration: '',
    params: [],
    seealso: ['gl_InstanceID', 'gl_VertexID', 'gl_PrimitiveIDIn'],
  },
  gl_PrimitiveIDIn: {
    name: 'contains the index of the current primitive',
    descriptionMD:
      '`gl_PrimitiveIDIn` is a geometry language input variable that holds the number of primitives processed by the shader since the current set of rendering primitives was started. The first primitive processed by the drawing command is numbered zero and the primitive ID counter is incremented after every individual point, line or triangle primitive is processed. For triangles drawn in point or line mode, the primitive ID counter is incremented only once, even through multiple points or lines may actually be drawn. Restarting a primitive topology using the primitive restart index has no effect on the primitive ID counter.',
    support: 1.5,
    declaration: '',
    params: [],
    seealso: ['gl_InstanceID'],
  },
  gl_SampleID: {
    name: 'contains the index of the sample currently being processed',
    descriptionMD:
      '`gl_SampleID` is a fragment language input variable that contains the index of the sample currently being processed. This variable is in the range 0 to [gl\\_NumSamples](gl_NumSamples.xhtml) - 1, where [gl\\_NumSamples](gl_NumSamples.xhtml) is the total number of samples in each fragment for the current framebuffer (and thus 1 if rendering to a non-multisample buffer). Any static use of this variable in a fragment shader causes the entire shader to be evaluated per-sample rather than per-fragment.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_SamplePosition', 'gl_NumSamples'],
  },
  gl_SampleMask: {
    name: 'specifies the sample coverage mask for the current fragment',
    descriptionMD:
      '`gl_SampleMask` is a fragment language output array that may be used to set the sample mask for the fragment being processed. Coverage for the current fragment will become the logical AND of the coverage mask and the output `gl_SampleMask`. That is, setting a bit in `gl_SampleMask` to zero will cause the corresponding sample to be considered uncovered for the purposes of multisample fragment operations. However, setting sample mask bits back to one will never enable samples not covered by the original primitive. Bit _B_ of mask `gl_SampleMask[M]` corresponds to sample 32 \\* _M_ + _B_. This array must be sized in the fragment shader either implicitly or explicitly to be the same size as the implementation-dependent maximum sample-mask (as an array of 32-bit elements), determined by the maximum number of samples. If the fragment shader statically assigns a value to `gl_SampleMask`, the sample mask will be undefined for any array elements of any fragment shader invocation that fails to assign a value. If a shader does not statically assign a value to `gl_SampleMask`, the sample mask has no effect on the processing of a fragment. If the fragment shader is being evaluated at any frequency other than per-fragment, bits within the sample mask not corresponding to the current fragment shader invocation are ignored.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_SampleMaskIn', 'gl_SampleID', 'gl_SamplePosition', 'gl_FragCoord'],
  },
  gl_SampleMaskIn: {
    name: 'contains the computed sample coverage mask for the current fragment',
    descriptionMD:
      '`gl_SampleMaskIn` is a fragment language that indicates the set of samples covered by the primitive generating the fragment during multisample rasterization. It has a sample bit set if and only if the sample is considered covered for this fragment shader invocation. Bit _B_ of mask `gl_SampleMask[M]` corresponds to sample 32 \\* _M_ + _B_. The array has `ceil`(_s_ / 32) elements where _s_ is the maximum number of color samples supported by the implementation.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_SampleMask', 'gl_SampleID', 'gl_SamplePosition', 'gl_FragCoord'],
  },
  gl_SamplePosition: {
    name: 'contains the location of the current sample within the current fragment',
    descriptionMD:
      '`gl_SamplePosition` is a fragment language input variable that contains the location within a fragment of the sample currently being processed. The x and y components of `gl_SamplePosition` contain the sub-pixel coordinate of the current sample and will have values in the range 0.0 to 1.0. The sub-pixel coordinates of the center of the pixel are always (0.5, 0.5). Any static use of `gl_SamplePosition` causes the entire fragment shader to be evaluated per-sample rather than per-fragment. When rendering to a non-multisample buffer, or if multisample rasterization is disabled, `gl_SamplePosition` will be (0.5, 0.5).',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_SampleID', 'gl_SampleMask', 'gl_FragCoord'],
  },
  gl_TessCoord: {
    name: 'contains the coordinate of the vertex within the current patch',
    descriptionMD:
      'Available only in the tessellation cevaluation language, `gl_TessCoord` specifies the three component (u, v, w) vector identifying the position of the vertex being processed by the shader relative to the primitive being tessellated.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_TessLevelOuter', 'gl_TessLevelInner', 'gl_PatchVerticesIn'],
  },
  gl_TessLevelInner: {
    name: 'contains the inner tessellation levels for the current patch',
    descriptionMD:
      'Available only in the tessellation control and evaluation languages, `gl_TessLevelInner` is used to assign values to the corresponding inner tesellation levels of the current patch. The values written into `gl_TessLevelInner` by the tessellation control shader are used by the tessellation primitive generator to control primitive tessellation and may be read by the subsequent tessellation evaluation shader.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_TessLevelOuter', 'gl_TessCoord'],
  },
  gl_TessLevelOuter: {
    name: 'contains the outer tessellation levels for the current patch',
    descriptionMD:
      'Available only in the tessellation control and evaluation languages, `gl_TessLevelOuter` is used to assign values to the corresponding outer tesellation levels of the current patch. The values written into `gl_TessLevelOuter` by the tessellation control shader are used by the tessellation primitive generator to control primitive tessellation and may be read by the subsequent tessellation evaluation shader.',
    support: 4,
    declaration: '',
    params: [],
    seealso: ['gl_TessLevelInner', 'gl_TessCoord'],
  },
  gl_VertexID: {
    name: 'contains the index of the current vertex',
    descriptionMD:
      '`gl_VertexID` is a vertex language input variable that holds an integer index for the vertex. The index is implicitly generated by `glDrawArrays` and other commands that do not reference the content of the `GL_ELEMENT_ARRAY_BUFFER`, or explicitly generated from the content of the `GL_ELEMENT_ARRAY_BUFFER` by commands such as `glDrawElements`. For `glDrawElements` forms that take a _`basevertex`_, `gl_VertexID` will have this value added to the index from the buffer.',
    support: 1.5,
    declaration: '',
    params: [],
    seealso: ['gl_InstanceID'],
  },
  gl_ViewportIndex: {
    name: 'contains the index of the viewport to be used in viewport transformation and scissoring',
    descriptionMD:
      'In the geometry language, `gl_ViewportIndex` is used to specify the index of the viewport to which the next primitive emitted from the shader should be drawn. Primitives generated by the geometry shader will undergo viewport transformation and scissor testing using the viewport transformation and scissor rectangle selected by the value of `gl_ViewportIndex`. The viewport index used will come from one of the vertices in the primitive being shaded. However, which vertex the viewport index comes from is implementation-defined, and so it is recommended to use the same viewport index for all vertices of a primitive. If a geometry shader does not assign a value to `gl_ViewportIndex`, viewport transform and scissor rectangle zero will be used. If a geometry shader statically assigns a value to `gl_ViewportIndex` and there is a path through the shader that does not assign a value to `gl_ViewportIndex`, the value of `gl_ViewportIndex` is undefined for executions of the shader that take that path.',
    support: 1.5,
    declaration: '',
    params: [],
    seealso: ['gl_Layer'],
  },
  gl_WorkGroupID: {
    name: 'contains the index of the workgroup currently being operated on by a compute shader',
    descriptionMD:
      'In the compute language, `gl_WorkGroupID` contains the 3-dimensional index of the global work group that the current compute shader invocation is executing within. The possible values range across the parameters passed into `glDispatchCompute`, i.e., from (0, 0, 0) to (`gl_NumWorkGroups.x` - 1, `gl_NumWorkGroups.y` - 1, `gl_NumWorkGroups.z` - 1).',
    support: 4.3,
    declaration: '',
    params: [],
    seealso: ['gl_NumWorkGroups', 'gl_WorkGroupID', 'gl_LocalInvocationID'],
  },
  gl_WorkGroupSize: {
    name: 'contains the size of the workgroup operated on by a compute shader',
    descriptionMD:
      'In the compute language, `gl_WorkGroupSize` contains the size of a workgroup declared by a compute shader. The size of the work group in the X, Y, and Z dimensions is stored in the x, y, and z components of `gl_WorkGroupSize`. The values stored in `gl_WorkGroupSize` match those specified in the required `local_size_x`, `local_size_y`, and `local_size_z` layout qualifiers for the current shader. This value is constant so that it can be used to size arrays of memory that can be shared within the local work group.',
    support: 4.3,
    declaration: '',
    params: [],
    seealso: ['gl_NumWorkGroups', 'gl_WorkGroupID', 'gl_LocalInvocationID'],
  },
  greaterThan: {
    name: 'perform a component-wise greater-than comparison of two vectors',
    descriptionMD:
      '`greaterThan` returns a boolean vector in which each element _i_ is computed as _`x`_\\[_i_\\] > _`y`_\\[_i_\\].',
    support: 1.1,
    declaration: 'bvec greaterThan(\n              vec x, \n              vec y);',
    params: [
      ['x', 'Specifies the first vector to be used in the comparison operation.'],
      ['y', 'Specifies the second vector to be used in the comparison operation.'],
    ],
    seealso: ['lessThan', 'lessThanEqual', 'greaterThanEqual', 'equal', 'notEqual', 'any', 'all', 'not'],
  },
  greaterThanEqual: {
    name: 'perform a component-wise greater-than-or-equal comparison of two vectors',
    descriptionMD:
      '`greaterThanEqual` returns a boolean vector in which each element _i_ is computed as _`x`_\\[_i_\\] ≥ _`y`_\\[_i_\\].',
    support: 1.1,
    declaration: 'bvec greaterThanEqual(\n              vec x, \n              vec y);',
    params: [
      ['x', 'Specifies the first vector to be used in the comparison operation.'],
      ['y', 'Specifies the second vector to be used in the comparison operation.'],
    ],
    seealso: ['lessThan', 'lessThanEqual', 'greaterThan', 'equal', 'notEqual', 'any', 'all', 'not'],
  },
  groupMemoryBarrier: {
    name: 'controls the ordering of memory transaction issued shader invocation relative to a work group',
    descriptionMD:
      '`groupMemoryBarrier` waits on the completion of all memory accesses performed by an invocation of a compute shader relative to the same access performed by other invocations in the same work group and then returns with no other effect.',
    support: 4.3,
    declaration: 'void groupMemoryBarrier(void);',
    params: [],
    seealso: ['memoryBarrier', 'memoryBarrierImage', 'memoryBarrierBuffer', 'memoryBarrierShared'],
  },
  imageAtomicAdd: {
    name: 'atomically add a value to an existing value in memory and return the original value',
    descriptionMD:
      '`imageAtomicAdd` atomically computes a new value by adding the value of _`data`_ to the contents of the texel at coordinate _`P`_ and _`sample`_ in the image bound to uint _`image`_, stores that value into the image and returns the original value.',
    support: 4.2,
    declaration:
      'uint imageAtomicAdd(\n              gimage1D image, \n              int P, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to add data.'],
      ['P', 'Specify the coordinate at which to add the data.'],
      ['sample', 'When present, specifies the sample within the image to add into.'],
      ['data', 'Specifies the data to add into the image.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicAnd',
      'imageAtomicOr',
      'imageAtomicXor',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imageAtomicAnd: {
    name: 'atomically compute the logical AND of a value with an existing value in memory, store that value and return the original value',
    descriptionMD:
      '`imageAtomicAnd` atomically computes a new value by logically ANDing the value of _`data`_ to the contents of the texel at coordinate _`P`_ and _`sample`_ in the image bound to uint _`image`_, stores that value into the image and returns the original value.',
    support: 4.2,
    declaration:
      'uint imageAtomicAnd(\n              gimage1D image, \n              int P, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to store data.'],
      ['P', 'Specify the coordinate at which to store the data.'],
      ['sample', 'When present, specifies the sample within the image to store into.'],
      ['data', 'Specifies the data to logically AND into the image.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicOr',
      'imageAtomicXor',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imageAtomicCompSwap: {
    name: 'atomically compares supplied data with that in memory and conditionally stores it to memory',
    descriptionMD:
      '`imageAtomicCompSwap` atomically compares the value of _`compare`_ with that of the texel at coordinate _`P`_ and _`sample`_ (for multisampled forms) in the image bound to uint _`image`_. If the values are equal, _`data`_ is stored into the texel, otherwise it is discarded. It returns the original value of the texel regardless of the result of the comparison operation.',
    support: 4.2,
    declaration:
      'uint imageAtomicCompSwap(\n              gimage1D image, \n              int P, \n              uint compare, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to compare and conditionally store data.'],
      ['P', 'Specify the coordinate at which to compare and conditionally store the data.'],
      ['sample', 'When present, specifies the sample within the image to compare and conditionally store into.'],
      ['compare', 'Specifies the value to compare with the content of the image.'],
      ['data', 'Specifies the value to store in the image if compare is equal to the existing image content.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicXor',
      'imageAtomicOr',
      'imageAtomicAnd',
      'imageAtomicCompSwap',
    ],
  },
  imageAtomicExchange: {
    name: 'atomically store supplied data into memory and return the original value from memory',
    descriptionMD:
      '`imageAtomicExchange` atomically stores the value of _`data`_ into the texel at coordinate _`P`_ and _`sample`_ in the image bound to unit _`image`_, and returns the original value of the texel.',
    support: 4.2,
    declaration:
      'uint imageAtomicExchange(\n              gimage1D image, \n              int P, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to store'],
      ['data.', 'P'],
      ['Specify the coordinate at which to store the data.', 'sample'],
      ['When present, specifies the sample within the image to', 'store into.'],
      ['data', 'Specifies the data to exchange with that stored in the'],
      ['image.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicXor',
      'imageAtomicOr',
      'imageAtomicAnd',
      'imageAtomicCompSwap',
    ],
  },
  imageAtomicMax: {
    name: 'atomically compute the minimum of a value with an existing value in memory, store that value and return the original value',
    descriptionMD:
      '`imageAtomicMax` atomically computes a new value by finding the maximum of the value of _`data`_ and the contents of the texel at coordinate _`P`_ and _`sample`_ in the image bound to uint _`image`_, stores that value into the image and returns the original value.',
    support: 4.2,
    declaration:
      'uint imageAtomicMax(\n              gimage1D image, \n              int P, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to store data.'],
      ['P', 'Specify the coordinate at which to store the data.'],
      ['sample', 'When present, specifies the sample within the image to store into.'],
      ['data', 'Specifies the data of which to take the minimum with that stored in the image.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicXor',
      'imageAtomicOr',
      'imageAtomicAnd',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imageAtomicMin: {
    name: 'atomically compute the minimum of a value with an existing value in memory, store that value and return the original value',
    descriptionMD:
      '`imageAtomicMin` atomically computes a new value by finding the minimum of the value of _`data`_ and the contents of the texel at coordinate _`P`_ and _`sample`_ in the image bound to uint _`image`_, stores that value into the image and returns the original value.',
    support: 4.2,
    declaration:
      'uint imageAtomicMin(\n              gimage1D image, \n              int P, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to store data.'],
      ['P', 'Specify the coordinate at which to store the data.'],
      ['sample', 'When present, specifies the sample within the image to store into.'],
      ['data', 'Specifies the data of which to take the minimum with that stored in the image.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMax',
      'imageAtomicXor',
      'imageAtomicOr',
      'imageAtomicAnd',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imageAtomicOr: {
    name: 'atomically compute the logical OR of a value with an existing value in memory, store that value and return the original value',
    descriptionMD:
      '`imageAtomicOr` atomically computes a new value by logically ORing the value of _`data`_ to the contents of the texel at coordinate _`P`_ and _`sample`_ in the image bound to uint _`image`_, stores that value into the image and returns the original value.',
    support: 4.2,
    declaration:
      'uint imageAtomicOr(\n              gimage1D image, \n              int P, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to store data.'],
      ['P', 'Specify the coordinate at which to store the data.'],
      ['sample', 'When present, specifies the sample within the image to store into.'],
      ['data', 'Specifies the data to logically OR into the image.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicAnd',
      'imageAtomicXor',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imageAtomicXor: {
    name: 'atomically compute the logical exclusive OR of a value with an existing value in memory, store that value and return the original value',
    descriptionMD:
      '`imageAtomicXor` atomically computes a new value by logically XORing the value of _`data`_ to the contents of the texel at coordinate _`P`_ and _`sample`_ in the image bound to uint _`image`_, stores that value into the image and returns the original value.',
    support: 4.2,
    declaration:
      'uint imageAtomicXor(\n              gimage1D image, \n              int P, \n              uint data);',
    params: [
      ['image', 'Specify the image unit into which to store data.'],
      ['P', 'Specify the coordinate at which to store the data.'],
      ['sample', 'When present, specifies the sample within the image to store into.'],
      ['data', 'Specifies the data to logically XOR into the image.'],
    ],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicOr',
      'imageAtomicAnd',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imageLoad: {
    name: 'load a single texel from an image',
    descriptionMD:
      '`imageLoad` loads the texel at the coordinate _`P`_ from the image unit _`image`_. For multi-sample loads, the sample number is given by _`sample`_. When _`image`_, _`P`_, _`sample`_ identify a valid texel, the bits used to represent the selected texel in memory are converted to a vec4, ivec4, or uvec4 in the manner described in the OpenGL Specification and returned.',
    support: 4.2,
    declaration: 'gvec4 imageLoad(\n              gimage1D image, \n              int P);',
    params: [
      ['image', 'Specify the image unit from which to load a texel.'],
      ['P', 'Specify the coordinate from which to load the texel.'],
      ['sample', 'When present, specifies the sample within the image to load'],
    ],
    seealso: [
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicAnd',
      'imageAtomicOr',
      'imageAtomicXor',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imageSamples: {
    name: 'return the number of samples of an image',
    descriptionMD: '`imageSamples` returns the number of samples per texel of the image bound to _`image`_.',
    support: 4.5,
    declaration: 'int imageSamples(gimage2DMS image);',
    params: [['image', 'Specifies the image to which the texture is bound.']],
    seealso: ['imageLoad', 'imageStore', 'textureSamples'],
  },
  imageSize: {
    name: 'retrieve the dimensions of an image',
    descriptionMD:
      '`imageSize` returns the dimensions of the image bound to _`image`_. The components in the return value are filled in, in order, with the width, height and depth of the image. For the array forms, the last component of the return value is the number of layers in the texture array.',
    support: 4.3,
    declaration: 'int imageSize(gimage1D image);',
    params: [['image', 'Specifies the image to which the texture whose dimensions to retrieve is bound.']],
    seealso: ['textureSize', 'imageLoad', 'imageStore'],
  },
  imageStore: {
    name: 'write a single texel into an image',
    descriptionMD:
      '`imageStore` stores _`data`_ into the texel at the coordinate _`P`_ from the image specified by _`image`_. For multi-sample stores, the sample number is given by _`sample`_. When _`image`_, _`P`_, and _`sample`_ identify a valid texel, the bits used to represent data are converted to the format of the image unit in the manner described in of the OpenGL Specification and stored to the specified texel.',
    support: 4.2,
    declaration: 'void imageStore(\n              gimage1D image, \n              int P, \n              gvec4 data);',
    params: [
      ['image', 'Specify the image unit into which to store a texel.'],
      ['P', 'Specify the coordinate at which to store the texel.'],
      ['sample', 'When present, specifies the sample within the image to store into.'],
      ['data', 'Specifies the data to store into the image.'],
    ],
    seealso: [
      'imageLoad',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicAnd',
      'imageAtomicOr',
      'imageAtomicXor',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
    ],
  },
  imulExtended: {
    name: 'perform a 32- by 32-bit multiply to produce a 64-bit result',
    descriptionMD:
      '`umulExtended` and `imulExtended` perform multiplication of the two 32-bit integer quantities _`x`_ and _`y`_, producing a 64-bit integer result. The 32 least significant bits of this product are returned in _`lsb`_ and the 32 most significant bits are returned in _`msb`_. `umulExtended` and `imulExtended` perform unsigned and signed multiplication, respectively.',
    support: 4,
    declaration:
      'void umulExtended(\n              genUType x, \n              genUType y, \n              out genUType msb, \n              out genUType lsb);',
    params: [
      ['x', 'Specifies the first multiplicand.'],
      ['y', 'Specifies the second multiplicand.'],
      ['msb', 'Specifies the variable to receive the most significant word of the product.'],
      ['lsb', 'Specifies the variable to receive the least significant word of the product.'],
    ],
    seealso: ['uaddCarry'],
  },
  intBitsToFloat: {
    name: 'intBitsToFloat, produce a floating point using an encoding supplied as an integer',
    descriptionMD:
      '`intBitsToFloat` and `uintBitsToFloat` return the encoding passed in parameter _`x`_ as a floating-point value. If the encoding of a NaN is passed in _`x`_, it will not signal and the resulting value will be undefined. If the encoding of a floating point infinity is passed in parameter _`x`_, the resulting floating-point value is the corresponding (positive or negative) floating point infinity.',
    support: 3.3,
    declaration: 'genType intBitsToFloat(genIType x);',
    params: [['x', 'Specifies the bit encoding to return as a floating point value.']],
    seealso: ['floatBitsToInt', 'isnan', 'isinf'],
  },
  interpolateAtCentroid: {
    name: 'sample a varying at the centroid of a pixel',
    descriptionMD:
      '`interpolateAtCentroid` returns the value of the input varying _`interpolant`_ sampled at a location inside both the pixel and the primitive being processed. The value obtained would be the value assigned to the input variable if declared with the `centroid` qualifier.',
    support: 4,
    declaration: 'float interpolateAtCentroid(float interpolant);',
    params: [['interpolant', 'Specifies the interpolant to be sampled at the pixel centroid.']],
    seealso: ['interpolateAtSample', 'interpolateAtOffset'],
  },
  interpolateAtOffset: {
    name: 'sample a varying at specified offset from the center of a pixel',
    descriptionMD:
      '`interpolateAtOffset` returns the value of the input varying _`interpolant`_ sampled at an offset from the center of the pixel specified by _`offset`_. The two floating-point components of _`offset`_ give the offset in pixels in the _x_ and _y_ directions from the center of the pixel, respectively. An offset of (0, 0) identifies the center of the pixel. The range and granularity of offsets supported by this function is implementation-dependent.',
    support: 4,
    declaration: 'float interpolateAtOffset(\n              float interpolant, \n              vec2 offset);',
    params: [
      ['interpolant', 'Specifies the interpolant to be sampled at the specified offset.'],
      ['offset', 'Specifies the offset from the center of the pixel at which to sample interpolant.'],
    ],
    seealso: ['interpolateAtCentroid', 'interpolateAtSample'],
  },
  interpolateAtSample: {
    name: 'sample a varying at the location of a specified sample',
    descriptionMD:
      '`interpolateAtSample` returns the value of the input varying _`interpolant`_ sampled at the location of sample number _`sample`_. If multisample buffers are not available, the input varying will be evaluated at the center of the pixel. If sample _`sample`_ does not exist, the position used to interpolate the input varying is undefined.',
    support: 4,
    declaration: 'float interpolateAtSample(\n              float interpolant, \n              int sample);',
    params: [
      ['interpolant', 'Specifies the interpolant to be sampled at the location of sample sample.'],
      ['sample', 'Specifies the index of the sample whose location will be used to sample interpolant.'],
    ],
    seealso: ['interpolateAtCentroid', 'interpolateAtOffset'],
  },
  inverse: {
    name: 'calculate the inverse of a matrix',
    descriptionMD:
      '`inverse` returns the inverse of the matrix _`m`_. The values in the returned matrix are undefined if _`m`_ is singular or poorly-conditioned (nearly singular).',
    support: 1.4,
    declaration: 'mat2 inverse(mat2 m);',
    params: [['m', 'Specifies the matrix of which to take the inverse.']],
    seealso: ['transpose', 'determinant'],
  },
  inversesqrt: {
    name: 'return the inverse of the square root of the parameter',
    descriptionMD:
      '`inversesqrt` returns the inverse of the square root of $x$; i.e. the value $1 \\\\over { \\\\sqrt x }$. The result is undefined if $x \\\\leq 0$.',
    support: 1.3,
    declaration: 'genType inversesqrt(genType x);',
    params: [['x', 'Specify the value of which to take the inverse of the square root.']],
    seealso: ['pow', 'sqrt'],
  },
  isinf: {
    name: 'determine whether the parameter is positive or negative infinity',
    descriptionMD:
      'For each element _i_ of the result, `isinf` returns `true` if _`x`_\\[_i_\\] is posititve or negative floating point infinity and false otherwise.',
    support: 1.1,
    declaration: 'genBType isinf(genType x);',
    params: [['x', 'Specifies the value to test for infinity.']],
    seealso: ['isnan'],
  },
  isnan: {
    name: 'determine whether the parameter is a number',
    descriptionMD:
      'For each element _i_ of the result, `isnan` returns `true` if _`x`_\\[_i_\\] is posititve or negative floating point NaN (Not a Number) and false otherwise.',
    support: 1.3,
    declaration: 'genBType isnan(genType x);',
    params: [['x', 'Specifies the value to test for NaN.']],
    seealso: ['isinf'],
  },
  ldexp: {
    name: 'assemble a floating point number from a value and exponent',
    descriptionMD:
      '`ldexp` builds a floating point number from _`x`_ and the corresponding integral exponent of two in _`exp`_, returning:',
    support: 4,
    declaration: 'genType ldexp(\n              genType x, \n              genIType exp);',
    params: [
      ['x', 'Specifies the value to be used as a source of significand.'],
      ['out exp', 'Specifies the value to be used as a source of exponent.'],
    ],
    seealso: ['frexp'],
  },
  length: {
    name: 'calculate the length of a vector',
    descriptionMD:
      '`length` returns the length of the vector, i.e. $\\\\sqrt { { x\\[0\\] }^2 + { x\\[1\\] }^2 + \\\\dots }$.',
    support: 1.1,
    declaration: 'float length(genType x);',
    params: [['x', 'Specifies a vector of which to calculate the length.']],
    seealso: ['distance', 'normalize'],
  },
  lessThan: {
    name: 'perform a component-wise less-than comparison of two vectors',
    descriptionMD:
      '`lessThan` returns a boolean vector in which each element _i_ is computed as _`x`_\\[_i_\\] < _`y`_\\[_i_\\].',
    support: 1.1,
    declaration: 'bvec lessThan(\n              vec x, \n              vec y);',
    params: [
      ['x', 'Specifies the first vector to be used in the comparison operation.'],
      ['y', 'Specifies the second vector to be used in the comparison operation.'],
    ],
    seealso: ['lessThanEqual', 'greaterThan', 'greaterThanEqual', 'equal', 'notEqual', 'any', 'all', 'not'],
  },
  lessThanEqual: {
    name: 'perform a component-wise less-than-or-equal comparison of two vectors',
    descriptionMD:
      '`lessThanEqual` returns a boolean vector in which each element _i_ is computed as _`x`_\\[_i_\\] ≤ _`y`_\\[_i_\\].',
    support: 1.1,
    declaration: 'bvec lessThanEqual(\n              vec x, \n              vec y);',
    params: [
      ['x', 'Specifies the first vector to be used in the comparison operation.'],
      ['y', 'Specifies the second vector to be used in the comparison operation.'],
    ],
    seealso: ['lessThan', 'greaterThan', 'greaterThanEqual', 'equal', 'notEqual', 'any', 'all', 'not'],
  },
  log: {
    name: 'return the natural logarithm of the parameter',
    descriptionMD:
      '`log` returns the natural logarithm of $x$, i.e. the value $y$ which satisfies $x = e^y$. The result is undefined if $x \\\\leq 0$.',
    support: 1.1,
    declaration: 'genType log(genType x);',
    params: [['x', 'Specify the value of which to take the natural logarithm.']],
    seealso: ['sin', 'cos', 'sinh', 'cosh'],
  },
  log2: {
    name: 'return the base 2 logarithm of the parameter',
    descriptionMD:
      '`log2` returns the base 2 logarithm of $x$, i.e. the value $y$ which satisfies $x = 2^y$. The result is undefined if $x \\\\leq 0$.',
    support: 1.1,
    declaration: 'genType log2(genType x);',
    params: [['x', 'Specify the value of which to take the base 2 logarithm.']],
    seealso: ['exp', 'log', 'exp2'],
  },
  matrixCompMult: {
    name: 'perform a component-wise multiplication of two matrices',
    descriptionMD:
      '`matrixCompMult` performs a component-wise multiplication of two matrices, yielding a result matrix where each component, `result[i][j]` is computed as the scalar product of ``_`x`_[i][j]`` and ``_`y`_[i][j]``.',
    support: 1.1,
    declaration: 'mat matrixCompMult(\n              mat x, \n              mat y);',
    params: [
      ['x', 'Specifies the first matrix multiplicand.'],
      ['y', 'Specifies the second matrix multiplicand.'],
    ],
    seealso: ['dot', 'reflect'],
  },
  max: {
    name: 'return the greater of two values',
    descriptionMD:
      '`max` returns the maximum of the two parameters. It returns _`y`_ if _`y`_ is greater than _`x`_, otherwise it returns _`x`_.',
    support: 1.1,
    declaration: 'genType max(\n              genType x, \n              genType y);',
    params: [
      ['x', 'Specify the first value to compare.'],
      ['y', 'Specify the second value to compare.'],
    ],
    seealso: ['min', 'abs'],
  },
  memoryBarrier: {
    name: 'controls the ordering of memory transactions issued by a single shader invocation',
    descriptionMD:
      '`memoryBarrier` waits on the completion of all memory accesses resulting from the use of image variables or atomic counters and then returns with no other effect. When this function returns, the results of any memory stores performed using coherent variables performed prior to the call will be visible to any future coherent memory access to the same addresses from other shader invocations. In particular, the values written this way in one shader stage are guaranteed to be visible to coherent memory accesses performed by shader invocations in subsequent stages when those invocations were triggered by the execution of the original shader invocation (e.g., fragment shader invocations for a primitive resulting from a particular geometry shader invocation).',
    support: 4,
    declaration: 'void memoryBarrier(void);',
    params: [],
    seealso: [
      'imageLoad',
      'imageStore',
      'imageAtomicAdd',
      'imageAtomicMin',
      'imageAtomicMax',
      'imageAtomicXor',
      'imageAtomicOr',
      'imageAtomicAnd',
      'imageAtomicExchange',
      'imageAtomicCompSwap',
      'groupMemoryBarrier',
      'memoryBarrierImage',
      'memoryBarrierBuffer',
      'memoryBarrierShared',
    ],
  },
  memoryBarrierAtomicCounter: {
    name: 'controls the ordering of operations on atomic counters issued by a single shader invocation',
    descriptionMD:
      '`memoryBarrierAtomicCounter` waits on the completion of all accesses resulting from the use of atomic counters and then returns with no other effect. When this function returns, the results of any modifications to the value of atomic counters will be visible to any access to the same counter from other shader invocations. In particular, any modifications made in one shader stage are guaranteed to be visible to accesses performed by shader invocations in subsequent stages when those invocations were triggered by the execution of the original shader invocation (e.g., fragment shader invocations for a primitive resulting from a particular geometry shader invocation).',
    support: 4.3,
    declaration: 'void memoryBarrierAtomicCounter(void);',
    params: [],
    seealso: ['memoryBarrier'],
  },
  memoryBarrierBuffer: {
    name: 'controls the ordering of operations on buffer variables issued by a single shader invocation',
    descriptionMD:
      '`memoryBarrierBuffer` waits on the completion of all memory accesses resulting from the use of buffer variables and then returns with no other effect. When this function returns, the results of any modifications to the content of buffer variables will be visible to any access to the same buffer from other shader invocations. In particular, any modifications made in one shader stage are guaranteed to be visible to accesses performed by shader invocations in subsequent stages when those invocations were triggered by the execution of the original shader invocation (e.g., fragment shader invocations for a primitive resulting from a particular geometry shader invocation).',
    support: 4.3,
    declaration: 'void memoryBarrierBuffer(void);',
    params: [],
    seealso: ['memoryBarrier', 'memoryBarrierImage', 'memoryBarrierShared', 'groupMemoryBarrier'],
  },
  memoryBarrierImage: {
    name: 'controls the ordering of operations on image variables issued by a single shader invocation',
    descriptionMD:
      '`memoryBarrierImage` waits on the completion of all memory accesses resulting from the use of image variables and then returns with no other effect. When this function returns, the results of any modifications to the content of image variables will be visible to any access to the same buffer from other shader invocations. In particular, any modifications made in one shader stage are guaranteed to be visible to accesses performed by shader invocations in subsequent stages when those invocations were triggered by the execution of the original shader invocation (e.g., fragment shader invocations for a primitive resulting from a particular geometry shader invocation).',
    support: 4.3,
    declaration: 'void memoryBarrierImage(void);',
    params: [],
    seealso: ['memoryBarrier', 'memoryBarrierShared', 'memoryBarrierBuffer', 'groupMemoryBarrier'],
  },
  memoryBarrierShared: {
    name: 'controls the ordering of operations on shared variables issued by a single shader invocation',
    descriptionMD:
      '`memoryBarrierShared` waits on the completion of all memory accesses resulting from the use of shared variables and then returns with no other effect. When this function returns, the results of any modifications to the content of shared variables will be visible to any access to the same buffer from other shader invocations. In particular, any modifications made in one shader stage are guaranteed to be visible to accesses performed by shader invocations in subsequent stages when those invocations were triggered by the execution of the original shader invocation (e.g., fragment shader invocations for a primitive resulting from a particular geometry shader invocation).',
    support: 4.3,
    declaration: 'void memoryBarrierShared(void);',
    params: [],
    seealso: ['memoryBarrier', 'memoryBarrierImage', 'memoryBarrierBuffer', 'groupMemoryBarrier'],
  },
  min: {
    name: 'return the lesser of two values',
    descriptionMD:
      '`min` returns the minimum of the two parameters. It returns _`y`_ if _`y`_ is less than _`x`_, otherwise it returns _`x`_.',
    support: 1.1,
    declaration: 'genType min(\n              genType x, \n              genType y);',
    params: [
      ['x', 'Specify the first value to compare.'],
      ['y', 'Specify the second value to compare.'],
    ],
    seealso: ['max', 'abs'],
  },
  mix: {
    name: 'linearly interpolate between two values',
    descriptionMD:
      '`mix` performs a linear interpolation between _`x`_ and _`y`_ using _`a`_ to weight between them. The return value is computed as $x \\\\times (1 - a) + y \\\\times a$.',
    support: 1.1,
    declaration: 'genType mix(\n              genType x, \n              genType y, \n              genType a);',
    params: [
      ['x', 'Specify the start of the range in which to interpolate.'],
      ['y', 'Specify the end of the range in which to interpolate.'],
      ['a', 'Specify the value to use to interpolate between x and y.'],
    ],
    seealso: ['min', 'max'],
  },
  mod: {
    name: 'compute value of one parameter modulo another',
    descriptionMD:
      '`mod` returns the value of _`x`_ modulo _`y`_. This is computed as _`x`_ - _`y`_ \\* [floor](floor.xhtml)(_`x`_/_`y`_).',
    support: 1.1,
    declaration: 'genType mod(\n              genType x, \n              float y);',
    params: [['x', 'Specify the value to evaluate.']],
    seealso: ['modf', 'floor'],
  },
  modf: {
    name: 'separate a value into its integer and fractional components',
    descriptionMD:
      '`modf` separates a floating point value _`x`_ into its integer and fractional parts. The fractional part of the number is returned from the function and the integer part (as a floating point quantity) is returned in the output parameter _`i`_.',
    support: 1.3,
    declaration: 'genType modf(\n              genType x, \n              out genType i);',
    params: [
      ['x', 'Specify the value to separate.'],
      ['out i', 'A variable that receives the integer part of the argument.'],
    ],
    seealso: ['fract', 'floor'],
  },
  noise: {
    name: 'generate values with a pseudo-random noise function',
    descriptionMD:
      '`noise1`, `noise2`, `noise3` and `noise4` return noise values (vector or scalar) based on the input value _`x`_. The noise function is a stochastic function that can be used to increase visual complexity. Values returned by the noise functions give the appearance of randomness, but are not truly random. They are defined to have the following characteristics:',
    support: 1.1,
    declaration: 'float noise1(genType x);',
    params: [['x', 'Specifies the value to be used to seed the noise function.']],
    seealso: [],
  },
  noise1: {
    name: 'generate values with a pseudo-random noise function',
    descriptionMD:
      '`noise1`, `noise2`, `noise3` and `noise4` return noise values (vector or scalar) based on the input value _`x`_. The noise function is a stochastic function that can be used to increase visual complexity. Values returned by the noise functions give the appearance of randomness, but are not truly random. They are defined to have the following characteristics:',
    support: 1.1,
    declaration: 'float noise1(genType x);',
    params: [['x', 'Specifies the value to be used to seed the noise function.']],
    seealso: [],
  },
  noise2: {
    name: 'generate values with a pseudo-random noise function',
    descriptionMD:
      '`noise1`, `noise2`, `noise3` and `noise4` return noise values (vector or scalar) based on the input value _`x`_. The noise function is a stochastic function that can be used to increase visual complexity. Values returned by the noise functions give the appearance of randomness, but are not truly random. They are defined to have the following characteristics:',
    support: 1.1,
    declaration: 'float noise1(genType x);',
    params: [['x', 'Specifies the value to be used to seed the noise function.']],
    seealso: [],
  },
  noise3: {
    name: 'generate values with a pseudo-random noise function',
    descriptionMD:
      '`noise1`, `noise2`, `noise3` and `noise4` return noise values (vector or scalar) based on the input value _`x`_. The noise function is a stochastic function that can be used to increase visual complexity. Values returned by the noise functions give the appearance of randomness, but are not truly random. They are defined to have the following characteristics:',
    support: 1.1,
    declaration: 'float noise1(genType x);',
    params: [['x', 'Specifies the value to be used to seed the noise function.']],
    seealso: [],
  },
  noise4: {
    name: 'generate values with a pseudo-random noise function',
    descriptionMD:
      '`noise1`, `noise2`, `noise3` and `noise4` return noise values (vector or scalar) based on the input value _`x`_. The noise function is a stochastic function that can be used to increase visual complexity. Values returned by the noise functions give the appearance of randomness, but are not truly random. They are defined to have the following characteristics:',
    support: 1.1,
    declaration: 'float noise1(genType x);',
    params: [['x', 'Specifies the value to be used to seed the noise function.']],
    seealso: [],
  },
  normalize: {
    name: 'calculates the unit vector in the same direction as the original vector',
    descriptionMD: '`normalize` returns a vector with the same direction as its parameter, _`v`_, but with length 1.',
    support: 1.1,
    declaration: 'genType normalize(genType v);',
    params: [['v', 'Specifies the vector to normalize.']],
    seealso: ['length'],
  },
  not: {
    name: 'logically invert a boolean vector',
    descriptionMD:
      '`not` logically inverts the boolean vector _`x`_. It returns a new boolean vector for which each element _i_ is computed as ``!_`x`_[_`i`_]``.',
    support: 1.1,
    declaration: 'bvec not(bvec x);',
    params: [['x', 'Specifies the vector to be inverted.']],
    seealso: ['any', 'all'],
  },
  notEqual: {
    name: 'perform a component-wise not-equal-to comparison of two vectors',
    descriptionMD:
      '`notEqual` returns a boolean vector in which each element _i_ is computed as _`x`_\\[_i_\\] != _`y`_\\[_i_\\].',
    support: 1.1,
    declaration: 'bvec notEqual(\n              vec x, \n              vec y);',
    params: [
      ['x', 'Specifies the first vector to be used in the comparison operation.'],
      ['y', 'Specifies the second vector to be used in the comparison operation.'],
    ],
    seealso: ['lessThan', 'lessThanEqual', 'greaterThan', 'greaterThanEqual', 'equal', 'any', 'all', 'not'],
  },
  outerProduct: {
    name: 'calculate the outer product of a pair of vectors',
    descriptionMD:
      '`outerProduct` treats the first parameter _`c`_ as a column vector (matrix with one column) and the second parameter _`r`_ as a row vector (matrix with one row) and does a linear algebraic matrix multiply _`c`_ \\* _`r`_, yielding a matrix whose number of rows is the number of components in _`c`_ and whose number of columns is the number of components in _`r`_.',
    support: 1.2,
    declaration: 'mat2 outerProduct(\n              vec2 c, \n              vec2 r);',
    params: [
      ['c', 'Specifies the parameter to be treated as a column vector.'],
      ['r', 'Specifies the parameter to be treated as a row vector.'],
    ],
    seealso: ['dot'],
  },
  packDouble2x32: {
    name: 'create a double-precision value from a pair of unsigned integers',
    descriptionMD:
      '`packDouble2x32` packs the component of parameter _`v`_ into a 64-bit value. If an IEEE-754 infinity or NaN is created, it will not signal and the resulting floating-point value is undefined. Otherwise, the bit-level representation of _`v`_ is preserved. The first vector component (`v[0]`) specifies the 32 least significant bits of the result; the second component (`v[1]`) specifies the 32 most significant bits.',
    support: 4,
    declaration: 'double packDouble2x32(uvec2 v);',
    params: [['v', 'Specifies a vector of two unsigned integers to be packed into a single double-precision result.']],
    seealso: ['unpackDouble2x32'],
  },
  packHalf2x16: {
    name: 'convert two 32-bit floating-point quantities to 16-bit quantities and pack them into a single 32-bit integer',
    descriptionMD:
      '`packHalf2x16` returns an unsigned integer obtained by converting the components of a two-component floating-point vector to the 16-bit floating-point representation found in the OpenGL Specification, and then packing these two 16-bit integers into a 32-bit unsigned integer. The first vector component specifies the 16 least-significant bits of the result; the second component specifies the 16 most-significant bits.',
    support: 4.2,
    declaration: 'uint packHalf2x16(vec2 v);',
    params: [
      [
        'v',
        'Specify a vector of two 32-bit floating point values that are to be converted to 16-bit representation and packed into the result.',
      ],
    ],
    seealso: ['packDouble2x32', 'unpackDouble2x32', 'unpackHalf2x16'],
  },
  packSnorm2x16: {
    name: 'pack floating-point values into an unsigned integer',
    descriptionMD:
      '`packUnorm2x16`, `packSnorm2x16`, `packUnorm4x8` and `packSnorm4x8` convert each component of the normalized floating-ponit value _`v`_ into 8- or 16-bit integer values and then packs the results into a 32-bit unsigned intgeter.',
    support: 4,
    declaration: 'uint packUnorm2x16(vec2 v);',
    params: [['v', 'Specifies a vector of values to be packed into an unsigned integer.']],
    seealso: [],
  },
  packSnorm4x8: {
    name: 'pack floating-point values into an unsigned integer',
    descriptionMD:
      '`packUnorm2x16`, `packSnorm2x16`, `packUnorm4x8` and `packSnorm4x8` convert each component of the normalized floating-ponit value _`v`_ into 8- or 16-bit integer values and then packs the results into a 32-bit unsigned intgeter.',
    support: 4,
    declaration: 'uint packUnorm2x16(vec2 v);',
    params: [['v', 'Specifies a vector of values to be packed into an unsigned integer.']],
    seealso: [],
  },
  packUnorm: {
    name: 'pack floating-point values into an unsigned integer',
    descriptionMD:
      '`packUnorm2x16`, `packSnorm2x16`, `packUnorm4x8` and `packSnorm4x8` convert each component of the normalized floating-ponit value _`v`_ into 8- or 16-bit integer values and then packs the results into a 32-bit unsigned intgeter.',
    support: 4,
    declaration: 'uint packUnorm2x16(vec2 v);',
    params: [['v', 'Specifies a vector of values to be packed into an unsigned integer.']],
    seealso: [],
  },
  packUnorm2x16: {
    name: 'pack floating-point values into an unsigned integer',
    descriptionMD:
      '`packUnorm2x16`, `packSnorm2x16`, `packUnorm4x8` and `packSnorm4x8` convert each component of the normalized floating-ponit value _`v`_ into 8- or 16-bit integer values and then packs the results into a 32-bit unsigned intgeter.',
    support: 4,
    declaration: 'uint packUnorm2x16(vec2 v);',
    params: [['v', 'Specifies a vector of values to be packed into an unsigned integer.']],
    seealso: [],
  },
  packUnorm4x8: {
    name: 'pack floating-point values into an unsigned integer',
    descriptionMD:
      '`packUnorm2x16`, `packSnorm2x16`, `packUnorm4x8` and `packSnorm4x8` convert each component of the normalized floating-ponit value _`v`_ into 8- or 16-bit integer values and then packs the results into a 32-bit unsigned intgeter.',
    support: 4,
    declaration: 'uint packUnorm2x16(vec2 v);',
    params: [['v', 'Specifies a vector of values to be packed into an unsigned integer.']],
    seealso: [],
  },
  pow: {
    name: 'return the value of the first parameter raised to the power of the second',
    descriptionMD:
      '`pow` returns the value of $x$ raised to the $y$ power, i.e. $x^y$. The result is undefined if $x < 0$ or if $x = 0$ and $y \\\\leq 0$.',
    support: 1.1,
    declaration: 'genType pow(\n              genType x, \n              genType y);',
    params: [
      ['x', 'Specify the value to raise to the power y.'],
      ['y', 'Specify the power to which to raise x.'],
    ],
    seealso: ['sin', 'cos', 'sinh', 'cosh'],
  },
  radians: {
    name: 'convert a quantity in degrees to radians',
    descriptionMD:
      '`radians` converts a quantity specified in degrees into radians. The return value is ${ \\\\pi \\\\times degrees } \\\\over 180$.',
    support: 1.1,
    declaration: 'genType radians(genType degrees);',
    params: [['degrees', 'Specify the quantity, in degrees, to be converted to radians.']],
    seealso: ['degrees'],
  },
  reflect: {
    name: 'calculate the reflection direction for an incident vector',
    descriptionMD:
      'For a given incident vector _`I`_ and surface normal _`N`_ `reflect` returns the reflection direction calculated as ``_`I`_ - 2.0 * `dot`(_`N`_, _`I`_) * _`N`_``.',
    support: 1.1,
    declaration: 'genType reflect(\n              genType I, \n              genType N);',
    params: [
      ['I', 'Specifies the incident vector.'],
      ['N', 'Specifies the normal vector.'],
    ],
    seealso: ['dot', 'refract'],
  },
  refract: {
    name: 'calculate the refraction direction for an incident vector',
    descriptionMD:
      'For a given incident vector _`I`_, surface normal _`N`_ and ratio of indices of refraction, _`eta`_, `refract` returns the refraction vector, _`R`_.',
    support: 1.1,
    declaration: 'genType refract(\n              genType I, \n              genType N, \n              float eta);',
    params: [
      ['I', 'Specifies the incident vector.'],
      ['N', 'Specifies the normal vector.'],
      ['eta', 'Specifies the ratio of indices of refraction.'],
    ],
    seealso: ['dot', 'reflect'],
  },
  round: {
    name: 'find the nearest integer to the parameter',
    descriptionMD:
      '`round` returns a value equal to the nearest integer to _`x`_. The fraction 0.5 will round in a direction chosen by the implementation, presumably the direction that is fastest. This includes the possibility that `round`(_`x`_) returns the same value as [roundEven](roundEven.xhtml)(_`x`_) for all values of _`x`_.',
    support: 1.3,
    declaration: 'genType round(genType x);',
    params: [['x', 'Specify the value to evaluate.']],
    seealso: ['floor', 'roundEven'],
  },
  roundEven: {
    name: 'find the nearest even integer to the parameter',
    descriptionMD:
      '`roundEven` returns a value equal to the nearest integer to _`x`_. The fractional part of 0.5 will round toward the nearest even integer. For example, both 3.5 and 4.5 will round to 4.0.',
    support: 1.3,
    declaration: 'genType roundEven(genType x);',
    params: [['x', 'Specify the value to evaluate.']],
    seealso: ['floor', 'round'],
  },
  sign: {
    name: 'extract the sign of the parameter',
    descriptionMD:
      '`sign` returns -1.0 if _`x`_ is less than 0.0, 0.0 if _`x`_ is equal to 0.0, and +1.0 if _`x`_ is greater than 0.0.',
    support: 1.3,
    declaration: 'genType sign(genType x);',
    params: [['x', 'Specify the value from which to extract the sign.']],
    seealso: ['abs'],
  },
  sin: {
    name: 'return the sine of the parameter',
    descriptionMD: '`sin` returns the trigonometric sine of _`angle`_.',
    support: 1.1,
    declaration: 'genType sin(genType angle);',
    params: [['angle', 'Specify the quantity, in radians, of which to return the sine.']],
    seealso: ['cos'],
  },
  sinh: {
    name: 'return the hyperbolic sine of the parameter',
    descriptionMD: '`sinh` returns the hyperbolic sine of x. The hyperbolic sine of x is computed as e x − e − x 2 .',
    support: 1.3,
    declaration: 'genType sinh(genType x);',
    params: [['x', 'Specify the value whose hyperbolic sine to return.']],
    seealso: ['sin', 'cos', 'cosh'],
  },
  smoothstep: {
    name: 'perform Hermite interpolation between two values',
    descriptionMD:
      '`smoothstep` performs smooth Hermite interpolation between 0 and 1 when _`edge0`_ < _`x`_ < _`edge1`_. This is useful in cases where a threshold function with a smooth transition is desired. `smoothstep` is equivalent to:',
    support: 1.3,
    declaration:
      'genType smoothstep(\n              genType edge0, \n              genType edge1, \n              genType x);',
    params: [
      ['edge0', 'Specifies the value of the lower edge of the Hermite function.'],
      ['edge1', 'Specifies the value of the upper edge of the Hermite function.'],
      ['x', 'Specifies the source value for interpolation.'],
    ],
    seealso: ['mix', 'step'],
  },
  sqrt: {
    name: 'return the square root of the parameter',
    descriptionMD:
      '`sqrt` returns the square root of $x$, i.e. the value $\\\\sqrt { x }$. The result is undefined if $x < 0$.',
    support: 1.1,
    declaration: 'genType sqrt(genType x);',
    params: [['x', 'Specify the value of which to take the square root.']],
    seealso: ['pow', 'inversesqrt'],
  },
  step: {
    name: 'generate a step function by comparing two values',
    descriptionMD: '`step` generates a step function by comparing _`x`_ to _`edge`_.',
    support: 1.1,
    declaration: 'genType step(\n              genType edge, \n              genType x);',
    params: [
      ['edge', 'Specifies the location of the edge of the step function.'],
      ['x', 'Specify the value to be used to generate the step function.'],
    ],
    seealso: ['mix', 'smoothstep'],
  },
  tan: {
    name: 'return the tangent of the parameter',
    descriptionMD: '`tan` returns the trigonometric tangent of _`angle`_.',
    support: 1.1,
    declaration: 'genType tan(genType angle);',
    params: [['angle', 'Specify the quantity, in radians, of which to return the tangent.']],
    seealso: ['sin', 'cos', 'atan'],
  },
  tanh: {
    name: 'return the hyperbolic tangent of the parameter',
    descriptionMD:
      '`tanh` returns the hyperbolic tangent of x. The hyperbolic tangent of x is computed as sinh ⁡ x cosh ⁡ x .',
    support: 1.3,
    declaration: 'genType tanh(genType x);',
    params: [['x', 'Specify the value whose hyperbolic tangent to return.']],
    seealso: ['sin', 'cos', 'sinh', 'cosh'],
  },
  texelFetch: {
    name: 'perform a lookup of a single texel within a texture',
    descriptionMD:
      '`texelFetch` performs a lookup of a single texel from texture coordinate _`P`_ in the texture bound to _`sampler`_. The array layer is specified in the last component of _`P`_ for array forms. The _`lod`_ parameter (if present) specifies the level-of-detail from which the texel will be fetched. The _`sample`_ specifies which sample within the texel will be returned when reading from a multi-sample texure.',
    support: 1.3,
    declaration:
      'gvec4 texelFetch(\n              gsampler1D sampler, \n              int P, \n              int lod);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['lod', 'If present, specifies the level-of-detail within the texture from which the texel will be fetched.'],
      ['sample', 'For multisampled fetches, specifies which sample within the texel from which will be returned.'],
    ],
    seealso: [
      'texelFetch',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  texelFetchOffset: {
    name: 'perform a lookup of a single texel within a texture with an offset',
    descriptionMD:
      '`texelFetchOffset` performs a lookup of a single texel from texture coordinate _`P`_ in the texture bound to _`sampler`_. Before fetching the texel, the offset specified in _`offset`_ is added to _`P`_. _`offset`_ must be a constant expression. The array layer is specified in the last component of _`P`_ for array forms. The _`lod`_ parameter (if present) specifies the level-of-detail from which the texel will be fetched. The _`sample`_ parameter specifies which sample within the texel will be returned when reading from a multi-sample texure.',
    support: 1.3,
    declaration:
      'gvec4 texelFetchOffset(\n              gsampler1D sampler, \n              int P, \n              int lod, \n              int offset);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['lod', 'If present, specifies the level-of-detail within the texture from which the texel will be fetched.'],
      ['offset', 'Specifies offset, in texels that will be applied to P before looking up the texel.'],
    ],
    seealso: [
      'texelFetch',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  texture: {
    name: 'retrieves texels from a texture',
    descriptionMD:
      '`texture` samples texels from the texture bound to _`sampler`_ at texture coordinate _`P`_. An optional bias, specified in _`bias`_ is included in the level-of-detail computation that is used to choose mipmap(s) from which to sample.',
    support: 1.3,
    declaration:
      'gvec4 texture(\n              gsampler1D sampler, \n              float P, \n              [float bias]);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['bias', 'Specifies an optional bias to be applied during level-of-detail computation.'],
      [
        'compare',
        'Specifies the value to which the fetched texel will be compared when sampling from gsamplerCubeArrayShadow.',
      ],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureGather: {
    name: 'gathers four texels from a texture',
    descriptionMD: '`textureGather` returns the value:',
    support: 4,
    declaration:
      'gvec4 textureGather(\n              gsampler2D sampler, \n              vec2 P, \n              [int comp]);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['comp', 'Specifies the component of the source texture that will be used to generate the resulting vector.'],
      ['refZ', 'Specifies the reference Z value used in the comparison for shadow forms.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureGatherOffset: {
    name: 'gathers four texels from a texture with offset',
    descriptionMD: '`textureGatherOffset` returns the value:',
    support: 4,
    declaration:
      'gvec4 textureGatherOffset(\n              gsampler2D sampler, \n              vec2 P, \n              ivec2 offset, \n              [int comp]);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['comp', 'Specifies the component of the source texture that will be used to generate the resulting vector.'],
      ['refZ', 'Specifies the reference Z value used in the comparison for shadow forms.'],
      [
        'offset',
        'Specifies the offset from the specified texture coordinate P from which the texels will be gathered.',
      ],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureGatherOffsets: {
    name: 'gathers four texels from a texture with an array of offsets',
    descriptionMD:
      '`textureGatherOffsets` operates identically to [textureGatherOffset](textureGatherOffset.xhtml), except that _`offsets`_ is used to determine the location of the four texels to sample. Each of the four texels is obtained by applying the offset in _`offsets`_ as a (u, v) coordinate offset to _`P`_, identifying the four-texel `GL_LINEAR` footprint, and then selecting the texel i0i0 of that footprint. The specified values in _`offsets`_ must be set with constant integral expressions.',
    support: 4,
    declaration:
      'gvec4 textureGatherOffsets(\n              gsampler2D sampler, \n              vec2 P, \n              ivec2 offsets[4], \n              [int comp]);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['comp', 'Specifies the component of the source texture that will be used to generate the resulting vector.'],
      ['refZ', 'Specifies the reference Z value used in the comparison for shadow forms.'],
      [
        'offsets',
        'Specifies an array of offsets from the specified texture coordinate P from which the texels will be gathered.',
      ],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureGrad: {
    name: 'perform a texture lookup with explicit gradients',
    descriptionMD:
      '`textureGrad` performs a texture lookup at coordinate _`P`_ from the texture bound to _`sampler`_ with explicit texture coordinate gradiends as specified in _`dPdx`_ and _`dPdy`_. Set:',
    support: 1.3,
    declaration:
      'gvec4 textureGrad(\n              gsampler1D sampler, \n              float P, \n              float dPdx, \n              float dPdy);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['dPdx', 'Specifies the partial derivative of P with respect to window x.'],
      ['dPdy', 'Specifies the partial derivative of P with respect to window y.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureGradOffset: {
    name: 'perform a texture lookup with explicit gradients and offset',
    descriptionMD:
      '`textureGradOffset` performs a texture lookup at coordinate _`P`_ from the texture bound to _`sampler`_ with explicit texture coordinate gradiends as specified in _`dPdx`_ and _`dPdy`_. An explicit offset is also supplied in _`offset`_. `textureGradOffset` consumes _`dPdx`_ and _`dPdy`_ as [textureGrad](textureGrad.xhtml) and _`offset`_ as [textureOffset](textureOffset.xhtml).',
    support: 1.3,
    declaration:
      'gvec4 textureGradOffset(\n              gsampler1D sampler, \n              float P, \n              float dPdx, \n              float dPdy, \n              int offset);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['dPdx', 'Specifies the partial derivative of P with respect to window x.'],
      ['dPdy', 'Specifies the partial derivative of P with respect to window y.'],
      ['offset', 'Specifies the offset to be applied to the texture coordinates before sampling.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureLod: {
    name: 'perform a texture lookup with explicit level-of-detail',
    descriptionMD:
      '`textureLod` performs a texture lookup at coordinate _`P`_ from the texture bound to _`sampler`_ with an explicit level-of-detail as specified in _`lod`_. _`lod`_ specifies λbase and sets the partial derivatives as follows:',
    support: 1.3,
    declaration:
      'gvec4 textureLod(\n              gsampler1D sampler, \n              float P, \n              float lod);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['lod', 'Specifies the explicit level-of-detail'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureLodOffset: {
    name: 'perform a texture lookup with explicit level-of-detail and offset',
    descriptionMD:
      '`textureLodOffset` performs a texture lookup at coordinate _`P`_ from the texture bound to _`sampler`_ with an explicit level-of-detail as specified in _`lod`_. Behavior is the same as in [textureLod](textureLod.xhtml) except that before sampling, _`offset`_ is added to _`P`_.',
    support: 1.3,
    declaration:
      'gvec4 textureLodOffset(\n              gsampler1D sampler, \n              float P, \n              float lod, \n              int offset);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which the texture will be sampled.'],
      ['lod', 'Specifies the explicit level-of-detail from which texels will be fetched.'],
      ['offset', 'Specifies the offset that will be applied to P before texels are fetched.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureOffset: {
    name: 'perform a texture lookup with offset',
    descriptionMD:
      '`textureOffset` performs a texture lookup at coordinate _`P`_ from the texture bound to _`sampler`_ with an additional offset, specified in texels in _`offset`_ that will be applied to the (u, v, w) texture coordinates before looking up each texel. The offset value must be a constant expression. A limited range of offset values are supported; the minimum and maximum offset values are implementation-dependent and may be determined by querying `GL_MIN_PROGRAM_TEXEL_OFFSET` and `GL_MAX_PROGRAM_TEXEL_OFFSET`, respectively.',
    support: 1.3,
    declaration:
      'gvec4 textureOffset(\n              gsampler1D sampler, \n              float P, \n              int offset, \n              [float bias]);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['offset', 'Specifies offset, in texels that will be applied to P before looking up the texel.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureProj: {
    name: 'perform a texture lookup with projection',
    descriptionMD:
      '`textureProj` performs a texture lookup with projection. The texture coordinates consumed from _`P`_, not including the last component of _`P`_, are divided by the last component of _`P`_. The resulting 3rd component of _`P`_ in the shadow forms is used as Dref. After these values are computed, the texture lookup proceeds as in [texture](texture.xhtml).',
    support: 1.3,
    declaration:
      'gvec4 textureProj(\n              gsampler1D sampler, \n              vec2 P, \n              [float bias]);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['bias', 'Specifies an optional bias to be applied during level-of-detail computation.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureProjGrad: {
    name: 'perform a texture lookup with projection and explicit gradients',
    descriptionMD:
      '`textureProjGrad` performs a texture lookup with projection and explicit gradients. The texture coordinates consumed from _`P`_, not including the last component of _`P`_, are divided by the last component of _`P`_. The resulting 3rd component of _`P`_ in the shadow forms is used as Dref. After these values are computed, the texture lookup proceeds as in [textureGrad](textureGrad.xhtml), passing _`dPdx`_ and _`dPdy`_ as gradients.',
    support: 1.3,
    declaration:
      'gvec4 textureProjGrad(\n              gsampler1D sampler, \n              vec2 P, \n              float pDx, \n              float pDy);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['dPdx', 'Specifies the partial derivative of P with respect to window x.'],
      ['dPdy', 'Specifies the partial derivative of P with respect to window y.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureProjGradOffset: {
    name: 'perform a texture lookup with projection, explicit gradients and offset',
    descriptionMD:
      '`textureProjGradOffset` performs a texture lookup with projection and explicit gradients and offsets. The texture coordinates consumed from _`P`_, not including the last component of _`P`_, are divided by the last component of _`P`_. The resulting 3rd component of _`P`_ in the shadow forms is used as Dref. After these values are computed, the texture lookup proceeds as in [textureGradOffset](textureGradOffset.xhtml), passing _`dPdx`_ and _`dPdy`_ as gradients, and _`offset`_ as the offset.',
    support: 1.3,
    declaration:
      'gvec4 textureProjGradOffset(\n              gsampler1D sampler, \n              vec2 P, \n              float dPdx, \n              float dPdy, \n              int offset);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['dPdx', 'Specifies the partial derivative of P with respect to window x.'],
      ['dPdy', 'Specifies the partial derivative of P with respect to window y.'],
      [
        'offset',
        'Specifies the offsets, in texels at which the texture will be sampled relative to the projection of P.',
      ],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureProjLod: {
    name: 'perform a texture lookup with projection and explicit level-of-detail',
    descriptionMD:
      '`textureProjLod` performs a texture lookup with projection from an explicitly specified level-of-detail. The texture coordinates consumed from _`P`_, not including the last component of _`P`_, are divided by the last component of _`P`_. The resulting 3rd component of _`P`_ in the shadow forms is used as Dref. After these values are computed, the texture lookup proceeds as in [textureLod](textureLod.xhtml), with _`lod`_ used to specify the level-of-detail from which the texture will be sampled.',
    support: 1.3,
    declaration:
      'gvec4 textureProjLod(\n              gsampler1D sampler, \n              vec2 P, \n              float lod);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['lod', 'Specifies the explicit level-of-detail from which to fetch texels.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureProjLodOffset: {
    name: 'perform a texture lookup with projection and explicit level-of-detail and offset',
    descriptionMD:
      '`textureProjLodOffset` performs a texture lookup with projection from an explicitly specified level-of-detail with an offset applied to the texture coordinates before sampling. The texture coordinates consumed from _`P`_, not including the last component of _`P`_, are divided by the last component of _`P`_. The resulting 3rd component of _`P`_ in the shadow forms is used as Dref. After these values are computed, the texture lookup proceeds as in [textureLodOffset](textureLodOffset.xhtml), with _`lod`_ used to specify the level-of-detail from which the texture will be sampled and _`offset`_ used to specifiy the offset, in texels, to be applied to the texture coordinates before sampling.',
    support: 1.3,
    declaration:
      'gvec4 textureProjLodOffset(\n              gsampler1D sampler, \n              vec2 P, \n              float lod, \n              int offset);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which texture will be sampled.'],
      ['lod', 'Specifies the explicit level-of-detail from which to fetch texels.'],
      ['offset', 'Specifies the offset, in texels, to be applied to P before fetching texels.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureProjOffset: {
    name: 'perform a texture lookup with projection and offset',
    descriptionMD:
      '`textureProjOffset` performs a texture lookup with projection. The texture coordinates consumed from _`P`_, not including the last component of _`P`_, are divided by the last component of _`P`_. The resulting 3rd component of _`P`_ in the shadow forms is used as Dref. After these values are computed, the texture lookup proceeds as in [textureOffset](textureOffset.xhtml), with the _`offset`_ used to offset the computed texture coordinates.',
    support: 1.3,
    declaration:
      'gvec4 textureProjOffset(\n              gsampler1D sampler, \n              vec2 P, \n              int offset, \n              [float bias]);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture from which texels will be retrieved is bound.'],
      ['P', 'Specifies the texture coordinates at which the texture will be sampled.'],
      ['offset', 'Specifies the offset that is applied to P before sampling occurs.'],
      ['bias', 'Specifies an optional bias to be applied during level-of-detail computation.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureQueryLod',
      'textureSize',
    ],
  },
  textureQueryLevels: {
    name: 'compute the number of accessible mipmap levels of a texture',
    descriptionMD:
      '`textureQueryLevels` returns the number of accessible mipmap levels in the texture associated with _`sampler`_.',
    support: 4.3,
    declaration: 'int textureQueryLevels(gsampler1D sampler);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture whose mipmap level count will be queried is bound.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureSize',
    ],
  },
  textureQueryLod: {
    name: 'compute the level-of-detail that would be used to sample from a texture',
    descriptionMD:
      '_Available only in the fragment shader_, `textureQueryLod` computes the level-of-detail that would be used to sample from a texture. The mipmap array(s) that would be accessed is returned in the _x_ component of the return value. The computed level-of-detail relative to the base level is returned in the _y_ component of the return value.',
    support: 4,
    declaration: 'vec2 textureQueryLod(\n              gsampler1D sampler, \n              float P);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture whose level-of-detail will be queried is bound.'],
      ['P', 'Specifies the texture coordinates at which the level-of-detail will be queried.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureSize',
    ],
  },
  textureSamples: {
    name: 'return the number of samples of a texture',
    descriptionMD: '`textureSamples` returns the number of samples per texel of the texture bound to _`sampler`_.',
    support: 4.5,
    declaration: 'int textureSamples(gsampler2DMS sampler);',
    params: [['sampler', 'Specifies the sampler to which the texture is bound.']],
    seealso: ['texture', 'textureQueryLevels', 'textureQueryLod', 'textureSize'],
  },
  textureSize: {
    name: 'retrieve the dimensions of a level of a texture',
    descriptionMD:
      '`textureSize` returns the dimensions of level _`lod`_ (if present) of the texture bound to _`sampler`_. The components in the return value are filled in, in order, with the width, height and depth of the texture. For the array forms, the last component of the return value is the number of layers in the texture array.',
    support: 1.3,
    declaration: 'int textureSize(\n              gsampler1D sampler, \n              int lod);',
    params: [
      ['sampler', 'Specifies the sampler to which the texture whose dimensions to retrieve is bound.'],
      ['lod', 'Specifies the level of the texture for which to retrieve the dimensions.'],
    ],
    seealso: [
      'texelFetch',
      'texelFetchOffset',
      'texture',
      'textureGather',
      'textureGatherOffset',
      'textureGatherOffsets',
      'textureGrad',
      'textureGradOffset',
      'textureLod',
      'textureLodOffset',
      'textureOffset',
      'textureProj',
      'textureProjGrad',
      'textureProjGradOffset',
      'textureProjLod',
      'textureProjLodOffset',
      'textureProjOffset',
      'textureQueryLod',
    ],
  },
  transpose: {
    name: 'calculate the transpose of a matrix',
    descriptionMD: '`transpose` returns the transpose of the matrix _`m`_.',
    support: 1.2,
    declaration: 'mat2 transpose(mat2 m);',
    params: [['m', 'Specifies the matrix of which to take the transpose.']],
    seealso: ['determinant', 'inverse'],
  },
  trunc: {
    name: 'find the truncated value of the parameter',
    descriptionMD:
      '`trunc` returns a value equal to the nearest integer to _`x`_ whose absolute value is not larger than the absolute value of _`x`_.',
    support: 1.3,
    declaration: 'genType trunc(genType x);',
    params: [['x', 'Specify the value to evaluate.']],
    seealso: ['floor', 'round'],
  },
  uaddCarry: {
    name: 'add unsigned integers and generate carry',
    descriptionMD:
      '`uaddCarry` adds two 32-bit unsigned integer variables (scalars or vectors) and generates a 32-bit unsigned integer result, along with a carry output. The result is the sum of _`x`_ and _`y`_ modulo 2^32. The value _`carry`_ is set to 0 if the sum is less than 232 and to 1 otherwise.',
    support: 4,
    declaration:
      'genUType uaddCarry(\n              genUType x, \n              genUType y, \n              out genUType carry);',
    params: [
      ['x', 'Specifies the first vector to be used in the summation operation.'],
      ['y', 'Specifies the second vector to be used in the summation operation.'],
      ['carry', 'Specifies the variable to receive the carry output of the sum.'],
    ],
    seealso: ['usubBorrow'],
  },
  uintBitsToFloat: {
    name: 'intBitsToFloat, produce a floating point using an encoding supplied as an integer',
    descriptionMD:
      '`intBitsToFloat` and `uintBitsToFloat` return the encoding passed in parameter _`x`_ as a floating-point value. If the encoding of a NaN is passed in _`x`_, it will not signal and the resulting value will be undefined. If the encoding of a floating point infinity is passed in parameter _`x`_, the resulting floating-point value is the corresponding (positive or negative) floating point infinity.',
    support: 3.3,
    declaration: 'genType intBitsToFloat(genIType x);',
    params: [['x', 'Specifies the bit encoding to return as a floating point value.']],
    seealso: ['floatBitsToInt', 'isnan', 'isinf'],
  },
  umulExtended: {
    name: 'perform a 32- by 32-bit multiply to produce a 64-bit result',
    descriptionMD:
      '`umulExtended` and `imulExtended` perform multiplication of the two 32-bit integer quantities _`x`_ and _`y`_, producing a 64-bit integer result. The 32 least significant bits of this product are returned in _`lsb`_ and the 32 most significant bits are returned in _`msb`_. `umulExtended` and `imulExtended` perform unsigned and signed multiplication, respectively.',
    support: 4,
    declaration:
      'void umulExtended(\n              genUType x, \n              genUType y, \n              out genUType msb, \n              out genUType lsb);',
    params: [
      ['x', 'Specifies the first multiplicand.'],
      ['y', 'Specifies the second multiplicand.'],
      ['msb', 'Specifies the variable to receive the most significant word of the product.'],
      ['lsb', 'Specifies the variable to receive the least significant word of the product.'],
    ],
    seealso: ['uaddCarry'],
  },
  unpackDouble2x32: {
    name: 'produce two unsigned integers containing the bit encoding of a double precision floating point value',
    descriptionMD:
      '`unpackDouble2x32` returns a two-component unsigned integer vector representation of _`d`_. The bit-level representation of _`d`_ is preserved. The first component of the returned vector contains the 32 least significant bits of the double; the second component consists the 32 most significant bits.',
    support: 4,
    declaration: 'uvec2 unpackDouble2x32(double d);',
    params: [['d', 'Specifies double precision value to break into a pair of unsigned integers.']],
    seealso: ['packDouble2x32'],
  },
  unpackHalf2x16: {
    name: 'convert two 16-bit floating-point values packed into a single 32-bit integer into a vector of two 32-bit floating-point quantities',
    descriptionMD:
      '`unpackHalf2x16` returns a two-component floating-point vector with components obtained by unpacking a 32-bit unsigned integer into a pair of 16-bit values, interpreting those values as 16-bit floating-point numbers according to the OpenGL Specification, and converting them to 32-bit floating-point values. The first component of the vector is obtained from the 16 least-significant bits of v; the second component is obtained from the 16 most-significant bits of v.',
    support: 4.2,
    declaration: 'vec2 unpackHalf2x16(uint v);',
    params: [
      [
        'v',
        'Specify a single 32-bit unsigned integer values that contains two 16-bit floating point values to be unpacked.',
      ],
    ],
    seealso: ['packDouble2x32', 'unpackDouble2x32', 'packHalf2x16'],
  },
  unpackSnorm2x16: {
    name: 'unpackUnorm2x16, unpackUnorm4x8, unpack floating-point values from an unsigned integer',
    descriptionMD:
      '`unpackUnorm2x16`, `unpackSnorm2x16`, `unpackUnorm4x8` and `unpackSnorm4x8` unpack single 32-bit unsigned integers, specified in the parameter _`p`_ into a pair of 16-bit unsigned integers, four 8-bit unsigned integers or four 8-bit signed integers. Then, each component is converted to a normalized floating-point value to generate the returned two- or four-component vector.',
    support: 4,
    declaration: 'vec2 unpackUnorm2x16(uint p);',
    params: [['p', 'Specifies an unsigned integer containing packed floating-point values.']],
    seealso: [],
  },
  unpackSnorm4x8: {
    name: 'unpackUnorm2x16, unpackUnorm4x8, unpack floating-point values from an unsigned integer',
    descriptionMD:
      '`unpackUnorm2x16`, `unpackSnorm2x16`, `unpackUnorm4x8` and `unpackSnorm4x8` unpack single 32-bit unsigned integers, specified in the parameter _`p`_ into a pair of 16-bit unsigned integers, four 8-bit unsigned integers or four 8-bit signed integers. Then, each component is converted to a normalized floating-point value to generate the returned two- or four-component vector.',
    support: 4,
    declaration: 'vec2 unpackUnorm2x16(uint p);',
    params: [['p', 'Specifies an unsigned integer containing packed floating-point values.']],
    seealso: [],
  },
  unpackUnorm: {
    name: 'unpackUnorm2x16, unpackUnorm4x8, unpack floating-point values from an unsigned integer',
    descriptionMD:
      '`unpackUnorm2x16`, `unpackSnorm2x16`, `unpackUnorm4x8` and `unpackSnorm4x8` unpack single 32-bit unsigned integers, specified in the parameter _`p`_ into a pair of 16-bit unsigned integers, four 8-bit unsigned integers or four 8-bit signed integers. Then, each component is converted to a normalized floating-point value to generate the returned two- or four-component vector.',
    support: 4,
    declaration: 'vec2 unpackUnorm2x16(uint p);',
    params: [['p', 'Specifies an unsigned integer containing packed floating-point values.']],
    seealso: [],
  },
  unpackUnorm2x16: {
    name: 'unpackUnorm2x16, unpackUnorm4x8, unpack floating-point values from an unsigned integer',
    descriptionMD:
      '`unpackUnorm2x16`, `unpackSnorm2x16`, `unpackUnorm4x8` and `unpackSnorm4x8` unpack single 32-bit unsigned integers, specified in the parameter _`p`_ into a pair of 16-bit unsigned integers, four 8-bit unsigned integers or four 8-bit signed integers. Then, each component is converted to a normalized floating-point value to generate the returned two- or four-component vector.',
    support: 4,
    declaration: 'vec2 unpackUnorm2x16(uint p);',
    params: [['p', 'Specifies an unsigned integer containing packed floating-point values.']],
    seealso: [],
  },
  unpackUnorm4x8: {
    name: 'unpackUnorm2x16, unpackUnorm4x8, unpack floating-point values from an unsigned integer',
    descriptionMD:
      '`unpackUnorm2x16`, `unpackSnorm2x16`, `unpackUnorm4x8` and `unpackSnorm4x8` unpack single 32-bit unsigned integers, specified in the parameter _`p`_ into a pair of 16-bit unsigned integers, four 8-bit unsigned integers or four 8-bit signed integers. Then, each component is converted to a normalized floating-point value to generate the returned two- or four-component vector.',
    support: 4,
    declaration: 'vec2 unpackUnorm2x16(uint p);',
    params: [['p', 'Specifies an unsigned integer containing packed floating-point values.']],
    seealso: [],
  },
  usubBorrow: {
    name: 'subtract unsigned integers and generate borrow',
    descriptionMD:
      '`usubBorrow` subtracts two 32-bit unsigned integer variables (scalars or vectors) and generates a 32-bit unsigned integer result, along with a borrow output. The result is the difference of _`x`_ and _`y`_ if non-negative, or 2^32 plus that difference otherwise. The value _`borrow`_ is set to 0 if _`x`_ ≥ _`y`_ and to 1 otherwise.',
    support: 4,
    declaration:
      'genUType usubBorrow(\n              genUType x, \n              genUType y, \n              out genUType borrow);',
    params: [
      ['x', 'Specifies the first vector to be used in the subtraction operation.'],
      ['y', 'Specifies the second vector to be used in the subtraction operation.'],
      ['borrow', 'Specifies the variable to receive the borrow output of the difference.'],
    ],
    seealso: ['uaddCarry'],
  },
};

export const functionKeys = Object.keys(functions);

export const preventDuplicateFunctions = (arr: string[]) => arr.filter((a) => !functionKeys.includes(a));
