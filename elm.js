(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.aN.aa === region.a_.aa)
	{
		return 'on line ' + region.aN.aa;
	}
	return 'on lines ' + region.aN.aa + ' through ' + region.a_.aa;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cF,
		impl.dK,
		impl.dn,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		C: func(record.C),
		aO: record.aO,
		aI: record.aI
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.C;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.aO;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.aI) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cF,
		impl.dK,
		impl.dn,
		function(sendToApp, initialModel) {
			var view = impl.dL;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cF,
		impl.dK,
		impl.dn,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.aM && impl.aM(sendToApp)
			var view = impl.dL;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.b6);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.dE) && (_VirtualDom_doc.title = title = doc.dE);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.cV;
	var onUrlRequest = impl.cW;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		aM: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.bs === next.bs
							&& curr.a8 === next.a8
							&& curr.bp.a === next.bp.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		cF: function(flags)
		{
			return A3(impl.cF, flags, _Browser_getUrl(), key);
		},
		dL: impl.dL,
		dK: impl.dK,
		dn: impl.dn
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { cz: 'hidden', ch: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { cz: 'mozHidden', ch: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { cz: 'msHidden', ch: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { cz: 'webkitHidden', ch: 'webkitvisibilitychange' }
		: { cz: 'hidden', ch: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		by: _Browser_getScene(),
		bJ: {
			bN: _Browser_window.pageXOffset,
			bO: _Browser_window.pageYOffset,
			bK: _Browser_doc.documentElement.clientWidth,
			a5: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		bK: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		a5: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			by: {
				bK: node.scrollWidth,
				a5: node.scrollHeight
			},
			bJ: {
				bN: node.scrollLeft,
				bO: node.scrollTop,
				bK: node.clientWidth,
				a5: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			by: _Browser_getScene(),
			bJ: {
				bN: x,
				bO: y,
				bK: _Browser_doc.documentElement.clientWidth,
				a5: _Browser_doc.documentElement.clientHeight
			},
			cs: {
				bN: x + rect.left,
				bO: y + rect.top,
				bK: rect.width,
				a5: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.aA.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.aA.b, xhr)); });
		$elm$core$Maybe$isJust(request.bE) && _Http_track(router, xhr, request.bE.a);

		try {
			xhr.open(request.cP, request.bG, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.bG));
		}

		_Http_configureRequest(xhr, request);

		request.b6.a && xhr.setRequestHeader('Content-Type', request.b6.a);
		xhr.send(request.b6.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.a4; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.dD.a || 0;
	xhr.responseType = request.aA.d;
	xhr.withCredentials = request.b_;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		bG: xhr.responseURL,
		dh: xhr.status,
		di: xhr.statusText,
		a4: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			c8: event.loaded,
			bA: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			c$: event.loaded,
			bA: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.c) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.e),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.e);
		} else {
			var treeLen = builder.c * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.f) : builder.f;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.c);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.e) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.e);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{f: nodeList, c: (len / $elm$core$Array$branchFactor) | 0, e: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {a1: fragment, a8: host, bn: path, bp: port_, bs: protocol, bt: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Main$FetchedEmojiData = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$Model = F3(
	function (emojis, search, results) {
		return {J: emojis, as: results, aK: search};
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			A2(
				$elm$core$Task$onError,
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
					$elm$core$Result$Err),
				A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Ok),
					task)));
	});
var $author$project$EmojiData$Fetch$emojiDataCDN = 'https://cdn.jsdelivr.net/npm/emoji-datasource@6.0.0/emoji.json';
var $author$project$EmojiData$EmojiData = F5(
	function (name, _char, category, sprite, keywords) {
		return {cg: category, aW: _char, bc: keywords, bg: name, df: sprite};
	});
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$fail = _Json_fail;
var $author$project$EmojiData$Category$Activities = 5;
var $author$project$EmojiData$Category$AnimalsAndNature = 2;
var $author$project$EmojiData$Category$Flags = 8;
var $author$project$EmojiData$Category$FoodAndDrink = 3;
var $author$project$EmojiData$Category$Objects = 6;
var $author$project$EmojiData$Category$PeopleAndBody = 1;
var $author$project$EmojiData$Category$SkinTones = 9;
var $author$project$EmojiData$Category$SmileysAndEmotion = 0;
var $author$project$EmojiData$Category$Symbols = 7;
var $author$project$EmojiData$Category$TravelAndPlaces = 4;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Encode$string = _Json_wrap;
var $Herteby$enum$Enum$create = function (list) {
	var toString = function (a) {
		var _v1 = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (_v2) {
					var str = _v2.a;
					var b = _v2.b;
					return _Utils_eq(b, a);
				},
				list));
		if (!_v1.$) {
			var _v3 = _v1.a;
			var str = _v3.a;
			var b = _v3.b;
			return str;
		} else {
			return 'Missing enum';
		}
	};
	var dict = $elm$core$Dict$fromList(list);
	var fromString = function (string) {
		return A2($elm$core$Dict$get, string, dict);
	};
	return {
		an: A2(
			$elm$json$Json$Decode$andThen,
			function (string) {
				var _v0 = A2($elm$core$Dict$get, string, dict);
				if (!_v0.$) {
					var a = _v0.a;
					return $elm$json$Json$Decode$succeed(a);
				} else {
					return $elm$json$Json$Decode$fail('Missing enum: ' + string);
				}
			},
			$elm$json$Json$Decode$string),
		ao: A2($elm$core$Basics$composeR, toString, $elm$json$Json$Encode$string),
		cw: fromString,
		cN: list,
		dF: toString
	};
};
var $author$project$EmojiData$Category$enum = $Herteby$enum$Enum$create(
	_List_fromArray(
		[
			_Utils_Tuple2('Smileys & Emotion', 0),
			_Utils_Tuple2('People & Body', 1),
			_Utils_Tuple2('Animals & Nature', 2),
			_Utils_Tuple2('Food & Drink', 3),
			_Utils_Tuple2('Travel & Places', 4),
			_Utils_Tuple2('Activities', 5),
			_Utils_Tuple2('Objects', 6),
			_Utils_Tuple2('Symbols', 7),
			_Utils_Tuple2('Flags', 8),
			_Utils_Tuple2('Skin Tones', 9)
		]));
var $author$project$EmojiData$Category$fromString = function (str) {
	return $author$project$EmojiData$Category$enum.cw(str);
};
var $author$project$EmojiData$Fetch$categoryDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (categoryM) {
		if (!categoryM.$) {
			var category = categoryM.a;
			return $elm$json$Json$Decode$succeed(category);
		} else {
			return $elm$json$Json$Decode$fail('Category missing');
		}
	},
	A2($elm$json$Json$Decode$map, $author$project$EmojiData$Category$fromString, $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$String$fromList = _String_fromList;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$EmojiData$Fetch$unicodeHexDecoder = function () {
	var replacemantCharacterCodepoint = 65533;
	var hexToUnicode = function (str) {
		return $elm$core$String$fromList(
			A2(
				$elm$core$List$map,
				$elm$core$Char$fromCode,
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeR,
						$rtfeldman$elm_hex$Hex$fromString,
						$elm$core$Result$withDefault(replacemantCharacterCodepoint)),
					A2(
						$elm$core$String$split,
						'-',
						$elm$core$String$toLower(str)))));
	};
	return A2($elm$json$Json$Decode$map, hexToUnicode, $elm$json$Json$Decode$string);
}();
var $author$project$EmojiData$Fetch$emojiDataDecoder = A6(
	$elm$json$Json$Decode$map5,
	$author$project$EmojiData$EmojiData,
	A2($elm$json$Json$Decode$field, 'short_name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'unified', $author$project$EmojiData$Fetch$unicodeHexDecoder),
	A2($elm$json$Json$Decode$field, 'category', $author$project$EmojiData$Fetch$categoryDecoder),
	A3(
		$elm$json$Json$Decode$map2,
		$elm$core$Tuple$pair,
		A2($elm$json$Json$Decode$field, 'sheet_x', $elm$json$Json$Decode$int),
		A2($elm$json$Json$Decode$field, 'sheet_y', $elm$json$Json$Decode$int)),
	$elm$json$Json$Decode$succeed(_List_Nil));
var $author$project$EmojiData$Fetch$emojiLibCDN = 'https://unpkg.com/emojilib@3.0.0/dist/emoji-en-US.json';
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$EmojiData$Fetch$emojiLibDecoder = $elm$json$Json$Decode$dict(
	$elm$json$Json$Decode$list($elm$json$Json$Decode$string));
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$core$Task$fail = _Scheduler_fail;
var $elm$http$Http$resultToTask = function (result) {
	if (!result.$) {
		var a = result.a;
		return $elm$core$Task$succeed(a);
	} else {
		var x = result.a;
		return $elm$core$Task$fail(x);
	}
};
var $elm$http$Http$task = function (r) {
	return A3(
		_Http_toTask,
		0,
		$elm$http$Http$resultToTask,
		{b_: false, b6: r.b6, aA: r.bx, a4: r.a4, cP: r.cP, dD: r.dD, bE: $elm$core$Maybe$Nothing, bG: r.bG});
};
var $prikhi$http_tasks$Http$Tasks$get = function (_v0) {
	var url = _v0.bG;
	var resolver = _v0.bx;
	return $elm$http$Http$task(
		{b6: $elm$http$Http$emptyBody, a4: _List_Nil, cP: 'GET', bx: resolver, dD: $elm$core$Maybe$Nothing, bG: url});
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $author$project$EmojiData$Fetch$joinKeywords = F2(
	function (keywords, emojis) {
		return A2(
			$elm$core$List$map,
			function (e) {
				return _Utils_update(
					e,
					{
						bc: A2(
							$elm$core$List$map,
							A2($elm$core$String$replace, '_', ' '),
							A2(
								$elm$core$List$map,
								A2($elm$core$String$replace, '-', ' '),
								A2(
									$elm$core$Maybe$withDefault,
									_List_Nil,
									A2($elm$core$Dict$get, e.aW, keywords))))
					});
			},
			emojis);
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $prikhi$http_tasks$Http$Tasks$resolve = F2(
	function (bodyParser, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.dh));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					bodyParser(body));
		}
	});
var $elm$http$Http$stringResolver = A2(_Http_expect, '', $elm$core$Basics$identity);
var $prikhi$http_tasks$Http$Tasks$resolveJson = function (decoder) {
	return $elm$http$Http$stringResolver(
		$prikhi$http_tasks$Http$Tasks$resolve(
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Result$mapError($elm$json$Json$Decode$errorToString),
				$elm$json$Json$Decode$decodeString(decoder))));
};
var $author$project$EmojiData$Fetch$task = A3(
	$elm$core$Task$map2,
	$author$project$EmojiData$Fetch$joinKeywords,
	$prikhi$http_tasks$Http$Tasks$get(
		{
			bx: $prikhi$http_tasks$Http$Tasks$resolveJson($author$project$EmojiData$Fetch$emojiLibDecoder),
			bG: $author$project$EmojiData$Fetch$emojiLibCDN
		}),
	$prikhi$http_tasks$Http$Tasks$get(
		{
			bx: $prikhi$http_tasks$Http$Tasks$resolveJson(
				$elm$json$Json$Decode$list($author$project$EmojiData$Fetch$emojiDataDecoder)),
			bG: $author$project$EmojiData$Fetch$emojiDataCDN
		}));
var $author$project$Main$init = function (_v0) {
	return _Utils_Tuple2(
		A3($author$project$Main$Model, _List_Nil, '', _List_Nil),
		A2($elm$core$Task$attempt, $author$project$Main$FetchedEmojiData, $author$project$EmojiData$Fetch$task));
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$EmojiData$search = F2(
	function (emojis, str) {
		var isMatch = function (emoji) {
			return A2(
				$elm$core$String$contains,
				str,
				A2($elm$core$String$join, ' ', emoji.bc)) || (A2($elm$core$String$contains, str, emoji.bg) || A2($elm$core$String$contains, str, emoji.aW));
		};
		return (str === '') ? _List_Nil : A2($elm$core$List$filter, isMatch, emojis);
	});
var $elm$core$Process$sleep = _Process_sleep;
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var result = msg.a;
				if (!result.$) {
					var emojis = result.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{J: emojis}),
						$elm$core$Platform$Cmd$none);
				} else {
					var err = result.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{J: _List_Nil}),
						A2(
							$elm$core$Task$attempt,
							$author$project$Main$FetchedEmojiData,
							A2(
								$elm$core$Task$andThen,
								function (_v2) {
									return $author$project$EmojiData$Fetch$task;
								},
								$elm$core$Process$sleep(1000))));
				}
			case 1:
				var str = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							as: A2(
								$elm$core$List$take,
								100,
								A2($author$project$EmojiData$search, model.J, str)),
							aK: str
						}),
					$elm$core$Platform$Cmd$none);
			default:
				var category = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							as: A2(
								$elm$core$List$filter,
								function (e) {
									return _Utils_eq(e.cg, category);
								},
								model.J)
						}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$SearchInput = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Right = 2;
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX(2);
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$classes = {bQ: 'a', av: 'atv', bS: 'ab', bT: 'cx', bU: 'cy', bV: 'acb', bW: 'accx', bX: 'accy', bY: 'acr', aT: 'al', aU: 'ar', bZ: 'at', aw: 'ah', ax: 'av', b0: 's', b4: 'bh', b5: 'b', b7: 'w7', b9: 'bd', ca: 'bdt', ag: 'bn', cb: 'bs', ah: 'cpe', ci: 'cp', cj: 'cpx', ck: 'cpy', A: 'c', aj: 'ctr', ak: 'cb', al: 'ccx', B: 'ccy', _: 'cl', am: 'cr', cm: 'ct', cn: 'cptr', co: 'ctxt', cv: 'fcs', a0: 'focus-within', cx: 'fs', cy: 'g', aC: 'hbh', aD: 'hc', a6: 'he', aE: 'hf', a7: 'hfp', cA: 'hv', cC: 'ic', cE: 'fr', aq: 'lbl', cG: 'iml', cH: 'imlf', cI: 'imlp', cJ: 'implw', cK: 'it', cL: 'i', bd: 'lnk', V: 'nb', bh: 'notxt', cS: 'ol', cU: 'or', N: 'oq', cY: 'oh', bl: 'pg', bm: 'p', cZ: 'ppe', c2: 'ui', s: 'r', c4: 'sb', c5: 'sbx', c6: 'sby', c7: 'sbt', da: 'e', db: 'cap', dc: 'sev', dl: 'sk', $7: 't', dp: 'tc', dq: 'w8', dr: 'w2', ds: 'w9', dt: 'tj', au: 'tja', du: 'tl', dv: 'w3', dw: 'w5', dx: 'w4', dy: 'tr', dz: 'w6', dA: 'w1', dB: 'tun', bF: 'ts', Q: 'clr', dJ: 'u', aP: 'wc', bL: 'we', aQ: 'wf', bM: 'wfp', aR: 'wrp'};
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.b7);
var $mdgriffith$elm_ui$Internal$Model$CenterX = 1;
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.A);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cy);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bl);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bm);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.s);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.da);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 1:
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 2:
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 3:
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 4:
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = 2;
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = 4;
var $mdgriffith$elm_ui$Internal$Model$asParagraph = 4;
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 0:
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 1:
			return 'auto';
		case 2:
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 3:
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 13:
			var name = style.a;
			return name;
		case 12:
			var name = style.a;
			var o = style.b;
			return name;
		case 0:
			var _class = style.a;
			return _class;
		case 1:
			var name = style.a;
			return name;
		case 2:
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 3:
			var _class = style.a;
			return _class;
		case 4:
			var _class = style.a;
			return _class;
		case 5:
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 7:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 6:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 8:
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.c3)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.v)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dd.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dd.b)))))));
		case 9:
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.s) + ('-' + ($elm$core$String$fromInt(pos.cl) + ('-' + ($elm$core$String$fromInt(pos.bK) + ('-' + $elm$core$String$fromInt(pos.a5)))))));
		case 11:
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector) {
					case 0:
						return 'fs';
					case 1:
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.ba ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.bi.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.bi.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.S) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.bA) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.T))
				])));
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a0) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.b8),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.b2),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										S: shadow.S,
										T: shadow.T,
										ba: false,
										bi: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.bi)),
										bA: shadow.bA
									}));
						},
						focus.c9),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.b8),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.b2),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										S: shadow.S,
										T: shadow.T,
										ba: false,
										bi: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.bi)),
										bA: shadow.bA
									}));
						},
						focus.c9),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = 3;
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = 2;
var $mdgriffith$elm_ui$Internal$Style$Self = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Bottom = 1;
var $mdgriffith$elm_ui$Internal$Style$CenterX = 4;
var $mdgriffith$elm_ui$Internal$Style$CenterY = 5;
var $mdgriffith$elm_ui$Internal$Style$Top = 0;
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[0, 1, 2, 3, 4, 5]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cm);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ak);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.am);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes._);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.al);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.B);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bZ);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bS);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aU);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aT);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bU);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(alignment),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aC),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b4),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c7),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$7),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aD),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bM),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aP),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment) {
				case 0:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 1:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 2:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 3:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 4:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = 0;
var $mdgriffith$elm_ui$Internal$Style$Behind = 5;
var $mdgriffith$elm_ui$Internal$Style$Below = 1;
var $mdgriffith$elm_ui$Internal$Style$OnLeft = 3;
var $mdgriffith$elm_ui$Internal$Style$OnRight = 2;
var $mdgriffith$elm_ui$Internal$Style$Within = 4;
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = 0;
	var _v0 = function () {
		switch (loc) {
			case 0:
				return 0;
			case 1:
				return 0;
			case 2:
				return 0;
			case 3:
				return 0;
			case 4:
				return 0;
			default:
				return 0;
		}
	}();
	return _List_fromArray(
		[0, 1, 2, 3, 4, 5]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cC))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c2),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.V),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.V),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc) {
							case 0:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bQ),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 1:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b5),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 2:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cU),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 3:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cS),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 4:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b4),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aR),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bh),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cn),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.co),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cZ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ah),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.Q),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.N),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.cA, $mdgriffith$elm_ui$Internal$Style$classes.Q)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.cA, $mdgriffith$elm_ui$Internal$Style$classes.N)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.cv, $mdgriffith$elm_ui$Internal$Style$classes.Q)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.cv, $mdgriffith$elm_ui$Internal$Style$classes.N)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.av, $mdgriffith$elm_ui$Internal$Style$classes.Q)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.av, $mdgriffith$elm_ui$Internal$Style$classes.N)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bF),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c4),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c5),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.s),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c6),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.A),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ci),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cj),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ck),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aP),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ag),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b9),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ca),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cb),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$7),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cK),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.s),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bL),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a7),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aj),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bW,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bW,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bW,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.bW + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.bY + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.bW)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dc),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aq),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.A),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a6),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aP),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bV,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.bX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.bX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.bV + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.bX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aj),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dc),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 1:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 2:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 3:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 4:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bl),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0 + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.b0 + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.b0))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.b0 + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.b0))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cG),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cJ),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cI),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cH),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bm),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aC),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b4),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$7),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bm),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bL),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b4),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bQ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b5),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cU),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cS),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$7),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.s),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.A),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cy),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dA),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dr),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dv),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dx),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dw),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dz),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b7),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dq),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ds),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cL),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dl),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dJ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dJ),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dl)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dB),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dt),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.au),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dp),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.du),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.b0 + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.b0 + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.s) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.s) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aj) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return {ai: closing, h: _List_Nil, E: _List_Nil, t: selector};
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 0:
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								E: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.E)
							});
					case 3:
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								h: A2(
									$elm$core$List$cons,
									{ai: '\n}', h: _List_Nil, E: props, t: '@supports (' + (prop + (':' + (value + (') {' + parent.t))))},
									rendered.h)
							});
					case 5:
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								h: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.t + (' + ' + selector), ''),
										adjRules),
									rendered.h)
							});
					case 1:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								h: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.t + (' > ' + child), ''),
										childRules),
									rendered.h)
							});
					case 2:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								h: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.t + (' ' + child), ''),
										childRules),
									rendered.h)
							});
					case 4:
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								h: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.t, descriptor),
											''),
										descriptorRules),
									rendered.h)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								h: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.t, ''),
										batched),
									rendered.h)
							});
				}
			});
		return A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender);
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.E;
		if (!_v2.b) {
			return '';
		} else {
			return rule.t + ('{' + (renderValues(rule.E) + (rule.ai + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.h)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.cQ;
	switch (_v0) {
		case 0:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 1:
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 0:
			return 'serif';
		case 1:
			return 'sans-serif';
		case 2:
			return 'monospace';
		case 3:
			var name = font.a;
			return '\"' + (name + '\"');
		case 4:
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.bg;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return name === 'smcp';
		case 1:
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.bH);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 1) {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo) {
				case 1:
					var _v2 = options.cA;
					switch (_v2) {
						case 0:
							return _List_Nil;
						case 2:
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 0:
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.b0 + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b0) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return '\"' + (name + '\"');
		case 1:
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.bH)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 0:
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 13:
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 12:
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 2:
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 1:
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 3:
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 4:
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 5:
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.da;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.s;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.aR + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.aU;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.bm;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.bl;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.aT;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.A;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.b0;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 7:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 6:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 8:
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 0:
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 1:
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 1) {
										if (_v2.b.$ === 1) {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 1) {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 2:
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 1) {
										if (_v7.b.$ === 1) {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 1) {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 3:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.dd.a);
				var ySpacing = toGridLength(template.dd.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.c3)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.v)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.v)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.dd.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.dd.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.v)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.c3)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.v)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dd.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dd.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 9:
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.s) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.a5) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.cl) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.bK) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.s) + (' / ' + ($elm$core$String$fromInt(position.s + position.a5) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.cl) + (' / ' + ($elm$core$String$fromInt(position.cl + position.bK) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.s) + ('-' + ($elm$core$String$fromInt(position.cl) + ('-' + ($elm$core$String$fromInt(position.bK) + ('-' + $elm$core$String$fromInt(position.a5)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 11:
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((!_v12.a.$) && (!_v12.b.$)) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.$7 + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.$7)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.db, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.cx, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.db + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.db))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.db + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.$7 + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.db + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.$7)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {a5: height / size, bA: size, bI: vertical};
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.cf, adjustment.b3, adjustment.cp, adjustment.cO]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.cp,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.b3,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.cf,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		cf: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		a3: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.a5)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.bI) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.bA) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 1) {
					if (face.$ === 5) {
						var _with = face.a;
						var _v2 = _with.bR;
						if (_v2.$ === 1) {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.a3;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.cf;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 4) {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 1) {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 1) {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					at: _Utils_ap(
						rendered.at,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					ad: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 1) {
							return rendered.ad;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.ad);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{at: _List_Nil, ad: _List_Nil},
			stylesheet);
		var topLevel = _v0.ad;
		var rules = _v0.at;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.cQ;
		switch (_v0) {
			case 0:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 1:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.cv)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.cv)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$core$Basics$not = _Basics_not;
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 1) {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return keyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return unkeyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 0:
					return A2(createNode, 'div', attributes);
				case 1:
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.da))
									]))
							]));
			}
		}();
		switch (parentContext) {
			case 0:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.b0, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.aj, $mdgriffith$elm_ui$Internal$Style$classes.B, $mdgriffith$elm_ui$Internal$Style$classes.bY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.b0, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.aj, $mdgriffith$elm_ui$Internal$Style$classes.B, $mdgriffith$elm_ui$Internal$Style$classes.bW])))
						]),
					_List_fromArray(
						[html])) : html));
			case 1:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.b0, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.aj, $mdgriffith$elm_ui$Internal$Style$classes.bX])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.b0, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.aj, $mdgriffith$elm_ui$Internal$Style$classes.bV])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.$7 + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.aP + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aD)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.b0 + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.$7 + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.aQ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aE)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.cB, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.dm : _Utils_ap(styled.dm, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.cB, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.dm : _Utils_ap(styled.dm, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.cB, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.dm : _Utils_ap(styled.dm, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.cB, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.dm : _Utils_ap(styled.dm, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 1) {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.dm : _Utils_ap(rendered.dm, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.L,
						rendered.M,
						rendered.G,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.H)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						cB: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.L,
							rendered.M,
							rendered.G,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.H))),
						dm: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.dm : _Utils_ap(rendered.dm, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.L,
						rendered.M,
						rendered.G,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.H)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						cB: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.L,
							rendered.M,
							rendered.G,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.H))),
						dm: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 10, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location) {
							case 0:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.V, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.bQ]));
							case 1:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.V, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.b5]));
							case 2:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.V, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.cU]));
							case 3:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.V, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.cS]));
							case 4:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.V, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.cE]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.V, $mdgriffith$elm_ui$Internal$Style$classes.da, $mdgriffith$elm_ui$Internal$Style$classes.b4]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 3:
							return $elm$virtual_dom$VirtualDom$text('');
						case 2:
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 0:
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.cB, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 0:
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 1:
				var existingBehind = existing.a;
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 2:
				var existingInFront = existing.a;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 1:
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.aw + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aT);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.aw + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aU);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.aw + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bT);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.ax + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bZ);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.ax + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bS);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.ax + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bU);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 0:
				switch (component.$) {
					case 0:
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 1:
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 2:
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 1:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 1:
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 2:
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 1:
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 2:
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 3:
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 4:
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 0:
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.aD,
				_List_Nil);
		case 2:
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.aE,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.a7 + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.b0 + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.A + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 0:
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.bL + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.aP,
				_List_Nil);
		case 2:
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.aQ,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bM + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.b0 + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.s + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $elm$core$Basics$ge = _Utils_ge;
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 3) {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 2:
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 7:
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 1) {
					return {
						G: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						H: children,
						L: has,
						M: node,
						dm: styles
					};
				} else {
					var _class = _v1.a;
					return {
						G: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						H: children,
						L: has,
						M: node,
						dm: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 0:
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 3:
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 1:
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 4:
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 10:
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 7:
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 0:
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.bL + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aP),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aQ),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.bM + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.b0 + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.s + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 8:
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 0:
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.aD + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.aE + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a7 + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.b0 + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.A + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 2:
						var description = attribute.a;
						switch (description.$) {
							case 0:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 1:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 2:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 3:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 4:
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 9:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 8:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 5:
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 6:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 9:
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 3:
									return styles;
								case 2:
									var str = elem.a;
									return styles;
								case 0:
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.dm);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 6:
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 1};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cm + (' ' + $mdgriffith$elm_ui$Internal$Style$classes._)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $author$project$EmojiData$List$emojis = _List_fromArray(
	[
		{
		cg: 7,
		aW: '#️⃣',
		bc: _List_fromArray(
			['keycap ', 'symbol', 'blue square', 'twitter']),
		bg: 'hash',
		df: _Utils_Tuple2(0, 0)
	},
		{
		cg: 7,
		aW: '*️⃣',
		bc: _List_fromArray(
			['keycap ', 'star', 'keycap']),
		bg: 'keycap_star',
		df: _Utils_Tuple2(0, 1)
	},
		{
		cg: 7,
		aW: '0️⃣',
		bc: _List_fromArray(
			['keycap 0', '0', 'numbers', 'blue square', 'null']),
		bg: 'zero',
		df: _Utils_Tuple2(0, 2)
	},
		{
		cg: 7,
		aW: '1️⃣',
		bc: _List_fromArray(
			['keycap 1', 'blue square', 'numbers', '1']),
		bg: 'one',
		df: _Utils_Tuple2(0, 3)
	},
		{
		cg: 7,
		aW: '2️⃣',
		bc: _List_fromArray(
			['keycap 2', 'numbers', '2', 'prime', 'blue square']),
		bg: 'two',
		df: _Utils_Tuple2(0, 4)
	},
		{
		cg: 7,
		aW: '3️⃣',
		bc: _List_fromArray(
			['keycap 3', '3', 'numbers', 'prime', 'blue square']),
		bg: 'three',
		df: _Utils_Tuple2(0, 5)
	},
		{
		cg: 7,
		aW: '4️⃣',
		bc: _List_fromArray(
			['keycap 4', '4', 'numbers', 'blue square']),
		bg: 'four',
		df: _Utils_Tuple2(0, 6)
	},
		{
		cg: 7,
		aW: '5️⃣',
		bc: _List_fromArray(
			['keycap 5', '5', 'numbers', 'blue square', 'prime']),
		bg: 'five',
		df: _Utils_Tuple2(0, 7)
	},
		{
		cg: 7,
		aW: '6️⃣',
		bc: _List_fromArray(
			['keycap 6', '6', 'numbers', 'blue square']),
		bg: 'six',
		df: _Utils_Tuple2(0, 8)
	},
		{
		cg: 7,
		aW: '7️⃣',
		bc: _List_fromArray(
			['keycap 7', '7', 'numbers', 'blue square', 'prime']),
		bg: 'seven',
		df: _Utils_Tuple2(0, 9)
	},
		{
		cg: 7,
		aW: '8️⃣',
		bc: _List_fromArray(
			['keycap 8', '8', 'blue square', 'numbers']),
		bg: 'eight',
		df: _Utils_Tuple2(0, 10)
	},
		{
		cg: 7,
		aW: '9️⃣',
		bc: _List_fromArray(
			['keycap 9', 'blue square', 'numbers', '9']),
		bg: 'nine',
		df: _Utils_Tuple2(0, 11)
	},
		{
		cg: 7,
		aW: '©️',
		bc: _List_fromArray(
			['copyright', 'ip', 'license', 'circle', 'law', 'legal']),
		bg: 'copyright',
		df: _Utils_Tuple2(0, 12)
	},
		{
		cg: 7,
		aW: '®️',
		bc: _List_fromArray(
			['registered', 'alphabet', 'circle']),
		bg: 'registered',
		df: _Utils_Tuple2(0, 13)
	},
		{
		cg: 5,
		aW: '🀄',
		bc: _List_fromArray(
			['mahjong red dragon', 'game', 'play', 'chinese', 'kanji']),
		bg: 'mahjong',
		df: _Utils_Tuple2(0, 14)
	},
		{
		cg: 5,
		aW: '🃏',
		bc: _List_fromArray(
			['joker', 'poker', 'cards', 'game', 'play', 'magic']),
		bg: 'black_joker',
		df: _Utils_Tuple2(0, 15)
	},
		{
		cg: 7,
		aW: '🅰️',
		bc: _List_fromArray(
			['a button', 'red square', 'alphabet', 'letter']),
		bg: 'a',
		df: _Utils_Tuple2(0, 16)
	},
		{
		cg: 7,
		aW: '🅱️',
		bc: _List_fromArray(
			['b button', 'red square', 'alphabet', 'letter']),
		bg: 'b',
		df: _Utils_Tuple2(0, 17)
	},
		{
		cg: 7,
		aW: '🅾️',
		bc: _List_fromArray(
			['o button', 'alphabet', 'red square', 'letter']),
		bg: 'o2',
		df: _Utils_Tuple2(0, 18)
	},
		{
		cg: 7,
		aW: '🅿️',
		bc: _List_fromArray(
			['p button', 'cars', 'blue square', 'alphabet', 'letter']),
		bg: 'parking',
		df: _Utils_Tuple2(0, 19)
	},
		{
		cg: 7,
		aW: '🆎',
		bc: _List_fromArray(
			['ab button', 'red square', 'alphabet']),
		bg: 'ab',
		df: _Utils_Tuple2(0, 20)
	},
		{
		cg: 7,
		aW: '🆑',
		bc: _List_fromArray(
			['cl button', 'alphabet', 'words', 'red square']),
		bg: 'cl',
		df: _Utils_Tuple2(0, 21)
	},
		{
		cg: 7,
		aW: '🆒',
		bc: _List_fromArray(
			['cool button', 'words', 'blue square']),
		bg: 'cool',
		df: _Utils_Tuple2(0, 22)
	},
		{
		cg: 7,
		aW: '🆓',
		bc: _List_fromArray(
			['free button', 'blue square', 'words']),
		bg: 'free',
		df: _Utils_Tuple2(0, 23)
	},
		{
		cg: 7,
		aW: '🆔',
		bc: _List_fromArray(
			['id button', 'purple square', 'words']),
		bg: 'id',
		df: _Utils_Tuple2(0, 24)
	},
		{
		cg: 7,
		aW: '🆕',
		bc: _List_fromArray(
			['new button', 'blue square', 'words', 'start']),
		bg: 'new',
		df: _Utils_Tuple2(0, 25)
	},
		{
		cg: 7,
		aW: '🆖',
		bc: _List_fromArray(
			['ng button', 'blue square', 'words', 'shape', 'icon']),
		bg: 'ng',
		df: _Utils_Tuple2(0, 26)
	},
		{
		cg: 7,
		aW: '🆗',
		bc: _List_fromArray(
			['ok button', 'good', 'agree', 'yes', 'blue square']),
		bg: 'ok',
		df: _Utils_Tuple2(0, 27)
	},
		{
		cg: 7,
		aW: '🆘',
		bc: _List_fromArray(
			['sos button', 'help', 'red square', 'words', 'emergency', '911']),
		bg: 'sos',
		df: _Utils_Tuple2(0, 28)
	},
		{
		cg: 7,
		aW: '🆙',
		bc: _List_fromArray(
			['up button', 'blue square', 'above', 'high']),
		bg: 'up',
		df: _Utils_Tuple2(0, 29)
	},
		{
		cg: 7,
		aW: '🆚',
		bc: _List_fromArray(
			['vs button', 'words', 'orange square']),
		bg: 'vs',
		df: _Utils_Tuple2(0, 30)
	},
		{
		cg: 8,
		aW: '🇦🇨',
		bc: _List_fromArray(
			['flag ascension island']),
		bg: 'flag-ac',
		df: _Utils_Tuple2(0, 31)
	},
		{
		cg: 8,
		aW: '🇦🇩',
		bc: _List_fromArray(
			['flag andorra', 'ad', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ad',
		df: _Utils_Tuple2(0, 32)
	},
		{
		cg: 8,
		aW: '🇦🇪',
		bc: _List_fromArray(
			['flag united arab emirates', 'united', 'arab', 'emirates', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ae',
		df: _Utils_Tuple2(0, 33)
	},
		{
		cg: 8,
		aW: '🇦🇫',
		bc: _List_fromArray(
			['flag afghanistan', 'af', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-af',
		df: _Utils_Tuple2(0, 34)
	},
		{
		cg: 8,
		aW: '🇦🇬',
		bc: _List_fromArray(
			['flag antigua barbuda', 'antigua', 'barbuda', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ag',
		df: _Utils_Tuple2(0, 35)
	},
		{
		cg: 8,
		aW: '🇦🇮',
		bc: _List_fromArray(
			['flag anguilla', 'ai', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ai',
		df: _Utils_Tuple2(0, 36)
	},
		{
		cg: 8,
		aW: '🇦🇱',
		bc: _List_fromArray(
			['flag albania', 'al', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-al',
		df: _Utils_Tuple2(0, 37)
	},
		{
		cg: 8,
		aW: '🇦🇲',
		bc: _List_fromArray(
			['flag armenia', 'am', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-am',
		df: _Utils_Tuple2(0, 38)
	},
		{
		cg: 8,
		aW: '🇦🇴',
		bc: _List_fromArray(
			['flag angola', 'ao', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ao',
		df: _Utils_Tuple2(0, 39)
	},
		{
		cg: 8,
		aW: '🇦🇶',
		bc: _List_fromArray(
			['flag antarctica', 'aq', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-aq',
		df: _Utils_Tuple2(0, 40)
	},
		{
		cg: 8,
		aW: '🇦🇷',
		bc: _List_fromArray(
			['flag argentina', 'ar', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ar',
		df: _Utils_Tuple2(0, 41)
	},
		{
		cg: 8,
		aW: '🇦🇸',
		bc: _List_fromArray(
			['flag american samoa', 'american', 'ws', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-as',
		df: _Utils_Tuple2(0, 42)
	},
		{
		cg: 8,
		aW: '🇦🇹',
		bc: _List_fromArray(
			['flag austria', 'at', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-at',
		df: _Utils_Tuple2(0, 43)
	},
		{
		cg: 8,
		aW: '🇦🇺',
		bc: _List_fromArray(
			['flag australia', 'au', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-au',
		df: _Utils_Tuple2(0, 44)
	},
		{
		cg: 8,
		aW: '🇦🇼',
		bc: _List_fromArray(
			['flag aruba', 'aw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-aw',
		df: _Utils_Tuple2(0, 45)
	},
		{
		cg: 8,
		aW: '🇦🇽',
		bc: _List_fromArray(
			['flag aland islands', 'Åland', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ax',
		df: _Utils_Tuple2(0, 46)
	},
		{
		cg: 8,
		aW: '🇦🇿',
		bc: _List_fromArray(
			['flag azerbaijan', 'az', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-az',
		df: _Utils_Tuple2(0, 47)
	},
		{
		cg: 8,
		aW: '🇧🇦',
		bc: _List_fromArray(
			['flag bosnia herzegovina', 'bosnia', 'herzegovina', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ba',
		df: _Utils_Tuple2(0, 48)
	},
		{
		cg: 8,
		aW: '🇧🇧',
		bc: _List_fromArray(
			['flag barbados', 'bb', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bb',
		df: _Utils_Tuple2(0, 49)
	},
		{
		cg: 8,
		aW: '🇧🇩',
		bc: _List_fromArray(
			['flag bangladesh', 'bd', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bd',
		df: _Utils_Tuple2(0, 50)
	},
		{
		cg: 8,
		aW: '🇧🇪',
		bc: _List_fromArray(
			['flag belgium', 'be', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-be',
		df: _Utils_Tuple2(0, 51)
	},
		{
		cg: 8,
		aW: '🇧🇫',
		bc: _List_fromArray(
			['flag burkina faso', 'burkina', 'faso', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bf',
		df: _Utils_Tuple2(0, 52)
	},
		{
		cg: 8,
		aW: '🇧🇬',
		bc: _List_fromArray(
			['flag bulgaria', 'bg', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bg',
		df: _Utils_Tuple2(0, 53)
	},
		{
		cg: 8,
		aW: '🇧🇭',
		bc: _List_fromArray(
			['flag bahrain', 'bh', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bh',
		df: _Utils_Tuple2(0, 54)
	},
		{
		cg: 8,
		aW: '🇧🇮',
		bc: _List_fromArray(
			['flag burundi', 'bi', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bi',
		df: _Utils_Tuple2(0, 55)
	},
		{
		cg: 8,
		aW: '🇧🇯',
		bc: _List_fromArray(
			['flag benin', 'bj', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bj',
		df: _Utils_Tuple2(0, 56)
	},
		{
		cg: 8,
		aW: '🇧🇱',
		bc: _List_fromArray(
			['flag st barthelemy', 'saint', 'barthélemy', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bl',
		df: _Utils_Tuple2(0, 57)
	},
		{
		cg: 8,
		aW: '🇧🇲',
		bc: _List_fromArray(
			['flag bermuda', 'bm', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bm',
		df: _Utils_Tuple2(1, 0)
	},
		{
		cg: 8,
		aW: '🇧🇳',
		bc: _List_fromArray(
			['flag brunei', 'bn', 'darussalam', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bn',
		df: _Utils_Tuple2(1, 1)
	},
		{
		cg: 8,
		aW: '🇧🇴',
		bc: _List_fromArray(
			['flag bolivia', 'bo', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bo',
		df: _Utils_Tuple2(1, 2)
	},
		{
		cg: 8,
		aW: '🇧🇶',
		bc: _List_fromArray(
			['flag caribbean netherlands', 'bonaire', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bq',
		df: _Utils_Tuple2(1, 3)
	},
		{
		cg: 8,
		aW: '🇧🇷',
		bc: _List_fromArray(
			['flag brazil', 'br', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-br',
		df: _Utils_Tuple2(1, 4)
	},
		{
		cg: 8,
		aW: '🇧🇸',
		bc: _List_fromArray(
			['flag bahamas', 'bs', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bs',
		df: _Utils_Tuple2(1, 5)
	},
		{
		cg: 8,
		aW: '🇧🇹',
		bc: _List_fromArray(
			['flag bhutan', 'bt', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bt',
		df: _Utils_Tuple2(1, 6)
	},
		{
		cg: 8,
		aW: '🇧🇻',
		bc: _List_fromArray(
			['flag bouvet island']),
		bg: 'flag-bv',
		df: _Utils_Tuple2(1, 7)
	},
		{
		cg: 8,
		aW: '🇧🇼',
		bc: _List_fromArray(
			['flag botswana', 'bw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bw',
		df: _Utils_Tuple2(1, 8)
	},
		{
		cg: 8,
		aW: '🇧🇾',
		bc: _List_fromArray(
			['flag belarus', 'by', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-by',
		df: _Utils_Tuple2(1, 9)
	},
		{
		cg: 8,
		aW: '🇧🇿',
		bc: _List_fromArray(
			['flag belize', 'bz', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-bz',
		df: _Utils_Tuple2(1, 10)
	},
		{
		cg: 8,
		aW: '🇨🇦',
		bc: _List_fromArray(
			['flag canada', 'ca', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ca',
		df: _Utils_Tuple2(1, 11)
	},
		{
		cg: 8,
		aW: '🇨🇨',
		bc: _List_fromArray(
			['flag cocos islands', 'cocos', 'keeling', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cc',
		df: _Utils_Tuple2(1, 12)
	},
		{
		cg: 8,
		aW: '🇨🇩',
		bc: _List_fromArray(
			['flag congo kinshasa', 'congo', 'democratic', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cd',
		df: _Utils_Tuple2(1, 13)
	},
		{
		cg: 8,
		aW: '🇨🇫',
		bc: _List_fromArray(
			['flag central african republic', 'central', 'african', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cf',
		df: _Utils_Tuple2(1, 14)
	},
		{
		cg: 8,
		aW: '🇨🇬',
		bc: _List_fromArray(
			['flag congo brazzaville', 'congo', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cg',
		df: _Utils_Tuple2(1, 15)
	},
		{
		cg: 8,
		aW: '🇨🇭',
		bc: _List_fromArray(
			['flag switzerland', 'ch', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ch',
		df: _Utils_Tuple2(1, 16)
	},
		{
		cg: 8,
		aW: '🇨🇮',
		bc: _List_fromArray(
			['flag cote d ivoire', 'ivory', 'coast', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ci',
		df: _Utils_Tuple2(1, 17)
	},
		{
		cg: 8,
		aW: '🇨🇰',
		bc: _List_fromArray(
			['flag cook islands', 'cook', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ck',
		df: _Utils_Tuple2(1, 18)
	},
		{
		cg: 8,
		aW: '🇨🇱',
		bc: _List_fromArray(
			['flag chile', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cl',
		df: _Utils_Tuple2(1, 19)
	},
		{
		cg: 8,
		aW: '🇨🇲',
		bc: _List_fromArray(
			['flag cameroon', 'cm', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cm',
		df: _Utils_Tuple2(1, 20)
	},
		{
		cg: 8,
		aW: '🇨🇳',
		bc: _List_fromArray(
			['flag china', 'china', 'chinese', 'prc', 'flag', 'country', 'nation', 'banner']),
		bg: 'cn',
		df: _Utils_Tuple2(1, 21)
	},
		{
		cg: 8,
		aW: '🇨🇴',
		bc: _List_fromArray(
			['flag colombia', 'co', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-co',
		df: _Utils_Tuple2(1, 22)
	},
		{
		cg: 8,
		aW: '🇨🇵',
		bc: _List_fromArray(
			['flag clipperton island']),
		bg: 'flag-cp',
		df: _Utils_Tuple2(1, 23)
	},
		{
		cg: 8,
		aW: '🇨🇷',
		bc: _List_fromArray(
			['flag costa rica', 'costa', 'rica', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cr',
		df: _Utils_Tuple2(1, 24)
	},
		{
		cg: 8,
		aW: '🇨🇺',
		bc: _List_fromArray(
			['flag cuba', 'cu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cu',
		df: _Utils_Tuple2(1, 25)
	},
		{
		cg: 8,
		aW: '🇨🇻',
		bc: _List_fromArray(
			['flag cape verde', 'cabo', 'verde', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cv',
		df: _Utils_Tuple2(1, 26)
	},
		{
		cg: 8,
		aW: '🇨🇼',
		bc: _List_fromArray(
			['flag curacao', 'curaçao', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cw',
		df: _Utils_Tuple2(1, 27)
	},
		{
		cg: 8,
		aW: '🇨🇽',
		bc: _List_fromArray(
			['flag christmas island', 'christmas', 'island', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cx',
		df: _Utils_Tuple2(1, 28)
	},
		{
		cg: 8,
		aW: '🇨🇾',
		bc: _List_fromArray(
			['flag cyprus', 'cy', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cy',
		df: _Utils_Tuple2(1, 29)
	},
		{
		cg: 8,
		aW: '🇨🇿',
		bc: _List_fromArray(
			['flag czechia', 'cz', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-cz',
		df: _Utils_Tuple2(1, 30)
	},
		{
		cg: 8,
		aW: '🇩🇪',
		bc: _List_fromArray(
			['flag germany', 'german', 'nation', 'flag', 'country', 'banner']),
		bg: 'de',
		df: _Utils_Tuple2(1, 31)
	},
		{
		cg: 8,
		aW: '🇩🇬',
		bc: _List_fromArray(
			['flag diego garcia']),
		bg: 'flag-dg',
		df: _Utils_Tuple2(1, 32)
	},
		{
		cg: 8,
		aW: '🇩🇯',
		bc: _List_fromArray(
			['flag djibouti', 'dj', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-dj',
		df: _Utils_Tuple2(1, 33)
	},
		{
		cg: 8,
		aW: '🇩🇰',
		bc: _List_fromArray(
			['flag denmark', 'dk', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-dk',
		df: _Utils_Tuple2(1, 34)
	},
		{
		cg: 8,
		aW: '🇩🇲',
		bc: _List_fromArray(
			['flag dominica', 'dm', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-dm',
		df: _Utils_Tuple2(1, 35)
	},
		{
		cg: 8,
		aW: '🇩🇴',
		bc: _List_fromArray(
			['flag dominican republic', 'dominican', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-do',
		df: _Utils_Tuple2(1, 36)
	},
		{
		cg: 8,
		aW: '🇩🇿',
		bc: _List_fromArray(
			['flag algeria', 'dz', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-dz',
		df: _Utils_Tuple2(1, 37)
	},
		{
		cg: 8,
		aW: '🇪🇦',
		bc: _List_fromArray(
			['flag ceuta melilla']),
		bg: 'flag-ea',
		df: _Utils_Tuple2(1, 38)
	},
		{
		cg: 8,
		aW: '🇪🇨',
		bc: _List_fromArray(
			['flag ecuador', 'ec', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ec',
		df: _Utils_Tuple2(1, 39)
	},
		{
		cg: 8,
		aW: '🇪🇪',
		bc: _List_fromArray(
			['flag estonia', 'ee', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ee',
		df: _Utils_Tuple2(1, 40)
	},
		{
		cg: 8,
		aW: '🇪🇬',
		bc: _List_fromArray(
			['flag egypt', 'eg', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-eg',
		df: _Utils_Tuple2(1, 41)
	},
		{
		cg: 8,
		aW: '🇪🇭',
		bc: _List_fromArray(
			['flag western sahara', 'western', 'sahara', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-eh',
		df: _Utils_Tuple2(1, 42)
	},
		{
		cg: 8,
		aW: '🇪🇷',
		bc: _List_fromArray(
			['flag eritrea', 'er', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-er',
		df: _Utils_Tuple2(1, 43)
	},
		{
		cg: 8,
		aW: '🇪🇸',
		bc: _List_fromArray(
			['flag spain', 'spain', 'flag', 'nation', 'country', 'banner']),
		bg: 'es',
		df: _Utils_Tuple2(1, 44)
	},
		{
		cg: 8,
		aW: '🇪🇹',
		bc: _List_fromArray(
			['flag ethiopia', 'et', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-et',
		df: _Utils_Tuple2(1, 45)
	},
		{
		cg: 8,
		aW: '🇪🇺',
		bc: _List_fromArray(
			['flag european union', 'european', 'union', 'flag', 'banner']),
		bg: 'flag-eu',
		df: _Utils_Tuple2(1, 46)
	},
		{
		cg: 8,
		aW: '🇫🇮',
		bc: _List_fromArray(
			['flag finland', 'fi', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-fi',
		df: _Utils_Tuple2(1, 47)
	},
		{
		cg: 8,
		aW: '🇫🇯',
		bc: _List_fromArray(
			['flag fiji', 'fj', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-fj',
		df: _Utils_Tuple2(1, 48)
	},
		{
		cg: 8,
		aW: '🇫🇰',
		bc: _List_fromArray(
			['flag falkland islands', 'falkland', 'islands', 'malvinas', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-fk',
		df: _Utils_Tuple2(1, 49)
	},
		{
		cg: 8,
		aW: '🇫🇲',
		bc: _List_fromArray(
			['flag micronesia', 'micronesia,', 'federated', 'states', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-fm',
		df: _Utils_Tuple2(1, 50)
	},
		{
		cg: 8,
		aW: '🇫🇴',
		bc: _List_fromArray(
			['flag faroe islands', 'faroe', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-fo',
		df: _Utils_Tuple2(1, 51)
	},
		{
		cg: 8,
		aW: '🇫🇷',
		bc: _List_fromArray(
			['flag france', 'banner', 'flag', 'nation', 'france', 'french', 'country']),
		bg: 'fr',
		df: _Utils_Tuple2(1, 52)
	},
		{
		cg: 8,
		aW: '🇬🇦',
		bc: _List_fromArray(
			['flag gabon', 'ga', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ga',
		df: _Utils_Tuple2(1, 53)
	},
		{
		cg: 8,
		aW: '🇬🇧',
		bc: _List_fromArray(
			['flag united kingdom', 'united', 'kingdom', 'great', 'britain', 'northern', 'ireland', 'flag', 'nation', 'country', 'banner', 'british', 'UK', 'english', 'england', 'union jack']),
		bg: 'gb',
		df: _Utils_Tuple2(1, 54)
	},
		{
		cg: 8,
		aW: '🇬🇩',
		bc: _List_fromArray(
			['flag grenada', 'gd', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gd',
		df: _Utils_Tuple2(1, 55)
	},
		{
		cg: 8,
		aW: '🇬🇪',
		bc: _List_fromArray(
			['flag georgia', 'ge', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ge',
		df: _Utils_Tuple2(1, 56)
	},
		{
		cg: 8,
		aW: '🇬🇫',
		bc: _List_fromArray(
			['flag french guiana', 'french', 'guiana', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gf',
		df: _Utils_Tuple2(1, 57)
	},
		{
		cg: 8,
		aW: '🇬🇬',
		bc: _List_fromArray(
			['flag guernsey', 'gg', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gg',
		df: _Utils_Tuple2(2, 0)
	},
		{
		cg: 8,
		aW: '🇬🇭',
		bc: _List_fromArray(
			['flag ghana', 'gh', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gh',
		df: _Utils_Tuple2(2, 1)
	},
		{
		cg: 8,
		aW: '🇬🇮',
		bc: _List_fromArray(
			['flag gibraltar', 'gi', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gi',
		df: _Utils_Tuple2(2, 2)
	},
		{
		cg: 8,
		aW: '🇬🇱',
		bc: _List_fromArray(
			['flag greenland', 'gl', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gl',
		df: _Utils_Tuple2(2, 3)
	},
		{
		cg: 8,
		aW: '🇬🇲',
		bc: _List_fromArray(
			['flag gambia', 'gm', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gm',
		df: _Utils_Tuple2(2, 4)
	},
		{
		cg: 8,
		aW: '🇬🇳',
		bc: _List_fromArray(
			['flag guinea', 'gn', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gn',
		df: _Utils_Tuple2(2, 5)
	},
		{
		cg: 8,
		aW: '🇬🇵',
		bc: _List_fromArray(
			['flag guadeloupe', 'gp', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gp',
		df: _Utils_Tuple2(2, 6)
	},
		{
		cg: 8,
		aW: '🇬🇶',
		bc: _List_fromArray(
			['flag equatorial guinea', 'equatorial', 'gn', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gq',
		df: _Utils_Tuple2(2, 7)
	},
		{
		cg: 8,
		aW: '🇬🇷',
		bc: _List_fromArray(
			['flag greece', 'gr', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gr',
		df: _Utils_Tuple2(2, 8)
	},
		{
		cg: 8,
		aW: '🇬🇸',
		bc: _List_fromArray(
			['flag south georgia south sandwich islands', 'south', 'georgia', 'sandwich', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gs',
		df: _Utils_Tuple2(2, 9)
	},
		{
		cg: 8,
		aW: '🇬🇹',
		bc: _List_fromArray(
			['flag guatemala', 'gt', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gt',
		df: _Utils_Tuple2(2, 10)
	},
		{
		cg: 8,
		aW: '🇬🇺',
		bc: _List_fromArray(
			['flag guam', 'gu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gu',
		df: _Utils_Tuple2(2, 11)
	},
		{
		cg: 8,
		aW: '🇬🇼',
		bc: _List_fromArray(
			['flag guinea bissau', 'gw', 'bissau', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gw',
		df: _Utils_Tuple2(2, 12)
	},
		{
		cg: 8,
		aW: '🇬🇾',
		bc: _List_fromArray(
			['flag guyana', 'gy', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-gy',
		df: _Utils_Tuple2(2, 13)
	},
		{
		cg: 8,
		aW: '🇭🇰',
		bc: _List_fromArray(
			['flag hong kong sar china', 'hong', 'kong', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-hk',
		df: _Utils_Tuple2(2, 14)
	},
		{
		cg: 8,
		aW: '🇭🇲',
		bc: _List_fromArray(
			['flag heard mcdonald islands']),
		bg: 'flag-hm',
		df: _Utils_Tuple2(2, 15)
	},
		{
		cg: 8,
		aW: '🇭🇳',
		bc: _List_fromArray(
			['flag honduras', 'hn', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-hn',
		df: _Utils_Tuple2(2, 16)
	},
		{
		cg: 8,
		aW: '🇭🇷',
		bc: _List_fromArray(
			['flag croatia', 'hr', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-hr',
		df: _Utils_Tuple2(2, 17)
	},
		{
		cg: 8,
		aW: '🇭🇹',
		bc: _List_fromArray(
			['flag haiti', 'ht', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ht',
		df: _Utils_Tuple2(2, 18)
	},
		{
		cg: 8,
		aW: '🇭🇺',
		bc: _List_fromArray(
			['flag hungary', 'hu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-hu',
		df: _Utils_Tuple2(2, 19)
	},
		{
		cg: 8,
		aW: '🇮🇨',
		bc: _List_fromArray(
			['flag canary islands', 'canary', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ic',
		df: _Utils_Tuple2(2, 20)
	},
		{
		cg: 8,
		aW: '🇮🇩',
		bc: _List_fromArray(
			['flag indonesia', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-id',
		df: _Utils_Tuple2(2, 21)
	},
		{
		cg: 8,
		aW: '🇮🇪',
		bc: _List_fromArray(
			['flag ireland', 'ie', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ie',
		df: _Utils_Tuple2(2, 22)
	},
		{
		cg: 8,
		aW: '🇮🇱',
		bc: _List_fromArray(
			['flag israel', 'il', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-il',
		df: _Utils_Tuple2(2, 23)
	},
		{
		cg: 8,
		aW: '🇮🇲',
		bc: _List_fromArray(
			['flag isle of man', 'isle', 'man', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-im',
		df: _Utils_Tuple2(2, 24)
	},
		{
		cg: 8,
		aW: '🇮🇳',
		bc: _List_fromArray(
			['flag india', 'in', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-in',
		df: _Utils_Tuple2(2, 25)
	},
		{
		cg: 8,
		aW: '🇮🇴',
		bc: _List_fromArray(
			['flag british indian ocean territory', 'british', 'indian', 'ocean', 'territory', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-io',
		df: _Utils_Tuple2(2, 26)
	},
		{
		cg: 8,
		aW: '🇮🇶',
		bc: _List_fromArray(
			['flag iraq', 'iq', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-iq',
		df: _Utils_Tuple2(2, 27)
	},
		{
		cg: 8,
		aW: '🇮🇷',
		bc: _List_fromArray(
			['flag iran', 'iran,', 'islamic', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ir',
		df: _Utils_Tuple2(2, 28)
	},
		{
		cg: 8,
		aW: '🇮🇸',
		bc: _List_fromArray(
			['flag iceland', 'is', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-is',
		df: _Utils_Tuple2(2, 29)
	},
		{
		cg: 8,
		aW: '🇮🇹',
		bc: _List_fromArray(
			['flag italy', 'italy', 'flag', 'nation', 'country', 'banner']),
		bg: 'it',
		df: _Utils_Tuple2(2, 30)
	},
		{
		cg: 8,
		aW: '🇯🇪',
		bc: _List_fromArray(
			['flag jersey', 'je', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-je',
		df: _Utils_Tuple2(2, 31)
	},
		{
		cg: 8,
		aW: '🇯🇲',
		bc: _List_fromArray(
			['flag jamaica', 'jm', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-jm',
		df: _Utils_Tuple2(2, 32)
	},
		{
		cg: 8,
		aW: '🇯🇴',
		bc: _List_fromArray(
			['flag jordan', 'jo', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-jo',
		df: _Utils_Tuple2(2, 33)
	},
		{
		cg: 8,
		aW: '🇯🇵',
		bc: _List_fromArray(
			['flag japan', 'japanese', 'nation', 'flag', 'country', 'banner']),
		bg: 'jp',
		df: _Utils_Tuple2(2, 34)
	},
		{
		cg: 8,
		aW: '🇰🇪',
		bc: _List_fromArray(
			['flag kenya', 'ke', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ke',
		df: _Utils_Tuple2(2, 35)
	},
		{
		cg: 8,
		aW: '🇰🇬',
		bc: _List_fromArray(
			['flag kyrgyzstan', 'kg', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-kg',
		df: _Utils_Tuple2(2, 36)
	},
		{
		cg: 8,
		aW: '🇰🇭',
		bc: _List_fromArray(
			['flag cambodia', 'kh', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-kh',
		df: _Utils_Tuple2(2, 37)
	},
		{
		cg: 8,
		aW: '🇰🇮',
		bc: _List_fromArray(
			['flag kiribati', 'ki', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ki',
		df: _Utils_Tuple2(2, 38)
	},
		{
		cg: 8,
		aW: '🇰🇲',
		bc: _List_fromArray(
			['flag comoros', 'km', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-km',
		df: _Utils_Tuple2(2, 39)
	},
		{
		cg: 8,
		aW: '🇰🇳',
		bc: _List_fromArray(
			['flag st kitts nevis', 'saint', 'kitts', 'nevis', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-kn',
		df: _Utils_Tuple2(2, 40)
	},
		{
		cg: 8,
		aW: '🇰🇵',
		bc: _List_fromArray(
			['flag north korea', 'north', 'korea', 'nation', 'flag', 'country', 'banner']),
		bg: 'flag-kp',
		df: _Utils_Tuple2(2, 41)
	},
		{
		cg: 8,
		aW: '🇰🇷',
		bc: _List_fromArray(
			['flag south korea', 'south', 'korea', 'nation', 'flag', 'country', 'banner']),
		bg: 'kr',
		df: _Utils_Tuple2(2, 42)
	},
		{
		cg: 8,
		aW: '🇰🇼',
		bc: _List_fromArray(
			['flag kuwait', 'kw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-kw',
		df: _Utils_Tuple2(2, 43)
	},
		{
		cg: 8,
		aW: '🇰🇾',
		bc: _List_fromArray(
			['flag cayman islands', 'cayman', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ky',
		df: _Utils_Tuple2(2, 44)
	},
		{
		cg: 8,
		aW: '🇰🇿',
		bc: _List_fromArray(
			['flag kazakhstan', 'kz', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-kz',
		df: _Utils_Tuple2(2, 45)
	},
		{
		cg: 8,
		aW: '🇱🇦',
		bc: _List_fromArray(
			['flag laos', 'lao', 'democratic', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-la',
		df: _Utils_Tuple2(2, 46)
	},
		{
		cg: 8,
		aW: '🇱🇧',
		bc: _List_fromArray(
			['flag lebanon', 'lb', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-lb',
		df: _Utils_Tuple2(2, 47)
	},
		{
		cg: 8,
		aW: '🇱🇨',
		bc: _List_fromArray(
			['flag st lucia', 'saint', 'lucia', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-lc',
		df: _Utils_Tuple2(2, 48)
	},
		{
		cg: 8,
		aW: '🇱🇮',
		bc: _List_fromArray(
			['flag liechtenstein', 'li', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-li',
		df: _Utils_Tuple2(2, 49)
	},
		{
		cg: 8,
		aW: '🇱🇰',
		bc: _List_fromArray(
			['flag sri lanka', 'sri', 'lanka', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-lk',
		df: _Utils_Tuple2(2, 50)
	},
		{
		cg: 8,
		aW: '🇱🇷',
		bc: _List_fromArray(
			['flag liberia', 'lr', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-lr',
		df: _Utils_Tuple2(2, 51)
	},
		{
		cg: 8,
		aW: '🇱🇸',
		bc: _List_fromArray(
			['flag lesotho', 'ls', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ls',
		df: _Utils_Tuple2(2, 52)
	},
		{
		cg: 8,
		aW: '🇱🇹',
		bc: _List_fromArray(
			['flag lithuania', 'lt', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-lt',
		df: _Utils_Tuple2(2, 53)
	},
		{
		cg: 8,
		aW: '🇱🇺',
		bc: _List_fromArray(
			['flag luxembourg', 'lu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-lu',
		df: _Utils_Tuple2(2, 54)
	},
		{
		cg: 8,
		aW: '🇱🇻',
		bc: _List_fromArray(
			['flag latvia', 'lv', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-lv',
		df: _Utils_Tuple2(2, 55)
	},
		{
		cg: 8,
		aW: '🇱🇾',
		bc: _List_fromArray(
			['flag libya', 'ly', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ly',
		df: _Utils_Tuple2(2, 56)
	},
		{
		cg: 8,
		aW: '🇲🇦',
		bc: _List_fromArray(
			['flag morocco', 'ma', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ma',
		df: _Utils_Tuple2(2, 57)
	},
		{
		cg: 8,
		aW: '🇲🇨',
		bc: _List_fromArray(
			['flag monaco', 'mc', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mc',
		df: _Utils_Tuple2(3, 0)
	},
		{
		cg: 8,
		aW: '🇲🇩',
		bc: _List_fromArray(
			['flag moldova', 'moldova,', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-md',
		df: _Utils_Tuple2(3, 1)
	},
		{
		cg: 8,
		aW: '🇲🇪',
		bc: _List_fromArray(
			['flag montenegro', 'me', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-me',
		df: _Utils_Tuple2(3, 2)
	},
		{
		cg: 8,
		aW: '🇲🇫',
		bc: _List_fromArray(
			['flag st martin']),
		bg: 'flag-mf',
		df: _Utils_Tuple2(3, 3)
	},
		{
		cg: 8,
		aW: '🇲🇬',
		bc: _List_fromArray(
			['flag madagascar', 'mg', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mg',
		df: _Utils_Tuple2(3, 4)
	},
		{
		cg: 8,
		aW: '🇲🇭',
		bc: _List_fromArray(
			['flag marshall islands', 'marshall', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mh',
		df: _Utils_Tuple2(3, 5)
	},
		{
		cg: 8,
		aW: '🇲🇰',
		bc: _List_fromArray(
			['flag north macedonia', 'macedonia,', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mk',
		df: _Utils_Tuple2(3, 6)
	},
		{
		cg: 8,
		aW: '🇲🇱',
		bc: _List_fromArray(
			['flag mali', 'ml', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ml',
		df: _Utils_Tuple2(3, 7)
	},
		{
		cg: 8,
		aW: '🇲🇲',
		bc: _List_fromArray(
			['flag myanmar', 'mm', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mm',
		df: _Utils_Tuple2(3, 8)
	},
		{
		cg: 8,
		aW: '🇲🇳',
		bc: _List_fromArray(
			['flag mongolia', 'mn', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mn',
		df: _Utils_Tuple2(3, 9)
	},
		{
		cg: 8,
		aW: '🇲🇴',
		bc: _List_fromArray(
			['flag macao sar china', 'macao', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mo',
		df: _Utils_Tuple2(3, 10)
	},
		{
		cg: 8,
		aW: '🇲🇵',
		bc: _List_fromArray(
			['flag northern mariana islands', 'northern', 'mariana', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mp',
		df: _Utils_Tuple2(3, 11)
	},
		{
		cg: 8,
		aW: '🇲🇶',
		bc: _List_fromArray(
			['flag martinique', 'mq', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mq',
		df: _Utils_Tuple2(3, 12)
	},
		{
		cg: 8,
		aW: '🇲🇷',
		bc: _List_fromArray(
			['flag mauritania', 'mr', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mr',
		df: _Utils_Tuple2(3, 13)
	},
		{
		cg: 8,
		aW: '🇲🇸',
		bc: _List_fromArray(
			['flag montserrat', 'ms', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ms',
		df: _Utils_Tuple2(3, 14)
	},
		{
		cg: 8,
		aW: '🇲🇹',
		bc: _List_fromArray(
			['flag malta', 'mt', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mt',
		df: _Utils_Tuple2(3, 15)
	},
		{
		cg: 8,
		aW: '🇲🇺',
		bc: _List_fromArray(
			['flag mauritius', 'mu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mu',
		df: _Utils_Tuple2(3, 16)
	},
		{
		cg: 8,
		aW: '🇲🇻',
		bc: _List_fromArray(
			['flag maldives', 'mv', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mv',
		df: _Utils_Tuple2(3, 17)
	},
		{
		cg: 8,
		aW: '🇲🇼',
		bc: _List_fromArray(
			['flag malawi', 'mw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mw',
		df: _Utils_Tuple2(3, 18)
	},
		{
		cg: 8,
		aW: '🇲🇽',
		bc: _List_fromArray(
			['flag mexico', 'mx', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mx',
		df: _Utils_Tuple2(3, 19)
	},
		{
		cg: 8,
		aW: '🇲🇾',
		bc: _List_fromArray(
			['flag malaysia', 'my', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-my',
		df: _Utils_Tuple2(3, 20)
	},
		{
		cg: 8,
		aW: '🇲🇿',
		bc: _List_fromArray(
			['flag mozambique', 'mz', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-mz',
		df: _Utils_Tuple2(3, 21)
	},
		{
		cg: 8,
		aW: '🇳🇦',
		bc: _List_fromArray(
			['flag namibia', 'na', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-na',
		df: _Utils_Tuple2(3, 22)
	},
		{
		cg: 8,
		aW: '🇳🇨',
		bc: _List_fromArray(
			['flag new caledonia', 'new', 'caledonia', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-nc',
		df: _Utils_Tuple2(3, 23)
	},
		{
		cg: 8,
		aW: '🇳🇪',
		bc: _List_fromArray(
			['flag niger', 'ne', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ne',
		df: _Utils_Tuple2(3, 24)
	},
		{
		cg: 8,
		aW: '🇳🇫',
		bc: _List_fromArray(
			['flag norfolk island', 'norfolk', 'island', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-nf',
		df: _Utils_Tuple2(3, 25)
	},
		{
		cg: 8,
		aW: '🇳🇬',
		bc: _List_fromArray(
			['flag nigeria', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ng',
		df: _Utils_Tuple2(3, 26)
	},
		{
		cg: 8,
		aW: '🇳🇮',
		bc: _List_fromArray(
			['flag nicaragua', 'ni', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ni',
		df: _Utils_Tuple2(3, 27)
	},
		{
		cg: 8,
		aW: '🇳🇱',
		bc: _List_fromArray(
			['flag netherlands', 'nl', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-nl',
		df: _Utils_Tuple2(3, 28)
	},
		{
		cg: 8,
		aW: '🇳🇴',
		bc: _List_fromArray(
			['flag norway', 'no', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-no',
		df: _Utils_Tuple2(3, 29)
	},
		{
		cg: 8,
		aW: '🇳🇵',
		bc: _List_fromArray(
			['flag nepal', 'np', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-np',
		df: _Utils_Tuple2(3, 30)
	},
		{
		cg: 8,
		aW: '🇳🇷',
		bc: _List_fromArray(
			['flag nauru', 'nr', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-nr',
		df: _Utils_Tuple2(3, 31)
	},
		{
		cg: 8,
		aW: '🇳🇺',
		bc: _List_fromArray(
			['flag niue', 'nu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-nu',
		df: _Utils_Tuple2(3, 32)
	},
		{
		cg: 8,
		aW: '🇳🇿',
		bc: _List_fromArray(
			['flag new zealand', 'new', 'zealand', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-nz',
		df: _Utils_Tuple2(3, 33)
	},
		{
		cg: 8,
		aW: '🇴🇲',
		bc: _List_fromArray(
			['flag oman', 'om symbol', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-om',
		df: _Utils_Tuple2(3, 34)
	},
		{
		cg: 8,
		aW: '🇵🇦',
		bc: _List_fromArray(
			['flag panama', 'pa', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pa',
		df: _Utils_Tuple2(3, 35)
	},
		{
		cg: 8,
		aW: '🇵🇪',
		bc: _List_fromArray(
			['flag peru', 'pe', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pe',
		df: _Utils_Tuple2(3, 36)
	},
		{
		cg: 8,
		aW: '🇵🇫',
		bc: _List_fromArray(
			['flag french polynesia', 'french', 'polynesia', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pf',
		df: _Utils_Tuple2(3, 37)
	},
		{
		cg: 8,
		aW: '🇵🇬',
		bc: _List_fromArray(
			['flag papua new guinea', 'papua', 'new', 'guinea', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pg',
		df: _Utils_Tuple2(3, 38)
	},
		{
		cg: 8,
		aW: '🇵🇭',
		bc: _List_fromArray(
			['flag philippines', 'ph', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ph',
		df: _Utils_Tuple2(3, 39)
	},
		{
		cg: 8,
		aW: '🇵🇰',
		bc: _List_fromArray(
			['flag pakistan', 'pk', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pk',
		df: _Utils_Tuple2(3, 40)
	},
		{
		cg: 8,
		aW: '🇵🇱',
		bc: _List_fromArray(
			['flag poland', 'pl', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pl',
		df: _Utils_Tuple2(3, 41)
	},
		{
		cg: 8,
		aW: '🇵🇲',
		bc: _List_fromArray(
			['flag st pierre miquelon', 'saint', 'pierre', 'miquelon', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pm',
		df: _Utils_Tuple2(3, 42)
	},
		{
		cg: 8,
		aW: '🇵🇳',
		bc: _List_fromArray(
			['flag pitcairn islands', 'pitcairn', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pn',
		df: _Utils_Tuple2(3, 43)
	},
		{
		cg: 8,
		aW: '🇵🇷',
		bc: _List_fromArray(
			['flag puerto rico', 'puerto', 'rico', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pr',
		df: _Utils_Tuple2(3, 44)
	},
		{
		cg: 8,
		aW: '🇵🇸',
		bc: _List_fromArray(
			['flag palestinian territories', 'palestine', 'palestinian', 'territories', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ps',
		df: _Utils_Tuple2(3, 45)
	},
		{
		cg: 8,
		aW: '🇵🇹',
		bc: _List_fromArray(
			['flag portugal', 'pt', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pt',
		df: _Utils_Tuple2(3, 46)
	},
		{
		cg: 8,
		aW: '🇵🇼',
		bc: _List_fromArray(
			['flag palau', 'pw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-pw',
		df: _Utils_Tuple2(3, 47)
	},
		{
		cg: 8,
		aW: '🇵🇾',
		bc: _List_fromArray(
			['flag paraguay', 'py', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-py',
		df: _Utils_Tuple2(3, 48)
	},
		{
		cg: 8,
		aW: '🇶🇦',
		bc: _List_fromArray(
			['flag qatar', 'qa', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-qa',
		df: _Utils_Tuple2(3, 49)
	},
		{
		cg: 8,
		aW: '🇷🇪',
		bc: _List_fromArray(
			['flag reunion', 'réunion', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-re',
		df: _Utils_Tuple2(3, 50)
	},
		{
		cg: 8,
		aW: '🇷🇴',
		bc: _List_fromArray(
			['flag romania', 'ro', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ro',
		df: _Utils_Tuple2(3, 51)
	},
		{
		cg: 8,
		aW: '🇷🇸',
		bc: _List_fromArray(
			['flag serbia', 'rs', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-rs',
		df: _Utils_Tuple2(3, 52)
	},
		{
		cg: 8,
		aW: '🇷🇺',
		bc: _List_fromArray(
			['flag russia', 'russian', 'federation', 'flag', 'nation', 'country', 'banner']),
		bg: 'ru',
		df: _Utils_Tuple2(3, 53)
	},
		{
		cg: 8,
		aW: '🇷🇼',
		bc: _List_fromArray(
			['flag rwanda', 'rw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-rw',
		df: _Utils_Tuple2(3, 54)
	},
		{
		cg: 8,
		aW: '🇸🇦',
		bc: _List_fromArray(
			['flag saudi arabia', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sa',
		df: _Utils_Tuple2(3, 55)
	},
		{
		cg: 8,
		aW: '🇸🇧',
		bc: _List_fromArray(
			['flag solomon islands', 'solomon', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sb',
		df: _Utils_Tuple2(3, 56)
	},
		{
		cg: 8,
		aW: '🇸🇨',
		bc: _List_fromArray(
			['flag seychelles', 'sc', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sc',
		df: _Utils_Tuple2(3, 57)
	},
		{
		cg: 8,
		aW: '🇸🇩',
		bc: _List_fromArray(
			['flag sudan', 'sd', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sd',
		df: _Utils_Tuple2(4, 0)
	},
		{
		cg: 8,
		aW: '🇸🇪',
		bc: _List_fromArray(
			['flag sweden', 'se', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-se',
		df: _Utils_Tuple2(4, 1)
	},
		{
		cg: 8,
		aW: '🇸🇬',
		bc: _List_fromArray(
			['flag singapore', 'sg', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sg',
		df: _Utils_Tuple2(4, 2)
	},
		{
		cg: 8,
		aW: '🇸🇭',
		bc: _List_fromArray(
			['flag st helena', 'saint', 'helena', 'ascension', 'tristan', 'cunha', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sh',
		df: _Utils_Tuple2(4, 3)
	},
		{
		cg: 8,
		aW: '🇸🇮',
		bc: _List_fromArray(
			['flag slovenia', 'si', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-si',
		df: _Utils_Tuple2(4, 4)
	},
		{
		cg: 8,
		aW: '🇸🇯',
		bc: _List_fromArray(
			['flag svalbard jan mayen']),
		bg: 'flag-sj',
		df: _Utils_Tuple2(4, 5)
	},
		{
		cg: 8,
		aW: '🇸🇰',
		bc: _List_fromArray(
			['flag slovakia', 'sk', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sk',
		df: _Utils_Tuple2(4, 6)
	},
		{
		cg: 8,
		aW: '🇸🇱',
		bc: _List_fromArray(
			['flag sierra leone', 'sierra', 'leone', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sl',
		df: _Utils_Tuple2(4, 7)
	},
		{
		cg: 8,
		aW: '🇸🇲',
		bc: _List_fromArray(
			['flag san marino', 'san', 'marino', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sm',
		df: _Utils_Tuple2(4, 8)
	},
		{
		cg: 8,
		aW: '🇸🇳',
		bc: _List_fromArray(
			['flag senegal', 'sn', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sn',
		df: _Utils_Tuple2(4, 9)
	},
		{
		cg: 8,
		aW: '🇸🇴',
		bc: _List_fromArray(
			['flag somalia', 'so', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-so',
		df: _Utils_Tuple2(4, 10)
	},
		{
		cg: 8,
		aW: '🇸🇷',
		bc: _List_fromArray(
			['flag suriname', 'sr', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sr',
		df: _Utils_Tuple2(4, 11)
	},
		{
		cg: 8,
		aW: '🇸🇸',
		bc: _List_fromArray(
			['flag south sudan', 'south', 'sd', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ss',
		df: _Utils_Tuple2(4, 12)
	},
		{
		cg: 8,
		aW: '🇸🇹',
		bc: _List_fromArray(
			['flag sao tome principe', 'sao', 'tome', 'principe', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-st',
		df: _Utils_Tuple2(4, 13)
	},
		{
		cg: 8,
		aW: '🇸🇻',
		bc: _List_fromArray(
			['flag el salvador', 'el', 'salvador', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sv',
		df: _Utils_Tuple2(4, 14)
	},
		{
		cg: 8,
		aW: '🇸🇽',
		bc: _List_fromArray(
			['flag sint maarten', 'sint', 'maarten', 'dutch', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sx',
		df: _Utils_Tuple2(4, 15)
	},
		{
		cg: 8,
		aW: '🇸🇾',
		bc: _List_fromArray(
			['flag syria', 'syrian', 'arab', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sy',
		df: _Utils_Tuple2(4, 16)
	},
		{
		cg: 8,
		aW: '🇸🇿',
		bc: _List_fromArray(
			['flag eswatini', 'sz', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-sz',
		df: _Utils_Tuple2(4, 17)
	},
		{
		cg: 8,
		aW: '🇹🇦',
		bc: _List_fromArray(
			['flag tristan da cunha']),
		bg: 'flag-ta',
		df: _Utils_Tuple2(4, 18)
	},
		{
		cg: 8,
		aW: '🇹🇨',
		bc: _List_fromArray(
			['flag turks caicos islands', 'turks', 'caicos', 'islands', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tc',
		df: _Utils_Tuple2(4, 19)
	},
		{
		cg: 8,
		aW: '🇹🇩',
		bc: _List_fromArray(
			['flag chad', 'td', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-td',
		df: _Utils_Tuple2(4, 20)
	},
		{
		cg: 8,
		aW: '🇹🇫',
		bc: _List_fromArray(
			['flag french southern territories', 'french', 'southern', 'territories', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tf',
		df: _Utils_Tuple2(4, 21)
	},
		{
		cg: 8,
		aW: '🇹🇬',
		bc: _List_fromArray(
			['flag togo', 'tg', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tg',
		df: _Utils_Tuple2(4, 22)
	},
		{
		cg: 8,
		aW: '🇹🇭',
		bc: _List_fromArray(
			['flag thailand', 'th', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-th',
		df: _Utils_Tuple2(4, 23)
	},
		{
		cg: 8,
		aW: '🇹🇯',
		bc: _List_fromArray(
			['flag tajikistan', 'tj', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tj',
		df: _Utils_Tuple2(4, 24)
	},
		{
		cg: 8,
		aW: '🇹🇰',
		bc: _List_fromArray(
			['flag tokelau', 'tk', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tk',
		df: _Utils_Tuple2(4, 25)
	},
		{
		cg: 8,
		aW: '🇹🇱',
		bc: _List_fromArray(
			['flag timor leste', 'timor', 'leste', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tl',
		df: _Utils_Tuple2(4, 26)
	},
		{
		cg: 8,
		aW: '🇹🇲',
		bc: _List_fromArray(
			['flag turkmenistan', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tm',
		df: _Utils_Tuple2(4, 27)
	},
		{
		cg: 8,
		aW: '🇹🇳',
		bc: _List_fromArray(
			['flag tunisia', 'tn', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tn',
		df: _Utils_Tuple2(4, 28)
	},
		{
		cg: 8,
		aW: '🇹🇴',
		bc: _List_fromArray(
			['flag tonga', 'to', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-to',
		df: _Utils_Tuple2(4, 29)
	},
		{
		cg: 8,
		aW: '🇹🇷',
		bc: _List_fromArray(
			['flag turkey', 'turkey', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tr',
		df: _Utils_Tuple2(4, 30)
	},
		{
		cg: 8,
		aW: '🇹🇹',
		bc: _List_fromArray(
			['flag trinidad tobago', 'trinidad', 'tobago', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tt',
		df: _Utils_Tuple2(4, 31)
	},
		{
		cg: 8,
		aW: '🇹🇻',
		bc: _List_fromArray(
			['flag tuvalu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tv',
		df: _Utils_Tuple2(4, 32)
	},
		{
		cg: 8,
		aW: '🇹🇼',
		bc: _List_fromArray(
			['flag taiwan', 'tw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tw',
		df: _Utils_Tuple2(4, 33)
	},
		{
		cg: 8,
		aW: '🇹🇿',
		bc: _List_fromArray(
			['flag tanzania', 'tanzania,', 'united', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-tz',
		df: _Utils_Tuple2(4, 34)
	},
		{
		cg: 8,
		aW: '🇺🇦',
		bc: _List_fromArray(
			['flag ukraine', 'ua', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ua',
		df: _Utils_Tuple2(4, 35)
	},
		{
		cg: 8,
		aW: '🇺🇬',
		bc: _List_fromArray(
			['flag uganda', 'ug', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ug',
		df: _Utils_Tuple2(4, 36)
	},
		{
		cg: 8,
		aW: '🇺🇲',
		bc: _List_fromArray(
			['flag u s outlying islands']),
		bg: 'flag-um',
		df: _Utils_Tuple2(4, 37)
	},
		{
		cg: 8,
		aW: '🇺🇳',
		bc: _List_fromArray(
			['flag united nations', 'un', 'flag', 'banner']),
		bg: 'flag-un',
		df: _Utils_Tuple2(4, 38)
	},
		{
		cg: 8,
		aW: '🇺🇸',
		bc: _List_fromArray(
			['flag united states', 'united', 'states', 'america', 'flag', 'nation', 'country', 'banner']),
		bg: 'us',
		df: _Utils_Tuple2(4, 39)
	},
		{
		cg: 8,
		aW: '🇺🇾',
		bc: _List_fromArray(
			['flag uruguay', 'uy', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-uy',
		df: _Utils_Tuple2(4, 40)
	},
		{
		cg: 8,
		aW: '🇺🇿',
		bc: _List_fromArray(
			['flag uzbekistan', 'uz', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-uz',
		df: _Utils_Tuple2(4, 41)
	},
		{
		cg: 8,
		aW: '🇻🇦',
		bc: _List_fromArray(
			['flag vatican city', 'vatican', 'city', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-va',
		df: _Utils_Tuple2(4, 42)
	},
		{
		cg: 8,
		aW: '🇻🇨',
		bc: _List_fromArray(
			['flag st vincent grenadines', 'saint', 'vincent', 'grenadines', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-vc',
		df: _Utils_Tuple2(4, 43)
	},
		{
		cg: 8,
		aW: '🇻🇪',
		bc: _List_fromArray(
			['flag venezuela', 've', 'bolivarian', 'republic', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ve',
		df: _Utils_Tuple2(4, 44)
	},
		{
		cg: 8,
		aW: '🇻🇬',
		bc: _List_fromArray(
			['flag british virgin islands', 'british', 'virgin', 'islands', 'bvi', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-vg',
		df: _Utils_Tuple2(4, 45)
	},
		{
		cg: 8,
		aW: '🇻🇮',
		bc: _List_fromArray(
			['flag u s virgin islands', 'virgin', 'islands', 'us', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-vi',
		df: _Utils_Tuple2(4, 46)
	},
		{
		cg: 8,
		aW: '🇻🇳',
		bc: _List_fromArray(
			['flag vietnam', 'viet', 'nam', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-vn',
		df: _Utils_Tuple2(4, 47)
	},
		{
		cg: 8,
		aW: '🇻🇺',
		bc: _List_fromArray(
			['flag vanuatu', 'vu', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-vu',
		df: _Utils_Tuple2(4, 48)
	},
		{
		cg: 8,
		aW: '🇼🇫',
		bc: _List_fromArray(
			['flag wallis futuna', 'wallis', 'futuna', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-wf',
		df: _Utils_Tuple2(4, 49)
	},
		{
		cg: 8,
		aW: '🇼🇸',
		bc: _List_fromArray(
			['flag samoa', 'ws', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ws',
		df: _Utils_Tuple2(4, 50)
	},
		{
		cg: 8,
		aW: '🇽🇰',
		bc: _List_fromArray(
			['flag kosovo', 'xk', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-xk',
		df: _Utils_Tuple2(4, 51)
	},
		{
		cg: 8,
		aW: '🇾🇪',
		bc: _List_fromArray(
			['flag yemen', 'ye', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-ye',
		df: _Utils_Tuple2(4, 52)
	},
		{
		cg: 8,
		aW: '🇾🇹',
		bc: _List_fromArray(
			['flag mayotte', 'yt', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-yt',
		df: _Utils_Tuple2(4, 53)
	},
		{
		cg: 8,
		aW: '🇿🇦',
		bc: _List_fromArray(
			['flag south africa', 'south', 'africa', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-za',
		df: _Utils_Tuple2(4, 54)
	},
		{
		cg: 8,
		aW: '🇿🇲',
		bc: _List_fromArray(
			['flag zambia', 'zm', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-zm',
		df: _Utils_Tuple2(4, 55)
	},
		{
		cg: 8,
		aW: '🇿🇼',
		bc: _List_fromArray(
			['flag zimbabwe', 'zw', 'flag', 'nation', 'country', 'banner']),
		bg: 'flag-zw',
		df: _Utils_Tuple2(4, 56)
	},
		{
		cg: 7,
		aW: '🈁',
		bc: _List_fromArray(
			['japanese here button', 'blue square', 'here', 'katakana', 'japanese', 'destination']),
		bg: 'koko',
		df: _Utils_Tuple2(4, 57)
	},
		{
		cg: 7,
		aW: '🈂️',
		bc: _List_fromArray(
			['japanese service charge button', 'japanese', 'blue square', 'katakana']),
		bg: 'sa',
		df: _Utils_Tuple2(5, 0)
	},
		{
		cg: 7,
		aW: '🈚',
		bc: _List_fromArray(
			['japanese free of charge button', 'nothing', 'chinese', 'kanji', 'japanese', 'orange square']),
		bg: 'u7121',
		df: _Utils_Tuple2(5, 1)
	},
		{
		cg: 7,
		aW: '🈯',
		bc: _List_fromArray(
			['japanese reserved button', 'chinese', 'point', 'green square', 'kanji']),
		bg: 'u6307',
		df: _Utils_Tuple2(5, 2)
	},
		{
		cg: 7,
		aW: '🈲',
		bc: _List_fromArray(
			['japanese prohibited button', 'kanji', 'japanese', 'chinese', 'forbidden', 'limit', 'restricted', 'red square']),
		bg: 'u7981',
		df: _Utils_Tuple2(5, 3)
	},
		{
		cg: 7,
		aW: '🈳',
		bc: _List_fromArray(
			['japanese vacancy button', 'kanji', 'japanese', 'chinese', 'empty', 'sky', 'blue square']),
		bg: 'u7a7a',
		df: _Utils_Tuple2(5, 4)
	},
		{
		cg: 7,
		aW: '🈴',
		bc: _List_fromArray(
			['japanese passing grade button', 'japanese', 'chinese', 'join', 'kanji', 'red square']),
		bg: 'u5408',
		df: _Utils_Tuple2(5, 5)
	},
		{
		cg: 7,
		aW: '🈵',
		bc: _List_fromArray(
			['japanese no vacancy button', 'full', 'chinese', 'japanese', 'red square', 'kanji']),
		bg: 'u6e80',
		df: _Utils_Tuple2(5, 6)
	},
		{
		cg: 7,
		aW: '🈶',
		bc: _List_fromArray(
			['japanese not free of charge button', 'orange square', 'chinese', 'have', 'kanji']),
		bg: 'u6709',
		df: _Utils_Tuple2(5, 7)
	},
		{
		cg: 7,
		aW: '🈷️',
		bc: _List_fromArray(
			['japanese monthly amount button', 'chinese', 'month', 'moon', 'japanese', 'orange square', 'kanji']),
		bg: 'u6708',
		df: _Utils_Tuple2(5, 8)
	},
		{
		cg: 7,
		aW: '🈸',
		bc: _List_fromArray(
			['japanese application button', 'chinese', 'japanese', 'kanji', 'orange square']),
		bg: 'u7533',
		df: _Utils_Tuple2(5, 9)
	},
		{
		cg: 7,
		aW: '🈹',
		bc: _List_fromArray(
			['japanese discount button', 'cut', 'divide', 'chinese', 'kanji', 'pink square']),
		bg: 'u5272',
		df: _Utils_Tuple2(5, 10)
	},
		{
		cg: 7,
		aW: '🈺',
		bc: _List_fromArray(
			['japanese open for business button', 'japanese', 'opening hours', 'orange square']),
		bg: 'u55b6',
		df: _Utils_Tuple2(5, 11)
	},
		{
		cg: 7,
		aW: '🉐',
		bc: _List_fromArray(
			['japanese bargain button', 'chinese', 'kanji', 'obtain', 'get', 'circle']),
		bg: 'ideograph_advantage',
		df: _Utils_Tuple2(5, 12)
	},
		{
		cg: 7,
		aW: '🉑',
		bc: _List_fromArray(
			['japanese acceptable button', 'ok', 'good', 'chinese', 'kanji', 'agree', 'yes', 'orange circle']),
		bg: 'accept',
		df: _Utils_Tuple2(5, 13)
	},
		{
		cg: 4,
		aW: '🌀',
		bc: _List_fromArray(
			['cyclone', 'weather', 'swirl', 'blue', 'cloud', 'vortex', 'spiral', 'whirlpool', 'spin', 'tornado', 'hurricane', 'typhoon']),
		bg: 'cyclone',
		df: _Utils_Tuple2(5, 14)
	},
		{
		cg: 4,
		aW: '🌁',
		bc: _List_fromArray(
			['foggy', 'photo', 'mountain']),
		bg: 'foggy',
		df: _Utils_Tuple2(5, 15)
	},
		{
		cg: 4,
		aW: '🌂',
		bc: _List_fromArray(
			['closed umbrella', 'weather', 'rain', 'drizzle']),
		bg: 'closed_umbrella',
		df: _Utils_Tuple2(5, 16)
	},
		{
		cg: 4,
		aW: '🌃',
		bc: _List_fromArray(
			['night with stars', 'evening', 'city', 'downtown']),
		bg: 'night_with_stars',
		df: _Utils_Tuple2(5, 17)
	},
		{
		cg: 4,
		aW: '🌄',
		bc: _List_fromArray(
			['sunrise over mountains', 'view', 'vacation', 'photo']),
		bg: 'sunrise_over_mountains',
		df: _Utils_Tuple2(5, 18)
	},
		{
		cg: 4,
		aW: '🌅',
		bc: _List_fromArray(
			['sunrise', 'morning', 'view', 'vacation', 'photo']),
		bg: 'sunrise',
		df: _Utils_Tuple2(5, 19)
	},
		{
		cg: 4,
		aW: '🌆',
		bc: _List_fromArray(
			['cityscape at dusk', 'photo', 'evening', 'sky', 'buildings']),
		bg: 'city_sunset',
		df: _Utils_Tuple2(5, 20)
	},
		{
		cg: 4,
		aW: '🌇',
		bc: _List_fromArray(
			['sunset', 'photo', 'good morning', 'dawn']),
		bg: 'city_sunrise',
		df: _Utils_Tuple2(5, 21)
	},
		{
		cg: 4,
		aW: '🌈',
		bc: _List_fromArray(
			['rainbow', 'nature', 'happy', 'unicorn face', 'photo', 'sky', 'spring']),
		bg: 'rainbow',
		df: _Utils_Tuple2(5, 22)
	},
		{
		cg: 4,
		aW: '🌉',
		bc: _List_fromArray(
			['bridge at night', 'photo', 'sanfrancisco']),
		bg: 'bridge_at_night',
		df: _Utils_Tuple2(5, 23)
	},
		{
		cg: 4,
		aW: '🌊',
		bc: _List_fromArray(
			['water wave', 'sea', 'water', 'wave', 'nature', 'tsunami', 'disaster']),
		bg: 'ocean',
		df: _Utils_Tuple2(5, 24)
	},
		{
		cg: 4,
		aW: '🌋',
		bc: _List_fromArray(
			['volcano', 'photo', 'nature', 'disaster']),
		bg: 'volcano',
		df: _Utils_Tuple2(5, 25)
	},
		{
		cg: 4,
		aW: '🌌',
		bc: _List_fromArray(
			['milky way', 'photo', 'space', 'stars']),
		bg: 'milky_way',
		df: _Utils_Tuple2(5, 26)
	},
		{
		cg: 4,
		aW: '🌍',
		bc: _List_fromArray(
			['globe showing europe africa', 'globe', 'world', 'international']),
		bg: 'earth_africa',
		df: _Utils_Tuple2(5, 27)
	},
		{
		cg: 4,
		aW: '🌎',
		bc: _List_fromArray(
			['globe showing americas', 'globe', 'world', 'USA', 'international']),
		bg: 'earth_americas',
		df: _Utils_Tuple2(5, 28)
	},
		{
		cg: 4,
		aW: '🌏',
		bc: _List_fromArray(
			['globe showing asia australia', 'globe', 'world', 'east', 'international']),
		bg: 'earth_asia',
		df: _Utils_Tuple2(5, 29)
	},
		{
		cg: 4,
		aW: '🌐',
		bc: _List_fromArray(
			['globe with meridians', 'earth', 'international', 'world', 'internet', 'interweb', 'i18n']),
		bg: 'globe_with_meridians',
		df: _Utils_Tuple2(5, 30)
	},
		{
		cg: 4,
		aW: '🌑',
		bc: _List_fromArray(
			['new moon', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'new_moon',
		df: _Utils_Tuple2(5, 31)
	},
		{
		cg: 4,
		aW: '🌒',
		bc: _List_fromArray(
			['waxing crescent moon', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'waxing_crescent_moon',
		df: _Utils_Tuple2(5, 32)
	},
		{
		cg: 4,
		aW: '🌓',
		bc: _List_fromArray(
			['first quarter moon', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'first_quarter_moon',
		df: _Utils_Tuple2(5, 33)
	},
		{
		cg: 4,
		aW: '🌔',
		bc: _List_fromArray(
			['waxing gibbous moon', 'nature', 'night', 'sky', 'gray', 'twilight', 'planet', 'space', 'evening', 'sleep']),
		bg: 'moon',
		df: _Utils_Tuple2(5, 34)
	},
		{
		cg: 4,
		aW: '🌕',
		bc: _List_fromArray(
			['full moon', 'nature', 'yellow', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'full_moon',
		df: _Utils_Tuple2(5, 35)
	},
		{
		cg: 4,
		aW: '🌖',
		bc: _List_fromArray(
			['waning gibbous moon', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep', 'waxing gibbous moon']),
		bg: 'waning_gibbous_moon',
		df: _Utils_Tuple2(5, 36)
	},
		{
		cg: 4,
		aW: '🌗',
		bc: _List_fromArray(
			['last quarter moon', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'last_quarter_moon',
		df: _Utils_Tuple2(5, 37)
	},
		{
		cg: 4,
		aW: '🌘',
		bc: _List_fromArray(
			['waning crescent moon', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'waning_crescent_moon',
		df: _Utils_Tuple2(5, 38)
	},
		{
		cg: 4,
		aW: '🌙',
		bc: _List_fromArray(
			['crescent moon', 'night', 'sleep', 'sky', 'evening', 'magic']),
		bg: 'crescent_moon',
		df: _Utils_Tuple2(5, 39)
	},
		{
		cg: 4,
		aW: '🌚',
		bc: _List_fromArray(
			['new moon face', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'new_moon_with_face',
		df: _Utils_Tuple2(5, 40)
	},
		{
		cg: 4,
		aW: '🌛',
		bc: _List_fromArray(
			['first quarter moon face', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'first_quarter_moon_with_face',
		df: _Utils_Tuple2(5, 41)
	},
		{
		cg: 4,
		aW: '🌜',
		bc: _List_fromArray(
			['last quarter moon face', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'last_quarter_moon_with_face',
		df: _Utils_Tuple2(5, 42)
	},
		{
		cg: 4,
		aW: '🌝',
		bc: _List_fromArray(
			['full moon face', 'nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep']),
		bg: 'full_moon_with_face',
		df: _Utils_Tuple2(5, 43)
	},
		{
		cg: 4,
		aW: '🌞',
		bc: _List_fromArray(
			['sun with face', 'nature', 'morning', 'sky']),
		bg: 'sun_with_face',
		df: _Utils_Tuple2(5, 44)
	},
		{
		cg: 4,
		aW: '🌟',
		bc: _List_fromArray(
			['glowing star', 'night', 'sparkle', 'awesome', 'good', 'magic']),
		bg: 'star2',
		df: _Utils_Tuple2(5, 45)
	},
		{
		cg: 4,
		aW: '🌠',
		bc: _List_fromArray(
			['shooting star', 'night', 'photo']),
		bg: 'stars',
		df: _Utils_Tuple2(5, 46)
	},
		{
		cg: 4,
		aW: '🌡️',
		bc: _List_fromArray(
			['thermometer', 'weather', 'temperature', 'hot', 'cold']),
		bg: 'thermometer',
		df: _Utils_Tuple2(5, 47)
	},
		{
		cg: 4,
		aW: '🌤️',
		bc: _List_fromArray(
			['sun behind small cloud', 'weather']),
		bg: 'mostly_sunny',
		df: _Utils_Tuple2(5, 48)
	},
		{
		cg: 4,
		aW: '🌥️',
		bc: _List_fromArray(
			['sun behind large cloud', 'weather']),
		bg: 'barely_sunny',
		df: _Utils_Tuple2(5, 49)
	},
		{
		cg: 4,
		aW: '🌦️',
		bc: _List_fromArray(
			['sun behind rain cloud', 'weather']),
		bg: 'partly_sunny_rain',
		df: _Utils_Tuple2(5, 50)
	},
		{
		cg: 4,
		aW: '🌧️',
		bc: _List_fromArray(
			['cloud with rain', 'weather']),
		bg: 'rain_cloud',
		df: _Utils_Tuple2(5, 51)
	},
		{
		cg: 4,
		aW: '🌨️',
		bc: _List_fromArray(
			['cloud with snow', 'weather']),
		bg: 'snow_cloud',
		df: _Utils_Tuple2(5, 52)
	},
		{
		cg: 4,
		aW: '🌩️',
		bc: _List_fromArray(
			['cloud with lightning', 'weather', 'thunder']),
		bg: 'lightning',
		df: _Utils_Tuple2(5, 53)
	},
		{
		cg: 4,
		aW: '🌪️',
		bc: _List_fromArray(
			['tornado', 'weather', 'cyclone', 'twister']),
		bg: 'tornado',
		df: _Utils_Tuple2(5, 54)
	},
		{
		cg: 4,
		aW: '🌫️',
		bc: _List_fromArray(
			['fog', 'weather']),
		bg: 'fog',
		df: _Utils_Tuple2(5, 55)
	},
		{
		cg: 4,
		aW: '🌬️',
		bc: _List_fromArray(
			['wind face', 'gust', 'air']),
		bg: 'wind_blowing_face',
		df: _Utils_Tuple2(5, 56)
	},
		{
		cg: 3,
		aW: '\uD83C\uDF2D',
		bc: _List_fromArray(
			['hot dog', 'food', 'frankfurter']),
		bg: 'hotdog',
		df: _Utils_Tuple2(5, 57)
	},
		{
		cg: 3,
		aW: '\uD83C\uDF2E',
		bc: _List_fromArray(
			['taco', 'food', 'mexican']),
		bg: 'taco',
		df: _Utils_Tuple2(6, 0)
	},
		{
		cg: 3,
		aW: '\uD83C\uDF2F',
		bc: _List_fromArray(
			['burrito', 'food', 'mexican']),
		bg: 'burrito',
		df: _Utils_Tuple2(6, 1)
	},
		{
		cg: 3,
		aW: '🌰',
		bc: _List_fromArray(
			['chestnut', 'food', 'squirrel']),
		bg: 'chestnut',
		df: _Utils_Tuple2(6, 2)
	},
		{
		cg: 2,
		aW: '🌱',
		bc: _List_fromArray(
			['seedling', 'plant', 'nature', 'grass', 'lawn', 'spring']),
		bg: 'seedling',
		df: _Utils_Tuple2(6, 3)
	},
		{
		cg: 2,
		aW: '🌲',
		bc: _List_fromArray(
			['evergreen tree', 'plant', 'nature']),
		bg: 'evergreen_tree',
		df: _Utils_Tuple2(6, 4)
	},
		{
		cg: 2,
		aW: '🌳',
		bc: _List_fromArray(
			['deciduous tree', 'plant', 'nature']),
		bg: 'deciduous_tree',
		df: _Utils_Tuple2(6, 5)
	},
		{
		cg: 2,
		aW: '🌴',
		bc: _List_fromArray(
			['palm tree', 'plant', 'vegetable', 'nature', 'summer', 'beach', 'mojito', 'tropical']),
		bg: 'palm_tree',
		df: _Utils_Tuple2(6, 6)
	},
		{
		cg: 2,
		aW: '🌵',
		bc: _List_fromArray(
			['cactus', 'vegetable', 'plant', 'nature']),
		bg: 'cactus',
		df: _Utils_Tuple2(6, 7)
	},
		{
		cg: 3,
		aW: '🌶️',
		bc: _List_fromArray(
			['hot pepper', 'food', 'spicy', 'chilli', 'chili']),
		bg: 'hot_pepper',
		df: _Utils_Tuple2(6, 8)
	},
		{
		cg: 2,
		aW: '🌷',
		bc: _List_fromArray(
			['tulip', 'flowers', 'plant', 'nature', 'summer', 'spring']),
		bg: 'tulip',
		df: _Utils_Tuple2(6, 9)
	},
		{
		cg: 2,
		aW: '🌸',
		bc: _List_fromArray(
			['cherry blossom', 'nature', 'plant', 'spring', 'flower']),
		bg: 'cherry_blossom',
		df: _Utils_Tuple2(6, 10)
	},
		{
		cg: 2,
		aW: '🌹',
		bc: _List_fromArray(
			['rose', 'flowers', 'valentines', 'love', 'spring']),
		bg: 'rose',
		df: _Utils_Tuple2(6, 11)
	},
		{
		cg: 2,
		aW: '🌺',
		bc: _List_fromArray(
			['hibiscus', 'plant', 'vegetable', 'flowers', 'beach']),
		bg: 'hibiscus',
		df: _Utils_Tuple2(6, 12)
	},
		{
		cg: 2,
		aW: '🌻',
		bc: _List_fromArray(
			['sunflower', 'nature', 'plant', 'fall']),
		bg: 'sunflower',
		df: _Utils_Tuple2(6, 13)
	},
		{
		cg: 2,
		aW: '🌼',
		bc: _List_fromArray(
			['blossom', 'nature', 'flowers', 'yellow']),
		bg: 'blossom',
		df: _Utils_Tuple2(6, 14)
	},
		{
		cg: 3,
		aW: '🌽',
		bc: _List_fromArray(
			['ear of corn', 'food', 'vegetable', 'plant']),
		bg: 'corn',
		df: _Utils_Tuple2(6, 15)
	},
		{
		cg: 2,
		aW: '🌾',
		bc: _List_fromArray(
			['sheaf of rice', 'nature', 'plant']),
		bg: 'ear_of_rice',
		df: _Utils_Tuple2(6, 16)
	},
		{
		cg: 2,
		aW: '🌿',
		bc: _List_fromArray(
			['herb', 'vegetable', 'plant', 'medicine', 'weed', 'grass', 'lawn']),
		bg: 'herb',
		df: _Utils_Tuple2(6, 17)
	},
		{
		cg: 2,
		aW: '🍀',
		bc: _List_fromArray(
			['four leaf clover', 'vegetable', 'plant', 'nature', 'lucky', 'irish']),
		bg: 'four_leaf_clover',
		df: _Utils_Tuple2(6, 18)
	},
		{
		cg: 2,
		aW: '🍁',
		bc: _List_fromArray(
			['maple leaf', 'nature', 'plant', 'vegetable', 'ca', 'fall']),
		bg: 'maple_leaf',
		df: _Utils_Tuple2(6, 19)
	},
		{
		cg: 2,
		aW: '🍂',
		bc: _List_fromArray(
			['fallen leaf', 'nature', 'plant', 'vegetable', 'leaves']),
		bg: 'fallen_leaf',
		df: _Utils_Tuple2(6, 20)
	},
		{
		cg: 2,
		aW: '🍃',
		bc: _List_fromArray(
			['leaf fluttering in wind', 'nature', 'plant', 'tree', 'vegetable', 'grass', 'lawn', 'spring']),
		bg: 'leaves',
		df: _Utils_Tuple2(6, 21)
	},
		{
		cg: 3,
		aW: '🍄',
		bc: _List_fromArray(
			['mushroom', 'plant', 'vegetable']),
		bg: 'mushroom',
		df: _Utils_Tuple2(6, 22)
	},
		{
		cg: 3,
		aW: '🍅',
		bc: _List_fromArray(
			['tomato', 'fruit', 'vegetable', 'nature', 'food']),
		bg: 'tomato',
		df: _Utils_Tuple2(6, 23)
	},
		{
		cg: 3,
		aW: '🍆',
		bc: _List_fromArray(
			['eggplant', 'vegetable', 'nature', 'food', 'aubergine']),
		bg: 'eggplant',
		df: _Utils_Tuple2(6, 24)
	},
		{
		cg: 3,
		aW: '🍇',
		bc: _List_fromArray(
			['grapes', 'fruit', 'food', 'wine']),
		bg: 'grapes',
		df: _Utils_Tuple2(6, 25)
	},
		{
		cg: 3,
		aW: '🍈',
		bc: _List_fromArray(
			['melon', 'fruit', 'nature', 'food']),
		bg: 'melon',
		df: _Utils_Tuple2(6, 26)
	},
		{
		cg: 3,
		aW: '🍉',
		bc: _List_fromArray(
			['watermelon', 'fruit', 'food', 'picnic', 'summer']),
		bg: 'watermelon',
		df: _Utils_Tuple2(6, 27)
	},
		{
		cg: 3,
		aW: '🍊',
		bc: _List_fromArray(
			['tangerine', 'food', 'fruit', 'nature', 'orange']),
		bg: 'tangerine',
		df: _Utils_Tuple2(6, 28)
	},
		{
		cg: 3,
		aW: '🍋',
		bc: _List_fromArray(
			['lemon', 'fruit', 'nature']),
		bg: 'lemon',
		df: _Utils_Tuple2(6, 29)
	},
		{
		cg: 3,
		aW: '🍌',
		bc: _List_fromArray(
			['banana', 'fruit', 'food', 'monkey']),
		bg: 'banana',
		df: _Utils_Tuple2(6, 30)
	},
		{
		cg: 3,
		aW: '🍍',
		bc: _List_fromArray(
			['pineapple', 'fruit', 'nature', 'food']),
		bg: 'pineapple',
		df: _Utils_Tuple2(6, 31)
	},
		{
		cg: 3,
		aW: '🍎',
		bc: _List_fromArray(
			['red apple', 'fruit', 'mac', 'school']),
		bg: 'apple',
		df: _Utils_Tuple2(6, 32)
	},
		{
		cg: 3,
		aW: '🍏',
		bc: _List_fromArray(
			['green apple', 'fruit', 'nature']),
		bg: 'green_apple',
		df: _Utils_Tuple2(6, 33)
	},
		{
		cg: 3,
		aW: '🍐',
		bc: _List_fromArray(
			['pear', 'fruit', 'nature', 'food']),
		bg: 'pear',
		df: _Utils_Tuple2(6, 34)
	},
		{
		cg: 3,
		aW: '🍑',
		bc: _List_fromArray(
			['peach', 'fruit', 'nature', 'food']),
		bg: 'peach',
		df: _Utils_Tuple2(6, 35)
	},
		{
		cg: 3,
		aW: '🍒',
		bc: _List_fromArray(
			['cherries', 'food', 'fruit']),
		bg: 'cherries',
		df: _Utils_Tuple2(6, 36)
	},
		{
		cg: 3,
		aW: '🍓',
		bc: _List_fromArray(
			['strawberry', 'fruit', 'food', 'nature']),
		bg: 'strawberry',
		df: _Utils_Tuple2(6, 37)
	},
		{
		cg: 3,
		aW: '🍔',
		bc: _List_fromArray(
			['hamburger', 'meat', 'fast food', 'beef', 'cheeseburger', 'mcdonalds', 'burger king']),
		bg: 'hamburger',
		df: _Utils_Tuple2(6, 38)
	},
		{
		cg: 3,
		aW: '🍕',
		bc: _List_fromArray(
			['pizza', 'food', 'party']),
		bg: 'pizza',
		df: _Utils_Tuple2(6, 39)
	},
		{
		cg: 3,
		aW: '🍖',
		bc: _List_fromArray(
			['meat on bone', 'good', 'food', 'drumstick']),
		bg: 'meat_on_bone',
		df: _Utils_Tuple2(6, 40)
	},
		{
		cg: 3,
		aW: '🍗',
		bc: _List_fromArray(
			['poultry leg', 'food', 'meat', 'drumstick', 'bird', 'chicken', 'turkey']),
		bg: 'poultry_leg',
		df: _Utils_Tuple2(6, 41)
	},
		{
		cg: 3,
		aW: '🍘',
		bc: _List_fromArray(
			['rice cracker', 'food', 'japanese']),
		bg: 'rice_cracker',
		df: _Utils_Tuple2(6, 42)
	},
		{
		cg: 3,
		aW: '🍙',
		bc: _List_fromArray(
			['rice ball', 'food', 'japanese']),
		bg: 'rice_ball',
		df: _Utils_Tuple2(6, 43)
	},
		{
		cg: 3,
		aW: '🍚',
		bc: _List_fromArray(
			['cooked rice', 'food', 'china', 'asian']),
		bg: 'rice',
		df: _Utils_Tuple2(6, 44)
	},
		{
		cg: 3,
		aW: '🍛',
		bc: _List_fromArray(
			['curry rice', 'food', 'spicy', 'hot', 'indian']),
		bg: 'curry',
		df: _Utils_Tuple2(6, 45)
	},
		{
		cg: 3,
		aW: '🍜',
		bc: _List_fromArray(
			['steaming bowl', 'food', 'japanese', 'noodle', 'chopsticks']),
		bg: 'ramen',
		df: _Utils_Tuple2(6, 46)
	},
		{
		cg: 3,
		aW: '🍝',
		bc: _List_fromArray(
			['spaghetti', 'food', 'italian', 'noodle']),
		bg: 'spaghetti',
		df: _Utils_Tuple2(6, 47)
	},
		{
		cg: 3,
		aW: '🍞',
		bc: _List_fromArray(
			['bread', 'food', 'wheat', 'breakfast', 'toast']),
		bg: 'bread',
		df: _Utils_Tuple2(6, 48)
	},
		{
		cg: 3,
		aW: '🍟',
		bc: _List_fromArray(
			['french fries', 'chips', 'snack', 'fast food']),
		bg: 'fries',
		df: _Utils_Tuple2(6, 49)
	},
		{
		cg: 3,
		aW: '🍠',
		bc: _List_fromArray(
			['roasted sweet potato', 'food', 'nature']),
		bg: 'sweet_potato',
		df: _Utils_Tuple2(6, 50)
	},
		{
		cg: 3,
		aW: '🍡',
		bc: _List_fromArray(
			['dango', 'food', 'dessert', 'sweet', 'japanese', 'barbecue', 'meat']),
		bg: 'dango',
		df: _Utils_Tuple2(6, 51)
	},
		{
		cg: 3,
		aW: '🍢',
		bc: _List_fromArray(
			['oden', 'food', 'japanese']),
		bg: 'oden',
		df: _Utils_Tuple2(6, 52)
	},
		{
		cg: 3,
		aW: '🍣',
		bc: _List_fromArray(
			['sushi', 'food', 'fish', 'japanese', 'rice']),
		bg: 'sushi',
		df: _Utils_Tuple2(6, 53)
	},
		{
		cg: 3,
		aW: '🍤',
		bc: _List_fromArray(
			['fried shrimp', 'food', 'animal', 'appetizer', 'summer']),
		bg: 'fried_shrimp',
		df: _Utils_Tuple2(6, 54)
	},
		{
		cg: 3,
		aW: '🍥',
		bc: _List_fromArray(
			['fish cake with swirl', 'food', 'japan', 'sea', 'beach', 'narutomaki', 'pink', 'swirl', 'kamaboko', 'surimi', 'ramen']),
		bg: 'fish_cake',
		df: _Utils_Tuple2(6, 55)
	},
		{
		cg: 3,
		aW: '🍦',
		bc: _List_fromArray(
			['soft ice cream', 'food', 'hot', 'dessert', 'summer']),
		bg: 'icecream',
		df: _Utils_Tuple2(6, 56)
	},
		{
		cg: 3,
		aW: '🍧',
		bc: _List_fromArray(
			['shaved ice', 'hot', 'dessert', 'summer']),
		bg: 'shaved_ice',
		df: _Utils_Tuple2(6, 57)
	},
		{
		cg: 3,
		aW: '🍨',
		bc: _List_fromArray(
			['ice cream', 'food', 'hot', 'dessert']),
		bg: 'ice_cream',
		df: _Utils_Tuple2(7, 0)
	},
		{
		cg: 3,
		aW: '🍩',
		bc: _List_fromArray(
			['doughnut', 'food', 'dessert', 'snack', 'sweet', 'donut']),
		bg: 'doughnut',
		df: _Utils_Tuple2(7, 1)
	},
		{
		cg: 3,
		aW: '🍪',
		bc: _List_fromArray(
			['cookie', 'food', 'snack', 'oreo', 'chocolate', 'sweet', 'dessert']),
		bg: 'cookie',
		df: _Utils_Tuple2(7, 2)
	},
		{
		cg: 3,
		aW: '🍫',
		bc: _List_fromArray(
			['chocolate bar', 'food', 'snack', 'dessert', 'sweet']),
		bg: 'chocolate_bar',
		df: _Utils_Tuple2(7, 3)
	},
		{
		cg: 3,
		aW: '🍬',
		bc: _List_fromArray(
			['candy', 'snack', 'dessert', 'sweet', 'lolly']),
		bg: 'candy',
		df: _Utils_Tuple2(7, 4)
	},
		{
		cg: 3,
		aW: '🍭',
		bc: _List_fromArray(
			['lollipop', 'food', 'snack', 'candy', 'sweet']),
		bg: 'lollipop',
		df: _Utils_Tuple2(7, 5)
	},
		{
		cg: 3,
		aW: '🍮',
		bc: _List_fromArray(
			['custard', 'dessert', 'food']),
		bg: 'custard',
		df: _Utils_Tuple2(7, 6)
	},
		{
		cg: 3,
		aW: '🍯',
		bc: _List_fromArray(
			['honey pot', 'bees', 'sweet', 'kitchen']),
		bg: 'honey_pot',
		df: _Utils_Tuple2(7, 7)
	},
		{
		cg: 3,
		aW: '🍰',
		bc: _List_fromArray(
			['shortcake', 'food', 'dessert']),
		bg: 'cake',
		df: _Utils_Tuple2(7, 8)
	},
		{
		cg: 3,
		aW: '🍱',
		bc: _List_fromArray(
			['bento box', 'food', 'japanese', 'box']),
		bg: 'bento',
		df: _Utils_Tuple2(7, 9)
	},
		{
		cg: 3,
		aW: '🍲',
		bc: _List_fromArray(
			['pot of food', 'food', 'meat', 'soup']),
		bg: 'stew',
		df: _Utils_Tuple2(7, 10)
	},
		{
		cg: 3,
		aW: '🍳',
		bc: _List_fromArray(
			['cooking', 'food', 'breakfast', 'kitchen', 'egg']),
		bg: 'fried_egg',
		df: _Utils_Tuple2(7, 11)
	},
		{
		cg: 3,
		aW: '🍴',
		bc: _List_fromArray(
			['fork and knife', 'cutlery', 'kitchen']),
		bg: 'fork_and_knife',
		df: _Utils_Tuple2(7, 12)
	},
		{
		cg: 3,
		aW: '🍵',
		bc: _List_fromArray(
			['teacup without handle', 'drink', 'bowl', 'breakfast', 'green', 'british']),
		bg: 'tea',
		df: _Utils_Tuple2(7, 13)
	},
		{
		cg: 3,
		aW: '🍶',
		bc: _List_fromArray(
			['sake', 'wine', 'drink', 'drunk', 'beverage', 'japanese', 'alcohol', 'booze']),
		bg: 'sake',
		df: _Utils_Tuple2(7, 14)
	},
		{
		cg: 3,
		aW: '🍷',
		bc: _List_fromArray(
			['wine glass', 'drink', 'beverage', 'drunk', 'alcohol', 'booze']),
		bg: 'wine_glass',
		df: _Utils_Tuple2(7, 15)
	},
		{
		cg: 3,
		aW: '🍸',
		bc: _List_fromArray(
			['cocktail glass', 'drink', 'drunk', 'alcohol', 'beverage', 'booze', 'mojito']),
		bg: 'cocktail',
		df: _Utils_Tuple2(7, 16)
	},
		{
		cg: 3,
		aW: '🍹',
		bc: _List_fromArray(
			['tropical drink', 'beverage', 'cocktail', 'summer', 'beach', 'alcohol', 'booze', 'mojito']),
		bg: 'tropical_drink',
		df: _Utils_Tuple2(7, 17)
	},
		{
		cg: 3,
		aW: '🍺',
		bc: _List_fromArray(
			['beer mug', 'relax', 'beverage', 'drink', 'drunk', 'party', 'pub', 'summer', 'alcohol', 'booze']),
		bg: 'beer',
		df: _Utils_Tuple2(7, 18)
	},
		{
		cg: 3,
		aW: '🍻',
		bc: _List_fromArray(
			['clinking beer mugs', 'relax', 'beverage', 'drink', 'drunk', 'party', 'pub', 'summer', 'alcohol', 'booze']),
		bg: 'beers',
		df: _Utils_Tuple2(7, 19)
	},
		{
		cg: 3,
		aW: '🍼',
		bc: _List_fromArray(
			['baby bottle', 'food', 'container', 'milk']),
		bg: 'baby_bottle',
		df: _Utils_Tuple2(7, 20)
	},
		{
		cg: 3,
		aW: '🍽️',
		bc: _List_fromArray(
			['fork and knife with plate', 'food', 'eat', 'meal', 'lunch', 'dinner', 'restaurant']),
		bg: 'knife_fork_plate',
		df: _Utils_Tuple2(7, 21)
	},
		{
		cg: 3,
		aW: '\uD83C\uDF7E',
		bc: _List_fromArray(
			['bottle with popping cork', 'drink', 'wine', 'bottle', 'celebration']),
		bg: 'champagne',
		df: _Utils_Tuple2(7, 22)
	},
		{
		cg: 3,
		aW: '\uD83C\uDF7F',
		bc: _List_fromArray(
			['popcorn', 'food', 'movie theater', 'films', 'snack']),
		bg: 'popcorn',
		df: _Utils_Tuple2(7, 23)
	},
		{
		cg: 5,
		aW: '🎀',
		bc: _List_fromArray(
			['ribbon', 'decoration', 'pink', 'girl', 'bowtie']),
		bg: 'ribbon',
		df: _Utils_Tuple2(7, 24)
	},
		{
		cg: 5,
		aW: '🎁',
		bc: _List_fromArray(
			['wrapped gift', 'present', 'birthday', 'christmas', 'xmas']),
		bg: 'gift',
		df: _Utils_Tuple2(7, 25)
	},
		{
		cg: 3,
		aW: '🎂',
		bc: _List_fromArray(
			['birthday cake', 'food', 'dessert', 'cake']),
		bg: 'birthday',
		df: _Utils_Tuple2(7, 26)
	},
		{
		cg: 5,
		aW: '🎃',
		bc: _List_fromArray(
			['jack o lantern', 'halloween', 'light', 'pumpkin', 'creepy', 'fall']),
		bg: 'jack_o_lantern',
		df: _Utils_Tuple2(7, 27)
	},
		{
		cg: 5,
		aW: '🎄',
		bc: _List_fromArray(
			['christmas tree', 'festival', 'vacation', 'december', 'xmas', 'celebration']),
		bg: 'christmas_tree',
		df: _Utils_Tuple2(7, 28)
	},
		{
		cg: 1,
		aW: '🎅',
		bc: _List_fromArray(
			['santa claus', 'festival', 'man', 'male', 'xmas', 'father christmas']),
		bg: 'santa',
		df: _Utils_Tuple2(7, 29)
	},
		{
		cg: 5,
		aW: '🎆',
		bc: _List_fromArray(
			['fireworks', 'photo', 'festival', 'carnival', 'congratulations']),
		bg: 'fireworks',
		df: _Utils_Tuple2(7, 35)
	},
		{
		cg: 5,
		aW: '🎇',
		bc: _List_fromArray(
			['sparkler', 'stars', 'night', 'shine']),
		bg: 'sparkler',
		df: _Utils_Tuple2(7, 36)
	},
		{
		cg: 5,
		aW: '🎈',
		bc: _List_fromArray(
			['balloon', 'party', 'celebration', 'birthday', 'circus']),
		bg: 'balloon',
		df: _Utils_Tuple2(7, 37)
	},
		{
		cg: 5,
		aW: '🎉',
		bc: _List_fromArray(
			['party popper', 'party', 'congratulations', 'birthday', 'magic', 'circus', 'celebration']),
		bg: 'tada',
		df: _Utils_Tuple2(7, 38)
	},
		{
		cg: 5,
		aW: '🎊',
		bc: _List_fromArray(
			['confetti ball', 'festival', 'party', 'birthday', 'circus']),
		bg: 'confetti_ball',
		df: _Utils_Tuple2(7, 39)
	},
		{
		cg: 5,
		aW: '🎋',
		bc: _List_fromArray(
			['tanabata tree', 'plant', 'nature', 'branch', 'summer']),
		bg: 'tanabata_tree',
		df: _Utils_Tuple2(7, 40)
	},
		{
		cg: 8,
		aW: '🎌',
		bc: _List_fromArray(
			['crossed flags', 'japanese', 'nation', 'country', 'border']),
		bg: 'crossed_flags',
		df: _Utils_Tuple2(7, 41)
	},
		{
		cg: 5,
		aW: '🎍',
		bc: _List_fromArray(
			['pine decoration', 'plant', 'nature', 'vegetable', 'panda', 'pine decoration']),
		bg: 'bamboo',
		df: _Utils_Tuple2(7, 42)
	},
		{
		cg: 5,
		aW: '🎎',
		bc: _List_fromArray(
			['japanese dolls', 'japanese', 'toy', 'kimono']),
		bg: 'dolls',
		df: _Utils_Tuple2(7, 43)
	},
		{
		cg: 5,
		aW: '🎏',
		bc: _List_fromArray(
			['carp streamer', 'fish', 'japanese', 'koinobori', 'carp', 'banner']),
		bg: 'flags',
		df: _Utils_Tuple2(7, 44)
	},
		{
		cg: 5,
		aW: '🎐',
		bc: _List_fromArray(
			['wind chime', 'nature', 'ding', 'spring', 'bell']),
		bg: 'wind_chime',
		df: _Utils_Tuple2(7, 45)
	},
		{
		cg: 5,
		aW: '🎑',
		bc: _List_fromArray(
			['moon viewing ceremony', 'photo', 'japan', 'asia', 'tsukimi']),
		bg: 'rice_scene',
		df: _Utils_Tuple2(7, 46)
	},
		{
		cg: 6,
		aW: '🎒',
		bc: _List_fromArray(
			['backpack', 'student', 'education', 'bag', 'backpack']),
		bg: 'school_satchel',
		df: _Utils_Tuple2(7, 47)
	},
		{
		cg: 6,
		aW: '🎓',
		bc: _List_fromArray(
			['graduation cap', 'school', 'college', 'degree', 'university', 'graduation', 'cap', 'hat', 'legal', 'learn', 'education']),
		bg: 'mortar_board',
		df: _Utils_Tuple2(7, 48)
	},
		{
		cg: 5,
		aW: '🎖️',
		bc: _List_fromArray(
			['military medal', 'award', 'winning', 'army']),
		bg: 'medal',
		df: _Utils_Tuple2(7, 49)
	},
		{
		cg: 5,
		aW: '🎗️',
		bc: _List_fromArray(
			['reminder ribbon', 'sports', 'cause', 'support', 'awareness']),
		bg: 'reminder_ribbon',
		df: _Utils_Tuple2(7, 50)
	},
		{
		cg: 6,
		aW: '🎙️',
		bc: _List_fromArray(
			['studio microphone', 'sing', 'recording', 'artist', 'talkshow']),
		bg: 'studio_microphone',
		df: _Utils_Tuple2(7, 51)
	},
		{
		cg: 6,
		aW: '🎚️',
		bc: _List_fromArray(
			['level slider', 'scale']),
		bg: 'level_slider',
		df: _Utils_Tuple2(7, 52)
	},
		{
		cg: 6,
		aW: '🎛️',
		bc: _List_fromArray(
			['control knobs', 'dial']),
		bg: 'control_knobs',
		df: _Utils_Tuple2(7, 53)
	},
		{
		cg: 6,
		aW: '🎞️',
		bc: _List_fromArray(
			['film frames', 'movie']),
		bg: 'film_frames',
		df: _Utils_Tuple2(7, 54)
	},
		{
		cg: 5,
		aW: '🎟️',
		bc: _List_fromArray(
			['admission tickets', 'sports', 'concert', 'entrance']),
		bg: 'admission_tickets',
		df: _Utils_Tuple2(7, 55)
	},
		{
		cg: 4,
		aW: '🎠',
		bc: _List_fromArray(
			['carousel horse', 'photo', 'carnival']),
		bg: 'carousel_horse',
		df: _Utils_Tuple2(7, 56)
	},
		{
		cg: 4,
		aW: '🎡',
		bc: _List_fromArray(
			['ferris wheel', 'photo', 'carnival', 'londoneye']),
		bg: 'ferris_wheel',
		df: _Utils_Tuple2(7, 57)
	},
		{
		cg: 4,
		aW: '🎢',
		bc: _List_fromArray(
			['roller coaster', 'carnival', 'playground', 'photo', 'fun']),
		bg: 'roller_coaster',
		df: _Utils_Tuple2(8, 0)
	},
		{
		cg: 5,
		aW: '🎣',
		bc: _List_fromArray(
			['fishing pole', 'food', 'hobby', 'summer']),
		bg: 'fishing_pole_and_fish',
		df: _Utils_Tuple2(8, 1)
	},
		{
		cg: 6,
		aW: '🎤',
		bc: _List_fromArray(
			['microphone', 'sound', 'music', 'PA', 'sing', 'talkshow']),
		bg: 'microphone',
		df: _Utils_Tuple2(8, 2)
	},
		{
		cg: 6,
		aW: '🎥',
		bc: _List_fromArray(
			['movie camera', 'film', 'record']),
		bg: 'movie_camera',
		df: _Utils_Tuple2(8, 3)
	},
		{
		cg: 7,
		aW: '🎦',
		bc: _List_fromArray(
			['cinema', 'blue square', 'record', 'film', 'movie', 'curtain', 'stage', 'theater']),
		bg: 'cinema',
		df: _Utils_Tuple2(8, 4)
	},
		{
		cg: 6,
		aW: '🎧',
		bc: _List_fromArray(
			['headphone', 'music', 'score', 'gadgets']),
		bg: 'headphones',
		df: _Utils_Tuple2(8, 5)
	},
		{
		cg: 5,
		aW: '🎨',
		bc: _List_fromArray(
			['artist palette', 'design', 'paint', 'draw', 'colors']),
		bg: 'art',
		df: _Utils_Tuple2(8, 6)
	},
		{
		cg: 6,
		aW: '🎩',
		bc: _List_fromArray(
			['top hat', 'magic', 'gentleman', 'classy', 'circus']),
		bg: 'tophat',
		df: _Utils_Tuple2(8, 7)
	},
		{
		cg: 4,
		aW: '🎪',
		bc: _List_fromArray(
			['circus tent', 'festival', 'carnival', 'party']),
		bg: 'circus_tent',
		df: _Utils_Tuple2(8, 8)
	},
		{
		cg: 5,
		aW: '🎫',
		bc: _List_fromArray(
			['ticket', 'event', 'concert', 'pass']),
		bg: 'ticket',
		df: _Utils_Tuple2(8, 9)
	},
		{
		cg: 6,
		aW: '🎬',
		bc: _List_fromArray(
			['clapper board', 'movie', 'film', 'record']),
		bg: 'clapper',
		df: _Utils_Tuple2(8, 10)
	},
		{
		cg: 5,
		aW: '🎭',
		bc: _List_fromArray(
			['performing arts', 'acting', 'theater', 'drama']),
		bg: 'performing_arts',
		df: _Utils_Tuple2(8, 11)
	},
		{
		cg: 5,
		aW: '🎮',
		bc: _List_fromArray(
			['video game', 'play', 'console', 'PS4', 'controller']),
		bg: 'video_game',
		df: _Utils_Tuple2(8, 12)
	},
		{
		cg: 5,
		aW: '🎯',
		bc: _List_fromArray(
			['direct hit', 'game', 'play', 'bar', 'target', 'bullseye']),
		bg: 'dart',
		df: _Utils_Tuple2(8, 13)
	},
		{
		cg: 5,
		aW: '🎰',
		bc: _List_fromArray(
			['slot machine', 'bet', 'gamble', 'vegas', 'fruit machine', 'luck', 'casino']),
		bg: 'slot_machine',
		df: _Utils_Tuple2(8, 14)
	},
		{
		cg: 5,
		aW: '🎱',
		bc: _List_fromArray(
			['pool 8 ball', 'pool', 'hobby', 'game', 'luck', 'magic']),
		bg: '8ball',
		df: _Utils_Tuple2(8, 15)
	},
		{
		cg: 5,
		aW: '🎲',
		bc: _List_fromArray(
			['game die', 'dice', 'random', 'tabletop', 'play', 'luck']),
		bg: 'game_die',
		df: _Utils_Tuple2(8, 16)
	},
		{
		cg: 5,
		aW: '🎳',
		bc: _List_fromArray(
			['bowling', 'sports', 'fun', 'play']),
		bg: 'bowling',
		df: _Utils_Tuple2(8, 17)
	},
		{
		cg: 5,
		aW: '🎴',
		bc: _List_fromArray(
			['flower playing cards', 'game', 'sunset', 'red']),
		bg: 'flower_playing_cards',
		df: _Utils_Tuple2(8, 18)
	},
		{
		cg: 6,
		aW: '🎵',
		bc: _List_fromArray(
			['musical note', 'score', 'tone', 'sound']),
		bg: 'musical_note',
		df: _Utils_Tuple2(8, 19)
	},
		{
		cg: 6,
		aW: '🎶',
		bc: _List_fromArray(
			['musical notes', 'music', 'score']),
		bg: 'notes',
		df: _Utils_Tuple2(8, 20)
	},
		{
		cg: 6,
		aW: '🎷',
		bc: _List_fromArray(
			['saxophone', 'music', 'instrument', 'jazz', 'blues']),
		bg: 'saxophone',
		df: _Utils_Tuple2(8, 21)
	},
		{
		cg: 6,
		aW: '🎸',
		bc: _List_fromArray(
			['guitar', 'music', 'instrument']),
		bg: 'guitar',
		df: _Utils_Tuple2(8, 22)
	},
		{
		cg: 6,
		aW: '🎹',
		bc: _List_fromArray(
			['musical keyboard', 'piano', 'instrument', 'compose']),
		bg: 'musical_keyboard',
		df: _Utils_Tuple2(8, 23)
	},
		{
		cg: 6,
		aW: '🎺',
		bc: _List_fromArray(
			['trumpet', 'music', 'brass']),
		bg: 'trumpet',
		df: _Utils_Tuple2(8, 24)
	},
		{
		cg: 6,
		aW: '🎻',
		bc: _List_fromArray(
			['violin', 'music', 'instrument', 'orchestra', 'symphony']),
		bg: 'violin',
		df: _Utils_Tuple2(8, 25)
	},
		{
		cg: 6,
		aW: '🎼',
		bc: _List_fromArray(
			['musical score', 'treble', 'clef', 'compose']),
		bg: 'musical_score',
		df: _Utils_Tuple2(8, 26)
	},
		{
		cg: 5,
		aW: '🎽',
		bc: _List_fromArray(
			['running shirt', 'play', 'pageant']),
		bg: 'running_shirt_with_sash',
		df: _Utils_Tuple2(8, 27)
	},
		{
		cg: 5,
		aW: '🎾',
		bc: _List_fromArray(
			['tennis', 'sports', 'balls', 'green']),
		bg: 'tennis',
		df: _Utils_Tuple2(8, 28)
	},
		{
		cg: 5,
		aW: '🎿',
		bc: _List_fromArray(
			['skis', 'sports', 'winter', 'cold', 'snow']),
		bg: 'ski',
		df: _Utils_Tuple2(8, 29)
	},
		{
		cg: 5,
		aW: '🏀',
		bc: _List_fromArray(
			['basketball', 'sports', 'balls', 'NBA']),
		bg: 'basketball',
		df: _Utils_Tuple2(8, 30)
	},
		{
		cg: 8,
		aW: '🏁',
		bc: _List_fromArray(
			['chequered flag', 'contest', 'finishline', 'race', 'gokart']),
		bg: 'checkered_flag',
		df: _Utils_Tuple2(8, 31)
	},
		{
		cg: 1,
		aW: '🏂',
		bc: _List_fromArray(
			['snowboarder', 'sports', 'winter']),
		bg: 'snowboarder',
		df: _Utils_Tuple2(8, 32)
	},
		{
		cg: 1,
		aW: '🏃\u200D♀️',
		bc: _List_fromArray(
			['woman running', 'woman', 'walking', 'exercise', 'race', 'running', 'female']),
		bg: 'woman-running',
		df: _Utils_Tuple2(8, 38)
	},
		{
		cg: 1,
		aW: '🏃\u200D♂️',
		bc: _List_fromArray(
			['man running', 'man', 'walking', 'exercise', 'race', 'running']),
		bg: 'man-running',
		df: _Utils_Tuple2(8, 44)
	},
		{
		cg: 1,
		aW: '🏃',
		bc: _List_fromArray(
			['person running']),
		bg: 'runner',
		df: _Utils_Tuple2(8, 50)
	},
		{
		cg: 1,
		aW: '🏄\u200D♀️',
		bc: _List_fromArray(
			['woman surfing', 'sports', 'ocean', 'sea', 'summer', 'beach', 'woman', 'female']),
		bg: 'woman-surfing',
		df: _Utils_Tuple2(8, 56)
	},
		{
		cg: 1,
		aW: '🏄\u200D♂️',
		bc: _List_fromArray(
			['man surfing', 'sports', 'ocean', 'sea', 'summer', 'beach']),
		bg: 'man-surfing',
		df: _Utils_Tuple2(9, 4)
	},
		{
		cg: 1,
		aW: '🏄',
		bc: _List_fromArray(
			['person surfing']),
		bg: 'surfer',
		df: _Utils_Tuple2(9, 10)
	},
		{
		cg: 5,
		aW: '🏅',
		bc: _List_fromArray(
			['sports medal', 'award', 'winning']),
		bg: 'sports_medal',
		df: _Utils_Tuple2(9, 16)
	},
		{
		cg: 5,
		aW: '🏆',
		bc: _List_fromArray(
			['trophy', 'win', 'award', 'contest', 'place', 'ftw', 'ceremony']),
		bg: 'trophy',
		df: _Utils_Tuple2(9, 17)
	},
		{
		cg: 1,
		aW: '🏇',
		bc: _List_fromArray(
			['horse racing', 'animal', 'betting', 'competition', 'gambling', 'luck']),
		bg: 'horse_racing',
		df: _Utils_Tuple2(9, 18)
	},
		{
		cg: 5,
		aW: '🏈',
		bc: _List_fromArray(
			['american football', 'sports', 'balls', 'NFL']),
		bg: 'football',
		df: _Utils_Tuple2(9, 24)
	},
		{
		cg: 5,
		aW: '🏉',
		bc: _List_fromArray(
			['rugby football', 'sports', 'team']),
		bg: 'rugby_football',
		df: _Utils_Tuple2(9, 25)
	},
		{
		cg: 1,
		aW: '🏊\u200D♀️',
		bc: _List_fromArray(
			['woman swimming', 'sports', 'exercise', 'human', 'athlete', 'water', 'summer', 'woman', 'female']),
		bg: 'woman-swimming',
		df: _Utils_Tuple2(9, 26)
	},
		{
		cg: 1,
		aW: '🏊\u200D♂️',
		bc: _List_fromArray(
			['man swimming', 'sports', 'exercise', 'human', 'athlete', 'water', 'summer']),
		bg: 'man-swimming',
		df: _Utils_Tuple2(9, 32)
	},
		{
		cg: 1,
		aW: '🏊',
		bc: _List_fromArray(
			['person swimming']),
		bg: 'swimmer',
		df: _Utils_Tuple2(9, 38)
	},
		{
		cg: 1,
		aW: '🏋️\u200D♀️',
		bc: _List_fromArray(
			['woman lifting weights', 'sports', 'training', 'exercise', 'woman', 'female']),
		bg: 'woman-lifting-weights',
		df: _Utils_Tuple2(9, 44)
	},
		{
		cg: 1,
		aW: '🏋️\u200D♂️',
		bc: _List_fromArray(
			['man lifting weights']),
		bg: 'man-lifting-weights',
		df: _Utils_Tuple2(9, 50)
	},
		{
		cg: 1,
		aW: '🏋️',
		bc: _List_fromArray(
			['person lifting weights', 'sports', 'training', 'exercise']),
		bg: 'weight_lifter',
		df: _Utils_Tuple2(9, 56)
	},
		{
		cg: 1,
		aW: '🏌️\u200D♀️',
		bc: _List_fromArray(
			['woman golfing', 'sports', 'business', 'woman', 'female']),
		bg: 'woman-golfing',
		df: _Utils_Tuple2(10, 4)
	},
		{
		cg: 1,
		aW: '🏌️\u200D♂️',
		bc: _List_fromArray(
			['man golfing']),
		bg: 'man-golfing',
		df: _Utils_Tuple2(10, 10)
	},
		{
		cg: 1,
		aW: '🏌️',
		bc: _List_fromArray(
			['person golfing', 'sports', 'business']),
		bg: 'golfer',
		df: _Utils_Tuple2(10, 16)
	},
		{
		cg: 4,
		aW: '🏍️',
		bc: _List_fromArray(
			['motorcycle', 'race', 'sports', 'fast']),
		bg: 'racing_motorcycle',
		df: _Utils_Tuple2(10, 22)
	},
		{
		cg: 4,
		aW: '🏎️',
		bc: _List_fromArray(
			['racing car', 'sports', 'race', 'fast', 'formula', 'f1']),
		bg: 'racing_car',
		df: _Utils_Tuple2(10, 23)
	},
		{
		cg: 5,
		aW: '\uD83C\uDFCF',
		bc: _List_fromArray(
			['cricket game', 'sports']),
		bg: 'cricket_bat_and_ball',
		df: _Utils_Tuple2(10, 24)
	},
		{
		cg: 5,
		aW: '\uD83C\uDFD0',
		bc: _List_fromArray(
			['volleyball', 'sports', 'balls']),
		bg: 'volleyball',
		df: _Utils_Tuple2(10, 25)
	},
		{
		cg: 5,
		aW: '\uD83C\uDFD1',
		bc: _List_fromArray(
			['field hockey', 'sports']),
		bg: 'field_hockey_stick_and_ball',
		df: _Utils_Tuple2(10, 26)
	},
		{
		cg: 5,
		aW: '\uD83C\uDFD2',
		bc: _List_fromArray(
			['ice hockey', 'sports']),
		bg: 'ice_hockey_stick_and_puck',
		df: _Utils_Tuple2(10, 27)
	},
		{
		cg: 5,
		aW: '\uD83C\uDFD3',
		bc: _List_fromArray(
			['ping pong', 'sports', 'pingpong']),
		bg: 'table_tennis_paddle_and_ball',
		df: _Utils_Tuple2(10, 28)
	},
		{
		cg: 4,
		aW: '🏔️',
		bc: _List_fromArray(
			['snow capped mountain', 'photo', 'nature', 'environment', 'winter', 'cold']),
		bg: 'snow_capped_mountain',
		df: _Utils_Tuple2(10, 29)
	},
		{
		cg: 4,
		aW: '🏕️',
		bc: _List_fromArray(
			['camping', 'photo', 'outdoors', 'tent']),
		bg: 'camping',
		df: _Utils_Tuple2(10, 30)
	},
		{
		cg: 4,
		aW: '🏖️',
		bc: _List_fromArray(
			['beach with umbrella', 'weather', 'summer', 'sunny', 'sand', 'mojito']),
		bg: 'beach_with_umbrella',
		df: _Utils_Tuple2(10, 31)
	},
		{
		cg: 4,
		aW: '🏗️',
		bc: _List_fromArray(
			['building construction', 'wip', 'working', 'progress']),
		bg: 'building_construction',
		df: _Utils_Tuple2(10, 32)
	},
		{
		cg: 4,
		aW: '🏘️',
		bc: _List_fromArray(
			['houses', 'buildings', 'photo']),
		bg: 'house_buildings',
		df: _Utils_Tuple2(10, 33)
	},
		{
		cg: 4,
		aW: '🏙️',
		bc: _List_fromArray(
			['cityscape', 'photo', 'night life', 'urban']),
		bg: 'cityscape',
		df: _Utils_Tuple2(10, 34)
	},
		{
		cg: 4,
		aW: '🏚️',
		bc: _List_fromArray(
			['derelict house', 'abandon', 'evict', 'broken', 'building']),
		bg: 'derelict_house_building',
		df: _Utils_Tuple2(10, 35)
	},
		{
		cg: 4,
		aW: '🏛️',
		bc: _List_fromArray(
			['classical building', 'art', 'culture', 'history']),
		bg: 'classical_building',
		df: _Utils_Tuple2(10, 36)
	},
		{
		cg: 4,
		aW: '🏜️',
		bc: _List_fromArray(
			['desert', 'photo', 'warm', 'saharah']),
		bg: 'desert',
		df: _Utils_Tuple2(10, 37)
	},
		{
		cg: 4,
		aW: '🏝️',
		bc: _List_fromArray(
			['desert island', 'photo', 'tropical', 'mojito']),
		bg: 'desert_island',
		df: _Utils_Tuple2(10, 38)
	},
		{
		cg: 4,
		aW: '🏞️',
		bc: _List_fromArray(
			['national park', 'photo', 'environment', 'nature']),
		bg: 'national_park',
		df: _Utils_Tuple2(10, 39)
	},
		{
		cg: 4,
		aW: '🏟️',
		bc: _List_fromArray(
			['stadium', 'photo', 'place', 'sports', 'concert', 'venue']),
		bg: 'stadium',
		df: _Utils_Tuple2(10, 40)
	},
		{
		cg: 4,
		aW: '🏠',
		bc: _List_fromArray(
			['house', 'building', 'home']),
		bg: 'house',
		df: _Utils_Tuple2(10, 41)
	},
		{
		cg: 4,
		aW: '🏡',
		bc: _List_fromArray(
			['house with garden', 'home', 'plant', 'nature']),
		bg: 'house_with_garden',
		df: _Utils_Tuple2(10, 42)
	},
		{
		cg: 4,
		aW: '🏢',
		bc: _List_fromArray(
			['office building', 'building', 'bureau', 'work']),
		bg: 'office',
		df: _Utils_Tuple2(10, 43)
	},
		{
		cg: 4,
		aW: '🏣',
		bc: _List_fromArray(
			['japanese post office', 'building', 'envelope', 'communication']),
		bg: 'post_office',
		df: _Utils_Tuple2(10, 44)
	},
		{
		cg: 4,
		aW: '🏤',
		bc: _List_fromArray(
			['post office', 'building', 'email']),
		bg: 'european_post_office',
		df: _Utils_Tuple2(10, 45)
	},
		{
		cg: 4,
		aW: '🏥',
		bc: _List_fromArray(
			['hospital', 'building', 'health', 'surgery', 'doctor']),
		bg: 'hospital',
		df: _Utils_Tuple2(10, 46)
	},
		{
		cg: 4,
		aW: '🏦',
		bc: _List_fromArray(
			['bank', 'building', 'money', 'sales', 'cash', 'business', 'enterprise']),
		bg: 'bank',
		df: _Utils_Tuple2(10, 47)
	},
		{
		cg: 7,
		aW: '🏧',
		bc: _List_fromArray(
			['atm sign', 'money', 'sales', 'cash', 'blue square', 'payment', 'bank']),
		bg: 'atm',
		df: _Utils_Tuple2(10, 48)
	},
		{
		cg: 4,
		aW: '🏨',
		bc: _List_fromArray(
			['hotel', 'building', 'accomodation', 'checkin']),
		bg: 'hotel',
		df: _Utils_Tuple2(10, 49)
	},
		{
		cg: 4,
		aW: '🏩',
		bc: _List_fromArray(
			['love hotel', 'like', 'affection', 'dating']),
		bg: 'love_hotel',
		df: _Utils_Tuple2(10, 50)
	},
		{
		cg: 4,
		aW: '🏪',
		bc: _List_fromArray(
			['convenience store', 'building', 'shopping', 'groceries']),
		bg: 'convenience_store',
		df: _Utils_Tuple2(10, 51)
	},
		{
		cg: 4,
		aW: '🏫',
		bc: _List_fromArray(
			['school', 'building', 'student', 'education', 'learn', 'teach']),
		bg: 'school',
		df: _Utils_Tuple2(10, 52)
	},
		{
		cg: 4,
		aW: '🏬',
		bc: _List_fromArray(
			['department store', 'building', 'shopping', 'mall']),
		bg: 'department_store',
		df: _Utils_Tuple2(10, 53)
	},
		{
		cg: 4,
		aW: '🏭',
		bc: _List_fromArray(
			['factory', 'building', 'industry', 'pollution', 'smoke']),
		bg: 'factory',
		df: _Utils_Tuple2(10, 54)
	},
		{
		cg: 6,
		aW: '🏮',
		bc: _List_fromArray(
			['red paper lantern', 'light', 'paper', 'halloween', 'spooky']),
		bg: 'izakaya_lantern',
		df: _Utils_Tuple2(10, 55)
	},
		{
		cg: 4,
		aW: '🏯',
		bc: _List_fromArray(
			['japanese castle', 'photo', 'building']),
		bg: 'japanese_castle',
		df: _Utils_Tuple2(10, 56)
	},
		{
		cg: 4,
		aW: '🏰',
		bc: _List_fromArray(
			['castle', 'building', 'royalty', 'history']),
		bg: 'european_castle',
		df: _Utils_Tuple2(10, 57)
	},
		{
		cg: 8,
		aW: '🏳️\u200D🌈',
		bc: _List_fromArray(
			['rainbow flag', 'flag', 'rainbow', 'pride', 'gay', 'lgbt', 'glbt', 'queer', 'homosexual', 'lesbian', 'bisexual', 'transgender']),
		bg: 'rainbow-flag',
		df: _Utils_Tuple2(11, 0)
	},
		{
		cg: 8,
		aW: '🏳️\u200D⚧️',
		bc: _List_fromArray(
			['transgender flag', 'lgbtq']),
		bg: 'transgender_flag',
		df: _Utils_Tuple2(11, 1)
	},
		{
		cg: 8,
		aW: '🏳️',
		bc: _List_fromArray(
			['white flag', 'losing', 'loser', 'lost', 'surrender', 'give up', 'fail']),
		bg: 'waving_white_flag',
		df: _Utils_Tuple2(11, 2)
	},
		{
		cg: 8,
		aW: '🏴\u200D☠️',
		bc: _List_fromArray(
			['pirate flag', 'skull', 'crossbones', 'flag', 'banner']),
		bg: 'pirate_flag',
		df: _Utils_Tuple2(11, 3)
	},
		{
		cg: 8,
		aW: '🏴\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F',
		bc: _List_fromArray(
			['flag england', 'flag', 'english']),
		bg: 'flag-england',
		df: _Utils_Tuple2(11, 4)
	},
		{
		cg: 8,
		aW: '🏴\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F',
		bc: _List_fromArray(
			['flag scotland', 'flag', 'scottish']),
		bg: 'flag-scotland',
		df: _Utils_Tuple2(11, 5)
	},
		{
		cg: 8,
		aW: '🏴\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F',
		bc: _List_fromArray(
			['flag wales', 'flag', 'welsh']),
		bg: 'flag-wales',
		df: _Utils_Tuple2(11, 6)
	},
		{
		cg: 8,
		aW: '🏴',
		bc: _List_fromArray(
			['black flag', 'pirate']),
		bg: 'waving_black_flag',
		df: _Utils_Tuple2(11, 7)
	},
		{
		cg: 2,
		aW: '🏵️',
		bc: _List_fromArray(
			['rosette', 'flower', 'decoration', 'military']),
		bg: 'rosette',
		df: _Utils_Tuple2(11, 8)
	},
		{
		cg: 6,
		aW: '🏷️',
		bc: _List_fromArray(
			['label', 'sale', 'tag']),
		bg: 'label',
		df: _Utils_Tuple2(11, 9)
	},
		{
		cg: 5,
		aW: '\uD83C\uDFF8',
		bc: _List_fromArray(
			['badminton', 'sports']),
		bg: 'badminton_racquet_and_shuttlecock',
		df: _Utils_Tuple2(11, 10)
	},
		{
		cg: 6,
		aW: '\uD83C\uDFF9',
		bc: _List_fromArray(
			['bow and arrow', 'sports']),
		bg: 'bow_and_arrow',
		df: _Utils_Tuple2(11, 11)
	},
		{
		cg: 3,
		aW: '\uD83C\uDFFA',
		bc: _List_fromArray(
			['amphora', 'vase', 'jar']),
		bg: 'amphora',
		df: _Utils_Tuple2(11, 12)
	},
		{
		cg: 9,
		aW: '\uD83C\uDFFB',
		bc: _List_Nil,
		bg: 'skin-tone-2',
		df: _Utils_Tuple2(11, 13)
	},
		{
		cg: 9,
		aW: '\uD83C\uDFFC',
		bc: _List_Nil,
		bg: 'skin-tone-3',
		df: _Utils_Tuple2(11, 14)
	},
		{
		cg: 9,
		aW: '\uD83C\uDFFD',
		bc: _List_Nil,
		bg: 'skin-tone-4',
		df: _Utils_Tuple2(11, 15)
	},
		{
		cg: 9,
		aW: '\uD83C\uDFFE',
		bc: _List_Nil,
		bg: 'skin-tone-5',
		df: _Utils_Tuple2(11, 16)
	},
		{
		cg: 9,
		aW: '\uD83C\uDFFF',
		bc: _List_Nil,
		bg: 'skin-tone-6',
		df: _Utils_Tuple2(11, 17)
	},
		{
		cg: 2,
		aW: '🐀',
		bc: _List_fromArray(
			['rat', 'animal', 'mouse', 'rodent']),
		bg: 'rat',
		df: _Utils_Tuple2(11, 18)
	},
		{
		cg: 2,
		aW: '🐁',
		bc: _List_fromArray(
			['mouse', 'animal', 'nature', 'rodent']),
		bg: 'mouse2',
		df: _Utils_Tuple2(11, 19)
	},
		{
		cg: 2,
		aW: '🐂',
		bc: _List_fromArray(
			['ox', 'animal', 'cow', 'beef']),
		bg: 'ox',
		df: _Utils_Tuple2(11, 20)
	},
		{
		cg: 2,
		aW: '🐃',
		bc: _List_fromArray(
			['water buffalo', 'animal', 'nature', 'ox', 'cow']),
		bg: 'water_buffalo',
		df: _Utils_Tuple2(11, 21)
	},
		{
		cg: 2,
		aW: '🐄',
		bc: _List_fromArray(
			['cow', 'beef', 'ox', 'animal', 'nature', 'moo', 'milk']),
		bg: 'cow2',
		df: _Utils_Tuple2(11, 22)
	},
		{
		cg: 2,
		aW: '🐅',
		bc: _List_fromArray(
			['tiger', 'animal', 'nature', 'roar']),
		bg: 'tiger2',
		df: _Utils_Tuple2(11, 23)
	},
		{
		cg: 2,
		aW: '🐆',
		bc: _List_fromArray(
			['leopard', 'animal', 'nature']),
		bg: 'leopard',
		df: _Utils_Tuple2(11, 24)
	},
		{
		cg: 2,
		aW: '🐇',
		bc: _List_fromArray(
			['rabbit', 'animal', 'nature', 'pet', 'magic', 'spring']),
		bg: 'rabbit2',
		df: _Utils_Tuple2(11, 25)
	},
		{
		cg: 2,
		aW: '🐈\u200D⬛',
		bc: _List_fromArray(
			['black cat', 'superstition', 'luck']),
		bg: 'black_cat',
		df: _Utils_Tuple2(11, 26)
	},
		{
		cg: 2,
		aW: '🐈',
		bc: _List_fromArray(
			['cat', 'animal', 'meow', 'pet', 'cats']),
		bg: 'cat2',
		df: _Utils_Tuple2(11, 27)
	},
		{
		cg: 2,
		aW: '🐉',
		bc: _List_fromArray(
			['dragon', 'animal', 'myth', 'nature', 'chinese', 'green']),
		bg: 'dragon',
		df: _Utils_Tuple2(11, 28)
	},
		{
		cg: 2,
		aW: '🐊',
		bc: _List_fromArray(
			['crocodile', 'animal', 'nature', 'reptile', 'lizard', 'alligator']),
		bg: 'crocodile',
		df: _Utils_Tuple2(11, 29)
	},
		{
		cg: 2,
		aW: '🐋',
		bc: _List_fromArray(
			['whale', 'animal', 'nature', 'sea', 'ocean']),
		bg: 'whale2',
		df: _Utils_Tuple2(11, 30)
	},
		{
		cg: 2,
		aW: '🐌',
		bc: _List_fromArray(
			['snail', 'slow', 'animal', 'shell']),
		bg: 'snail',
		df: _Utils_Tuple2(11, 31)
	},
		{
		cg: 2,
		aW: '🐍',
		bc: _List_fromArray(
			['snake', 'animal', 'evil', 'nature', 'hiss', 'python']),
		bg: 'snake',
		df: _Utils_Tuple2(11, 32)
	},
		{
		cg: 2,
		aW: '🐎',
		bc: _List_fromArray(
			['horse', 'animal', 'gamble', 'luck']),
		bg: 'racehorse',
		df: _Utils_Tuple2(11, 33)
	},
		{
		cg: 2,
		aW: '🐏',
		bc: _List_fromArray(
			['ram', 'animal', 'sheep', 'nature']),
		bg: 'ram',
		df: _Utils_Tuple2(11, 34)
	},
		{
		cg: 2,
		aW: '🐐',
		bc: _List_fromArray(
			['goat', 'animal', 'nature']),
		bg: 'goat',
		df: _Utils_Tuple2(11, 35)
	},
		{
		cg: 2,
		aW: '🐑',
		bc: _List_fromArray(
			['ewe', 'animal', 'nature', 'wool', 'shipit']),
		bg: 'sheep',
		df: _Utils_Tuple2(11, 36)
	},
		{
		cg: 2,
		aW: '🐒',
		bc: _List_fromArray(
			['monkey', 'animal', 'nature', 'banana', 'circus']),
		bg: 'monkey',
		df: _Utils_Tuple2(11, 37)
	},
		{
		cg: 2,
		aW: '🐓',
		bc: _List_fromArray(
			['rooster', 'animal', 'nature', 'chicken']),
		bg: 'rooster',
		df: _Utils_Tuple2(11, 38)
	},
		{
		cg: 2,
		aW: '🐔',
		bc: _List_fromArray(
			['chicken', 'animal', 'cluck', 'nature', 'bird']),
		bg: 'chicken',
		df: _Utils_Tuple2(11, 39)
	},
		{
		cg: 2,
		aW: '🐕\u200D\uD83E\uDDBA',
		bc: _List_fromArray(
			['service dog']),
		bg: 'service_dog',
		df: _Utils_Tuple2(11, 40)
	},
		{
		cg: 2,
		aW: '🐕',
		bc: _List_fromArray(
			['dog', 'animal', 'nature', 'friend', 'doge', 'pet', 'faithful']),
		bg: 'dog2',
		df: _Utils_Tuple2(11, 41)
	},
		{
		cg: 2,
		aW: '🐖',
		bc: _List_fromArray(
			['pig', 'animal', 'nature']),
		bg: 'pig2',
		df: _Utils_Tuple2(11, 42)
	},
		{
		cg: 2,
		aW: '🐗',
		bc: _List_fromArray(
			['boar', 'animal', 'nature']),
		bg: 'boar',
		df: _Utils_Tuple2(11, 43)
	},
		{
		cg: 2,
		aW: '🐘',
		bc: _List_fromArray(
			['elephant', 'animal', 'nature', 'nose', 'th', 'circus']),
		bg: 'elephant',
		df: _Utils_Tuple2(11, 44)
	},
		{
		cg: 2,
		aW: '🐙',
		bc: _List_fromArray(
			['octopus', 'animal', 'creature', 'ocean', 'sea', 'nature', 'beach']),
		bg: 'octopus',
		df: _Utils_Tuple2(11, 45)
	},
		{
		cg: 2,
		aW: '🐚',
		bc: _List_fromArray(
			['spiral shell', 'nature', 'sea', 'beach']),
		bg: 'shell',
		df: _Utils_Tuple2(11, 46)
	},
		{
		cg: 2,
		aW: '🐛',
		bc: _List_fromArray(
			['bug', 'animal', 'insect', 'nature', 'worm']),
		bg: 'bug',
		df: _Utils_Tuple2(11, 47)
	},
		{
		cg: 2,
		aW: '🐜',
		bc: _List_fromArray(
			['ant', 'animal', 'insect', 'nature', 'bug']),
		bg: 'ant',
		df: _Utils_Tuple2(11, 48)
	},
		{
		cg: 2,
		aW: '🐝',
		bc: _List_fromArray(
			['honeybee', 'animal', 'insect', 'nature', 'bug', 'spring', 'honey']),
		bg: 'bee',
		df: _Utils_Tuple2(11, 49)
	},
		{
		cg: 2,
		aW: '🐞',
		bc: _List_fromArray(
			['lady beetle', 'animal', 'insect', 'nature', 'ladybug']),
		bg: 'beetle',
		df: _Utils_Tuple2(11, 50)
	},
		{
		cg: 2,
		aW: '🐟',
		bc: _List_fromArray(
			['fish', 'animal', 'food', 'nature']),
		bg: 'fish',
		df: _Utils_Tuple2(11, 51)
	},
		{
		cg: 2,
		aW: '🐠',
		bc: _List_fromArray(
			['tropical fish', 'animal', 'swim', 'ocean', 'beach', 'nemo']),
		bg: 'tropical_fish',
		df: _Utils_Tuple2(11, 52)
	},
		{
		cg: 2,
		aW: '🐡',
		bc: _List_fromArray(
			['blowfish', 'animal', 'nature', 'food', 'sea', 'ocean']),
		bg: 'blowfish',
		df: _Utils_Tuple2(11, 53)
	},
		{
		cg: 2,
		aW: '🐢',
		bc: _List_fromArray(
			['turtle', 'animal', 'slow', 'nature', 'tortoise']),
		bg: 'turtle',
		df: _Utils_Tuple2(11, 54)
	},
		{
		cg: 2,
		aW: '🐣',
		bc: _List_fromArray(
			['hatching chick', 'animal', 'chicken', 'egg', 'born', 'baby', 'bird']),
		bg: 'hatching_chick',
		df: _Utils_Tuple2(11, 55)
	},
		{
		cg: 2,
		aW: '🐤',
		bc: _List_fromArray(
			['baby chick', 'animal', 'chicken', 'bird']),
		bg: 'baby_chick',
		df: _Utils_Tuple2(11, 56)
	},
		{
		cg: 2,
		aW: '🐥',
		bc: _List_fromArray(
			['front facing baby chick', 'animal', 'chicken', 'baby', 'bird']),
		bg: 'hatched_chick',
		df: _Utils_Tuple2(11, 57)
	},
		{
		cg: 2,
		aW: '🐦',
		bc: _List_fromArray(
			['bird', 'animal', 'nature', 'fly', 'tweet', 'spring']),
		bg: 'bird',
		df: _Utils_Tuple2(12, 0)
	},
		{
		cg: 2,
		aW: '🐧',
		bc: _List_fromArray(
			['penguin', 'animal', 'nature']),
		bg: 'penguin',
		df: _Utils_Tuple2(12, 1)
	},
		{
		cg: 2,
		aW: '🐨',
		bc: _List_fromArray(
			['koala', 'animal', 'nature']),
		bg: 'koala',
		df: _Utils_Tuple2(12, 2)
	},
		{
		cg: 2,
		aW: '🐩',
		bc: _List_fromArray(
			['poodle', 'dog', 'animal', '101', 'nature', 'pet']),
		bg: 'poodle',
		df: _Utils_Tuple2(12, 3)
	},
		{
		cg: 2,
		aW: '🐪',
		bc: _List_fromArray(
			['camel', 'animal', 'hot', 'desert', 'hump']),
		bg: 'dromedary_camel',
		df: _Utils_Tuple2(12, 4)
	},
		{
		cg: 2,
		aW: '🐫',
		bc: _List_fromArray(
			['two hump camel', 'animal', 'nature', 'hot', 'desert', 'hump']),
		bg: 'camel',
		df: _Utils_Tuple2(12, 5)
	},
		{
		cg: 2,
		aW: '🐬',
		bc: _List_fromArray(
			['dolphin', 'animal', 'nature', 'fish', 'sea', 'ocean', 'flipper', 'fins', 'beach']),
		bg: 'dolphin',
		df: _Utils_Tuple2(12, 6)
	},
		{
		cg: 2,
		aW: '🐭',
		bc: _List_fromArray(
			['mouse face', 'animal', 'nature', 'cheese wedge', 'rodent']),
		bg: 'mouse',
		df: _Utils_Tuple2(12, 7)
	},
		{
		cg: 2,
		aW: '🐮',
		bc: _List_fromArray(
			['cow face', 'beef', 'ox', 'animal', 'nature', 'moo', 'milk']),
		bg: 'cow',
		df: _Utils_Tuple2(12, 8)
	},
		{
		cg: 2,
		aW: '🐯',
		bc: _List_fromArray(
			['tiger face', 'animal', 'cat', 'danger', 'wild', 'nature', 'roar']),
		bg: 'tiger',
		df: _Utils_Tuple2(12, 9)
	},
		{
		cg: 2,
		aW: '🐰',
		bc: _List_fromArray(
			['rabbit face', 'animal', 'nature', 'pet', 'spring', 'magic', 'bunny']),
		bg: 'rabbit',
		df: _Utils_Tuple2(12, 10)
	},
		{
		cg: 2,
		aW: '🐱',
		bc: _List_fromArray(
			['cat face', 'animal', 'meow', 'nature', 'pet', 'kitten']),
		bg: 'cat',
		df: _Utils_Tuple2(12, 11)
	},
		{
		cg: 2,
		aW: '🐲',
		bc: _List_fromArray(
			['dragon face', 'animal', 'myth', 'nature', 'chinese', 'green']),
		bg: 'dragon_face',
		df: _Utils_Tuple2(12, 12)
	},
		{
		cg: 2,
		aW: '🐳',
		bc: _List_fromArray(
			['spouting whale', 'animal', 'nature', 'sea', 'ocean']),
		bg: 'whale',
		df: _Utils_Tuple2(12, 13)
	},
		{
		cg: 2,
		aW: '🐴',
		bc: _List_fromArray(
			['horse face', 'animal', 'brown', 'nature']),
		bg: 'horse',
		df: _Utils_Tuple2(12, 14)
	},
		{
		cg: 2,
		aW: '🐵',
		bc: _List_fromArray(
			['monkey face', 'animal', 'nature', 'circus']),
		bg: 'monkey_face',
		df: _Utils_Tuple2(12, 15)
	},
		{
		cg: 2,
		aW: '🐶',
		bc: _List_fromArray(
			['dog face', 'animal', 'friend', 'nature', 'woof', 'puppy', 'pet', 'faithful']),
		bg: 'dog',
		df: _Utils_Tuple2(12, 16)
	},
		{
		cg: 2,
		aW: '🐷',
		bc: _List_fromArray(
			['pig face', 'animal', 'oink', 'nature']),
		bg: 'pig',
		df: _Utils_Tuple2(12, 17)
	},
		{
		cg: 2,
		aW: '🐸',
		bc: _List_fromArray(
			['frog', 'animal', 'nature', 'croak', 'toad']),
		bg: 'frog',
		df: _Utils_Tuple2(12, 18)
	},
		{
		cg: 2,
		aW: '🐹',
		bc: _List_fromArray(
			['hamster', 'animal', 'nature']),
		bg: 'hamster',
		df: _Utils_Tuple2(12, 19)
	},
		{
		cg: 2,
		aW: '🐺',
		bc: _List_fromArray(
			['wolf', 'animal', 'nature', 'wild']),
		bg: 'wolf',
		df: _Utils_Tuple2(12, 20)
	},
		{
		cg: 2,
		aW: '🐻\u200D❄️',
		bc: _List_fromArray(
			['polar bear', 'animal', 'arctic']),
		bg: 'polar_bear',
		df: _Utils_Tuple2(12, 21)
	},
		{
		cg: 2,
		aW: '🐻',
		bc: _List_fromArray(
			['bear', 'animal', 'nature', 'wild']),
		bg: 'bear',
		df: _Utils_Tuple2(12, 22)
	},
		{
		cg: 2,
		aW: '🐼',
		bc: _List_fromArray(
			['panda', 'animal', 'nature', 'panda']),
		bg: 'panda_face',
		df: _Utils_Tuple2(12, 23)
	},
		{
		cg: 2,
		aW: '🐽',
		bc: _List_fromArray(
			['pig nose', 'animal', 'oink']),
		bg: 'pig_nose',
		df: _Utils_Tuple2(12, 24)
	},
		{
		cg: 2,
		aW: '🐾',
		bc: _List_fromArray(
			['paw prints', 'animal', 'tracking', 'footprints', 'dog', 'cat', 'pet', 'feet']),
		bg: 'feet',
		df: _Utils_Tuple2(12, 25)
	},
		{
		cg: 2,
		aW: '🐿️',
		bc: _List_fromArray(
			['chipmunk', 'animal', 'nature', 'rodent', 'squirrel']),
		bg: 'chipmunk',
		df: _Utils_Tuple2(12, 26)
	},
		{
		cg: 1,
		aW: '👀',
		bc: _List_fromArray(
			['eyes', 'look', 'watch', 'stalk', 'peek', 'see']),
		bg: 'eyes',
		df: _Utils_Tuple2(12, 27)
	},
		{
		cg: 0,
		aW: '👁️\u200D🗨️',
		bc: _List_fromArray(
			['eye in speech bubble']),
		bg: 'eye-in-speech-bubble',
		df: _Utils_Tuple2(12, 28)
	},
		{
		cg: 1,
		aW: '👁️',
		bc: _List_fromArray(
			['eye', 'face', 'look', 'see', 'watch', 'stare']),
		bg: 'eye',
		df: _Utils_Tuple2(12, 29)
	},
		{
		cg: 1,
		aW: '👂',
		bc: _List_fromArray(
			['ear', 'face', 'hear', 'sound', 'listen']),
		bg: 'ear',
		df: _Utils_Tuple2(12, 30)
	},
		{
		cg: 1,
		aW: '👃',
		bc: _List_fromArray(
			['nose', 'smell', 'sniff']),
		bg: 'nose',
		df: _Utils_Tuple2(12, 36)
	},
		{
		cg: 1,
		aW: '👄',
		bc: _List_fromArray(
			['mouth', 'mouth', 'kiss']),
		bg: 'lips',
		df: _Utils_Tuple2(12, 42)
	},
		{
		cg: 1,
		aW: '👅',
		bc: _List_fromArray(
			['tongue', 'mouth', 'playful']),
		bg: 'tongue',
		df: _Utils_Tuple2(12, 43)
	},
		{
		cg: 1,
		aW: '👆',
		bc: _List_fromArray(
			['backhand index pointing up', 'fingers', 'hand', 'direction', 'up']),
		bg: 'point_up_2',
		df: _Utils_Tuple2(12, 44)
	},
		{
		cg: 1,
		aW: '👇',
		bc: _List_fromArray(
			['backhand index pointing down', 'fingers', 'hand', 'direction', 'down']),
		bg: 'point_down',
		df: _Utils_Tuple2(12, 50)
	},
		{
		cg: 1,
		aW: '👈',
		bc: _List_fromArray(
			['backhand index pointing left', 'direction', 'fingers', 'hand', 'left']),
		bg: 'point_left',
		df: _Utils_Tuple2(12, 56)
	},
		{
		cg: 1,
		aW: '👉',
		bc: _List_fromArray(
			['backhand index pointing right', 'fingers', 'hand', 'direction', 'right']),
		bg: 'point_right',
		df: _Utils_Tuple2(13, 4)
	},
		{
		cg: 1,
		aW: '👊',
		bc: _List_fromArray(
			['oncoming fist', 'angry', 'violence', 'fist', 'hit', 'attack', 'hand']),
		bg: 'facepunch',
		df: _Utils_Tuple2(13, 10)
	},
		{
		cg: 1,
		aW: '👋',
		bc: _List_fromArray(
			['waving hand', 'hands', 'gesture', 'goodbye', 'solong', 'farewell', 'hello', 'hi', 'palm']),
		bg: 'wave',
		df: _Utils_Tuple2(13, 16)
	},
		{
		cg: 1,
		aW: '👌',
		bc: _List_fromArray(
			['ok hand', 'fingers', 'limbs', 'perfect', 'ok', 'okay']),
		bg: 'ok_hand',
		df: _Utils_Tuple2(13, 22)
	},
		{
		cg: 1,
		aW: '👍',
		bc: _List_fromArray(
			['thumbs up', 'thumbsup', 'yes', 'awesome', 'good', 'agree', 'accept', 'cool', 'hand', 'like']),
		bg: '+1',
		df: _Utils_Tuple2(13, 28)
	},
		{
		cg: 1,
		aW: '👎',
		bc: _List_fromArray(
			['thumbs down', 'thumbsdown', 'no', 'dislike', 'hand']),
		bg: '-1',
		df: _Utils_Tuple2(13, 34)
	},
		{
		cg: 1,
		aW: '👏',
		bc: _List_fromArray(
			['clapping hands', 'hands', 'praise', 'applause', 'congrats', 'yay']),
		bg: 'clap',
		df: _Utils_Tuple2(13, 40)
	},
		{
		cg: 1,
		aW: '👐',
		bc: _List_fromArray(
			['open hands', 'fingers', 'butterfly', 'hands', 'open']),
		bg: 'open_hands',
		df: _Utils_Tuple2(13, 46)
	},
		{
		cg: 6,
		aW: '👑',
		bc: _List_fromArray(
			['crown', 'king', 'kod', 'leader', 'royalty', 'lord']),
		bg: 'crown',
		df: _Utils_Tuple2(13, 52)
	},
		{
		cg: 6,
		aW: '👒',
		bc: _List_fromArray(
			['woman s hat', 'fashion', 'accessories', 'female', 'lady', 'spring']),
		bg: 'womans_hat',
		df: _Utils_Tuple2(13, 53)
	},
		{
		cg: 6,
		aW: '👓',
		bc: _List_fromArray(
			['glasses', 'fashion', 'accessories', 'eyesight', 'nerdy', 'dork', 'geek']),
		bg: 'eyeglasses',
		df: _Utils_Tuple2(13, 54)
	},
		{
		cg: 6,
		aW: '👔',
		bc: _List_fromArray(
			['necktie', 'shirt', 'suitup', 'formal', 'fashion', 'cloth', 'business']),
		bg: 'necktie',
		df: _Utils_Tuple2(13, 55)
	},
		{
		cg: 6,
		aW: '👕',
		bc: _List_fromArray(
			['t shirt', 'fashion', 'cloth', 'casual', 'shirt', 'tee']),
		bg: 'shirt',
		df: _Utils_Tuple2(13, 56)
	},
		{
		cg: 6,
		aW: '👖',
		bc: _List_fromArray(
			['jeans', 'fashion', 'shopping']),
		bg: 'jeans',
		df: _Utils_Tuple2(13, 57)
	},
		{
		cg: 6,
		aW: '👗',
		bc: _List_fromArray(
			['dress', 'clothes', 'fashion', 'shopping']),
		bg: 'dress',
		df: _Utils_Tuple2(14, 0)
	},
		{
		cg: 6,
		aW: '👘',
		bc: _List_fromArray(
			['kimono', 'dress', 'fashion', 'women', 'female', 'japanese']),
		bg: 'kimono',
		df: _Utils_Tuple2(14, 1)
	},
		{
		cg: 6,
		aW: '👙',
		bc: _List_fromArray(
			['bikini', 'swimming', 'female', 'woman', 'girl', 'fashion', 'beach', 'summer']),
		bg: 'bikini',
		df: _Utils_Tuple2(14, 2)
	},
		{
		cg: 6,
		aW: '👚',
		bc: _List_fromArray(
			['woman s clothes', 'fashion', 'shopping bags', 'female']),
		bg: 'womans_clothes',
		df: _Utils_Tuple2(14, 3)
	},
		{
		cg: 6,
		aW: '👛',
		bc: _List_fromArray(
			['purse', 'fashion', 'accessories', 'money', 'sales', 'shopping']),
		bg: 'purse',
		df: _Utils_Tuple2(14, 4)
	},
		{
		cg: 6,
		aW: '👜',
		bc: _List_fromArray(
			['handbag', 'fashion', 'accessory', 'accessories', 'shopping']),
		bg: 'handbag',
		df: _Utils_Tuple2(14, 5)
	},
		{
		cg: 6,
		aW: '👝',
		bc: _List_fromArray(
			['clutch bag', 'bag', 'accessories', 'shopping']),
		bg: 'pouch',
		df: _Utils_Tuple2(14, 6)
	},
		{
		cg: 6,
		aW: '👞',
		bc: _List_fromArray(
			['man s shoe', 'fashion', 'male']),
		bg: 'mans_shoe',
		df: _Utils_Tuple2(14, 7)
	},
		{
		cg: 6,
		aW: '👟',
		bc: _List_fromArray(
			['running shoe', 'shoes', 'sports', 'sneakers']),
		bg: 'athletic_shoe',
		df: _Utils_Tuple2(14, 8)
	},
		{
		cg: 6,
		aW: '👠',
		bc: _List_fromArray(
			['high heeled shoe', 'fashion', 'shoes', 'female', 'pumps', 'stiletto']),
		bg: 'high_heel',
		df: _Utils_Tuple2(14, 9)
	},
		{
		cg: 6,
		aW: '👡',
		bc: _List_fromArray(
			['woman s sandal', 'shoes', 'fashion', 'flip flops']),
		bg: 'sandal',
		df: _Utils_Tuple2(14, 10)
	},
		{
		cg: 6,
		aW: '👢',
		bc: _List_fromArray(
			['woman s boot', 'shoes', 'fashion']),
		bg: 'boot',
		df: _Utils_Tuple2(14, 11)
	},
		{
		cg: 1,
		aW: '👣',
		bc: _List_fromArray(
			['footprints', 'feet', 'tracking', 'walking', 'beach']),
		bg: 'footprints',
		df: _Utils_Tuple2(14, 12)
	},
		{
		cg: 1,
		aW: '👤',
		bc: _List_fromArray(
			['bust in silhouette', 'user', 'person', 'human']),
		bg: 'bust_in_silhouette',
		df: _Utils_Tuple2(14, 13)
	},
		{
		cg: 1,
		aW: '👥',
		bc: _List_fromArray(
			['busts in silhouette', 'user', 'person', 'human', 'group', 'team']),
		bg: 'busts_in_silhouette',
		df: _Utils_Tuple2(14, 14)
	},
		{
		cg: 1,
		aW: '👦',
		bc: _List_fromArray(
			['boy', 'man', 'male', 'guy', 'teenager']),
		bg: 'boy',
		df: _Utils_Tuple2(14, 15)
	},
		{
		cg: 1,
		aW: '👧',
		bc: _List_fromArray(
			['girl', 'female', 'woman', 'teenager']),
		bg: 'girl',
		df: _Utils_Tuple2(14, 21)
	},
		{
		cg: 1,
		aW: '👨\u200D🌾',
		bc: _List_fromArray(
			['man farmer', 'rancher', 'gardener', 'man', 'human']),
		bg: 'male-farmer',
		df: _Utils_Tuple2(14, 27)
	},
		{
		cg: 1,
		aW: '👨\u200D🍳',
		bc: _List_fromArray(
			['man cook', 'chef', 'man', 'human']),
		bg: 'male-cook',
		df: _Utils_Tuple2(14, 33)
	},
		{
		cg: 1,
		aW: '👨\u200D🍼',
		bc: _List_fromArray(
			['man feeding baby', 'birth', 'food']),
		bg: 'man_feeding_baby',
		df: _Utils_Tuple2(14, 39)
	},
		{
		cg: 1,
		aW: '👨\u200D🎓',
		bc: _List_fromArray(
			['man student', 'graduate', 'man', 'human']),
		bg: 'male-student',
		df: _Utils_Tuple2(14, 45)
	},
		{
		cg: 1,
		aW: '👨\u200D🎤',
		bc: _List_fromArray(
			['man singer', 'rockstar', 'entertainer', 'man', 'human']),
		bg: 'male-singer',
		df: _Utils_Tuple2(14, 51)
	},
		{
		cg: 1,
		aW: '👨\u200D🎨',
		bc: _List_fromArray(
			['man artist', 'painter', 'man', 'human']),
		bg: 'male-artist',
		df: _Utils_Tuple2(14, 57)
	},
		{
		cg: 1,
		aW: '👨\u200D🏫',
		bc: _List_fromArray(
			['man teacher', 'instructor', 'professor', 'man', 'human']),
		bg: 'male-teacher',
		df: _Utils_Tuple2(15, 5)
	},
		{
		cg: 1,
		aW: '👨\u200D🏭',
		bc: _List_fromArray(
			['man factory worker', 'assembly', 'industrial', 'man', 'human']),
		bg: 'male-factory-worker',
		df: _Utils_Tuple2(15, 11)
	},
		{
		cg: 1,
		aW: '👨\u200D👦\u200D👦',
		bc: _List_fromArray(
			['family man boy boy', 'home', 'parent', 'people', 'human', 'children']),
		bg: 'man-boy-boy',
		df: _Utils_Tuple2(15, 17)
	},
		{
		cg: 1,
		aW: '👨\u200D👦',
		bc: _List_fromArray(
			['family man boy', 'home', 'parent', 'people', 'human', 'child']),
		bg: 'man-boy',
		df: _Utils_Tuple2(15, 18)
	},
		{
		cg: 1,
		aW: '👨\u200D👧\u200D👦',
		bc: _List_fromArray(
			['family man girl boy', 'home', 'parent', 'people', 'human', 'children']),
		bg: 'man-girl-boy',
		df: _Utils_Tuple2(15, 19)
	},
		{
		cg: 1,
		aW: '👨\u200D👧\u200D👧',
		bc: _List_fromArray(
			['family man girl girl', 'home', 'parent', 'people', 'human', 'children']),
		bg: 'man-girl-girl',
		df: _Utils_Tuple2(15, 20)
	},
		{
		cg: 1,
		aW: '👨\u200D👧',
		bc: _List_fromArray(
			['family man girl', 'home', 'parent', 'people', 'human', 'child']),
		bg: 'man-girl',
		df: _Utils_Tuple2(15, 21)
	},
		{
		cg: 1,
		aW: '👨\u200D👨\u200D👦',
		bc: _List_fromArray(
			['family man man boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-man-boy',
		df: _Utils_Tuple2(15, 22)
	},
		{
		cg: 1,
		aW: '👨\u200D👨\u200D👦\u200D👦',
		bc: _List_fromArray(
			['family man man boy boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-man-boy-boy',
		df: _Utils_Tuple2(15, 23)
	},
		{
		cg: 1,
		aW: '👨\u200D👨\u200D👧',
		bc: _List_fromArray(
			['family man man girl', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-man-girl',
		df: _Utils_Tuple2(15, 24)
	},
		{
		cg: 1,
		aW: '👨\u200D👨\u200D👧\u200D👦',
		bc: _List_fromArray(
			['family man man girl boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-man-girl-boy',
		df: _Utils_Tuple2(15, 25)
	},
		{
		cg: 1,
		aW: '👨\u200D👨\u200D👧\u200D👧',
		bc: _List_fromArray(
			['family man man girl girl', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-man-girl-girl',
		df: _Utils_Tuple2(15, 26)
	},
		{
		cg: 1,
		aW: '👨\u200D👩\u200D👦',
		bc: _List_fromArray(
			['family man woman boy']),
		bg: 'man-woman-boy',
		df: _Utils_Tuple2(15, 27)
	},
		{
		cg: 1,
		aW: '👨\u200D👩\u200D👦\u200D👦',
		bc: _List_fromArray(
			['family man woman boy boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-woman-boy-boy',
		df: _Utils_Tuple2(15, 28)
	},
		{
		cg: 1,
		aW: '👨\u200D👩\u200D👧',
		bc: _List_fromArray(
			['family man woman girl', 'home', 'parents', 'people', 'human', 'child']),
		bg: 'man-woman-girl',
		df: _Utils_Tuple2(15, 29)
	},
		{
		cg: 1,
		aW: '👨\u200D👩\u200D👧\u200D👦',
		bc: _List_fromArray(
			['family man woman girl boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-woman-girl-boy',
		df: _Utils_Tuple2(15, 30)
	},
		{
		cg: 1,
		aW: '👨\u200D👩\u200D👧\u200D👧',
		bc: _List_fromArray(
			['family man woman girl girl', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'man-woman-girl-girl',
		df: _Utils_Tuple2(15, 31)
	},
		{
		cg: 1,
		aW: '👨\u200D💻',
		bc: _List_fromArray(
			['man technologist', 'coder', 'developer', 'engineer', 'programmer', 'software', 'man', 'human', 'laptop', 'computer']),
		bg: 'male-technologist',
		df: _Utils_Tuple2(15, 32)
	},
		{
		cg: 1,
		aW: '👨\u200D💼',
		bc: _List_fromArray(
			['man office worker', 'business', 'manager', 'man', 'human']),
		bg: 'male-office-worker',
		df: _Utils_Tuple2(15, 38)
	},
		{
		cg: 1,
		aW: '👨\u200D🔧',
		bc: _List_fromArray(
			['man mechanic', 'plumber', 'man', 'human', 'wrench']),
		bg: 'male-mechanic',
		df: _Utils_Tuple2(15, 44)
	},
		{
		cg: 1,
		aW: '👨\u200D🔬',
		bc: _List_fromArray(
			['man scientist', 'biologist', 'chemist', 'engineer', 'physicist', 'man', 'human']),
		bg: 'male-scientist',
		df: _Utils_Tuple2(15, 50)
	},
		{
		cg: 1,
		aW: '👨\u200D🚀',
		bc: _List_fromArray(
			['man astronaut', 'space', 'rocket', 'man', 'human']),
		bg: 'male-astronaut',
		df: _Utils_Tuple2(15, 56)
	},
		{
		cg: 1,
		aW: '👨\u200D🚒',
		bc: _List_fromArray(
			['man firefighter', 'fireman', 'man', 'human']),
		bg: 'male-firefighter',
		df: _Utils_Tuple2(16, 4)
	},
		{
		cg: 1,
		aW: '👨\u200D\uD83E\uDDAF',
		bc: _List_fromArray(
			['man with probing cane']),
		bg: 'man_with_probing_cane',
		df: _Utils_Tuple2(16, 10)
	},
		{
		cg: 1,
		aW: '👨\u200D\uD83E\uDDB0',
		bc: _List_fromArray(
			['man red hair']),
		bg: 'red_haired_man',
		df: _Utils_Tuple2(16, 16)
	},
		{
		cg: 1,
		aW: '👨\u200D\uD83E\uDDB1',
		bc: _List_fromArray(
			['man curly hair']),
		bg: 'curly_haired_man',
		df: _Utils_Tuple2(16, 22)
	},
		{
		cg: 1,
		aW: '👨\u200D\uD83E\uDDB2',
		bc: _List_fromArray(
			['man bald']),
		bg: 'bald_man',
		df: _Utils_Tuple2(16, 28)
	},
		{
		cg: 1,
		aW: '👨\u200D\uD83E\uDDB3',
		bc: _List_fromArray(
			['man white hair']),
		bg: 'white_haired_man',
		df: _Utils_Tuple2(16, 34)
	},
		{
		cg: 1,
		aW: '👨\u200D\uD83E\uDDBC',
		bc: _List_fromArray(
			['man in motorized wheelchair']),
		bg: 'man_in_motorized_wheelchair',
		df: _Utils_Tuple2(16, 40)
	},
		{
		cg: 1,
		aW: '👨\u200D\uD83E\uDDBD',
		bc: _List_fromArray(
			['man in manual wheelchair']),
		bg: 'man_in_manual_wheelchair',
		df: _Utils_Tuple2(16, 46)
	},
		{
		cg: 1,
		aW: '👨\u200D⚕️',
		bc: _List_fromArray(
			['man health worker', 'doctor', 'nurse', 'therapist', 'healthcare', 'man', 'human']),
		bg: 'male-doctor',
		df: _Utils_Tuple2(16, 52)
	},
		{
		cg: 1,
		aW: '👨\u200D⚖️',
		bc: _List_fromArray(
			['man judge', 'justice', 'court', 'man', 'human']),
		bg: 'male-judge',
		df: _Utils_Tuple2(17, 0)
	},
		{
		cg: 1,
		aW: '👨\u200D✈️',
		bc: _List_fromArray(
			['man pilot', 'aviator', 'plane', 'man', 'human']),
		bg: 'male-pilot',
		df: _Utils_Tuple2(17, 6)
	},
		{
		cg: 1,
		aW: '👨\u200D❤️\u200D👨',
		bc: _List_fromArray(
			['couple with heart man man', 'pair', 'love', 'like', 'affection', 'human', 'dating', 'valentines', 'marriage']),
		bg: 'man-heart-man',
		df: _Utils_Tuple2(17, 12)
	},
		{
		cg: 1,
		aW: '👨\u200D❤️\u200D💋\u200D👨',
		bc: _List_fromArray(
			['kiss man man', 'pair', 'valentines', 'love', 'like', 'dating', 'marriage']),
		bg: 'man-kiss-man',
		df: _Utils_Tuple2(17, 13)
	},
		{
		cg: 1,
		aW: '👨',
		bc: _List_fromArray(
			['man', 'mustache', 'father', 'dad', 'guy', 'classy', 'sir', 'moustache']),
		bg: 'man',
		df: _Utils_Tuple2(17, 14)
	},
		{
		cg: 1,
		aW: '👩\u200D🌾',
		bc: _List_fromArray(
			['woman farmer', 'rancher', 'gardener', 'woman', 'human']),
		bg: 'female-farmer',
		df: _Utils_Tuple2(17, 20)
	},
		{
		cg: 1,
		aW: '👩\u200D🍳',
		bc: _List_fromArray(
			['woman cook', 'chef', 'woman', 'human']),
		bg: 'female-cook',
		df: _Utils_Tuple2(17, 26)
	},
		{
		cg: 1,
		aW: '👩\u200D🍼',
		bc: _List_fromArray(
			['woman feeding baby', 'birth', 'food']),
		bg: 'woman_feeding_baby',
		df: _Utils_Tuple2(17, 32)
	},
		{
		cg: 1,
		aW: '👩\u200D🎓',
		bc: _List_fromArray(
			['woman student', 'graduate', 'woman', 'human']),
		bg: 'female-student',
		df: _Utils_Tuple2(17, 38)
	},
		{
		cg: 1,
		aW: '👩\u200D🎤',
		bc: _List_fromArray(
			['woman singer', 'rockstar', 'entertainer', 'woman', 'human']),
		bg: 'female-singer',
		df: _Utils_Tuple2(17, 44)
	},
		{
		cg: 1,
		aW: '👩\u200D🎨',
		bc: _List_fromArray(
			['woman artist', 'painter', 'woman', 'human']),
		bg: 'female-artist',
		df: _Utils_Tuple2(17, 50)
	},
		{
		cg: 1,
		aW: '👩\u200D🏫',
		bc: _List_fromArray(
			['woman teacher', 'instructor', 'professor', 'woman', 'human']),
		bg: 'female-teacher',
		df: _Utils_Tuple2(17, 56)
	},
		{
		cg: 1,
		aW: '👩\u200D🏭',
		bc: _List_fromArray(
			['woman factory worker', 'assembly', 'industrial', 'woman', 'human']),
		bg: 'female-factory-worker',
		df: _Utils_Tuple2(18, 4)
	},
		{
		cg: 1,
		aW: '👩\u200D👦\u200D👦',
		bc: _List_fromArray(
			['family woman boy boy', 'home', 'parent', 'people', 'human', 'children']),
		bg: 'woman-boy-boy',
		df: _Utils_Tuple2(18, 10)
	},
		{
		cg: 1,
		aW: '👩\u200D👦',
		bc: _List_fromArray(
			['family woman boy', 'home', 'parent', 'people', 'human', 'child']),
		bg: 'woman-boy',
		df: _Utils_Tuple2(18, 11)
	},
		{
		cg: 1,
		aW: '👩\u200D👧\u200D👦',
		bc: _List_fromArray(
			['family woman girl boy', 'home', 'parent', 'people', 'human', 'children']),
		bg: 'woman-girl-boy',
		df: _Utils_Tuple2(18, 12)
	},
		{
		cg: 1,
		aW: '👩\u200D👧\u200D👧',
		bc: _List_fromArray(
			['family woman girl girl', 'home', 'parent', 'people', 'human', 'children']),
		bg: 'woman-girl-girl',
		df: _Utils_Tuple2(18, 13)
	},
		{
		cg: 1,
		aW: '👩\u200D👧',
		bc: _List_fromArray(
			['family woman girl', 'home', 'parent', 'people', 'human', 'child']),
		bg: 'woman-girl',
		df: _Utils_Tuple2(18, 14)
	},
		{
		cg: 1,
		aW: '👩\u200D👩\u200D👦',
		bc: _List_fromArray(
			['family woman woman boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'woman-woman-boy',
		df: _Utils_Tuple2(18, 15)
	},
		{
		cg: 1,
		aW: '👩\u200D👩\u200D👦\u200D👦',
		bc: _List_fromArray(
			['family woman woman boy boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'woman-woman-boy-boy',
		df: _Utils_Tuple2(18, 16)
	},
		{
		cg: 1,
		aW: '👩\u200D👩\u200D👧',
		bc: _List_fromArray(
			['family woman woman girl', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'woman-woman-girl',
		df: _Utils_Tuple2(18, 17)
	},
		{
		cg: 1,
		aW: '👩\u200D👩\u200D👧\u200D👦',
		bc: _List_fromArray(
			['family woman woman girl boy', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'woman-woman-girl-boy',
		df: _Utils_Tuple2(18, 18)
	},
		{
		cg: 1,
		aW: '👩\u200D👩\u200D👧\u200D👧',
		bc: _List_fromArray(
			['family woman woman girl girl', 'home', 'parents', 'people', 'human', 'children']),
		bg: 'woman-woman-girl-girl',
		df: _Utils_Tuple2(18, 19)
	},
		{
		cg: 1,
		aW: '👩\u200D💻',
		bc: _List_fromArray(
			['woman technologist', 'coder', 'developer', 'engineer', 'programmer', 'software', 'woman', 'human', 'laptop', 'computer']),
		bg: 'female-technologist',
		df: _Utils_Tuple2(18, 20)
	},
		{
		cg: 1,
		aW: '👩\u200D💼',
		bc: _List_fromArray(
			['woman office worker', 'business', 'manager', 'woman', 'human']),
		bg: 'female-office-worker',
		df: _Utils_Tuple2(18, 26)
	},
		{
		cg: 1,
		aW: '👩\u200D🔧',
		bc: _List_fromArray(
			['woman mechanic', 'plumber', 'woman', 'human', 'wrench']),
		bg: 'female-mechanic',
		df: _Utils_Tuple2(18, 32)
	},
		{
		cg: 1,
		aW: '👩\u200D🔬',
		bc: _List_fromArray(
			['woman scientist', 'biologist', 'chemist', 'engineer', 'physicist', 'woman', 'human']),
		bg: 'female-scientist',
		df: _Utils_Tuple2(18, 38)
	},
		{
		cg: 1,
		aW: '👩\u200D🚀',
		bc: _List_fromArray(
			['woman astronaut', 'space', 'rocket', 'woman', 'human']),
		bg: 'female-astronaut',
		df: _Utils_Tuple2(18, 44)
	},
		{
		cg: 1,
		aW: '👩\u200D🚒',
		bc: _List_fromArray(
			['woman firefighter', 'fireman', 'woman', 'human']),
		bg: 'female-firefighter',
		df: _Utils_Tuple2(18, 50)
	},
		{
		cg: 1,
		aW: '👩\u200D\uD83E\uDDAF',
		bc: _List_fromArray(
			['woman with probing cane']),
		bg: 'woman_with_probing_cane',
		df: _Utils_Tuple2(18, 56)
	},
		{
		cg: 1,
		aW: '👩\u200D\uD83E\uDDB0',
		bc: _List_fromArray(
			['woman red hair']),
		bg: 'red_haired_woman',
		df: _Utils_Tuple2(19, 4)
	},
		{
		cg: 1,
		aW: '👩\u200D\uD83E\uDDB1',
		bc: _List_fromArray(
			['woman curly hair']),
		bg: 'curly_haired_woman',
		df: _Utils_Tuple2(19, 10)
	},
		{
		cg: 1,
		aW: '👩\u200D\uD83E\uDDB2',
		bc: _List_fromArray(
			['woman bald']),
		bg: 'bald_woman',
		df: _Utils_Tuple2(19, 16)
	},
		{
		cg: 1,
		aW: '👩\u200D\uD83E\uDDB3',
		bc: _List_fromArray(
			['woman white hair']),
		bg: 'white_haired_woman',
		df: _Utils_Tuple2(19, 22)
	},
		{
		cg: 1,
		aW: '👩\u200D\uD83E\uDDBC',
		bc: _List_fromArray(
			['woman in motorized wheelchair']),
		bg: 'woman_in_motorized_wheelchair',
		df: _Utils_Tuple2(19, 28)
	},
		{
		cg: 1,
		aW: '👩\u200D\uD83E\uDDBD',
		bc: _List_fromArray(
			['woman in manual wheelchair']),
		bg: 'woman_in_manual_wheelchair',
		df: _Utils_Tuple2(19, 34)
	},
		{
		cg: 1,
		aW: '👩\u200D⚕️',
		bc: _List_fromArray(
			['woman health worker', 'doctor', 'nurse', 'therapist', 'healthcare', 'woman', 'human']),
		bg: 'female-doctor',
		df: _Utils_Tuple2(19, 40)
	},
		{
		cg: 1,
		aW: '👩\u200D⚖️',
		bc: _List_fromArray(
			['woman judge', 'justice', 'court', 'woman', 'human']),
		bg: 'female-judge',
		df: _Utils_Tuple2(19, 46)
	},
		{
		cg: 1,
		aW: '👩\u200D✈️',
		bc: _List_fromArray(
			['woman pilot', 'aviator', 'plane', 'woman', 'human']),
		bg: 'female-pilot',
		df: _Utils_Tuple2(19, 52)
	},
		{
		cg: 1,
		aW: '👩\u200D❤️\u200D👨',
		bc: _List_fromArray(
			['couple with heart woman man']),
		bg: 'woman-heart-man',
		df: _Utils_Tuple2(20, 0)
	},
		{
		cg: 1,
		aW: '👩\u200D❤️\u200D👩',
		bc: _List_fromArray(
			['couple with heart woman woman', 'pair', 'love', 'like', 'affection', 'human', 'dating', 'valentines', 'marriage']),
		bg: 'woman-heart-woman',
		df: _Utils_Tuple2(20, 1)
	},
		{
		cg: 1,
		aW: '👩\u200D❤️\u200D💋\u200D👨',
		bc: _List_fromArray(
			['kiss woman man']),
		bg: 'woman-kiss-man',
		df: _Utils_Tuple2(20, 2)
	},
		{
		cg: 1,
		aW: '👩\u200D❤️\u200D💋\u200D👩',
		bc: _List_fromArray(
			['kiss woman woman', 'pair', 'valentines', 'love', 'like', 'dating', 'marriage']),
		bg: 'woman-kiss-woman',
		df: _Utils_Tuple2(20, 3)
	},
		{
		cg: 1,
		aW: '👩',
		bc: _List_fromArray(
			['woman', 'female', 'girls', 'lady']),
		bg: 'woman',
		df: _Utils_Tuple2(20, 4)
	},
		{
		cg: 1,
		aW: '👪',
		bc: _List_fromArray(
			['family', 'home', 'parents', 'child', 'mom', 'dad', 'father', 'mother', 'people', 'human']),
		bg: 'family',
		df: _Utils_Tuple2(20, 10)
	},
		{
		cg: 1,
		aW: '👫',
		bc: _List_fromArray(
			['woman and man holding hands', 'pair', 'people', 'human', 'love', 'date', 'dating', 'like', 'affection', 'valentines', 'marriage']),
		bg: 'couple',
		df: _Utils_Tuple2(20, 11)
	},
		{
		cg: 1,
		aW: '👬',
		bc: _List_fromArray(
			['men holding hands', 'pair', 'couple', 'love', 'like', 'bromance', 'friendship', 'people', 'human']),
		bg: 'two_men_holding_hands',
		df: _Utils_Tuple2(20, 37)
	},
		{
		cg: 1,
		aW: '👭',
		bc: _List_fromArray(
			['women holding hands', 'pair', 'friendship', 'couple', 'love', 'like', 'female', 'people', 'human']),
		bg: 'two_women_holding_hands',
		df: _Utils_Tuple2(21, 5)
	},
		{
		cg: 1,
		aW: '👮\u200D♀️',
		bc: _List_fromArray(
			['woman police officer', 'woman', 'police', 'law', 'legal', 'enforcement', 'arrest', '911', 'female']),
		bg: 'female-police-officer',
		df: _Utils_Tuple2(21, 31)
	},
		{
		cg: 1,
		aW: '👮\u200D♂️',
		bc: _List_fromArray(
			['man police officer', 'man', 'police', 'law', 'legal', 'enforcement', 'arrest', '911']),
		bg: 'male-police-officer',
		df: _Utils_Tuple2(21, 37)
	},
		{
		cg: 1,
		aW: '👮',
		bc: _List_fromArray(
			['police officer']),
		bg: 'cop',
		df: _Utils_Tuple2(21, 43)
	},
		{
		cg: 1,
		aW: '👯\u200D♀️',
		bc: _List_fromArray(
			['women with bunny ears', 'female', 'bunny', 'women', 'girls']),
		bg: 'woman-with-bunny-ears-partying',
		df: _Utils_Tuple2(21, 49)
	},
		{
		cg: 1,
		aW: '👯\u200D♂️',
		bc: _List_fromArray(
			['men with bunny ears', 'male', 'bunny', 'men', 'boys']),
		bg: 'man-with-bunny-ears-partying',
		df: _Utils_Tuple2(21, 50)
	},
		{
		cg: 1,
		aW: '👯',
		bc: _List_fromArray(
			['people with bunny ears']),
		bg: 'dancers',
		df: _Utils_Tuple2(21, 51)
	},
		{
		cg: 1,
		aW: '👰\u200D♀️',
		bc: _List_fromArray(
			['woman with veil', 'wedding', 'marriage']),
		bg: 'woman_with_veil',
		df: _Utils_Tuple2(21, 52)
	},
		{
		cg: 1,
		aW: '👰\u200D♂️',
		bc: _List_fromArray(
			['man with veil', 'wedding', 'marriage']),
		bg: 'man_with_veil',
		df: _Utils_Tuple2(22, 0)
	},
		{
		cg: 1,
		aW: '👰',
		bc: _List_fromArray(
			['bride with veil', 'couple', 'marriage', 'wedding', 'woman', 'bride']),
		bg: 'bride_with_veil',
		df: _Utils_Tuple2(22, 6)
	},
		{
		cg: 1,
		aW: '👱\u200D♀️',
		bc: _List_fromArray(
			['woman blond hair', 'woman', 'female', 'girl', 'blonde', 'person']),
		bg: 'blond-haired-woman',
		df: _Utils_Tuple2(22, 12)
	},
		{
		cg: 1,
		aW: '👱\u200D♂️',
		bc: _List_fromArray(
			['man blond hair', 'man', 'male', 'boy', 'blonde', 'guy', 'person']),
		bg: 'blond-haired-man',
		df: _Utils_Tuple2(22, 18)
	},
		{
		cg: 1,
		aW: '👱',
		bc: _List_fromArray(
			['person blond hair']),
		bg: 'person_with_blond_hair',
		df: _Utils_Tuple2(22, 24)
	},
		{
		cg: 1,
		aW: '👲',
		bc: _List_fromArray(
			['man with skullcap', 'male', 'boy', 'chinese']),
		bg: 'man_with_gua_pi_mao',
		df: _Utils_Tuple2(22, 30)
	},
		{
		cg: 1,
		aW: '👳\u200D♀️',
		bc: _List_fromArray(
			['woman wearing turban', 'female', 'indian', 'hinduism', 'arabs', 'woman']),
		bg: 'woman-wearing-turban',
		df: _Utils_Tuple2(22, 36)
	},
		{
		cg: 1,
		aW: '👳\u200D♂️',
		bc: _List_fromArray(
			['man wearing turban', 'male', 'indian', 'hinduism', 'arabs']),
		bg: 'man-wearing-turban',
		df: _Utils_Tuple2(22, 42)
	},
		{
		cg: 1,
		aW: '👳',
		bc: _List_fromArray(
			['person wearing turban']),
		bg: 'man_with_turban',
		df: _Utils_Tuple2(22, 48)
	},
		{
		cg: 1,
		aW: '👴',
		bc: _List_fromArray(
			['old man', 'human', 'male', 'men', 'old', 'elder', 'senior']),
		bg: 'older_man',
		df: _Utils_Tuple2(22, 54)
	},
		{
		cg: 1,
		aW: '👵',
		bc: _List_fromArray(
			['old woman', 'human', 'female', 'women', 'lady', 'old', 'elder', 'senior']),
		bg: 'older_woman',
		df: _Utils_Tuple2(23, 2)
	},
		{
		cg: 1,
		aW: '👶',
		bc: _List_fromArray(
			['baby', 'child', 'boy', 'girl', 'toddler']),
		bg: 'baby',
		df: _Utils_Tuple2(23, 8)
	},
		{
		cg: 1,
		aW: '👷\u200D♀️',
		bc: _List_fromArray(
			['woman construction worker', 'female', 'human', 'wip', 'build', 'construction', 'worker', 'labor', 'woman']),
		bg: 'female-construction-worker',
		df: _Utils_Tuple2(23, 14)
	},
		{
		cg: 1,
		aW: '👷\u200D♂️',
		bc: _List_fromArray(
			['man construction worker', 'male', 'human', 'wip', 'guy', 'build', 'construction', 'worker', 'labor']),
		bg: 'male-construction-worker',
		df: _Utils_Tuple2(23, 20)
	},
		{
		cg: 1,
		aW: '👷',
		bc: _List_fromArray(
			['construction worker']),
		bg: 'construction_worker',
		df: _Utils_Tuple2(23, 26)
	},
		{
		cg: 1,
		aW: '👸',
		bc: _List_fromArray(
			['princess', 'girl', 'woman', 'female', 'blond', 'crown', 'royal', 'queen']),
		bg: 'princess',
		df: _Utils_Tuple2(23, 32)
	},
		{
		cg: 0,
		aW: '👹',
		bc: _List_fromArray(
			['ogre', 'monster', 'red', 'mask', 'halloween', 'scary', 'creepy', 'devil', 'demon', 'japanese', 'ogre']),
		bg: 'japanese_ogre',
		df: _Utils_Tuple2(23, 38)
	},
		{
		cg: 0,
		aW: '👺',
		bc: _List_fromArray(
			['goblin', 'red', 'evil', 'mask', 'monster', 'scary', 'creepy', 'japanese', 'goblin']),
		bg: 'japanese_goblin',
		df: _Utils_Tuple2(23, 39)
	},
		{
		cg: 0,
		aW: '👻',
		bc: _List_fromArray(
			['ghost', 'halloween', 'spooky', 'scary']),
		bg: 'ghost',
		df: _Utils_Tuple2(23, 40)
	},
		{
		cg: 1,
		aW: '👼',
		bc: _List_fromArray(
			['baby angel', 'heaven', 'wings', 'halo']),
		bg: 'angel',
		df: _Utils_Tuple2(23, 41)
	},
		{
		cg: 0,
		aW: '👽',
		bc: _List_fromArray(
			['alien', 'UFO', 'paul', 'weird', 'outer space']),
		bg: 'alien',
		df: _Utils_Tuple2(23, 47)
	},
		{
		cg: 0,
		aW: '👾',
		bc: _List_fromArray(
			['alien monster', 'game', 'arcade', 'play']),
		bg: 'space_invader',
		df: _Utils_Tuple2(23, 48)
	},
		{
		cg: 0,
		aW: '👿',
		bc: _List_fromArray(
			['angry face with horns', 'devil', 'angry', 'horns']),
		bg: 'imp',
		df: _Utils_Tuple2(23, 49)
	},
		{
		cg: 0,
		aW: '💀',
		bc: _List_fromArray(
			['skull', 'dead', 'skeleton', 'creepy', 'death']),
		bg: 'skull',
		df: _Utils_Tuple2(23, 50)
	},
		{
		cg: 1,
		aW: '💁\u200D♀️',
		bc: _List_fromArray(
			['woman tipping hand', 'female', 'girl', 'woman', 'human', 'information']),
		bg: 'woman-tipping-hand',
		df: _Utils_Tuple2(23, 51)
	},
		{
		cg: 1,
		aW: '💁\u200D♂️',
		bc: _List_fromArray(
			['man tipping hand', 'male', 'boy', 'man', 'human', 'information']),
		bg: 'man-tipping-hand',
		df: _Utils_Tuple2(23, 57)
	},
		{
		cg: 1,
		aW: '💁',
		bc: _List_fromArray(
			['person tipping hand']),
		bg: 'information_desk_person',
		df: _Utils_Tuple2(24, 5)
	},
		{
		cg: 1,
		aW: '💂\u200D♀️',
		bc: _List_fromArray(
			['woman guard', 'uk', 'gb', 'british', 'female', 'royal', 'woman']),
		bg: 'female-guard',
		df: _Utils_Tuple2(24, 11)
	},
		{
		cg: 1,
		aW: '💂\u200D♂️',
		bc: _List_fromArray(
			['man guard', 'uk', 'gb', 'british', 'male', 'guy', 'royal']),
		bg: 'male-guard',
		df: _Utils_Tuple2(24, 17)
	},
		{
		cg: 1,
		aW: '💂',
		bc: _List_fromArray(
			['guard']),
		bg: 'guardsman',
		df: _Utils_Tuple2(24, 23)
	},
		{
		cg: 1,
		aW: '💃',
		bc: _List_fromArray(
			['woman dancing', 'female', 'girl', 'woman', 'fun']),
		bg: 'dancer',
		df: _Utils_Tuple2(24, 29)
	},
		{
		cg: 6,
		aW: '💄',
		bc: _List_fromArray(
			['lipstick', 'female', 'girl', 'fashion', 'woman']),
		bg: 'lipstick',
		df: _Utils_Tuple2(24, 35)
	},
		{
		cg: 1,
		aW: '💅',
		bc: _List_fromArray(
			['nail polish', 'beauty', 'manicure', 'finger', 'fashion', 'nail']),
		bg: 'nail_care',
		df: _Utils_Tuple2(24, 36)
	},
		{
		cg: 1,
		aW: '💆\u200D♀️',
		bc: _List_fromArray(
			['woman getting massage', 'female', 'girl', 'woman', 'head']),
		bg: 'woman-getting-massage',
		df: _Utils_Tuple2(24, 42)
	},
		{
		cg: 1,
		aW: '💆\u200D♂️',
		bc: _List_fromArray(
			['man getting massage', 'male', 'boy', 'man', 'head']),
		bg: 'man-getting-massage',
		df: _Utils_Tuple2(24, 48)
	},
		{
		cg: 1,
		aW: '💆',
		bc: _List_fromArray(
			['person getting massage']),
		bg: 'massage',
		df: _Utils_Tuple2(24, 54)
	},
		{
		cg: 1,
		aW: '💇\u200D♀️',
		bc: _List_fromArray(
			['woman getting haircut', 'female', 'girl', 'woman']),
		bg: 'woman-getting-haircut',
		df: _Utils_Tuple2(25, 2)
	},
		{
		cg: 1,
		aW: '💇\u200D♂️',
		bc: _List_fromArray(
			['man getting haircut', 'male', 'boy', 'man']),
		bg: 'man-getting-haircut',
		df: _Utils_Tuple2(25, 8)
	},
		{
		cg: 1,
		aW: '💇',
		bc: _List_fromArray(
			['person getting haircut']),
		bg: 'haircut',
		df: _Utils_Tuple2(25, 14)
	},
		{
		cg: 4,
		aW: '💈',
		bc: _List_fromArray(
			['barber pole', 'hair', 'salon', 'style']),
		bg: 'barber',
		df: _Utils_Tuple2(25, 20)
	},
		{
		cg: 6,
		aW: '💉',
		bc: _List_fromArray(
			['syringe', 'health', 'hospital', 'drugs', 'blood', 'medicine', 'needle', 'doctor', 'nurse']),
		bg: 'syringe',
		df: _Utils_Tuple2(25, 21)
	},
		{
		cg: 6,
		aW: '💊',
		bc: _List_fromArray(
			['pill', 'health', 'medicine', 'doctor', 'pharmacy', 'drug']),
		bg: 'pill',
		df: _Utils_Tuple2(25, 22)
	},
		{
		cg: 0,
		aW: '💋',
		bc: _List_fromArray(
			['kiss mark', 'face', 'lips', 'love', 'like', 'affection', 'valentines']),
		bg: 'kiss',
		df: _Utils_Tuple2(25, 23)
	},
		{
		cg: 0,
		aW: '💌',
		bc: _List_fromArray(
			['love letter', 'email', 'like', 'affection', 'envelope', 'valentines']),
		bg: 'love_letter',
		df: _Utils_Tuple2(25, 24)
	},
		{
		cg: 6,
		aW: '💍',
		bc: _List_fromArray(
			['ring', 'wedding', 'propose', 'marriage', 'valentines', 'diamond', 'fashion', 'jewelry', 'gem', 'engagement']),
		bg: 'ring',
		df: _Utils_Tuple2(25, 25)
	},
		{
		cg: 6,
		aW: '💎',
		bc: _List_fromArray(
			['gem stone', 'blue', 'ruby', 'diamond', 'jewelry']),
		bg: 'gem',
		df: _Utils_Tuple2(25, 26)
	},
		{
		cg: 1,
		aW: '💏',
		bc: _List_fromArray(
			['kiss', 'pair', 'valentines', 'love', 'like', 'dating', 'marriage']),
		bg: 'couplekiss',
		df: _Utils_Tuple2(25, 27)
	},
		{
		cg: 2,
		aW: '💐',
		bc: _List_fromArray(
			['bouquet', 'flowers', 'nature', 'spring']),
		bg: 'bouquet',
		df: _Utils_Tuple2(25, 28)
	},
		{
		cg: 1,
		aW: '💑',
		bc: _List_fromArray(
			['couple with heart', 'pair', 'love', 'like', 'affection', 'human', 'dating', 'valentines', 'marriage']),
		bg: 'couple_with_heart',
		df: _Utils_Tuple2(25, 29)
	},
		{
		cg: 4,
		aW: '💒',
		bc: _List_fromArray(
			['wedding', 'love', 'like', 'affection', 'couple', 'marriage', 'bride', 'groom']),
		bg: 'wedding',
		df: _Utils_Tuple2(25, 30)
	},
		{
		cg: 0,
		aW: '💓',
		bc: _List_fromArray(
			['beating heart', 'love', 'like', 'affection', 'valentines', 'pink', 'heart']),
		bg: 'heartbeat',
		df: _Utils_Tuple2(25, 31)
	},
		{
		cg: 0,
		aW: '💔',
		bc: _List_fromArray(
			['broken heart', 'sad', 'sorry', 'break', 'heart', 'heartbreak']),
		bg: 'broken_heart',
		df: _Utils_Tuple2(25, 32)
	},
		{
		cg: 0,
		aW: '💕',
		bc: _List_fromArray(
			['two hearts', 'love', 'like', 'affection', 'valentines', 'heart']),
		bg: 'two_hearts',
		df: _Utils_Tuple2(25, 33)
	},
		{
		cg: 0,
		aW: '💖',
		bc: _List_fromArray(
			['sparkling heart', 'love', 'like', 'affection', 'valentines']),
		bg: 'sparkling_heart',
		df: _Utils_Tuple2(25, 34)
	},
		{
		cg: 0,
		aW: '💗',
		bc: _List_fromArray(
			['growing heart', 'like', 'love', 'affection', 'valentines', 'pink']),
		bg: 'heartpulse',
		df: _Utils_Tuple2(25, 35)
	},
		{
		cg: 0,
		aW: '💘',
		bc: _List_fromArray(
			['heart with arrow', 'love', 'like', 'heart', 'affection', 'valentines']),
		bg: 'cupid',
		df: _Utils_Tuple2(25, 36)
	},
		{
		cg: 0,
		aW: '💙',
		bc: _List_fromArray(
			['blue heart', 'love', 'like', 'affection', 'valentines']),
		bg: 'blue_heart',
		df: _Utils_Tuple2(25, 37)
	},
		{
		cg: 0,
		aW: '💚',
		bc: _List_fromArray(
			['green heart', 'love', 'like', 'affection', 'valentines']),
		bg: 'green_heart',
		df: _Utils_Tuple2(25, 38)
	},
		{
		cg: 0,
		aW: '💛',
		bc: _List_fromArray(
			['yellow heart', 'love', 'like', 'affection', 'valentines']),
		bg: 'yellow_heart',
		df: _Utils_Tuple2(25, 39)
	},
		{
		cg: 0,
		aW: '💜',
		bc: _List_fromArray(
			['purple heart', 'love', 'like', 'affection', 'valentines']),
		bg: 'purple_heart',
		df: _Utils_Tuple2(25, 40)
	},
		{
		cg: 0,
		aW: '💝',
		bc: _List_fromArray(
			['heart with ribbon', 'love', 'valentines']),
		bg: 'gift_heart',
		df: _Utils_Tuple2(25, 41)
	},
		{
		cg: 0,
		aW: '💞',
		bc: _List_fromArray(
			['revolving hearts', 'love', 'like', 'affection', 'valentines']),
		bg: 'revolving_hearts',
		df: _Utils_Tuple2(25, 42)
	},
		{
		cg: 0,
		aW: '💟',
		bc: _List_fromArray(
			['heart decoration', 'purple square', 'love', 'like']),
		bg: 'heart_decoration',
		df: _Utils_Tuple2(25, 43)
	},
		{
		cg: 7,
		aW: '💠',
		bc: _List_fromArray(
			['diamond with a dot', 'jewel', 'blue', 'gem', 'crystal', 'fancy']),
		bg: 'diamond_shape_with_a_dot_inside',
		df: _Utils_Tuple2(25, 44)
	},
		{
		cg: 6,
		aW: '💡',
		bc: _List_fromArray(
			['light bulb', 'light', 'electricity', 'idea']),
		bg: 'bulb',
		df: _Utils_Tuple2(25, 45)
	},
		{
		cg: 0,
		aW: '💢',
		bc: _List_fromArray(
			['anger symbol', 'angry', 'mad']),
		bg: 'anger',
		df: _Utils_Tuple2(25, 46)
	},
		{
		cg: 0,
		aW: '💣',
		bc: _List_fromArray(
			['bomb', 'boom', 'explode', 'explosion', 'terrorism']),
		bg: 'bomb',
		df: _Utils_Tuple2(25, 47)
	},
		{
		cg: 0,
		aW: '💤',
		bc: _List_fromArray(
			['zzz', 'sleepy', 'tired', 'dream']),
		bg: 'zzz',
		df: _Utils_Tuple2(25, 48)
	},
		{
		cg: 0,
		aW: '💥',
		bc: _List_fromArray(
			['collision', 'bomb', 'explode', 'explosion', 'collision', 'blown']),
		bg: 'boom',
		df: _Utils_Tuple2(25, 49)
	},
		{
		cg: 0,
		aW: '💦',
		bc: _List_fromArray(
			['sweat droplets', 'water', 'drip', 'oops']),
		bg: 'sweat_drops',
		df: _Utils_Tuple2(25, 50)
	},
		{
		cg: 4,
		aW: '💧',
		bc: _List_fromArray(
			['droplet', 'water', 'drip', 'faucet', 'spring']),
		bg: 'droplet',
		df: _Utils_Tuple2(25, 51)
	},
		{
		cg: 0,
		aW: '💨',
		bc: _List_fromArray(
			['dashing away', 'wind', 'air', 'fast', 'shoo', 'fart', 'smoke', 'puff']),
		bg: 'dash',
		df: _Utils_Tuple2(25, 52)
	},
		{
		cg: 0,
		aW: '💩',
		bc: _List_fromArray(
			['pile of poo', 'hankey', 'shitface', 'fail', 'turd', 'shit']),
		bg: 'hankey',
		df: _Utils_Tuple2(25, 53)
	},
		{
		cg: 1,
		aW: '💪',
		bc: _List_fromArray(
			['flexed biceps', 'arm', 'flex', 'hand', 'summer', 'strong', 'biceps']),
		bg: 'muscle',
		df: _Utils_Tuple2(25, 54)
	},
		{
		cg: 0,
		aW: '💫',
		bc: _List_fromArray(
			['dizzy', 'star', 'sparkle', 'shoot', 'magic']),
		bg: 'dizzy',
		df: _Utils_Tuple2(26, 2)
	},
		{
		cg: 0,
		aW: '💬',
		bc: _List_fromArray(
			['speech balloon', 'bubble', 'words', 'message', 'talk', 'chatting']),
		bg: 'speech_balloon',
		df: _Utils_Tuple2(26, 3)
	},
		{
		cg: 0,
		aW: '💭',
		bc: _List_fromArray(
			['thought balloon', 'bubble', 'cloud', 'speech', 'thinking', 'dream']),
		bg: 'thought_balloon',
		df: _Utils_Tuple2(26, 4)
	},
		{
		cg: 2,
		aW: '💮',
		bc: _List_fromArray(
			['white flower', 'japanese', 'spring']),
		bg: 'white_flower',
		df: _Utils_Tuple2(26, 5)
	},
		{
		cg: 0,
		aW: '💯',
		bc: _List_fromArray(
			['hundred points', 'score', 'perfect', 'numbers', 'century', 'exam', 'quiz', 'test', 'pass', 'hundred']),
		bg: '100',
		df: _Utils_Tuple2(26, 6)
	},
		{
		cg: 6,
		aW: '💰',
		bc: _List_fromArray(
			['money bag', 'dollar', 'payment', 'coins', 'sale']),
		bg: 'moneybag',
		df: _Utils_Tuple2(26, 7)
	},
		{
		cg: 7,
		aW: '💱',
		bc: _List_fromArray(
			['currency exchange', 'money', 'sales', 'dollar', 'travel']),
		bg: 'currency_exchange',
		df: _Utils_Tuple2(26, 8)
	},
		{
		cg: 7,
		aW: '💲',
		bc: _List_fromArray(
			['heavy dollar sign', 'money', 'sales', 'payment', 'currency', 'buck']),
		bg: 'heavy_dollar_sign',
		df: _Utils_Tuple2(26, 9)
	},
		{
		cg: 6,
		aW: '💳',
		bc: _List_fromArray(
			['credit card', 'money', 'sales', 'dollar', 'bill', 'payment', 'shopping']),
		bg: 'credit_card',
		df: _Utils_Tuple2(26, 10)
	},
		{
		cg: 6,
		aW: '💴',
		bc: _List_fromArray(
			['yen banknote', 'money', 'sales', 'japanese', 'dollar', 'currency']),
		bg: 'yen',
		df: _Utils_Tuple2(26, 11)
	},
		{
		cg: 6,
		aW: '💵',
		bc: _List_fromArray(
			['dollar banknote', 'money', 'sales', 'bill', 'currency']),
		bg: 'dollar',
		df: _Utils_Tuple2(26, 12)
	},
		{
		cg: 6,
		aW: '💶',
		bc: _List_fromArray(
			['euro banknote', 'money', 'sales', 'dollar', 'currency']),
		bg: 'euro',
		df: _Utils_Tuple2(26, 13)
	},
		{
		cg: 6,
		aW: '💷',
		bc: _List_fromArray(
			['pound banknote', 'british', 'sterling', 'money', 'sales', 'bills', 'uk', 'england', 'currency']),
		bg: 'pound',
		df: _Utils_Tuple2(26, 14)
	},
		{
		cg: 6,
		aW: '💸',
		bc: _List_fromArray(
			['money with wings', 'dollar', 'bills', 'payment', 'sale']),
		bg: 'money_with_wings',
		df: _Utils_Tuple2(26, 15)
	},
		{
		cg: 6,
		aW: '💹',
		bc: _List_fromArray(
			['chart increasing with yen', 'green square', 'graph', 'presentation', 'stats']),
		bg: 'chart',
		df: _Utils_Tuple2(26, 16)
	},
		{
		cg: 4,
		aW: '💺',
		bc: _List_fromArray(
			['seat', 'sit', 'airplane', 'transport', 'bus', 'flight', 'fly']),
		bg: 'seat',
		df: _Utils_Tuple2(26, 17)
	},
		{
		cg: 6,
		aW: '💻',
		bc: _List_fromArray(
			['laptop', 'technology', 'laptop', 'screen', 'display', 'monitor']),
		bg: 'computer',
		df: _Utils_Tuple2(26, 18)
	},
		{
		cg: 6,
		aW: '💼',
		bc: _List_fromArray(
			['briefcase', 'business', 'documents', 'work', 'law', 'legal', 'job', 'career']),
		bg: 'briefcase',
		df: _Utils_Tuple2(26, 19)
	},
		{
		cg: 6,
		aW: '💽',
		bc: _List_fromArray(
			['computer disk', 'technology', 'record', 'data', 'disk', '90s']),
		bg: 'minidisc',
		df: _Utils_Tuple2(26, 20)
	},
		{
		cg: 6,
		aW: '💾',
		bc: _List_fromArray(
			['floppy disk', 'oldschool', 'technology', 'save', '90s', '80s']),
		bg: 'floppy_disk',
		df: _Utils_Tuple2(26, 21)
	},
		{
		cg: 6,
		aW: '💿',
		bc: _List_fromArray(
			['optical disk', 'technology', 'dvd', 'disk', 'disc', '90s']),
		bg: 'cd',
		df: _Utils_Tuple2(26, 22)
	},
		{
		cg: 6,
		aW: '📀',
		bc: _List_fromArray(
			['dvd', 'cd', 'disk', 'disc']),
		bg: 'dvd',
		df: _Utils_Tuple2(26, 23)
	},
		{
		cg: 6,
		aW: '📁',
		bc: _List_fromArray(
			['file folder', 'documents', 'business', 'office']),
		bg: 'file_folder',
		df: _Utils_Tuple2(26, 24)
	},
		{
		cg: 6,
		aW: '📂',
		bc: _List_fromArray(
			['open file folder', 'documents', 'load']),
		bg: 'open_file_folder',
		df: _Utils_Tuple2(26, 25)
	},
		{
		cg: 6,
		aW: '📃',
		bc: _List_fromArray(
			['page with curl', 'documents', 'office', 'paper']),
		bg: 'page_with_curl',
		df: _Utils_Tuple2(26, 26)
	},
		{
		cg: 6,
		aW: '📄',
		bc: _List_fromArray(
			['page facing up', 'documents', 'office', 'paper', 'information']),
		bg: 'page_facing_up',
		df: _Utils_Tuple2(26, 27)
	},
		{
		cg: 6,
		aW: '📅',
		bc: _List_fromArray(
			['calendar', 'calendar', 'schedule']),
		bg: 'date',
		df: _Utils_Tuple2(26, 28)
	},
		{
		cg: 6,
		aW: '📆',
		bc: _List_fromArray(
			['tear off calendar', 'schedule', 'date', 'planning']),
		bg: 'calendar',
		df: _Utils_Tuple2(26, 29)
	},
		{
		cg: 6,
		aW: '📇',
		bc: _List_fromArray(
			['card index', 'business', 'stationery']),
		bg: 'card_index',
		df: _Utils_Tuple2(26, 30)
	},
		{
		cg: 6,
		aW: '📈',
		bc: _List_fromArray(
			['chart increasing', 'graph', 'presentation', 'stats', 'recovery', 'business', 'economics', 'money', 'sales', 'good', 'success']),
		bg: 'chart_with_upwards_trend',
		df: _Utils_Tuple2(26, 31)
	},
		{
		cg: 6,
		aW: '📉',
		bc: _List_fromArray(
			['chart decreasing', 'graph', 'presentation', 'stats', 'recession', 'business', 'economics', 'money', 'sales', 'bad', 'failure']),
		bg: 'chart_with_downwards_trend',
		df: _Utils_Tuple2(26, 32)
	},
		{
		cg: 6,
		aW: '📊',
		bc: _List_fromArray(
			['bar chart', 'graph', 'presentation', 'stats']),
		bg: 'bar_chart',
		df: _Utils_Tuple2(26, 33)
	},
		{
		cg: 6,
		aW: '📋',
		bc: _List_fromArray(
			['clipboard', 'stationery', 'documents']),
		bg: 'clipboard',
		df: _Utils_Tuple2(26, 34)
	},
		{
		cg: 6,
		aW: '📌',
		bc: _List_fromArray(
			['pushpin', 'stationery', 'mark', 'here']),
		bg: 'pushpin',
		df: _Utils_Tuple2(26, 35)
	},
		{
		cg: 6,
		aW: '📍',
		bc: _List_fromArray(
			['round pushpin', 'stationery', 'location', 'map', 'here']),
		bg: 'round_pushpin',
		df: _Utils_Tuple2(26, 36)
	},
		{
		cg: 6,
		aW: '📎',
		bc: _List_fromArray(
			['paperclip', 'documents', 'stationery']),
		bg: 'paperclip',
		df: _Utils_Tuple2(26, 37)
	},
		{
		cg: 6,
		aW: '📏',
		bc: _List_fromArray(
			['straight ruler', 'stationery', 'calculate', 'length', 'math', 'school', 'drawing', 'architect', 'sketch']),
		bg: 'straight_ruler',
		df: _Utils_Tuple2(26, 38)
	},
		{
		cg: 6,
		aW: '📐',
		bc: _List_fromArray(
			['triangular ruler', 'stationery', 'math', 'architect', 'sketch']),
		bg: 'triangular_ruler',
		df: _Utils_Tuple2(26, 39)
	},
		{
		cg: 6,
		aW: '📑',
		bc: _List_fromArray(
			['bookmark tabs', 'favorite', 'save', 'order', 'tidy']),
		bg: 'bookmark_tabs',
		df: _Utils_Tuple2(26, 40)
	},
		{
		cg: 6,
		aW: '📒',
		bc: _List_fromArray(
			['ledger', 'notes', 'paper']),
		bg: 'ledger',
		df: _Utils_Tuple2(26, 41)
	},
		{
		cg: 6,
		aW: '📓',
		bc: _List_fromArray(
			['notebook', 'stationery', 'record', 'notes', 'paper', 'study']),
		bg: 'notebook',
		df: _Utils_Tuple2(26, 42)
	},
		{
		cg: 6,
		aW: '📔',
		bc: _List_fromArray(
			['notebook with decorative cover', 'classroom', 'notes', 'record', 'paper', 'study']),
		bg: 'notebook_with_decorative_cover',
		df: _Utils_Tuple2(26, 43)
	},
		{
		cg: 6,
		aW: '📕',
		bc: _List_fromArray(
			['closed book', 'read', 'library', 'knowledge', 'textbook', 'learn']),
		bg: 'closed_book',
		df: _Utils_Tuple2(26, 44)
	},
		{
		cg: 6,
		aW: '📖',
		bc: _List_fromArray(
			['open book', 'book', 'read', 'library', 'knowledge', 'literature', 'learn', 'study']),
		bg: 'book',
		df: _Utils_Tuple2(26, 45)
	},
		{
		cg: 6,
		aW: '📗',
		bc: _List_fromArray(
			['green book', 'read', 'library', 'knowledge', 'study']),
		bg: 'green_book',
		df: _Utils_Tuple2(26, 46)
	},
		{
		cg: 6,
		aW: '📘',
		bc: _List_fromArray(
			['blue book', 'read', 'library', 'knowledge', 'learn', 'study']),
		bg: 'blue_book',
		df: _Utils_Tuple2(26, 47)
	},
		{
		cg: 6,
		aW: '📙',
		bc: _List_fromArray(
			['orange book', 'read', 'library', 'knowledge', 'textbook', 'study']),
		bg: 'orange_book',
		df: _Utils_Tuple2(26, 48)
	},
		{
		cg: 6,
		aW: '📚',
		bc: _List_fromArray(
			['books', 'literature', 'library', 'study']),
		bg: 'books',
		df: _Utils_Tuple2(26, 49)
	},
		{
		cg: 7,
		aW: '📛',
		bc: _List_fromArray(
			['name badge', 'fire', 'forbid']),
		bg: 'name_badge',
		df: _Utils_Tuple2(26, 50)
	},
		{
		cg: 6,
		aW: '📜',
		bc: _List_fromArray(
			['scroll', 'documents', 'ancient', 'history', 'paper']),
		bg: 'scroll',
		df: _Utils_Tuple2(26, 51)
	},
		{
		cg: 6,
		aW: '📝',
		bc: _List_fromArray(
			['memo', 'write', 'documents', 'stationery', 'pencil', 'paper', 'writing', 'legal', 'exam', 'quiz', 'test', 'study', 'compose']),
		bg: 'memo',
		df: _Utils_Tuple2(26, 52)
	},
		{
		cg: 6,
		aW: '📞',
		bc: _List_fromArray(
			['telephone receiver', 'technology', 'communication', 'dial']),
		bg: 'telephone_receiver',
		df: _Utils_Tuple2(26, 53)
	},
		{
		cg: 6,
		aW: '📟',
		bc: _List_fromArray(
			['pager', 'bbcall', 'oldschool', '90s']),
		bg: 'pager',
		df: _Utils_Tuple2(26, 54)
	},
		{
		cg: 6,
		aW: '📠',
		bc: _List_fromArray(
			['fax machine', 'communication', 'technology']),
		bg: 'fax',
		df: _Utils_Tuple2(26, 55)
	},
		{
		cg: 6,
		aW: '📡',
		bc: _List_fromArray(
			['satellite antenna', 'communication', 'future', 'radio', 'space']),
		bg: 'satellite_antenna',
		df: _Utils_Tuple2(26, 56)
	},
		{
		cg: 6,
		aW: '📢',
		bc: _List_fromArray(
			['loudspeaker', 'volume', 'sound']),
		bg: 'loudspeaker',
		df: _Utils_Tuple2(26, 57)
	},
		{
		cg: 6,
		aW: '📣',
		bc: _List_fromArray(
			['megaphone', 'sound', 'speaker', 'volume']),
		bg: 'mega',
		df: _Utils_Tuple2(27, 0)
	},
		{
		cg: 6,
		aW: '📤',
		bc: _List_fromArray(
			['outbox tray', 'inbox', 'email']),
		bg: 'outbox_tray',
		df: _Utils_Tuple2(27, 1)
	},
		{
		cg: 6,
		aW: '📥',
		bc: _List_fromArray(
			['inbox tray', 'email', 'documents']),
		bg: 'inbox_tray',
		df: _Utils_Tuple2(27, 2)
	},
		{
		cg: 6,
		aW: '📦',
		bc: _List_fromArray(
			['package', 'mail', 'gift', 'cardboard', 'box', 'moving']),
		bg: 'package',
		df: _Utils_Tuple2(27, 3)
	},
		{
		cg: 6,
		aW: '📧',
		bc: _List_fromArray(
			['e mail', 'communication', 'inbox']),
		bg: 'e-mail',
		df: _Utils_Tuple2(27, 4)
	},
		{
		cg: 6,
		aW: '📨',
		bc: _List_fromArray(
			['incoming envelope', 'email', 'inbox']),
		bg: 'incoming_envelope',
		df: _Utils_Tuple2(27, 5)
	},
		{
		cg: 6,
		aW: '📩',
		bc: _List_fromArray(
			['envelope with arrow', 'email', 'communication']),
		bg: 'envelope_with_arrow',
		df: _Utils_Tuple2(27, 6)
	},
		{
		cg: 6,
		aW: '📪',
		bc: _List_fromArray(
			['closed mailbox with lowered flag', 'email', 'communication', 'inbox']),
		bg: 'mailbox_closed',
		df: _Utils_Tuple2(27, 7)
	},
		{
		cg: 6,
		aW: '📫',
		bc: _List_fromArray(
			['closed mailbox with raised flag', 'email', 'inbox', 'communication']),
		bg: 'mailbox',
		df: _Utils_Tuple2(27, 8)
	},
		{
		cg: 6,
		aW: '📬',
		bc: _List_fromArray(
			['open mailbox with raised flag', 'email', 'inbox', 'communication']),
		bg: 'mailbox_with_mail',
		df: _Utils_Tuple2(27, 9)
	},
		{
		cg: 6,
		aW: '📭',
		bc: _List_fromArray(
			['open mailbox with lowered flag', 'email', 'inbox']),
		bg: 'mailbox_with_no_mail',
		df: _Utils_Tuple2(27, 10)
	},
		{
		cg: 6,
		aW: '📮',
		bc: _List_fromArray(
			['postbox', 'email', 'letter', 'envelope']),
		bg: 'postbox',
		df: _Utils_Tuple2(27, 11)
	},
		{
		cg: 6,
		aW: '📯',
		bc: _List_fromArray(
			['postal horn', 'instrument', 'music']),
		bg: 'postal_horn',
		df: _Utils_Tuple2(27, 12)
	},
		{
		cg: 6,
		aW: '📰',
		bc: _List_fromArray(
			['newspaper', 'press', 'headline']),
		bg: 'newspaper',
		df: _Utils_Tuple2(27, 13)
	},
		{
		cg: 6,
		aW: '📱',
		bc: _List_fromArray(
			['mobile phone', 'technology', 'apple', 'gadgets', 'dial']),
		bg: 'iphone',
		df: _Utils_Tuple2(27, 14)
	},
		{
		cg: 6,
		aW: '📲',
		bc: _List_fromArray(
			['mobile phone with arrow', 'iphone', 'incoming']),
		bg: 'calling',
		df: _Utils_Tuple2(27, 15)
	},
		{
		cg: 7,
		aW: '📳',
		bc: _List_fromArray(
			['vibration mode', 'orange square', 'phone']),
		bg: 'vibration_mode',
		df: _Utils_Tuple2(27, 16)
	},
		{
		cg: 7,
		aW: '📴',
		bc: _List_fromArray(
			['mobile phone off', 'mute', 'orange square', 'silence', 'quiet']),
		bg: 'mobile_phone_off',
		df: _Utils_Tuple2(27, 17)
	},
		{
		cg: 7,
		aW: '📵',
		bc: _List_fromArray(
			['no mobile phones', 'iphone', 'mute', 'circle']),
		bg: 'no_mobile_phones',
		df: _Utils_Tuple2(27, 18)
	},
		{
		cg: 7,
		aW: '📶',
		bc: _List_fromArray(
			['antenna bars', 'blue square', 'reception', 'phone', 'internet', 'connection', 'wifi', 'bluetooth', 'bars']),
		bg: 'signal_strength',
		df: _Utils_Tuple2(27, 19)
	},
		{
		cg: 6,
		aW: '📷',
		bc: _List_fromArray(
			['camera', 'gadgets', 'photography']),
		bg: 'camera',
		df: _Utils_Tuple2(27, 20)
	},
		{
		cg: 6,
		aW: '📸',
		bc: _List_fromArray(
			['camera with flash', 'photography', 'gadgets']),
		bg: 'camera_with_flash',
		df: _Utils_Tuple2(27, 21)
	},
		{
		cg: 6,
		aW: '📹',
		bc: _List_fromArray(
			['video camera', 'film', 'record']),
		bg: 'video_camera',
		df: _Utils_Tuple2(27, 22)
	},
		{
		cg: 6,
		aW: '📺',
		bc: _List_fromArray(
			['television', 'technology', 'program', 'oldschool', 'show', 'television']),
		bg: 'tv',
		df: _Utils_Tuple2(27, 23)
	},
		{
		cg: 6,
		aW: '📻',
		bc: _List_fromArray(
			['radio', 'communication', 'music', 'podcast', 'program']),
		bg: 'radio',
		df: _Utils_Tuple2(27, 24)
	},
		{
		cg: 6,
		aW: '📼',
		bc: _List_fromArray(
			['videocassette', 'record', 'video', 'oldschool', '90s', '80s']),
		bg: 'vhs',
		df: _Utils_Tuple2(27, 25)
	},
		{
		cg: 6,
		aW: '📽️',
		bc: _List_fromArray(
			['film projector', 'video', 'tape', 'record', 'movie']),
		bg: 'film_projector',
		df: _Utils_Tuple2(27, 26)
	},
		{
		cg: 6,
		aW: '\uD83D\uDCFF',
		bc: _List_fromArray(
			['prayer beads', 'dhikr', 'religious']),
		bg: 'prayer_beads',
		df: _Utils_Tuple2(27, 27)
	},
		{
		cg: 7,
		aW: '🔀',
		bc: _List_fromArray(
			['shuffle tracks button', 'blue square', 'shuffle', 'music', 'random']),
		bg: 'twisted_rightwards_arrows',
		df: _Utils_Tuple2(27, 28)
	},
		{
		cg: 7,
		aW: '🔁',
		bc: _List_fromArray(
			['repeat button', 'loop', 'record']),
		bg: 'repeat',
		df: _Utils_Tuple2(27, 29)
	},
		{
		cg: 7,
		aW: '🔂',
		bc: _List_fromArray(
			['repeat single button', 'blue square', 'loop']),
		bg: 'repeat_one',
		df: _Utils_Tuple2(27, 30)
	},
		{
		cg: 7,
		aW: '🔃',
		bc: _List_fromArray(
			['clockwise vertical arrows', 'sync', 'cycle', 'round', 'repeat']),
		bg: 'arrows_clockwise',
		df: _Utils_Tuple2(27, 31)
	},
		{
		cg: 7,
		aW: '🔄',
		bc: _List_fromArray(
			['counterclockwise arrows button', 'blue square', 'sync', 'cycle']),
		bg: 'arrows_counterclockwise',
		df: _Utils_Tuple2(27, 32)
	},
		{
		cg: 7,
		aW: '🔅',
		bc: _List_fromArray(
			['dim button', 'sun', 'afternoon', 'warm', 'summer']),
		bg: 'low_brightness',
		df: _Utils_Tuple2(27, 33)
	},
		{
		cg: 7,
		aW: '🔆',
		bc: _List_fromArray(
			['bright button', 'sun', 'light']),
		bg: 'high_brightness',
		df: _Utils_Tuple2(27, 34)
	},
		{
		cg: 6,
		aW: '🔇',
		bc: _List_fromArray(
			['muted speaker', 'sound', 'volume', 'silence', 'quiet']),
		bg: 'mute',
		df: _Utils_Tuple2(27, 35)
	},
		{
		cg: 6,
		aW: '🔈',
		bc: _List_fromArray(
			['speaker low volume', 'sound', 'volume', 'silence', 'broadcast']),
		bg: 'speaker',
		df: _Utils_Tuple2(27, 36)
	},
		{
		cg: 6,
		aW: '🔉',
		bc: _List_fromArray(
			['speaker medium volume', 'volume', 'speaker', 'broadcast']),
		bg: 'sound',
		df: _Utils_Tuple2(27, 37)
	},
		{
		cg: 6,
		aW: '🔊',
		bc: _List_fromArray(
			['speaker high volume', 'volume', 'noise', 'noisy', 'speaker', 'broadcast']),
		bg: 'loud_sound',
		df: _Utils_Tuple2(27, 38)
	},
		{
		cg: 6,
		aW: '🔋',
		bc: _List_fromArray(
			['battery', 'power', 'energy', 'sustain']),
		bg: 'battery',
		df: _Utils_Tuple2(27, 39)
	},
		{
		cg: 6,
		aW: '🔌',
		bc: _List_fromArray(
			['electric plug', 'charger', 'power']),
		bg: 'electric_plug',
		df: _Utils_Tuple2(27, 40)
	},
		{
		cg: 6,
		aW: '🔍',
		bc: _List_fromArray(
			['magnifying glass tilted left', 'search', 'zoom', 'find', 'detective']),
		bg: 'mag',
		df: _Utils_Tuple2(27, 41)
	},
		{
		cg: 6,
		aW: '🔎',
		bc: _List_fromArray(
			['magnifying glass tilted right', 'search', 'zoom', 'find', 'detective']),
		bg: 'mag_right',
		df: _Utils_Tuple2(27, 42)
	},
		{
		cg: 6,
		aW: '🔏',
		bc: _List_fromArray(
			['locked with pen', 'security', 'secret']),
		bg: 'lock_with_ink_pen',
		df: _Utils_Tuple2(27, 43)
	},
		{
		cg: 6,
		aW: '🔐',
		bc: _List_fromArray(
			['locked with key', 'security', 'privacy']),
		bg: 'closed_lock_with_key',
		df: _Utils_Tuple2(27, 44)
	},
		{
		cg: 6,
		aW: '🔑',
		bc: _List_fromArray(
			['key', 'lock', 'door', 'password']),
		bg: 'key',
		df: _Utils_Tuple2(27, 45)
	},
		{
		cg: 6,
		aW: '🔒',
		bc: _List_fromArray(
			['locked', 'security', 'password', 'padlock']),
		bg: 'lock',
		df: _Utils_Tuple2(27, 46)
	},
		{
		cg: 6,
		aW: '🔓',
		bc: _List_fromArray(
			['unlocked', 'privacy', 'security']),
		bg: 'unlock',
		df: _Utils_Tuple2(27, 47)
	},
		{
		cg: 6,
		aW: '🔔',
		bc: _List_fromArray(
			['bell', 'sound', 'notification', 'christmas', 'xmas', 'chime']),
		bg: 'bell',
		df: _Utils_Tuple2(27, 48)
	},
		{
		cg: 6,
		aW: '🔕',
		bc: _List_fromArray(
			['bell with slash', 'sound', 'volume', 'mute', 'quiet', 'silent']),
		bg: 'no_bell',
		df: _Utils_Tuple2(27, 49)
	},
		{
		cg: 6,
		aW: '🔖',
		bc: _List_fromArray(
			['bookmark', 'favorite', 'label', 'save']),
		bg: 'bookmark',
		df: _Utils_Tuple2(27, 50)
	},
		{
		cg: 6,
		aW: '🔗',
		bc: _List_fromArray(
			['link', 'rings', 'url']),
		bg: 'link',
		df: _Utils_Tuple2(27, 51)
	},
		{
		cg: 7,
		aW: '🔘',
		bc: _List_fromArray(
			['radio button', 'input', 'old', 'music', 'circle']),
		bg: 'radio_button',
		df: _Utils_Tuple2(27, 52)
	},
		{
		cg: 7,
		aW: '🔙',
		bc: _List_fromArray(
			['back arrow', 'arrow', 'words', 'return']),
		bg: 'back',
		df: _Utils_Tuple2(27, 53)
	},
		{
		cg: 7,
		aW: '🔚',
		bc: _List_fromArray(
			['end arrow', 'words', 'arrow']),
		bg: 'end',
		df: _Utils_Tuple2(27, 54)
	},
		{
		cg: 7,
		aW: '🔛',
		bc: _List_fromArray(
			['on arrow', 'arrow', 'words']),
		bg: 'on',
		df: _Utils_Tuple2(27, 55)
	},
		{
		cg: 7,
		aW: '🔜',
		bc: _List_fromArray(
			['soon arrow', 'arrow', 'words']),
		bg: 'soon',
		df: _Utils_Tuple2(27, 56)
	},
		{
		cg: 7,
		aW: '🔝',
		bc: _List_fromArray(
			['top arrow', 'words', 'blue square']),
		bg: 'top',
		df: _Utils_Tuple2(27, 57)
	},
		{
		cg: 7,
		aW: '🔞',
		bc: _List_fromArray(
			['no one under eighteen', '18', 'drink', 'pub', 'night', 'minor', 'circle']),
		bg: 'underage',
		df: _Utils_Tuple2(28, 0)
	},
		{
		cg: 7,
		aW: '🔟',
		bc: _List_fromArray(
			['keycap 10', 'numbers', '10', 'blue square']),
		bg: 'keycap_ten',
		df: _Utils_Tuple2(28, 1)
	},
		{
		cg: 7,
		aW: '🔠',
		bc: _List_fromArray(
			['input latin uppercase', 'alphabet', 'words', 'blue square']),
		bg: 'capital_abcd',
		df: _Utils_Tuple2(28, 2)
	},
		{
		cg: 7,
		aW: '🔡',
		bc: _List_fromArray(
			['input latin lowercase', 'blue square', 'alphabet']),
		bg: 'abcd',
		df: _Utils_Tuple2(28, 3)
	},
		{
		cg: 7,
		aW: '🔢',
		bc: _List_fromArray(
			['input numbers', 'numbers', 'blue square']),
		bg: '1234',
		df: _Utils_Tuple2(28, 4)
	},
		{
		cg: 7,
		aW: '🔣',
		bc: _List_fromArray(
			['input symbols', 'blue square', 'music', 'note', 'ampersand', 'percent', 'glyphs', 'characters']),
		bg: 'symbols',
		df: _Utils_Tuple2(28, 5)
	},
		{
		cg: 7,
		aW: '🔤',
		bc: _List_fromArray(
			['input latin letters', 'blue square', 'alphabet']),
		bg: 'abc',
		df: _Utils_Tuple2(28, 6)
	},
		{
		cg: 4,
		aW: '🔥',
		bc: _List_fromArray(
			['fire', 'hot', 'cook', 'flame']),
		bg: 'fire',
		df: _Utils_Tuple2(28, 7)
	},
		{
		cg: 6,
		aW: '🔦',
		bc: _List_fromArray(
			['flashlight', 'dark', 'camping', 'sight', 'night']),
		bg: 'flashlight',
		df: _Utils_Tuple2(28, 8)
	},
		{
		cg: 6,
		aW: '🔧',
		bc: _List_fromArray(
			['wrench', 'tools', 'diy', 'ikea', 'fix', 'maintainer']),
		bg: 'wrench',
		df: _Utils_Tuple2(28, 9)
	},
		{
		cg: 6,
		aW: '🔨',
		bc: _List_fromArray(
			['hammer', 'tools', 'build', 'create']),
		bg: 'hammer',
		df: _Utils_Tuple2(28, 10)
	},
		{
		cg: 6,
		aW: '🔩',
		bc: _List_fromArray(
			['nut and bolt', 'handy', 'tools', 'fix']),
		bg: 'nut_and_bolt',
		df: _Utils_Tuple2(28, 11)
	},
		{
		cg: 3,
		aW: '🔪',
		bc: _List_fromArray(
			['kitchen knife', 'knife', 'blade', 'cutlery', 'kitchen', 'weapon']),
		bg: 'hocho',
		df: _Utils_Tuple2(28, 12)
	},
		{
		cg: 6,
		aW: '🔫',
		bc: _List_fromArray(
			['pistol', 'violence', 'weapon', 'pistol', 'revolver']),
		bg: 'gun',
		df: _Utils_Tuple2(28, 13)
	},
		{
		cg: 6,
		aW: '🔬',
		bc: _List_fromArray(
			['microscope', 'laboratory', 'experiment', 'zoomin', 'science', 'study']),
		bg: 'microscope',
		df: _Utils_Tuple2(28, 14)
	},
		{
		cg: 6,
		aW: '🔭',
		bc: _List_fromArray(
			['telescope', 'stars', 'space', 'zoom', 'science', 'astronomy']),
		bg: 'telescope',
		df: _Utils_Tuple2(28, 15)
	},
		{
		cg: 5,
		aW: '🔮',
		bc: _List_fromArray(
			['crystal ball', 'disco', 'party', 'magic', 'circus', 'fortune teller']),
		bg: 'crystal_ball',
		df: _Utils_Tuple2(28, 16)
	},
		{
		cg: 7,
		aW: '🔯',
		bc: _List_fromArray(
			['dotted six pointed star', 'purple square', 'religion', 'jewish', 'hexagram']),
		bg: 'six_pointed_star',
		df: _Utils_Tuple2(28, 17)
	},
		{
		cg: 7,
		aW: '🔰',
		bc: _List_fromArray(
			['japanese symbol for beginner', 'badge', 'shield']),
		bg: 'beginner',
		df: _Utils_Tuple2(28, 18)
	},
		{
		cg: 7,
		aW: '🔱',
		bc: _List_fromArray(
			['trident emblem', 'weapon', 'spear']),
		bg: 'trident',
		df: _Utils_Tuple2(28, 19)
	},
		{
		cg: 7,
		aW: '🔲',
		bc: _List_fromArray(
			['black square button', 'shape', 'input', 'frame']),
		bg: 'black_square_button',
		df: _Utils_Tuple2(28, 20)
	},
		{
		cg: 7,
		aW: '🔳',
		bc: _List_fromArray(
			['white square button', 'shape', 'input']),
		bg: 'white_square_button',
		df: _Utils_Tuple2(28, 21)
	},
		{
		cg: 7,
		aW: '🔴',
		bc: _List_fromArray(
			['red circle', 'shape', 'error', 'danger']),
		bg: 'red_circle',
		df: _Utils_Tuple2(28, 22)
	},
		{
		cg: 7,
		aW: '🔵',
		bc: _List_fromArray(
			['blue circle', 'shape', 'icon', 'button']),
		bg: 'large_blue_circle',
		df: _Utils_Tuple2(28, 23)
	},
		{
		cg: 7,
		aW: '🔶',
		bc: _List_fromArray(
			['large orange diamond', 'shape', 'jewel', 'gem']),
		bg: 'large_orange_diamond',
		df: _Utils_Tuple2(28, 24)
	},
		{
		cg: 7,
		aW: '🔷',
		bc: _List_fromArray(
			['large blue diamond', 'shape', 'jewel', 'gem']),
		bg: 'large_blue_diamond',
		df: _Utils_Tuple2(28, 25)
	},
		{
		cg: 7,
		aW: '🔸',
		bc: _List_fromArray(
			['small orange diamond', 'shape', 'jewel', 'gem']),
		bg: 'small_orange_diamond',
		df: _Utils_Tuple2(28, 26)
	},
		{
		cg: 7,
		aW: '🔹',
		bc: _List_fromArray(
			['small blue diamond', 'shape', 'jewel', 'gem']),
		bg: 'small_blue_diamond',
		df: _Utils_Tuple2(28, 27)
	},
		{
		cg: 7,
		aW: '🔺',
		bc: _List_fromArray(
			['red triangle pointed up', 'shape', 'direction', 'up', 'top']),
		bg: 'small_red_triangle',
		df: _Utils_Tuple2(28, 28)
	},
		{
		cg: 7,
		aW: '🔻',
		bc: _List_fromArray(
			['red triangle pointed down', 'shape', 'direction', 'bottom']),
		bg: 'small_red_triangle_down',
		df: _Utils_Tuple2(28, 29)
	},
		{
		cg: 7,
		aW: '🔼',
		bc: _List_fromArray(
			['upwards button', 'blue square', 'triangle', 'direction', 'point', 'forward', 'top']),
		bg: 'arrow_up_small',
		df: _Utils_Tuple2(28, 30)
	},
		{
		cg: 7,
		aW: '🔽',
		bc: _List_fromArray(
			['downwards button', 'blue square', 'direction', 'bottom']),
		bg: 'arrow_down_small',
		df: _Utils_Tuple2(28, 31)
	},
		{
		cg: 7,
		aW: '🕉️',
		bc: _List_fromArray(
			['om', 'hinduism', 'buddhism', 'sikhism', 'jainism']),
		bg: 'om_symbol',
		df: _Utils_Tuple2(28, 32)
	},
		{
		cg: 2,
		aW: '🕊️',
		bc: _List_fromArray(
			['dove', 'animal', 'bird']),
		bg: 'dove_of_peace',
		df: _Utils_Tuple2(28, 33)
	},
		{
		cg: 4,
		aW: '\uD83D\uDD4B',
		bc: _List_fromArray(
			['kaaba', 'mecca', 'mosque', 'islam']),
		bg: 'kaaba',
		df: _Utils_Tuple2(28, 34)
	},
		{
		cg: 4,
		aW: '\uD83D\uDD4C',
		bc: _List_fromArray(
			['mosque', 'islam', 'worship', 'minaret']),
		bg: 'mosque',
		df: _Utils_Tuple2(28, 35)
	},
		{
		cg: 4,
		aW: '\uD83D\uDD4D',
		bc: _List_fromArray(
			['synagogue', 'judaism', 'worship', 'temple', 'jewish']),
		bg: 'synagogue',
		df: _Utils_Tuple2(28, 36)
	},
		{
		cg: 7,
		aW: '\uD83D\uDD4E',
		bc: _List_fromArray(
			['menorah', 'hanukkah', 'candles', 'jewish']),
		bg: 'menorah_with_nine_branches',
		df: _Utils_Tuple2(28, 37)
	},
		{
		cg: 4,
		aW: '🕐',
		bc: _List_fromArray(
			['one o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock1',
		df: _Utils_Tuple2(28, 38)
	},
		{
		cg: 4,
		aW: '🕑',
		bc: _List_fromArray(
			['two o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock2',
		df: _Utils_Tuple2(28, 39)
	},
		{
		cg: 4,
		aW: '🕒',
		bc: _List_fromArray(
			['three o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock3',
		df: _Utils_Tuple2(28, 40)
	},
		{
		cg: 4,
		aW: '🕓',
		bc: _List_fromArray(
			['four o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock4',
		df: _Utils_Tuple2(28, 41)
	},
		{
		cg: 4,
		aW: '🕔',
		bc: _List_fromArray(
			['five o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock5',
		df: _Utils_Tuple2(28, 42)
	},
		{
		cg: 4,
		aW: '🕕',
		bc: _List_fromArray(
			['six o clock', 'time', 'late', 'early', 'schedule', 'dawn', 'dusk']),
		bg: 'clock6',
		df: _Utils_Tuple2(28, 43)
	},
		{
		cg: 4,
		aW: '🕖',
		bc: _List_fromArray(
			['seven o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock7',
		df: _Utils_Tuple2(28, 44)
	},
		{
		cg: 4,
		aW: '🕗',
		bc: _List_fromArray(
			['eight o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock8',
		df: _Utils_Tuple2(28, 45)
	},
		{
		cg: 4,
		aW: '🕘',
		bc: _List_fromArray(
			['nine o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock9',
		df: _Utils_Tuple2(28, 46)
	},
		{
		cg: 4,
		aW: '🕙',
		bc: _List_fromArray(
			['ten o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock10',
		df: _Utils_Tuple2(28, 47)
	},
		{
		cg: 4,
		aW: '🕚',
		bc: _List_fromArray(
			['eleven o clock', 'time', 'late', 'early', 'schedule']),
		bg: 'clock11',
		df: _Utils_Tuple2(28, 48)
	},
		{
		cg: 4,
		aW: '🕛',
		bc: _List_fromArray(
			['twelve o clock', 'time', 'noon', 'midnight', 'midday', 'late', 'early', 'schedule']),
		bg: 'clock12',
		df: _Utils_Tuple2(28, 49)
	},
		{
		cg: 4,
		aW: '🕜',
		bc: _List_fromArray(
			['one thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock130',
		df: _Utils_Tuple2(28, 50)
	},
		{
		cg: 4,
		aW: '🕝',
		bc: _List_fromArray(
			['two thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock230',
		df: _Utils_Tuple2(28, 51)
	},
		{
		cg: 4,
		aW: '🕞',
		bc: _List_fromArray(
			['three thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock330',
		df: _Utils_Tuple2(28, 52)
	},
		{
		cg: 4,
		aW: '🕟',
		bc: _List_fromArray(
			['four thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock430',
		df: _Utils_Tuple2(28, 53)
	},
		{
		cg: 4,
		aW: '🕠',
		bc: _List_fromArray(
			['five thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock530',
		df: _Utils_Tuple2(28, 54)
	},
		{
		cg: 4,
		aW: '🕡',
		bc: _List_fromArray(
			['six thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock630',
		df: _Utils_Tuple2(28, 55)
	},
		{
		cg: 4,
		aW: '🕢',
		bc: _List_fromArray(
			['seven thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock730',
		df: _Utils_Tuple2(28, 56)
	},
		{
		cg: 4,
		aW: '🕣',
		bc: _List_fromArray(
			['eight thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock830',
		df: _Utils_Tuple2(28, 57)
	},
		{
		cg: 4,
		aW: '🕤',
		bc: _List_fromArray(
			['nine thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock930',
		df: _Utils_Tuple2(29, 0)
	},
		{
		cg: 4,
		aW: '🕥',
		bc: _List_fromArray(
			['ten thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock1030',
		df: _Utils_Tuple2(29, 1)
	},
		{
		cg: 4,
		aW: '🕦',
		bc: _List_fromArray(
			['eleven thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock1130',
		df: _Utils_Tuple2(29, 2)
	},
		{
		cg: 4,
		aW: '🕧',
		bc: _List_fromArray(
			['twelve thirty', 'time', 'late', 'early', 'schedule']),
		bg: 'clock1230',
		df: _Utils_Tuple2(29, 3)
	},
		{
		cg: 6,
		aW: '🕯️',
		bc: _List_fromArray(
			['candle', 'fire', 'wax']),
		bg: 'candle',
		df: _Utils_Tuple2(29, 4)
	},
		{
		cg: 4,
		aW: '🕰️',
		bc: _List_fromArray(
			['mantelpiece clock', 'time']),
		bg: 'mantelpiece_clock',
		df: _Utils_Tuple2(29, 5)
	},
		{
		cg: 0,
		aW: '🕳️',
		bc: _List_fromArray(
			['hole', 'embarrassing']),
		bg: 'hole',
		df: _Utils_Tuple2(29, 6)
	},
		{
		cg: 1,
		aW: '🕴️',
		bc: _List_fromArray(
			['man in suit levitating', 'suit', 'business', 'levitate', 'hover', 'jump']),
		bg: 'man_in_business_suit_levitating',
		df: _Utils_Tuple2(29, 7)
	},
		{
		cg: 1,
		aW: '🕵️\u200D♀️',
		bc: _List_fromArray(
			['woman detective', 'human', 'spy', 'detective', 'female', 'woman']),
		bg: 'female-detective',
		df: _Utils_Tuple2(29, 13)
	},
		{
		cg: 1,
		aW: '🕵️\u200D♂️',
		bc: _List_fromArray(
			['man detective']),
		bg: 'male-detective',
		df: _Utils_Tuple2(29, 19)
	},
		{
		cg: 1,
		aW: '🕵️',
		bc: _List_fromArray(
			['detective', 'human', 'spy', 'detective']),
		bg: 'sleuth_or_spy',
		df: _Utils_Tuple2(29, 25)
	},
		{
		cg: 6,
		aW: '🕶️',
		bc: _List_fromArray(
			['sunglasses', 'face', 'cool', 'accessories']),
		bg: 'dark_sunglasses',
		df: _Utils_Tuple2(29, 31)
	},
		{
		cg: 2,
		aW: '🕷️',
		bc: _List_fromArray(
			['spider', 'animal', 'arachnid']),
		bg: 'spider',
		df: _Utils_Tuple2(29, 32)
	},
		{
		cg: 2,
		aW: '🕸️',
		bc: _List_fromArray(
			['spider web', 'animal', 'insect', 'arachnid', 'silk']),
		bg: 'spider_web',
		df: _Utils_Tuple2(29, 33)
	},
		{
		cg: 5,
		aW: '🕹️',
		bc: _List_fromArray(
			['joystick', 'game', 'play']),
		bg: 'joystick',
		df: _Utils_Tuple2(29, 34)
	},
		{
		cg: 1,
		aW: '\uD83D\uDD7A',
		bc: _List_fromArray(
			['man dancing', 'male', 'boy', 'fun', 'dancer']),
		bg: 'man_dancing',
		df: _Utils_Tuple2(29, 35)
	},
		{
		cg: 6,
		aW: '🖇️',
		bc: _List_fromArray(
			['linked paperclips', 'documents', 'stationery']),
		bg: 'linked_paperclips',
		df: _Utils_Tuple2(29, 41)
	},
		{
		cg: 6,
		aW: '🖊️',
		bc: _List_fromArray(
			['pen', 'stationery', 'writing', 'write']),
		bg: 'lower_left_ballpoint_pen',
		df: _Utils_Tuple2(29, 42)
	},
		{
		cg: 6,
		aW: '🖋️',
		bc: _List_fromArray(
			['fountain pen', 'stationery', 'writing', 'write']),
		bg: 'lower_left_fountain_pen',
		df: _Utils_Tuple2(29, 43)
	},
		{
		cg: 6,
		aW: '🖌️',
		bc: _List_fromArray(
			['paintbrush', 'drawing', 'creativity', 'art']),
		bg: 'lower_left_paintbrush',
		df: _Utils_Tuple2(29, 44)
	},
		{
		cg: 6,
		aW: '🖍️',
		bc: _List_fromArray(
			['crayon', 'drawing', 'creativity']),
		bg: 'lower_left_crayon',
		df: _Utils_Tuple2(29, 45)
	},
		{
		cg: 1,
		aW: '🖐️',
		bc: _List_fromArray(
			['hand with fingers splayed', 'hand', 'fingers', 'palm']),
		bg: 'raised_hand_with_fingers_splayed',
		df: _Utils_Tuple2(29, 46)
	},
		{
		cg: 1,
		aW: '🖕',
		bc: _List_fromArray(
			['middle finger', 'hand', 'fingers', 'rude', 'middle', 'flipping']),
		bg: 'middle_finger',
		df: _Utils_Tuple2(29, 52)
	},
		{
		cg: 1,
		aW: '🖖',
		bc: _List_fromArray(
			['vulcan salute', 'hand', 'fingers', 'spock', 'star trek']),
		bg: 'spock-hand',
		df: _Utils_Tuple2(30, 0)
	},
		{
		cg: 0,
		aW: '\uD83D\uDDA4',
		bc: _List_fromArray(
			['black heart', 'evil']),
		bg: 'black_heart',
		df: _Utils_Tuple2(30, 6)
	},
		{
		cg: 6,
		aW: '🖥️',
		bc: _List_fromArray(
			['desktop computer', 'technology', 'computing', 'screen']),
		bg: 'desktop_computer',
		df: _Utils_Tuple2(30, 7)
	},
		{
		cg: 6,
		aW: '🖨️',
		bc: _List_fromArray(
			['printer', 'paper', 'ink']),
		bg: 'printer',
		df: _Utils_Tuple2(30, 8)
	},
		{
		cg: 6,
		aW: '🖱️',
		bc: _List_fromArray(
			['computer mouse', 'click']),
		bg: 'three_button_mouse',
		df: _Utils_Tuple2(30, 9)
	},
		{
		cg: 6,
		aW: '🖲️',
		bc: _List_fromArray(
			['trackball', 'technology', 'trackpad']),
		bg: 'trackball',
		df: _Utils_Tuple2(30, 10)
	},
		{
		cg: 5,
		aW: '🖼️',
		bc: _List_fromArray(
			['framed picture', 'photography']),
		bg: 'frame_with_picture',
		df: _Utils_Tuple2(30, 11)
	},
		{
		cg: 6,
		aW: '🗂️',
		bc: _List_fromArray(
			['card index dividers', 'organizing', 'business', 'stationery']),
		bg: 'card_index_dividers',
		df: _Utils_Tuple2(30, 12)
	},
		{
		cg: 6,
		aW: '🗃️',
		bc: _List_fromArray(
			['card file box', 'business', 'stationery']),
		bg: 'card_file_box',
		df: _Utils_Tuple2(30, 13)
	},
		{
		cg: 6,
		aW: '🗄️',
		bc: _List_fromArray(
			['file cabinet', 'filing', 'organizing']),
		bg: 'file_cabinet',
		df: _Utils_Tuple2(30, 14)
	},
		{
		cg: 6,
		aW: '🗑️',
		bc: _List_fromArray(
			['wastebasket', 'bin', 'trash', 'rubbish', 'garbage', 'toss']),
		bg: 'wastebasket',
		df: _Utils_Tuple2(30, 15)
	},
		{
		cg: 6,
		aW: '🗒️',
		bc: _List_fromArray(
			['spiral notepad', 'memo', 'stationery']),
		bg: 'spiral_note_pad',
		df: _Utils_Tuple2(30, 16)
	},
		{
		cg: 6,
		aW: '🗓️',
		bc: _List_fromArray(
			['spiral calendar', 'date', 'schedule', 'planning']),
		bg: 'spiral_calendar_pad',
		df: _Utils_Tuple2(30, 17)
	},
		{
		cg: 6,
		aW: '🗜️',
		bc: _List_fromArray(
			['clamp', 'tool']),
		bg: 'compression',
		df: _Utils_Tuple2(30, 18)
	},
		{
		cg: 6,
		aW: '🗝️',
		bc: _List_fromArray(
			['old key', 'lock', 'door', 'password']),
		bg: 'old_key',
		df: _Utils_Tuple2(30, 19)
	},
		{
		cg: 6,
		aW: '🗞️',
		bc: _List_fromArray(
			['rolled up newspaper', 'press', 'headline']),
		bg: 'rolled_up_newspaper',
		df: _Utils_Tuple2(30, 20)
	},
		{
		cg: 6,
		aW: '🗡️',
		bc: _List_fromArray(
			['dagger', 'weapon']),
		bg: 'dagger_knife',
		df: _Utils_Tuple2(30, 21)
	},
		{
		cg: 1,
		aW: '🗣️',
		bc: _List_fromArray(
			['speaking head', 'user', 'person', 'human', 'sing', 'say', 'talk']),
		bg: 'speaking_head_in_silhouette',
		df: _Utils_Tuple2(30, 22)
	},
		{
		cg: 0,
		aW: '🗨️',
		bc: _List_fromArray(
			['left speech bubble', 'words', 'message', 'talk', 'chatting']),
		bg: 'left_speech_bubble',
		df: _Utils_Tuple2(30, 23)
	},
		{
		cg: 0,
		aW: '🗯️',
		bc: _List_fromArray(
			['right anger bubble', 'caption', 'speech', 'thinking', 'mad']),
		bg: 'right_anger_bubble',
		df: _Utils_Tuple2(30, 24)
	},
		{
		cg: 6,
		aW: '🗳️',
		bc: _List_fromArray(
			['ballot box with ballot', 'election', 'vote']),
		bg: 'ballot_box_with_ballot',
		df: _Utils_Tuple2(30, 25)
	},
		{
		cg: 4,
		aW: '🗺️',
		bc: _List_fromArray(
			['world map', 'location', 'direction']),
		bg: 'world_map',
		df: _Utils_Tuple2(30, 26)
	},
		{
		cg: 4,
		aW: '🗻',
		bc: _List_fromArray(
			['mount fuji', 'photo', 'mountain', 'nature', 'japanese']),
		bg: 'mount_fuji',
		df: _Utils_Tuple2(30, 27)
	},
		{
		cg: 4,
		aW: '🗼',
		bc: _List_fromArray(
			['tokyo tower', 'photo', 'japanese']),
		bg: 'tokyo_tower',
		df: _Utils_Tuple2(30, 28)
	},
		{
		cg: 4,
		aW: '🗽',
		bc: _List_fromArray(
			['statue of liberty', 'american', 'newyork']),
		bg: 'statue_of_liberty',
		df: _Utils_Tuple2(30, 29)
	},
		{
		cg: 4,
		aW: '🗾',
		bc: _List_fromArray(
			['map of japan', 'nation', 'country', 'japanese', 'asia']),
		bg: 'japan',
		df: _Utils_Tuple2(30, 30)
	},
		{
		cg: 6,
		aW: '🗿',
		bc: _List_fromArray(
			['moai', 'rock', 'easter island', 'moai']),
		bg: 'moyai',
		df: _Utils_Tuple2(30, 31)
	},
		{
		cg: 0,
		aW: '😀',
		bc: _List_fromArray(
			['grinning face', 'face', 'smile', 'happy', 'joy', ':D', 'grin']),
		bg: 'grinning',
		df: _Utils_Tuple2(30, 32)
	},
		{
		cg: 0,
		aW: '😁',
		bc: _List_fromArray(
			['beaming face with smiling eyes', 'face', 'happy', 'smile', 'joy', 'kawaii']),
		bg: 'grin',
		df: _Utils_Tuple2(30, 33)
	},
		{
		cg: 0,
		aW: '😂',
		bc: _List_fromArray(
			['face with tears of joy', 'face', 'cry', 'tears', 'weep', 'happy', 'happytears', 'haha']),
		bg: 'joy',
		df: _Utils_Tuple2(30, 34)
	},
		{
		cg: 0,
		aW: '😃',
		bc: _List_fromArray(
			['grinning face with big eyes', 'face', 'happy', 'joy', 'haha', ':D', ':)', 'smile', 'funny']),
		bg: 'smiley',
		df: _Utils_Tuple2(30, 35)
	},
		{
		cg: 0,
		aW: '😄',
		bc: _List_fromArray(
			['grinning face with smiling eyes', 'face', 'happy', 'joy', 'funny', 'haha', 'laugh', 'like', ':D', ':)']),
		bg: 'smile',
		df: _Utils_Tuple2(30, 36)
	},
		{
		cg: 0,
		aW: '😅',
		bc: _List_fromArray(
			['grinning face with sweat', 'face', 'hot', 'happy', 'laugh', 'sweat', 'smile', 'relief']),
		bg: 'sweat_smile',
		df: _Utils_Tuple2(30, 37)
	},
		{
		cg: 0,
		aW: '😆',
		bc: _List_fromArray(
			['grinning squinting face', 'happy', 'joy', 'lol', 'satisfied', 'haha', 'face', 'glad', 'XD', 'laugh']),
		bg: 'laughing',
		df: _Utils_Tuple2(30, 38)
	},
		{
		cg: 0,
		aW: '😇',
		bc: _List_fromArray(
			['smiling face with halo', 'face', 'angel', 'heaven', 'halo']),
		bg: 'innocent',
		df: _Utils_Tuple2(30, 39)
	},
		{
		cg: 0,
		aW: '😈',
		bc: _List_fromArray(
			['smiling face with horns', 'devil', 'horns']),
		bg: 'smiling_imp',
		df: _Utils_Tuple2(30, 40)
	},
		{
		cg: 0,
		aW: '😉',
		bc: _List_fromArray(
			['winking face', 'face', 'happy', 'mischievous', 'secret', ';)', 'smile', 'eye']),
		bg: 'wink',
		df: _Utils_Tuple2(30, 41)
	},
		{
		cg: 0,
		aW: '😊',
		bc: _List_fromArray(
			['smiling face with smiling eyes', 'face', 'smile', 'happy', 'flushed', 'crush', 'embarrassed', 'shy', 'joy']),
		bg: 'blush',
		df: _Utils_Tuple2(30, 42)
	},
		{
		cg: 0,
		aW: '😋',
		bc: _List_fromArray(
			['face savoring food', 'happy', 'joy', 'tongue', 'smile', 'face', 'silly', 'yummy', 'nom', 'delicious', 'savouring']),
		bg: 'yum',
		df: _Utils_Tuple2(30, 43)
	},
		{
		cg: 0,
		aW: '😌',
		bc: _List_fromArray(
			['relieved face', 'face', 'relaxed', 'phew', 'massage', 'happiness']),
		bg: 'relieved',
		df: _Utils_Tuple2(30, 44)
	},
		{
		cg: 0,
		aW: '😍',
		bc: _List_fromArray(
			['smiling face with heart eyes', 'face', 'love', 'like', 'affection', 'valentines', 'infatuation', 'crush', 'heart']),
		bg: 'heart_eyes',
		df: _Utils_Tuple2(30, 45)
	},
		{
		cg: 0,
		aW: '😎',
		bc: _List_fromArray(
			['smiling face with sunglasses', 'face', 'cool', 'smile', 'summer', 'beach', 'sunglass']),
		bg: 'sunglasses',
		df: _Utils_Tuple2(30, 46)
	},
		{
		cg: 0,
		aW: '😏',
		bc: _List_fromArray(
			['smirking face', 'face', 'smile', 'mean', 'prank', 'smug', 'sarcasm']),
		bg: 'smirk',
		df: _Utils_Tuple2(30, 47)
	},
		{
		cg: 0,
		aW: '😐',
		bc: _List_fromArray(
			['neutral face', 'indifference', 'meh', ':|', 'neutral']),
		bg: 'neutral_face',
		df: _Utils_Tuple2(30, 48)
	},
		{
		cg: 0,
		aW: '😑',
		bc: _List_fromArray(
			['expressionless face', 'face', 'indifferent', '   ', 'meh', 'deadpan']),
		bg: 'expressionless',
		df: _Utils_Tuple2(30, 49)
	},
		{
		cg: 0,
		aW: '😒',
		bc: _List_fromArray(
			['unamused face', 'indifference', 'bored', 'straight face', 'serious', 'sarcasm', 'unimpressed', 'skeptical', 'dubious', 'side eye']),
		bg: 'unamused',
		df: _Utils_Tuple2(30, 50)
	},
		{
		cg: 0,
		aW: '😓',
		bc: _List_fromArray(
			['downcast face with sweat', 'face', 'hot', 'sad', 'tired', 'exercise']),
		bg: 'sweat',
		df: _Utils_Tuple2(30, 51)
	},
		{
		cg: 0,
		aW: '😔',
		bc: _List_fromArray(
			['pensive face', 'face', 'sad', 'depressed', 'upset']),
		bg: 'pensive',
		df: _Utils_Tuple2(30, 52)
	},
		{
		cg: 0,
		aW: '😕',
		bc: _List_fromArray(
			['confused face', 'face', 'indifference', 'huh', 'weird', 'hmmm', ':/']),
		bg: 'confused',
		df: _Utils_Tuple2(30, 53)
	},
		{
		cg: 0,
		aW: '😖',
		bc: _List_fromArray(
			['confounded face', 'face', 'confused', 'sick', 'unwell', 'oops', ':S']),
		bg: 'confounded',
		df: _Utils_Tuple2(30, 54)
	},
		{
		cg: 0,
		aW: '😗',
		bc: _List_fromArray(
			['kissing face', 'love', 'like', 'face', '3', 'valentines', 'infatuation', 'kiss']),
		bg: 'kissing',
		df: _Utils_Tuple2(30, 55)
	},
		{
		cg: 0,
		aW: '😘',
		bc: _List_fromArray(
			['face blowing a kiss', 'face', 'love', 'like', 'affection', 'valentines', 'infatuation', 'kiss']),
		bg: 'kissing_heart',
		df: _Utils_Tuple2(30, 56)
	},
		{
		cg: 0,
		aW: '😙',
		bc: _List_fromArray(
			['kissing face with smiling eyes', 'face', 'affection', 'valentines', 'infatuation', 'kiss']),
		bg: 'kissing_smiling_eyes',
		df: _Utils_Tuple2(30, 57)
	},
		{
		cg: 0,
		aW: '😚',
		bc: _List_fromArray(
			['kissing face with closed eyes', 'face', 'love', 'like', 'affection', 'valentines', 'infatuation', 'kiss']),
		bg: 'kissing_closed_eyes',
		df: _Utils_Tuple2(31, 0)
	},
		{
		cg: 0,
		aW: '😛',
		bc: _List_fromArray(
			['face with tongue', 'face', 'prank', 'childish', 'playful', 'mischievous', 'smile', 'tongue']),
		bg: 'stuck_out_tongue',
		df: _Utils_Tuple2(31, 1)
	},
		{
		cg: 0,
		aW: '😜',
		bc: _List_fromArray(
			['winking face with tongue', 'face', 'prank', 'childish', 'playful', 'mischievous', 'smile', 'wink', 'tongue']),
		bg: 'stuck_out_tongue_winking_eye',
		df: _Utils_Tuple2(31, 2)
	},
		{
		cg: 0,
		aW: '😝',
		bc: _List_fromArray(
			['squinting face with tongue', 'face', 'prank', 'playful', 'mischievous', 'smile', 'tongue']),
		bg: 'stuck_out_tongue_closed_eyes',
		df: _Utils_Tuple2(31, 3)
	},
		{
		cg: 0,
		aW: '😞',
		bc: _List_fromArray(
			['disappointed face', 'face', 'sad', 'upset', 'depressed', ':(']),
		bg: 'disappointed',
		df: _Utils_Tuple2(31, 4)
	},
		{
		cg: 0,
		aW: '😟',
		bc: _List_fromArray(
			['worried face', 'face', 'concern', 'nervous', ':(']),
		bg: 'worried',
		df: _Utils_Tuple2(31, 5)
	},
		{
		cg: 0,
		aW: '😠',
		bc: _List_fromArray(
			['angry face', 'mad', 'face', 'annoyed', 'frustrated']),
		bg: 'angry',
		df: _Utils_Tuple2(31, 6)
	},
		{
		cg: 0,
		aW: '😡',
		bc: _List_fromArray(
			['pouting face', 'angry', 'mad', 'hate', 'despise']),
		bg: 'rage',
		df: _Utils_Tuple2(31, 7)
	},
		{
		cg: 0,
		aW: '😢',
		bc: _List_fromArray(
			['crying face', 'face', 'tears', 'sad', 'depressed', 'upset', ':\'(']),
		bg: 'cry',
		df: _Utils_Tuple2(31, 8)
	},
		{
		cg: 0,
		aW: '😣',
		bc: _List_fromArray(
			['persevering face', 'face', 'sick', 'no', 'upset', 'oops']),
		bg: 'persevere',
		df: _Utils_Tuple2(31, 9)
	},
		{
		cg: 0,
		aW: '😤',
		bc: _List_fromArray(
			['face with steam from nose', 'face', 'gas', 'phew', 'proud', 'pride']),
		bg: 'triumph',
		df: _Utils_Tuple2(31, 10)
	},
		{
		cg: 0,
		aW: '😥',
		bc: _List_fromArray(
			['sad but relieved face', 'face', 'phew', 'sweat', 'nervous']),
		bg: 'disappointed_relieved',
		df: _Utils_Tuple2(31, 11)
	},
		{
		cg: 0,
		aW: '😦',
		bc: _List_fromArray(
			['frowning face with open mouth', 'face', 'aw', 'what']),
		bg: 'frowning',
		df: _Utils_Tuple2(31, 12)
	},
		{
		cg: 0,
		aW: '😧',
		bc: _List_fromArray(
			['anguished face', 'face', 'stunned', 'nervous']),
		bg: 'anguished',
		df: _Utils_Tuple2(31, 13)
	},
		{
		cg: 0,
		aW: '😨',
		bc: _List_fromArray(
			['fearful face', 'face', 'scared', 'terrified', 'nervous', 'oops', 'huh']),
		bg: 'fearful',
		df: _Utils_Tuple2(31, 14)
	},
		{
		cg: 0,
		aW: '😩',
		bc: _List_fromArray(
			['weary face', 'face', 'tired', 'sleepy', 'sad', 'frustrated', 'upset']),
		bg: 'weary',
		df: _Utils_Tuple2(31, 15)
	},
		{
		cg: 0,
		aW: '😪',
		bc: _List_fromArray(
			['sleepy face', 'face', 'tired', 'rest', 'nap']),
		bg: 'sleepy',
		df: _Utils_Tuple2(31, 16)
	},
		{
		cg: 0,
		aW: '😫',
		bc: _List_fromArray(
			['tired face', 'sick', 'whine', 'upset', 'frustrated']),
		bg: 'tired_face',
		df: _Utils_Tuple2(31, 17)
	},
		{
		cg: 0,
		aW: '😬',
		bc: _List_fromArray(
			['grimacing face', 'face', 'grimace', 'teeth']),
		bg: 'grimacing',
		df: _Utils_Tuple2(31, 18)
	},
		{
		cg: 0,
		aW: '😭',
		bc: _List_fromArray(
			['loudly crying face', 'face', 'cry', 'tears', 'sad', 'upset', 'depressed']),
		bg: 'sob',
		df: _Utils_Tuple2(31, 19)
	},
		{
		cg: 0,
		aW: '😮',
		bc: _List_fromArray(
			['face with open mouth', 'face', 'surprise', 'impressed', 'wow', 'whoa', ':O']),
		bg: 'open_mouth',
		df: _Utils_Tuple2(31, 20)
	},
		{
		cg: 0,
		aW: '😯',
		bc: _List_fromArray(
			['hushed face', 'face', 'woo', 'shh']),
		bg: 'hushed',
		df: _Utils_Tuple2(31, 21)
	},
		{
		cg: 0,
		aW: '😰',
		bc: _List_fromArray(
			['anxious face with sweat', 'face', 'nervous', 'sweat']),
		bg: 'cold_sweat',
		df: _Utils_Tuple2(31, 22)
	},
		{
		cg: 0,
		aW: '😱',
		bc: _List_fromArray(
			['face screaming in fear', 'face', 'munch', 'scared', 'omg']),
		bg: 'scream',
		df: _Utils_Tuple2(31, 23)
	},
		{
		cg: 0,
		aW: '😲',
		bc: _List_fromArray(
			['astonished face', 'face', 'xox', 'surprised', 'poisoned']),
		bg: 'astonished',
		df: _Utils_Tuple2(31, 24)
	},
		{
		cg: 0,
		aW: '😳',
		bc: _List_fromArray(
			['flushed face', 'face', 'blush', 'shy', 'flattered']),
		bg: 'flushed',
		df: _Utils_Tuple2(31, 25)
	},
		{
		cg: 0,
		aW: '😴',
		bc: _List_fromArray(
			['sleeping face', 'face', 'tired', 'sleepy', 'night', 'zzz']),
		bg: 'sleeping',
		df: _Utils_Tuple2(31, 26)
	},
		{
		cg: 0,
		aW: '😵',
		bc: _List_fromArray(
			['dizzy face', 'spent', 'unconscious', 'xox', 'dizzy']),
		bg: 'dizzy_face',
		df: _Utils_Tuple2(31, 27)
	},
		{
		cg: 0,
		aW: '😶',
		bc: _List_fromArray(
			['face without mouth', 'face', 'hellokitty']),
		bg: 'no_mouth',
		df: _Utils_Tuple2(31, 28)
	},
		{
		cg: 0,
		aW: '😷',
		bc: _List_fromArray(
			['face with medical mask', 'face', 'sick', 'ill', 'disease']),
		bg: 'mask',
		df: _Utils_Tuple2(31, 29)
	},
		{
		cg: 0,
		aW: '😸',
		bc: _List_fromArray(
			['grinning cat with smiling eyes', 'animal', 'cats', 'smile']),
		bg: 'smile_cat',
		df: _Utils_Tuple2(31, 30)
	},
		{
		cg: 0,
		aW: '😹',
		bc: _List_fromArray(
			['cat with tears of joy', 'animal', 'cats', 'haha', 'happy', 'tears']),
		bg: 'joy_cat',
		df: _Utils_Tuple2(31, 31)
	},
		{
		cg: 0,
		aW: '😺',
		bc: _List_fromArray(
			['grinning cat', 'animal', 'cats', 'happy', 'smile']),
		bg: 'smiley_cat',
		df: _Utils_Tuple2(31, 32)
	},
		{
		cg: 0,
		aW: '😻',
		bc: _List_fromArray(
			['smiling cat with heart eyes', 'animal', 'love', 'like', 'affection', 'cats', 'valentines', 'heart']),
		bg: 'heart_eyes_cat',
		df: _Utils_Tuple2(31, 33)
	},
		{
		cg: 0,
		aW: '😼',
		bc: _List_fromArray(
			['cat with wry smile', 'animal', 'cats', 'smirk']),
		bg: 'smirk_cat',
		df: _Utils_Tuple2(31, 34)
	},
		{
		cg: 0,
		aW: '😽',
		bc: _List_fromArray(
			['kissing cat', 'animal', 'cats', 'kiss']),
		bg: 'kissing_cat',
		df: _Utils_Tuple2(31, 35)
	},
		{
		cg: 0,
		aW: '😾',
		bc: _List_fromArray(
			['pouting cat', 'animal', 'cats']),
		bg: 'pouting_cat',
		df: _Utils_Tuple2(31, 36)
	},
		{
		cg: 0,
		aW: '😿',
		bc: _List_fromArray(
			['crying cat', 'animal', 'tears', 'weep', 'sad', 'cats', 'upset', 'cry']),
		bg: 'crying_cat_face',
		df: _Utils_Tuple2(31, 37)
	},
		{
		cg: 0,
		aW: '🙀',
		bc: _List_fromArray(
			['weary cat', 'animal', 'cats', 'munch', 'scared', 'scream']),
		bg: 'scream_cat',
		df: _Utils_Tuple2(31, 38)
	},
		{
		cg: 0,
		aW: '🙁',
		bc: _List_fromArray(
			['slightly frowning face', 'face', 'frowning', 'disappointed', 'sad', 'upset']),
		bg: 'slightly_frowning_face',
		df: _Utils_Tuple2(31, 39)
	},
		{
		cg: 0,
		aW: '🙂',
		bc: _List_fromArray(
			['slightly smiling face', 'face', 'smile']),
		bg: 'slightly_smiling_face',
		df: _Utils_Tuple2(31, 40)
	},
		{
		cg: 0,
		aW: '\uD83D\uDE43',
		bc: _List_fromArray(
			['upside down face', 'face', 'flipped', 'silly', 'smile']),
		bg: 'upside_down_face',
		df: _Utils_Tuple2(31, 41)
	},
		{
		cg: 0,
		aW: '\uD83D\uDE44',
		bc: _List_fromArray(
			['face with rolling eyes', 'face', 'eyeroll', 'frustrated']),
		bg: 'face_with_rolling_eyes',
		df: _Utils_Tuple2(31, 42)
	},
		{
		cg: 1,
		aW: '🙅\u200D♀️',
		bc: _List_fromArray(
			['woman gesturing no', 'female', 'girl', 'woman', 'nope']),
		bg: 'woman-gesturing-no',
		df: _Utils_Tuple2(31, 43)
	},
		{
		cg: 1,
		aW: '🙅\u200D♂️',
		bc: _List_fromArray(
			['man gesturing no', 'male', 'boy', 'man', 'nope']),
		bg: 'man-gesturing-no',
		df: _Utils_Tuple2(31, 49)
	},
		{
		cg: 1,
		aW: '🙅',
		bc: _List_fromArray(
			['person gesturing no']),
		bg: 'no_good',
		df: _Utils_Tuple2(31, 55)
	},
		{
		cg: 1,
		aW: '🙆\u200D♀️',
		bc: _List_fromArray(
			['woman gesturing ok', 'women', 'girl', 'female', 'pink', 'human', 'woman']),
		bg: 'woman-gesturing-ok',
		df: _Utils_Tuple2(32, 3)
	},
		{
		cg: 1,
		aW: '🙆\u200D♂️',
		bc: _List_fromArray(
			['man gesturing ok', 'men', 'boy', 'male', 'blue', 'human', 'man']),
		bg: 'man-gesturing-ok',
		df: _Utils_Tuple2(32, 9)
	},
		{
		cg: 1,
		aW: '🙆',
		bc: _List_fromArray(
			['person gesturing ok']),
		bg: 'ok_woman',
		df: _Utils_Tuple2(32, 15)
	},
		{
		cg: 1,
		aW: '🙇\u200D♀️',
		bc: _List_fromArray(
			['woman bowing', 'woman', 'female', 'girl']),
		bg: 'woman-bowing',
		df: _Utils_Tuple2(32, 21)
	},
		{
		cg: 1,
		aW: '🙇\u200D♂️',
		bc: _List_fromArray(
			['man bowing', 'man', 'male', 'boy']),
		bg: 'man-bowing',
		df: _Utils_Tuple2(32, 27)
	},
		{
		cg: 1,
		aW: '🙇',
		bc: _List_fromArray(
			['person bowing']),
		bg: 'bow',
		df: _Utils_Tuple2(32, 33)
	},
		{
		cg: 0,
		aW: '🙈',
		bc: _List_fromArray(
			['see no evil monkey', 'monkey', 'animal', 'nature', 'haha']),
		bg: 'see_no_evil',
		df: _Utils_Tuple2(32, 39)
	},
		{
		cg: 0,
		aW: '🙉',
		bc: _List_fromArray(
			['hear no evil monkey', 'animal', 'monkey', 'nature']),
		bg: 'hear_no_evil',
		df: _Utils_Tuple2(32, 40)
	},
		{
		cg: 0,
		aW: '🙊',
		bc: _List_fromArray(
			['speak no evil monkey', 'monkey', 'animal', 'nature', 'omg']),
		bg: 'speak_no_evil',
		df: _Utils_Tuple2(32, 41)
	},
		{
		cg: 1,
		aW: '🙋\u200D♀️',
		bc: _List_fromArray(
			['woman raising hand', 'female', 'girl', 'woman']),
		bg: 'woman-raising-hand',
		df: _Utils_Tuple2(32, 42)
	},
		{
		cg: 1,
		aW: '🙋\u200D♂️',
		bc: _List_fromArray(
			['man raising hand', 'male', 'boy', 'man']),
		bg: 'man-raising-hand',
		df: _Utils_Tuple2(32, 48)
	},
		{
		cg: 1,
		aW: '🙋',
		bc: _List_fromArray(
			['person raising hand']),
		bg: 'raising_hand',
		df: _Utils_Tuple2(32, 54)
	},
		{
		cg: 1,
		aW: '🙌',
		bc: _List_fromArray(
			['raising hands', 'gesture', 'hooray', 'yea', 'celebration', 'hands']),
		bg: 'raised_hands',
		df: _Utils_Tuple2(33, 2)
	},
		{
		cg: 1,
		aW: '🙍\u200D♀️',
		bc: _List_fromArray(
			['woman frowning', 'female', 'girl', 'woman', 'sad', 'depressed', 'discouraged', 'unhappy']),
		bg: 'woman-frowning',
		df: _Utils_Tuple2(33, 8)
	},
		{
		cg: 1,
		aW: '🙍\u200D♂️',
		bc: _List_fromArray(
			['man frowning', 'male', 'boy', 'man', 'sad', 'depressed', 'discouraged', 'unhappy']),
		bg: 'man-frowning',
		df: _Utils_Tuple2(33, 14)
	},
		{
		cg: 1,
		aW: '🙍',
		bc: _List_fromArray(
			['person frowning']),
		bg: 'person_frowning',
		df: _Utils_Tuple2(33, 20)
	},
		{
		cg: 1,
		aW: '🙎\u200D♀️',
		bc: _List_fromArray(
			['woman pouting', 'female', 'girl', 'woman']),
		bg: 'woman-pouting',
		df: _Utils_Tuple2(33, 26)
	},
		{
		cg: 1,
		aW: '🙎\u200D♂️',
		bc: _List_fromArray(
			['man pouting', 'male', 'boy', 'man']),
		bg: 'man-pouting',
		df: _Utils_Tuple2(33, 32)
	},
		{
		cg: 1,
		aW: '🙎',
		bc: _List_fromArray(
			['person pouting']),
		bg: 'person_with_pouting_face',
		df: _Utils_Tuple2(33, 38)
	},
		{
		cg: 1,
		aW: '🙏',
		bc: _List_fromArray(
			['folded hands', 'please', 'hope', 'wish', 'namaste', 'highfive']),
		bg: 'pray',
		df: _Utils_Tuple2(33, 44)
	},
		{
		cg: 4,
		aW: '🚀',
		bc: _List_fromArray(
			['rocket', 'launch', 'ship', 'staffmode', 'NASA', 'outer space', 'outer space', 'fly']),
		bg: 'rocket',
		df: _Utils_Tuple2(33, 50)
	},
		{
		cg: 4,
		aW: '🚁',
		bc: _List_fromArray(
			['helicopter', 'transportation', 'vehicle', 'fly']),
		bg: 'helicopter',
		df: _Utils_Tuple2(33, 51)
	},
		{
		cg: 4,
		aW: '🚂',
		bc: _List_fromArray(
			['locomotive', 'transportation', 'vehicle', 'train']),
		bg: 'steam_locomotive',
		df: _Utils_Tuple2(33, 52)
	},
		{
		cg: 4,
		aW: '🚃',
		bc: _List_fromArray(
			['railway car', 'transportation', 'vehicle']),
		bg: 'railway_car',
		df: _Utils_Tuple2(33, 53)
	},
		{
		cg: 4,
		aW: '🚄',
		bc: _List_fromArray(
			['high speed train', 'transportation', 'vehicle']),
		bg: 'bullettrain_side',
		df: _Utils_Tuple2(33, 54)
	},
		{
		cg: 4,
		aW: '🚅',
		bc: _List_fromArray(
			['bullet train', 'transportation', 'vehicle', 'speed', 'fast', 'public', 'travel']),
		bg: 'bullettrain_front',
		df: _Utils_Tuple2(33, 55)
	},
		{
		cg: 4,
		aW: '🚆',
		bc: _List_fromArray(
			['train', 'transportation', 'vehicle']),
		bg: 'train2',
		df: _Utils_Tuple2(33, 56)
	},
		{
		cg: 4,
		aW: '🚇',
		bc: _List_fromArray(
			['metro', 'transportation', 'blue square', 'mrt', 'underground', 'tube']),
		bg: 'metro',
		df: _Utils_Tuple2(33, 57)
	},
		{
		cg: 4,
		aW: '🚈',
		bc: _List_fromArray(
			['light rail', 'transportation', 'vehicle']),
		bg: 'light_rail',
		df: _Utils_Tuple2(34, 0)
	},
		{
		cg: 4,
		aW: '🚉',
		bc: _List_fromArray(
			['station', 'transportation', 'vehicle', 'public']),
		bg: 'station',
		df: _Utils_Tuple2(34, 1)
	},
		{
		cg: 4,
		aW: '🚊',
		bc: _List_fromArray(
			['tram', 'transportation', 'vehicle']),
		bg: 'tram',
		df: _Utils_Tuple2(34, 2)
	},
		{
		cg: 4,
		aW: '🚋',
		bc: _List_fromArray(
			['tram car', 'transportation', 'vehicle', 'carriage', 'public', 'travel']),
		bg: 'train',
		df: _Utils_Tuple2(34, 3)
	},
		{
		cg: 4,
		aW: '🚌',
		bc: _List_fromArray(
			['bus', 'car', 'vehicle', 'transportation']),
		bg: 'bus',
		df: _Utils_Tuple2(34, 4)
	},
		{
		cg: 4,
		aW: '🚍',
		bc: _List_fromArray(
			['oncoming bus', 'vehicle', 'transportation']),
		bg: 'oncoming_bus',
		df: _Utils_Tuple2(34, 5)
	},
		{
		cg: 4,
		aW: '🚎',
		bc: _List_fromArray(
			['trolleybus', 'bart', 'transportation', 'vehicle']),
		bg: 'trolleybus',
		df: _Utils_Tuple2(34, 6)
	},
		{
		cg: 4,
		aW: '🚏',
		bc: _List_fromArray(
			['bus stop', 'transportation', 'wait']),
		bg: 'busstop',
		df: _Utils_Tuple2(34, 7)
	},
		{
		cg: 4,
		aW: '🚐',
		bc: _List_fromArray(
			['minibus', 'vehicle', 'car', 'transportation']),
		bg: 'minibus',
		df: _Utils_Tuple2(34, 8)
	},
		{
		cg: 4,
		aW: '🚑',
		bc: _List_fromArray(
			['ambulance', 'health', '911', 'hospital']),
		bg: 'ambulance',
		df: _Utils_Tuple2(34, 9)
	},
		{
		cg: 4,
		aW: '🚒',
		bc: _List_fromArray(
			['fire engine', 'transportation', 'cars', 'vehicle']),
		bg: 'fire_engine',
		df: _Utils_Tuple2(34, 10)
	},
		{
		cg: 4,
		aW: '🚓',
		bc: _List_fromArray(
			['police car', 'vehicle', 'cars', 'transportation', 'law', 'legal', 'enforcement']),
		bg: 'police_car',
		df: _Utils_Tuple2(34, 11)
	},
		{
		cg: 4,
		aW: '🚔',
		bc: _List_fromArray(
			['oncoming police car', 'vehicle', 'law', 'legal', 'enforcement', '911']),
		bg: 'oncoming_police_car',
		df: _Utils_Tuple2(34, 12)
	},
		{
		cg: 4,
		aW: '🚕',
		bc: _List_fromArray(
			['taxi', 'uber', 'vehicle', 'cars', 'transportation']),
		bg: 'taxi',
		df: _Utils_Tuple2(34, 13)
	},
		{
		cg: 4,
		aW: '🚖',
		bc: _List_fromArray(
			['oncoming taxi', 'vehicle', 'cars', 'uber']),
		bg: 'oncoming_taxi',
		df: _Utils_Tuple2(34, 14)
	},
		{
		cg: 4,
		aW: '🚗',
		bc: _List_fromArray(
			['automobile', 'red', 'transportation', 'vehicle']),
		bg: 'car',
		df: _Utils_Tuple2(34, 15)
	},
		{
		cg: 4,
		aW: '🚘',
		bc: _List_fromArray(
			['oncoming automobile', 'car', 'vehicle', 'transportation']),
		bg: 'oncoming_automobile',
		df: _Utils_Tuple2(34, 16)
	},
		{
		cg: 4,
		aW: '🚙',
		bc: _List_fromArray(
			['sport utility vehicle', 'transportation', 'vehicle']),
		bg: 'blue_car',
		df: _Utils_Tuple2(34, 17)
	},
		{
		cg: 4,
		aW: '🚚',
		bc: _List_fromArray(
			['delivery truck', 'cars', 'transportation']),
		bg: 'truck',
		df: _Utils_Tuple2(34, 18)
	},
		{
		cg: 4,
		aW: '🚛',
		bc: _List_fromArray(
			['articulated lorry', 'vehicle', 'cars', 'transportation', 'express']),
		bg: 'articulated_lorry',
		df: _Utils_Tuple2(34, 19)
	},
		{
		cg: 4,
		aW: '🚜',
		bc: _List_fromArray(
			['tractor', 'vehicle', 'car', 'farming', 'agriculture']),
		bg: 'tractor',
		df: _Utils_Tuple2(34, 20)
	},
		{
		cg: 4,
		aW: '🚝',
		bc: _List_fromArray(
			['monorail', 'transportation', 'vehicle']),
		bg: 'monorail',
		df: _Utils_Tuple2(34, 21)
	},
		{
		cg: 4,
		aW: '🚞',
		bc: _List_fromArray(
			['mountain railway', 'transportation', 'vehicle']),
		bg: 'mountain_railway',
		df: _Utils_Tuple2(34, 22)
	},
		{
		cg: 4,
		aW: '🚟',
		bc: _List_fromArray(
			['suspension railway', 'vehicle', 'transportation']),
		bg: 'suspension_railway',
		df: _Utils_Tuple2(34, 23)
	},
		{
		cg: 4,
		aW: '🚠',
		bc: _List_fromArray(
			['mountain cableway', 'transportation', 'vehicle', 'ski']),
		bg: 'mountain_cableway',
		df: _Utils_Tuple2(34, 24)
	},
		{
		cg: 4,
		aW: '🚡',
		bc: _List_fromArray(
			['aerial tramway', 'transportation', 'vehicle', 'ski']),
		bg: 'aerial_tramway',
		df: _Utils_Tuple2(34, 25)
	},
		{
		cg: 4,
		aW: '🚢',
		bc: _List_fromArray(
			['ship', 'transportation', 'titanic', 'deploy']),
		bg: 'ship',
		df: _Utils_Tuple2(34, 26)
	},
		{
		cg: 1,
		aW: '🚣\u200D♀️',
		bc: _List_fromArray(
			['woman rowing boat', 'sports', 'hobby', 'water', 'ship', 'woman', 'female']),
		bg: 'woman-rowing-boat',
		df: _Utils_Tuple2(34, 27)
	},
		{
		cg: 1,
		aW: '🚣\u200D♂️',
		bc: _List_fromArray(
			['man rowing boat', 'sports', 'hobby', 'water', 'ship']),
		bg: 'man-rowing-boat',
		df: _Utils_Tuple2(34, 33)
	},
		{
		cg: 1,
		aW: '🚣',
		bc: _List_fromArray(
			['person rowing boat']),
		bg: 'rowboat',
		df: _Utils_Tuple2(34, 39)
	},
		{
		cg: 4,
		aW: '🚤',
		bc: _List_fromArray(
			['speedboat', 'ship', 'transportation', 'vehicle', 'summer']),
		bg: 'speedboat',
		df: _Utils_Tuple2(34, 45)
	},
		{
		cg: 4,
		aW: '🚥',
		bc: _List_fromArray(
			['horizontal traffic light', 'transportation', 'signal']),
		bg: 'traffic_light',
		df: _Utils_Tuple2(34, 46)
	},
		{
		cg: 4,
		aW: '🚦',
		bc: _List_fromArray(
			['vertical traffic light', 'transportation', 'driving']),
		bg: 'vertical_traffic_light',
		df: _Utils_Tuple2(34, 47)
	},
		{
		cg: 4,
		aW: '🚧',
		bc: _List_fromArray(
			['construction', 'wip', 'progress', 'caution', 'warning']),
		bg: 'construction',
		df: _Utils_Tuple2(34, 48)
	},
		{
		cg: 4,
		aW: '🚨',
		bc: _List_fromArray(
			['police car light', 'police', 'ambulance', '911', 'emergency', 'alert', 'error', 'pinged', 'law', 'legal']),
		bg: 'rotating_light',
		df: _Utils_Tuple2(34, 49)
	},
		{
		cg: 8,
		aW: '🚩',
		bc: _List_fromArray(
			['triangular flag', 'mark', 'milestone', 'place']),
		bg: 'triangular_flag_on_post',
		df: _Utils_Tuple2(34, 50)
	},
		{
		cg: 6,
		aW: '🚪',
		bc: _List_fromArray(
			['door', 'house', 'entry', 'exit']),
		bg: 'door',
		df: _Utils_Tuple2(34, 51)
	},
		{
		cg: 7,
		aW: '🚫',
		bc: _List_fromArray(
			['prohibited', 'forbid', 'stop', 'limit', 'denied', 'disallow', 'circle']),
		bg: 'no_entry_sign',
		df: _Utils_Tuple2(34, 52)
	},
		{
		cg: 6,
		aW: '🚬',
		bc: _List_fromArray(
			['cigarette', 'kills', 'tobacco', 'cigarette', 'joint', 'smoke']),
		bg: 'smoking',
		df: _Utils_Tuple2(34, 53)
	},
		{
		cg: 7,
		aW: '🚭',
		bc: _List_fromArray(
			['no smoking', 'cigarette', 'blue square', 'smell', 'smoke']),
		bg: 'no_smoking',
		df: _Utils_Tuple2(34, 54)
	},
		{
		cg: 7,
		aW: '🚮',
		bc: _List_fromArray(
			['litter in bin sign', 'blue square', 'sign', 'human', 'info']),
		bg: 'put_litter_in_its_place',
		df: _Utils_Tuple2(34, 55)
	},
		{
		cg: 7,
		aW: '🚯',
		bc: _List_fromArray(
			['no littering', 'trash', 'bin', 'garbage', 'circle']),
		bg: 'do_not_litter',
		df: _Utils_Tuple2(34, 56)
	},
		{
		cg: 7,
		aW: '🚰',
		bc: _List_fromArray(
			['potable water', 'blue square', 'liquid', 'restroom', 'cleaning', 'faucet']),
		bg: 'potable_water',
		df: _Utils_Tuple2(34, 57)
	},
		{
		cg: 7,
		aW: '🚱',
		bc: _List_fromArray(
			['non potable water', 'drink', 'faucet', 'tap', 'circle']),
		bg: 'non-potable_water',
		df: _Utils_Tuple2(35, 0)
	},
		{
		cg: 4,
		aW: '🚲',
		bc: _List_fromArray(
			['bicycle', 'sports', 'bicycle', 'exercise', 'hipster']),
		bg: 'bike',
		df: _Utils_Tuple2(35, 1)
	},
		{
		cg: 7,
		aW: '🚳',
		bc: _List_fromArray(
			['no bicycles', 'cyclist', 'prohibited', 'circle']),
		bg: 'no_bicycles',
		df: _Utils_Tuple2(35, 2)
	},
		{
		cg: 1,
		aW: '🚴\u200D♀️',
		bc: _List_fromArray(
			['woman biking', 'sports', 'bike', 'exercise', 'hipster', 'woman', 'female']),
		bg: 'woman-biking',
		df: _Utils_Tuple2(35, 3)
	},
		{
		cg: 1,
		aW: '🚴\u200D♂️',
		bc: _List_fromArray(
			['man biking', 'sports', 'bike', 'exercise', 'hipster']),
		bg: 'man-biking',
		df: _Utils_Tuple2(35, 9)
	},
		{
		cg: 1,
		aW: '🚴',
		bc: _List_fromArray(
			['person biking']),
		bg: 'bicyclist',
		df: _Utils_Tuple2(35, 15)
	},
		{
		cg: 1,
		aW: '🚵\u200D♀️',
		bc: _List_fromArray(
			['woman mountain biking', 'transportation', 'sports', 'human', 'race', 'bike', 'woman', 'female']),
		bg: 'woman-mountain-biking',
		df: _Utils_Tuple2(35, 21)
	},
		{
		cg: 1,
		aW: '🚵\u200D♂️',
		bc: _List_fromArray(
			['man mountain biking', 'transportation', 'sports', 'human', 'race', 'bike']),
		bg: 'man-mountain-biking',
		df: _Utils_Tuple2(35, 27)
	},
		{
		cg: 1,
		aW: '🚵',
		bc: _List_fromArray(
			['person mountain biking']),
		bg: 'mountain_bicyclist',
		df: _Utils_Tuple2(35, 33)
	},
		{
		cg: 1,
		aW: '🚶\u200D♀️',
		bc: _List_fromArray(
			['woman walking', 'human', 'feet', 'steps', 'woman', 'female']),
		bg: 'woman-walking',
		df: _Utils_Tuple2(35, 39)
	},
		{
		cg: 1,
		aW: '🚶\u200D♂️',
		bc: _List_fromArray(
			['man walking', 'human', 'feet', 'steps']),
		bg: 'man-walking',
		df: _Utils_Tuple2(35, 45)
	},
		{
		cg: 1,
		aW: '🚶',
		bc: _List_fromArray(
			['person walking']),
		bg: 'walking',
		df: _Utils_Tuple2(35, 51)
	},
		{
		cg: 7,
		aW: '🚷',
		bc: _List_fromArray(
			['no pedestrians', 'rules', 'crossing', 'walking', 'circle']),
		bg: 'no_pedestrians',
		df: _Utils_Tuple2(35, 57)
	},
		{
		cg: 7,
		aW: '🚸',
		bc: _List_fromArray(
			['children crossing', 'school', 'warning', 'danger', 'sign', 'driving', 'yellow diamond']),
		bg: 'children_crossing',
		df: _Utils_Tuple2(36, 0)
	},
		{
		cg: 7,
		aW: '🚹',
		bc: _List_fromArray(
			['men s room', 'toilet', 'restroom', 'wc', 'blue square', 'gender', 'male']),
		bg: 'mens',
		df: _Utils_Tuple2(36, 1)
	},
		{
		cg: 7,
		aW: '🚺',
		bc: _List_fromArray(
			['women s room', 'purple square', 'woman', 'female', 'toilet', 'loo', 'restroom', 'gender']),
		bg: 'womens',
		df: _Utils_Tuple2(36, 2)
	},
		{
		cg: 7,
		aW: '🚻',
		bc: _List_fromArray(
			['restroom', 'blue square', 'toilet', 'refresh', 'wc', 'gender']),
		bg: 'restroom',
		df: _Utils_Tuple2(36, 3)
	},
		{
		cg: 7,
		aW: '🚼',
		bc: _List_fromArray(
			['baby symbol', 'orange square', 'child']),
		bg: 'baby_symbol',
		df: _Utils_Tuple2(36, 4)
	},
		{
		cg: 6,
		aW: '🚽',
		bc: _List_fromArray(
			['toilet', 'restroom', 'wc', 'washroom', 'bathroom', 'potty']),
		bg: 'toilet',
		df: _Utils_Tuple2(36, 5)
	},
		{
		cg: 7,
		aW: '🚾',
		bc: _List_fromArray(
			['water closet', 'toilet', 'restroom', 'blue square']),
		bg: 'wc',
		df: _Utils_Tuple2(36, 6)
	},
		{
		cg: 6,
		aW: '🚿',
		bc: _List_fromArray(
			['shower', 'clean', 'water', 'bathroom']),
		bg: 'shower',
		df: _Utils_Tuple2(36, 7)
	},
		{
		cg: 1,
		aW: '🛀',
		bc: _List_fromArray(
			['person taking bath', 'clean', 'shower', 'bathroom']),
		bg: 'bath',
		df: _Utils_Tuple2(36, 8)
	},
		{
		cg: 6,
		aW: '🛁',
		bc: _List_fromArray(
			['bathtub', 'clean', 'shower', 'bathroom']),
		bg: 'bathtub',
		df: _Utils_Tuple2(36, 14)
	},
		{
		cg: 7,
		aW: '🛂',
		bc: _List_fromArray(
			['passport control', 'custom', 'blue square']),
		bg: 'passport_control',
		df: _Utils_Tuple2(36, 15)
	},
		{
		cg: 7,
		aW: '🛃',
		bc: _List_fromArray(
			['customs', 'passport', 'border', 'blue square']),
		bg: 'customs',
		df: _Utils_Tuple2(36, 16)
	},
		{
		cg: 7,
		aW: '🛄',
		bc: _List_fromArray(
			['baggage claim', 'blue square', 'airport', 'transport']),
		bg: 'baggage_claim',
		df: _Utils_Tuple2(36, 17)
	},
		{
		cg: 7,
		aW: '🛅',
		bc: _List_fromArray(
			['left luggage', 'blue square', 'travel']),
		bg: 'left_luggage',
		df: _Utils_Tuple2(36, 18)
	},
		{
		cg: 6,
		aW: '🛋️',
		bc: _List_fromArray(
			['couch and lamp', 'read', 'chill']),
		bg: 'couch_and_lamp',
		df: _Utils_Tuple2(36, 19)
	},
		{
		cg: 1,
		aW: '🛌',
		bc: _List_fromArray(
			['person in bed', 'bed', 'rest']),
		bg: 'sleeping_accommodation',
		df: _Utils_Tuple2(36, 20)
	},
		{
		cg: 6,
		aW: '🛍️',
		bc: _List_fromArray(
			['shopping bags', 'mall', 'buy', 'purchase']),
		bg: 'shopping_bags',
		df: _Utils_Tuple2(36, 26)
	},
		{
		cg: 4,
		aW: '🛎️',
		bc: _List_fromArray(
			['bellhop bell', 'service']),
		bg: 'bellhop_bell',
		df: _Utils_Tuple2(36, 27)
	},
		{
		cg: 6,
		aW: '🛏️',
		bc: _List_fromArray(
			['bed', 'sleep', 'rest']),
		bg: 'bed',
		df: _Utils_Tuple2(36, 28)
	},
		{
		cg: 7,
		aW: '\uD83D\uDED0',
		bc: _List_fromArray(
			['place of worship', 'religion', 'church', 'temple', 'prayer']),
		bg: 'place_of_worship',
		df: _Utils_Tuple2(36, 29)
	},
		{
		cg: 4,
		aW: '\uD83D\uDED1',
		bc: _List_fromArray(
			['stop sign', 'stop']),
		bg: 'octagonal_sign',
		df: _Utils_Tuple2(36, 30)
	},
		{
		cg: 6,
		aW: '\uD83D\uDED2',
		bc: _List_fromArray(
			['shopping cart', 'trolley']),
		bg: 'shopping_trolley',
		df: _Utils_Tuple2(36, 31)
	},
		{
		cg: 4,
		aW: '\uD83D\uDED5',
		bc: _List_fromArray(
			['hindu temple']),
		bg: 'hindu_temple',
		df: _Utils_Tuple2(36, 32)
	},
		{
		cg: 4,
		aW: '\uD83D\uDED6',
		bc: _List_fromArray(
			['hut', 'house', 'structure']),
		bg: 'hut',
		df: _Utils_Tuple2(36, 33)
	},
		{
		cg: 6,
		aW: '\uD83D\uDED7',
		bc: _List_fromArray(
			['elevator', 'lift']),
		bg: 'elevator',
		df: _Utils_Tuple2(36, 34)
	},
		{
		cg: 6,
		aW: '🛠️',
		bc: _List_fromArray(
			['hammer and wrench', 'tools', 'build', 'create']),
		bg: 'hammer_and_wrench',
		df: _Utils_Tuple2(36, 35)
	},
		{
		cg: 6,
		aW: '🛡️',
		bc: _List_fromArray(
			['shield', 'protection', 'security']),
		bg: 'shield',
		df: _Utils_Tuple2(36, 36)
	},
		{
		cg: 4,
		aW: '🛢️',
		bc: _List_fromArray(
			['oil drum', 'barrell']),
		bg: 'oil_drum',
		df: _Utils_Tuple2(36, 37)
	},
		{
		cg: 4,
		aW: '🛣️',
		bc: _List_fromArray(
			['motorway', 'road', 'cupertino', 'interstate', 'highway']),
		bg: 'motorway',
		df: _Utils_Tuple2(36, 38)
	},
		{
		cg: 4,
		aW: '🛤️',
		bc: _List_fromArray(
			['railway track', 'train', 'transportation']),
		bg: 'railway_track',
		df: _Utils_Tuple2(36, 39)
	},
		{
		cg: 4,
		aW: '🛥️',
		bc: _List_fromArray(
			['motor boat', 'ship']),
		bg: 'motor_boat',
		df: _Utils_Tuple2(36, 40)
	},
		{
		cg: 4,
		aW: '🛩️',
		bc: _List_fromArray(
			['small airplane', 'flight', 'transportation', 'fly', 'vehicle']),
		bg: 'small_airplane',
		df: _Utils_Tuple2(36, 41)
	},
		{
		cg: 4,
		aW: '🛫',
		bc: _List_fromArray(
			['airplane departure', 'airport', 'flight', 'landing']),
		bg: 'airplane_departure',
		df: _Utils_Tuple2(36, 42)
	},
		{
		cg: 4,
		aW: '🛬',
		bc: _List_fromArray(
			['airplane arrival', 'airport', 'flight', 'boarding']),
		bg: 'airplane_arriving',
		df: _Utils_Tuple2(36, 43)
	},
		{
		cg: 4,
		aW: '🛰️',
		bc: _List_fromArray(
			['satellite', 'communication', 'gps', 'orbit', 'spaceflight', 'NASA', 'ISS']),
		bg: 'satellite',
		df: _Utils_Tuple2(36, 44)
	},
		{
		cg: 4,
		aW: '🛳️',
		bc: _List_fromArray(
			['passenger ship', 'yacht', 'cruise', 'ferry']),
		bg: 'passenger_ship',
		df: _Utils_Tuple2(36, 45)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEF4',
		bc: _List_fromArray(
			['kick scooter', 'vehicle', 'kick', 'razor']),
		bg: 'scooter',
		df: _Utils_Tuple2(36, 46)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEF5',
		bc: _List_fromArray(
			['motor scooter', 'vehicle', 'vespa', 'sasha']),
		bg: 'motor_scooter',
		df: _Utils_Tuple2(36, 47)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEF6',
		bc: _List_fromArray(
			['canoe', 'boat', 'paddle', 'water', 'ship']),
		bg: 'canoe',
		df: _Utils_Tuple2(36, 48)
	},
		{
		cg: 5,
		aW: '\uD83D\uDEF7',
		bc: _List_fromArray(
			['sled', 'sleigh', 'luge', 'toboggan']),
		bg: 'sled',
		df: _Utils_Tuple2(36, 49)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEF8',
		bc: _List_fromArray(
			['flying saucer', 'transportation', 'vehicle', 'ufo']),
		bg: 'flying_saucer',
		df: _Utils_Tuple2(36, 50)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEF9',
		bc: _List_fromArray(
			['skateboard', 'board']),
		bg: 'skateboard',
		df: _Utils_Tuple2(36, 51)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEFA',
		bc: _List_fromArray(
			['auto rickshaw']),
		bg: 'auto_rickshaw',
		df: _Utils_Tuple2(36, 52)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEFB',
		bc: _List_fromArray(
			['pickup truck', 'car', 'transportation']),
		bg: 'pickup_truck',
		df: _Utils_Tuple2(36, 53)
	},
		{
		cg: 4,
		aW: '\uD83D\uDEFC',
		bc: _List_fromArray(
			['roller skate', 'footwear', 'sports']),
		bg: 'roller_skate',
		df: _Utils_Tuple2(36, 54)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE0',
		bc: _List_fromArray(
			['orange circle']),
		bg: 'large_orange_circle',
		df: _Utils_Tuple2(36, 55)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE1',
		bc: _List_fromArray(
			['yellow circle']),
		bg: 'large_yellow_circle',
		df: _Utils_Tuple2(36, 56)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE2',
		bc: _List_fromArray(
			['green circle']),
		bg: 'large_green_circle',
		df: _Utils_Tuple2(36, 57)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE3',
		bc: _List_fromArray(
			['purple circle']),
		bg: 'large_purple_circle',
		df: _Utils_Tuple2(37, 0)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE4',
		bc: _List_fromArray(
			['brown circle']),
		bg: 'large_brown_circle',
		df: _Utils_Tuple2(37, 1)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE5',
		bc: _List_fromArray(
			['red square']),
		bg: 'large_red_square',
		df: _Utils_Tuple2(37, 2)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE6',
		bc: _List_fromArray(
			['blue square']),
		bg: 'large_blue_square',
		df: _Utils_Tuple2(37, 3)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE7',
		bc: _List_fromArray(
			['orange square']),
		bg: 'large_orange_square',
		df: _Utils_Tuple2(37, 4)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE8',
		bc: _List_fromArray(
			['yellow square']),
		bg: 'large_yellow_square',
		df: _Utils_Tuple2(37, 5)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFE9',
		bc: _List_fromArray(
			['green square']),
		bg: 'large_green_square',
		df: _Utils_Tuple2(37, 6)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFEA',
		bc: _List_fromArray(
			['purple square']),
		bg: 'large_purple_square',
		df: _Utils_Tuple2(37, 7)
	},
		{
		cg: 7,
		aW: '\uD83D\uDFEB',
		bc: _List_fromArray(
			['brown square']),
		bg: 'large_brown_square',
		df: _Utils_Tuple2(37, 8)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD0C',
		bc: _List_fromArray(
			['pinched fingers', 'size', 'tiny', 'small']),
		bg: 'pinched_fingers',
		df: _Utils_Tuple2(37, 9)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD0D',
		bc: _List_fromArray(
			['white heart']),
		bg: 'white_heart',
		df: _Utils_Tuple2(37, 15)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD0E',
		bc: _List_fromArray(
			['brown heart']),
		bg: 'brown_heart',
		df: _Utils_Tuple2(37, 16)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD0F',
		bc: _List_fromArray(
			['pinching hand']),
		bg: 'pinching_hand',
		df: _Utils_Tuple2(37, 17)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD10',
		bc: _List_fromArray(
			['zipper mouth face', 'face', 'sealed', 'zipper', 'secret']),
		bg: 'zipper_mouth_face',
		df: _Utils_Tuple2(37, 23)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD11',
		bc: _List_fromArray(
			['money mouth face', 'face', 'rich', 'dollar', 'money']),
		bg: 'money_mouth_face',
		df: _Utils_Tuple2(37, 24)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD12',
		bc: _List_fromArray(
			['face with thermometer', 'sick', 'temperature', 'thermometer', 'cold', 'fever']),
		bg: 'face_with_thermometer',
		df: _Utils_Tuple2(37, 25)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD13',
		bc: _List_fromArray(
			['nerd face', 'face', 'nerdy', 'geek', 'dork']),
		bg: 'nerd_face',
		df: _Utils_Tuple2(37, 26)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD14',
		bc: _List_fromArray(
			['thinking face', 'face', 'hmmm', 'think', 'consider']),
		bg: 'thinking_face',
		df: _Utils_Tuple2(37, 27)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD15',
		bc: _List_fromArray(
			['face with head bandage', 'injured', 'clumsy', 'bandage', 'hurt']),
		bg: 'face_with_head_bandage',
		df: _Utils_Tuple2(37, 28)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD16',
		bc: _List_fromArray(
			['robot', 'computer', 'machine', 'bot']),
		bg: 'robot_face',
		df: _Utils_Tuple2(37, 29)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD17',
		bc: _List_fromArray(
			['hugging face', 'face', 'smile', 'hug']),
		bg: 'hugging_face',
		df: _Utils_Tuple2(37, 30)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD18',
		bc: _List_fromArray(
			['sign of the horns', 'hand', 'fingers', 'evil eye', 'sign of horns', 'rock on']),
		bg: 'the_horns',
		df: _Utils_Tuple2(37, 31)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD19',
		bc: _List_fromArray(
			['call me hand', 'hands', 'gesture']),
		bg: 'call_me_hand',
		df: _Utils_Tuple2(37, 37)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD1A',
		bc: _List_fromArray(
			['raised back of hand', 'fingers', 'raised', 'backhand']),
		bg: 'raised_back_of_hand',
		df: _Utils_Tuple2(37, 43)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD1B',
		bc: _List_fromArray(
			['left facing fist', 'hand', 'fistbump']),
		bg: 'left-facing_fist',
		df: _Utils_Tuple2(37, 49)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD1C',
		bc: _List_fromArray(
			['right facing fist', 'hand', 'fistbump']),
		bg: 'right-facing_fist',
		df: _Utils_Tuple2(37, 55)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD1D',
		bc: _List_fromArray(
			['handshake', 'agreement', 'shake']),
		bg: 'handshake',
		df: _Utils_Tuple2(38, 3)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD1E',
		bc: _List_fromArray(
			['crossed fingers', 'good', 'lucky']),
		bg: 'crossed_fingers',
		df: _Utils_Tuple2(38, 4)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD1F',
		bc: _List_fromArray(
			['love you gesture', 'hand', 'fingers', 'gesture']),
		bg: 'i_love_you_hand_sign',
		df: _Utils_Tuple2(38, 10)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD20',
		bc: _List_fromArray(
			['cowboy hat face', 'face', 'cowgirl', 'hat']),
		bg: 'face_with_cowboy_hat',
		df: _Utils_Tuple2(38, 16)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD21',
		bc: _List_fromArray(
			['clown face', 'face']),
		bg: 'clown_face',
		df: _Utils_Tuple2(38, 17)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD22',
		bc: _List_fromArray(
			['nauseated face', 'face', 'vomit', 'gross', 'green', 'sick', 'throw up', 'ill']),
		bg: 'nauseated_face',
		df: _Utils_Tuple2(38, 18)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD23',
		bc: _List_fromArray(
			['rolling on the floor laughing', 'face', 'rolling', 'floor', 'laughing', 'lol', 'haha']),
		bg: 'rolling_on_the_floor_laughing',
		df: _Utils_Tuple2(38, 19)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD24',
		bc: _List_fromArray(
			['drooling face', 'face']),
		bg: 'drooling_face',
		df: _Utils_Tuple2(38, 20)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD25',
		bc: _List_fromArray(
			['lying face', 'face', 'lie', 'pinocchio']),
		bg: 'lying_face',
		df: _Utils_Tuple2(38, 21)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD26\u200D♀️',
		bc: _List_fromArray(
			['woman facepalming', 'woman', 'female', 'girl', 'disbelief']),
		bg: 'woman-facepalming',
		df: _Utils_Tuple2(38, 22)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD26\u200D♂️',
		bc: _List_fromArray(
			['man facepalming', 'man', 'male', 'boy', 'disbelief']),
		bg: 'man-facepalming',
		df: _Utils_Tuple2(38, 28)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD26',
		bc: _List_fromArray(
			['person facepalming']),
		bg: 'face_palm',
		df: _Utils_Tuple2(38, 34)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD27',
		bc: _List_fromArray(
			['sneezing face', 'face', 'gesundheit', 'sneeze', 'sick', 'allergy']),
		bg: 'sneezing_face',
		df: _Utils_Tuple2(38, 40)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD28',
		bc: _List_fromArray(
			['face with raised eyebrow', 'face', 'distrust', 'scepticism', 'disapproval', 'disbelief', 'surprise']),
		bg: 'face_with_raised_eyebrow',
		df: _Utils_Tuple2(38, 41)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD29',
		bc: _List_fromArray(
			['star struck', 'face', 'smile', 'starry', 'eyes', 'grinning']),
		bg: 'star-struck',
		df: _Utils_Tuple2(38, 42)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD2A',
		bc: _List_fromArray(
			['zany face', 'face', 'goofy', 'crazy']),
		bg: 'zany_face',
		df: _Utils_Tuple2(38, 43)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD2B',
		bc: _List_fromArray(
			['shushing face', 'face', 'quiet', 'shhh']),
		bg: 'shushing_face',
		df: _Utils_Tuple2(38, 44)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD2C',
		bc: _List_fromArray(
			['face with symbols on mouth', 'face', 'swearing', 'cursing', 'cussing', 'profanity', 'expletive']),
		bg: 'face_with_symbols_on_mouth',
		df: _Utils_Tuple2(38, 45)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD2D',
		bc: _List_fromArray(
			['face with hand over mouth', 'face', 'whoops', 'shock', 'surprise']),
		bg: 'face_with_hand_over_mouth',
		df: _Utils_Tuple2(38, 46)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD2E',
		bc: _List_fromArray(
			['face vomiting', 'face', 'sick']),
		bg: 'face_vomiting',
		df: _Utils_Tuple2(38, 47)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD2F',
		bc: _List_fromArray(
			['exploding head', 'face', 'shocked', 'mind', 'blown']),
		bg: 'exploding_head',
		df: _Utils_Tuple2(38, 48)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD30',
		bc: _List_fromArray(
			['pregnant woman', 'baby']),
		bg: 'pregnant_woman',
		df: _Utils_Tuple2(38, 49)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD31',
		bc: _List_fromArray(
			['breast feeding', 'nursing', 'baby']),
		bg: 'breast-feeding',
		df: _Utils_Tuple2(38, 55)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD32',
		bc: _List_fromArray(
			['palms up together', 'hands', 'gesture', 'cupped', 'prayer']),
		bg: 'palms_up_together',
		df: _Utils_Tuple2(39, 3)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD33',
		bc: _List_fromArray(
			['selfie', 'camera', 'phone']),
		bg: 'selfie',
		df: _Utils_Tuple2(39, 9)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD34',
		bc: _List_fromArray(
			['prince', 'boy', 'man', 'male', 'crown', 'royal', 'king']),
		bg: 'prince',
		df: _Utils_Tuple2(39, 15)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD35\u200D♀️',
		bc: _List_fromArray(
			['woman in tuxedo', 'formal', 'fashion']),
		bg: 'woman_in_tuxedo',
		df: _Utils_Tuple2(39, 21)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD35\u200D♂️',
		bc: _List_fromArray(
			['man in tuxedo', 'formal', 'fashion']),
		bg: 'man_in_tuxedo',
		df: _Utils_Tuple2(39, 27)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD35',
		bc: _List_fromArray(
			['man in tuxedo', 'couple', 'marriage', 'wedding', 'groom']),
		bg: 'man_in_tuxedo',
		df: _Utils_Tuple2(39, 33)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD36',
		bc: _List_fromArray(
			['mrs claus', 'woman', 'female', 'xmas', 'mother christmas']),
		bg: 'mrs_claus',
		df: _Utils_Tuple2(39, 39)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD37\u200D♀️',
		bc: _List_fromArray(
			['woman shrugging', 'woman', 'female', 'girl', 'confused', 'indifferent', 'doubt']),
		bg: 'woman-shrugging',
		df: _Utils_Tuple2(39, 45)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD37\u200D♂️',
		bc: _List_fromArray(
			['man shrugging', 'man', 'male', 'boy', 'confused', 'indifferent', 'doubt']),
		bg: 'man-shrugging',
		df: _Utils_Tuple2(39, 51)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD37',
		bc: _List_fromArray(
			['person shrugging']),
		bg: 'shrug',
		df: _Utils_Tuple2(39, 57)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD38\u200D♀️',
		bc: _List_fromArray(
			['woman cartwheeling', 'gymnastics']),
		bg: 'woman-cartwheeling',
		df: _Utils_Tuple2(40, 5)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD38\u200D♂️',
		bc: _List_fromArray(
			['man cartwheeling', 'gymnastics']),
		bg: 'man-cartwheeling',
		df: _Utils_Tuple2(40, 11)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD38',
		bc: _List_fromArray(
			['person cartwheeling']),
		bg: 'person_doing_cartwheel',
		df: _Utils_Tuple2(40, 17)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD39\u200D♀️',
		bc: _List_fromArray(
			['woman juggling', 'juggle', 'balance', 'skill', 'multitask']),
		bg: 'woman-juggling',
		df: _Utils_Tuple2(40, 23)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD39\u200D♂️',
		bc: _List_fromArray(
			['man juggling', 'juggle', 'balance', 'skill', 'multitask']),
		bg: 'man-juggling',
		df: _Utils_Tuple2(40, 29)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD39',
		bc: _List_fromArray(
			['person juggling']),
		bg: 'juggling',
		df: _Utils_Tuple2(40, 35)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3A',
		bc: _List_fromArray(
			['person fencing', 'sports', 'fencing', 'sword']),
		bg: 'fencer',
		df: _Utils_Tuple2(40, 41)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3C\u200D♀️',
		bc: _List_fromArray(
			['women wrestling', 'sports', 'wrestlers']),
		bg: 'woman-wrestling',
		df: _Utils_Tuple2(40, 42)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3C\u200D♂️',
		bc: _List_fromArray(
			['men wrestling', 'sports', 'wrestlers']),
		bg: 'man-wrestling',
		df: _Utils_Tuple2(40, 43)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3C',
		bc: _List_fromArray(
			['people wrestling']),
		bg: 'wrestlers',
		df: _Utils_Tuple2(40, 44)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3D\u200D♀️',
		bc: _List_fromArray(
			['woman playing water polo', 'sports', 'pool']),
		bg: 'woman-playing-water-polo',
		df: _Utils_Tuple2(40, 45)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3D\u200D♂️',
		bc: _List_fromArray(
			['man playing water polo', 'sports', 'pool']),
		bg: 'man-playing-water-polo',
		df: _Utils_Tuple2(40, 51)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3D',
		bc: _List_fromArray(
			['person playing water polo']),
		bg: 'water_polo',
		df: _Utils_Tuple2(40, 57)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3E\u200D♀️',
		bc: _List_fromArray(
			['woman playing handball', 'sports']),
		bg: 'woman-playing-handball',
		df: _Utils_Tuple2(41, 5)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3E\u200D♂️',
		bc: _List_fromArray(
			['man playing handball', 'sports']),
		bg: 'man-playing-handball',
		df: _Utils_Tuple2(41, 11)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD3E',
		bc: _List_fromArray(
			['person playing handball']),
		bg: 'handball',
		df: _Utils_Tuple2(41, 17)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD3F',
		bc: _List_fromArray(
			['diving mask']),
		bg: 'diving_mask',
		df: _Utils_Tuple2(41, 23)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD40',
		bc: _List_fromArray(
			['wilted flower', 'plant', 'nature', 'flower']),
		bg: 'wilted_flower',
		df: _Utils_Tuple2(41, 24)
	},
		{
		cg: 6,
		aW: '\uD83E\uDD41',
		bc: _List_fromArray(
			['drum', 'music', 'instrument', 'drumsticks', 'snare']),
		bg: 'drum_with_drumsticks',
		df: _Utils_Tuple2(41, 25)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD42',
		bc: _List_fromArray(
			['clinking glasses', 'beverage', 'drink', 'party', 'alcohol', 'celebrate', 'cheers', 'wine', 'champagne', 'toast']),
		bg: 'clinking_glasses',
		df: _Utils_Tuple2(41, 26)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD43',
		bc: _List_fromArray(
			['tumbler glass', 'drink', 'beverage', 'drunk', 'alcohol', 'liquor', 'booze', 'bourbon', 'scotch', 'whisky', 'glass', 'shot']),
		bg: 'tumbler_glass',
		df: _Utils_Tuple2(41, 27)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD44',
		bc: _List_fromArray(
			['spoon', 'cutlery', 'kitchen', 'tableware']),
		bg: 'spoon',
		df: _Utils_Tuple2(41, 28)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD45',
		bc: _List_fromArray(
			['goal net', 'sports']),
		bg: 'goal_net',
		df: _Utils_Tuple2(41, 29)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD47',
		bc: _List_fromArray(
			['1st place medal', 'award', 'winning', 'first']),
		bg: 'first_place_medal',
		df: _Utils_Tuple2(41, 30)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD48',
		bc: _List_fromArray(
			['2nd place medal', 'award', 'second']),
		bg: 'second_place_medal',
		df: _Utils_Tuple2(41, 31)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD49',
		bc: _List_fromArray(
			['3rd place medal', 'award', 'third']),
		bg: 'third_place_medal',
		df: _Utils_Tuple2(41, 32)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD4A',
		bc: _List_fromArray(
			['boxing glove', 'sports', 'fighting']),
		bg: 'boxing_glove',
		df: _Utils_Tuple2(41, 33)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD4B',
		bc: _List_fromArray(
			['martial arts uniform', 'judo', 'karate', 'taekwondo']),
		bg: 'martial_arts_uniform',
		df: _Utils_Tuple2(41, 34)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD4C',
		bc: _List_fromArray(
			['curling stone', 'sports']),
		bg: 'curling_stone',
		df: _Utils_Tuple2(41, 35)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD4D',
		bc: _List_fromArray(
			['lacrosse', 'sports', 'ball', 'stick']),
		bg: 'lacrosse',
		df: _Utils_Tuple2(41, 36)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD4E',
		bc: _List_fromArray(
			['softball', 'sports', 'balls']),
		bg: 'softball',
		df: _Utils_Tuple2(41, 37)
	},
		{
		cg: 5,
		aW: '\uD83E\uDD4F',
		bc: _List_fromArray(
			['flying disc', 'sports', 'frisbee', 'ultimate']),
		bg: 'flying_disc',
		df: _Utils_Tuple2(41, 38)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD50',
		bc: _List_fromArray(
			['croissant', 'food', 'bread', 'french']),
		bg: 'croissant',
		df: _Utils_Tuple2(41, 39)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD51',
		bc: _List_fromArray(
			['avocado', 'fruit', 'food']),
		bg: 'avocado',
		df: _Utils_Tuple2(41, 40)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD52',
		bc: _List_fromArray(
			['cucumber', 'fruit', 'food', 'pickle']),
		bg: 'cucumber',
		df: _Utils_Tuple2(41, 41)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD53',
		bc: _List_fromArray(
			['bacon', 'food', 'breakfast', 'pork', 'pig', 'meat']),
		bg: 'bacon',
		df: _Utils_Tuple2(41, 42)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD54',
		bc: _List_fromArray(
			['potato', 'food', 'tuber', 'vegatable', 'starch']),
		bg: 'potato',
		df: _Utils_Tuple2(41, 43)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD55',
		bc: _List_fromArray(
			['carrot', 'vegetable', 'food', 'orange']),
		bg: 'carrot',
		df: _Utils_Tuple2(41, 44)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD56',
		bc: _List_fromArray(
			['baguette bread', 'food', 'bread', 'french']),
		bg: 'baguette_bread',
		df: _Utils_Tuple2(41, 45)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD57',
		bc: _List_fromArray(
			['green salad', 'food', 'healthy', 'lettuce']),
		bg: 'green_salad',
		df: _Utils_Tuple2(41, 46)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD58',
		bc: _List_fromArray(
			['shallow pan of food', 'food', 'cooking', 'casserole', 'paella']),
		bg: 'shallow_pan_of_food',
		df: _Utils_Tuple2(41, 47)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD59',
		bc: _List_fromArray(
			['stuffed flatbread', 'food', 'flatbread', 'stuffed', 'gyro']),
		bg: 'stuffed_flatbread',
		df: _Utils_Tuple2(41, 48)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD5A',
		bc: _List_fromArray(
			['egg', 'food', 'chicken', 'breakfast']),
		bg: 'egg',
		df: _Utils_Tuple2(41, 49)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD5B',
		bc: _List_fromArray(
			['glass of milk', 'beverage', 'drink', 'cow']),
		bg: 'glass_of_milk',
		df: _Utils_Tuple2(41, 50)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD5C',
		bc: _List_fromArray(
			['peanuts', 'food', 'nut']),
		bg: 'peanuts',
		df: _Utils_Tuple2(41, 51)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD5D',
		bc: _List_fromArray(
			['kiwi fruit', 'fruit', 'food']),
		bg: 'kiwifruit',
		df: _Utils_Tuple2(41, 52)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD5E',
		bc: _List_fromArray(
			['pancakes', 'food', 'breakfast', 'flapjacks', 'hotcakes']),
		bg: 'pancakes',
		df: _Utils_Tuple2(41, 53)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD5F',
		bc: _List_fromArray(
			['dumpling', 'food', 'empanada', 'pierogi', 'potsticker']),
		bg: 'dumpling',
		df: _Utils_Tuple2(41, 54)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD60',
		bc: _List_fromArray(
			['fortune cookie', 'food', 'prophecy']),
		bg: 'fortune_cookie',
		df: _Utils_Tuple2(41, 55)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD61',
		bc: _List_fromArray(
			['takeout box', 'food', 'leftovers']),
		bg: 'takeout_box',
		df: _Utils_Tuple2(41, 56)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD62',
		bc: _List_fromArray(
			['chopsticks', 'food']),
		bg: 'chopsticks',
		df: _Utils_Tuple2(41, 57)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD63',
		bc: _List_fromArray(
			['bowl with spoon', 'food', 'breakfast', 'cereal', 'oatmeal', 'porridge']),
		bg: 'bowl_with_spoon',
		df: _Utils_Tuple2(42, 0)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD64',
		bc: _List_fromArray(
			['cup with straw', 'drink', 'soda']),
		bg: 'cup_with_straw',
		df: _Utils_Tuple2(42, 1)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD65',
		bc: _List_fromArray(
			['coconut', 'fruit', 'nature', 'food', 'palm']),
		bg: 'coconut',
		df: _Utils_Tuple2(42, 2)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD66',
		bc: _List_fromArray(
			['broccoli', 'fruit', 'food', 'vegetable']),
		bg: 'broccoli',
		df: _Utils_Tuple2(42, 3)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD67',
		bc: _List_fromArray(
			['pie', 'food', 'dessert', 'pastry']),
		bg: 'pie',
		df: _Utils_Tuple2(42, 4)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD68',
		bc: _List_fromArray(
			['pretzel', 'food', 'bread', 'twisted']),
		bg: 'pretzel',
		df: _Utils_Tuple2(42, 5)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD69',
		bc: _List_fromArray(
			['cut of meat', 'food', 'cow', 'meat', 'cut', 'chop', 'lambchop', 'porkchop']),
		bg: 'cut_of_meat',
		df: _Utils_Tuple2(42, 6)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD6A',
		bc: _List_fromArray(
			['sandwich', 'food', 'lunch', 'bread']),
		bg: 'sandwich',
		df: _Utils_Tuple2(42, 7)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD6B',
		bc: _List_fromArray(
			['canned food', 'food', 'soup']),
		bg: 'canned_food',
		df: _Utils_Tuple2(42, 8)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD6C',
		bc: _List_fromArray(
			['leafy green', 'food', 'vegetable', 'plant', 'bok choy', 'cabbage', 'kale', 'lettuce']),
		bg: 'leafy_green',
		df: _Utils_Tuple2(42, 9)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD6D',
		bc: _List_fromArray(
			['mango', 'fruit', 'food', 'tropical']),
		bg: 'mango',
		df: _Utils_Tuple2(42, 10)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD6E',
		bc: _List_fromArray(
			['moon cake', 'food', 'autumn']),
		bg: 'moon_cake',
		df: _Utils_Tuple2(42, 11)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD6F',
		bc: _List_fromArray(
			['bagel', 'food', 'bread', 'bakery', 'schmear']),
		bg: 'bagel',
		df: _Utils_Tuple2(42, 12)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD70',
		bc: _List_fromArray(
			['smiling face with hearts', 'face', 'love', 'like', 'affection', 'valentines', 'infatuation', 'crush', 'hearts', 'adore']),
		bg: 'smiling_face_with_3_hearts',
		df: _Utils_Tuple2(42, 13)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD71',
		bc: _List_fromArray(
			['yawning face']),
		bg: 'yawning_face',
		df: _Utils_Tuple2(42, 14)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD72',
		bc: _List_fromArray(
			['smiling face with tear', 'sad', 'cry', 'pretend']),
		bg: 'smiling_face_with_tear',
		df: _Utils_Tuple2(42, 15)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD73',
		bc: _List_fromArray(
			['partying face', 'face', 'celebration', 'woohoo']),
		bg: 'partying_face',
		df: _Utils_Tuple2(42, 16)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD74',
		bc: _List_fromArray(
			['woozy face', 'face', 'dizzy', 'intoxicated', 'tipsy', 'wavy']),
		bg: 'woozy_face',
		df: _Utils_Tuple2(42, 17)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD75',
		bc: _List_fromArray(
			['hot face', 'face', 'feverish', 'heat', 'red', 'sweating']),
		bg: 'hot_face',
		df: _Utils_Tuple2(42, 18)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD76',
		bc: _List_fromArray(
			['cold face', 'face', 'blue', 'freezing', 'frozen', 'frostbite', 'icicles']),
		bg: 'cold_face',
		df: _Utils_Tuple2(42, 19)
	},
		{
		cg: 1,
		aW: '\uD83E\uDD77',
		bc: _List_fromArray(
			['ninja', 'ninjutsu', 'skills', 'japanese']),
		bg: 'ninja',
		df: _Utils_Tuple2(42, 20)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD78',
		bc: _List_fromArray(
			['disguised face', 'pretent', 'brows', 'glasses', 'moustache']),
		bg: 'disguised_face',
		df: _Utils_Tuple2(42, 26)
	},
		{
		cg: 0,
		aW: '\uD83E\uDD7A',
		bc: _List_fromArray(
			['pleading face', 'face', 'begging', 'mercy']),
		bg: 'pleading_face',
		df: _Utils_Tuple2(42, 27)
	},
		{
		cg: 6,
		aW: '\uD83E\uDD7B',
		bc: _List_fromArray(
			['sari']),
		bg: 'sari',
		df: _Utils_Tuple2(42, 28)
	},
		{
		cg: 6,
		aW: '\uD83E\uDD7C',
		bc: _List_fromArray(
			['lab coat', 'doctor', 'experiment', 'scientist', 'chemist']),
		bg: 'lab_coat',
		df: _Utils_Tuple2(42, 29)
	},
		{
		cg: 6,
		aW: '\uD83E\uDD7D',
		bc: _List_fromArray(
			['goggles', 'eyes', 'protection', 'safety']),
		bg: 'goggles',
		df: _Utils_Tuple2(42, 30)
	},
		{
		cg: 6,
		aW: '\uD83E\uDD7E',
		bc: _List_fromArray(
			['hiking boot', 'backpacking', 'camping', 'hiking']),
		bg: 'hiking_boot',
		df: _Utils_Tuple2(42, 31)
	},
		{
		cg: 6,
		aW: '\uD83E\uDD7F',
		bc: _List_fromArray(
			['flat shoe', 'ballet', 'slip on', 'slipper']),
		bg: 'womans_flat_shoe',
		df: _Utils_Tuple2(42, 32)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD80',
		bc: _List_fromArray(
			['crab', 'animal', 'crustacean']),
		bg: 'crab',
		df: _Utils_Tuple2(42, 33)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD81',
		bc: _List_fromArray(
			['lion', 'animal', 'nature']),
		bg: 'lion_face',
		df: _Utils_Tuple2(42, 34)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD82',
		bc: _List_fromArray(
			['scorpion', 'animal', 'arachnid']),
		bg: 'scorpion',
		df: _Utils_Tuple2(42, 35)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD83',
		bc: _List_fromArray(
			['turkey', 'animal', 'bird']),
		bg: 'turkey',
		df: _Utils_Tuple2(42, 36)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD84',
		bc: _List_fromArray(
			['unicorn', 'animal', 'nature', 'mystical']),
		bg: 'unicorn_face',
		df: _Utils_Tuple2(42, 37)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD85',
		bc: _List_fromArray(
			['eagle', 'animal', 'nature', 'bird']),
		bg: 'eagle',
		df: _Utils_Tuple2(42, 38)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD86',
		bc: _List_fromArray(
			['duck', 'animal', 'nature', 'bird', 'mallard']),
		bg: 'duck',
		df: _Utils_Tuple2(42, 39)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD87',
		bc: _List_fromArray(
			['bat', 'animal', 'nature', 'blind', 'vampire']),
		bg: 'bat',
		df: _Utils_Tuple2(42, 40)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD88',
		bc: _List_fromArray(
			['shark', 'animal', 'nature', 'fish', 'sea', 'ocean', 'jaws', 'fins', 'beach']),
		bg: 'shark',
		df: _Utils_Tuple2(42, 41)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD89',
		bc: _List_fromArray(
			['owl', 'animal', 'nature', 'bird', 'hoot']),
		bg: 'owl',
		df: _Utils_Tuple2(42, 42)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD8A',
		bc: _List_fromArray(
			['fox', 'animal', 'nature', 'face']),
		bg: 'fox_face',
		df: _Utils_Tuple2(42, 43)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD8B',
		bc: _List_fromArray(
			['butterfly', 'animal', 'insect', 'nature', 'caterpillar']),
		bg: 'butterfly',
		df: _Utils_Tuple2(42, 44)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD8C',
		bc: _List_fromArray(
			['deer', 'animal', 'nature', 'horns', 'venison']),
		bg: 'deer',
		df: _Utils_Tuple2(42, 45)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD8D',
		bc: _List_fromArray(
			['gorilla', 'animal', 'nature', 'circus']),
		bg: 'gorilla',
		df: _Utils_Tuple2(42, 46)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD8E',
		bc: _List_fromArray(
			['lizard', 'animal', 'nature', 'reptile']),
		bg: 'lizard',
		df: _Utils_Tuple2(42, 47)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD8F',
		bc: _List_fromArray(
			['rhinoceros', 'animal', 'nature', 'horn']),
		bg: 'rhinoceros',
		df: _Utils_Tuple2(42, 48)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD90',
		bc: _List_fromArray(
			['shrimp', 'animal', 'ocean', 'nature', 'seafood']),
		bg: 'shrimp',
		df: _Utils_Tuple2(42, 49)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD91',
		bc: _List_fromArray(
			['squid', 'animal', 'nature', 'ocean', 'sea']),
		bg: 'squid',
		df: _Utils_Tuple2(42, 50)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD92',
		bc: _List_fromArray(
			['giraffe', 'animal', 'nature', 'spots', 'safari']),
		bg: 'giraffe_face',
		df: _Utils_Tuple2(42, 51)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD93',
		bc: _List_fromArray(
			['zebra', 'animal', 'nature', 'stripes', 'safari']),
		bg: 'zebra_face',
		df: _Utils_Tuple2(42, 52)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD94',
		bc: _List_fromArray(
			['hedgehog', 'animal', 'nature', 'spiny']),
		bg: 'hedgehog',
		df: _Utils_Tuple2(42, 53)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD95',
		bc: _List_fromArray(
			['sauropod', 'animal', 'nature', 'dinosaur', 'brachiosaurus', 'brontosaurus', 'diplodocus', 'extinct']),
		bg: 'sauropod',
		df: _Utils_Tuple2(42, 54)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD96',
		bc: _List_fromArray(
			['t rex', 'animal', 'nature', 'dinosaur', 'tyrannosaurus', 'extinct']),
		bg: 't-rex',
		df: _Utils_Tuple2(42, 55)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD97',
		bc: _List_fromArray(
			['cricket', 'animal', 'cricket', 'chirp']),
		bg: 'cricket',
		df: _Utils_Tuple2(42, 56)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD98',
		bc: _List_fromArray(
			['kangaroo', 'animal', 'nature', 'australia', 'joey', 'hop', 'marsupial']),
		bg: 'kangaroo',
		df: _Utils_Tuple2(42, 57)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD99',
		bc: _List_fromArray(
			['llama', 'animal', 'nature', 'alpaca']),
		bg: 'llama',
		df: _Utils_Tuple2(43, 0)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD9A',
		bc: _List_fromArray(
			['peacock', 'animal', 'nature', 'peahen', 'bird']),
		bg: 'peacock',
		df: _Utils_Tuple2(43, 1)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD9B',
		bc: _List_fromArray(
			['hippopotamus', 'animal', 'nature']),
		bg: 'hippopotamus',
		df: _Utils_Tuple2(43, 2)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD9C',
		bc: _List_fromArray(
			['parrot', 'animal', 'nature', 'bird', 'pirate', 'talk']),
		bg: 'parrot',
		df: _Utils_Tuple2(43, 3)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD9D',
		bc: _List_fromArray(
			['raccoon', 'animal', 'nature']),
		bg: 'raccoon',
		df: _Utils_Tuple2(43, 4)
	},
		{
		cg: 3,
		aW: '\uD83E\uDD9E',
		bc: _List_fromArray(
			['lobster', 'animal', 'nature', 'bisque', 'claws', 'seafood']),
		bg: 'lobster',
		df: _Utils_Tuple2(43, 5)
	},
		{
		cg: 2,
		aW: '\uD83E\uDD9F',
		bc: _List_fromArray(
			['mosquito', 'animal', 'nature', 'insect', 'malaria']),
		bg: 'mosquito',
		df: _Utils_Tuple2(43, 6)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA0',
		bc: _List_fromArray(
			['microbe', 'amoeba', 'bacteria', 'germs']),
		bg: 'microbe',
		df: _Utils_Tuple2(43, 7)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA1',
		bc: _List_fromArray(
			['badger', 'animal', 'nature', 'honey']),
		bg: 'badger',
		df: _Utils_Tuple2(43, 8)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA2',
		bc: _List_fromArray(
			['swan', 'animal', 'nature', 'bird']),
		bg: 'swan',
		df: _Utils_Tuple2(43, 9)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA3',
		bc: _List_fromArray(
			['mammoth', 'elephant', 'tusks']),
		bg: 'mammoth',
		df: _Utils_Tuple2(43, 10)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA4',
		bc: _List_fromArray(
			['dodo', 'animal', 'bird']),
		bg: 'dodo',
		df: _Utils_Tuple2(43, 11)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA5',
		bc: _List_fromArray(
			['sloth']),
		bg: 'sloth',
		df: _Utils_Tuple2(43, 12)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA6',
		bc: _List_fromArray(
			['otter']),
		bg: 'otter',
		df: _Utils_Tuple2(43, 13)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA7',
		bc: _List_fromArray(
			['orangutan']),
		bg: 'orangutan',
		df: _Utils_Tuple2(43, 14)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA8',
		bc: _List_fromArray(
			['skunk']),
		bg: 'skunk',
		df: _Utils_Tuple2(43, 15)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDA9',
		bc: _List_fromArray(
			['flamingo']),
		bg: 'flamingo',
		df: _Utils_Tuple2(43, 16)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDAA',
		bc: _List_fromArray(
			['oyster']),
		bg: 'oyster',
		df: _Utils_Tuple2(43, 17)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDAB',
		bc: _List_fromArray(
			['beaver', 'animal', 'rodent']),
		bg: 'beaver',
		df: _Utils_Tuple2(43, 18)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDAC',
		bc: _List_fromArray(
			['bison', 'ox']),
		bg: 'bison',
		df: _Utils_Tuple2(43, 19)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDAD',
		bc: _List_fromArray(
			['seal', 'animal', 'creature', 'sea']),
		bg: 'seal',
		df: _Utils_Tuple2(43, 20)
	},
		{
		cg: 2,
		aW: '\uD83E\uDDAE',
		bc: _List_fromArray(
			['guide dog']),
		bg: 'guide_dog',
		df: _Utils_Tuple2(43, 21)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDAF',
		bc: _List_fromArray(
			['probing cane']),
		bg: 'probing_cane',
		df: _Utils_Tuple2(43, 22)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB4',
		bc: _List_fromArray(
			['bone', 'skeleton']),
		bg: 'bone',
		df: _Utils_Tuple2(43, 23)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB5',
		bc: _List_fromArray(
			['leg', 'kick', 'limb']),
		bg: 'leg',
		df: _Utils_Tuple2(43, 24)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB6',
		bc: _List_fromArray(
			['foot', 'kick', 'stomp']),
		bg: 'foot',
		df: _Utils_Tuple2(43, 30)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB7',
		bc: _List_fromArray(
			['tooth', 'teeth', 'dentist']),
		bg: 'tooth',
		df: _Utils_Tuple2(43, 36)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB8\u200D♀️',
		bc: _List_fromArray(
			['woman superhero', 'woman', 'female', 'good', 'heroine', 'superpowers']),
		bg: 'female_superhero',
		df: _Utils_Tuple2(43, 37)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB8\u200D♂️',
		bc: _List_fromArray(
			['man superhero', 'man', 'male', 'good', 'hero', 'superpowers']),
		bg: 'male_superhero',
		df: _Utils_Tuple2(43, 43)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB8',
		bc: _List_fromArray(
			['superhero']),
		bg: 'superhero',
		df: _Utils_Tuple2(43, 49)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB9\u200D♀️',
		bc: _List_fromArray(
			['woman supervillain', 'woman', 'female', 'evil', 'bad', 'criminal', 'heroine', 'superpowers']),
		bg: 'female_supervillain',
		df: _Utils_Tuple2(43, 55)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB9\u200D♂️',
		bc: _List_fromArray(
			['man supervillain', 'man', 'male', 'evil', 'bad', 'criminal', 'hero', 'superpowers']),
		bg: 'male_supervillain',
		df: _Utils_Tuple2(44, 3)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDB9',
		bc: _List_fromArray(
			['supervillain']),
		bg: 'supervillain',
		df: _Utils_Tuple2(44, 9)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDBA',
		bc: _List_fromArray(
			['safety vest']),
		bg: 'safety_vest',
		df: _Utils_Tuple2(44, 15)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDBB',
		bc: _List_fromArray(
			['ear with hearing aid']),
		bg: 'ear_with_hearing_aid',
		df: _Utils_Tuple2(44, 16)
	},
		{
		cg: 4,
		aW: '\uD83E\uDDBC',
		bc: _List_fromArray(
			['motorized wheelchair']),
		bg: 'motorized_wheelchair',
		df: _Utils_Tuple2(44, 22)
	},
		{
		cg: 4,
		aW: '\uD83E\uDDBD',
		bc: _List_fromArray(
			['manual wheelchair']),
		bg: 'manual_wheelchair',
		df: _Utils_Tuple2(44, 23)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDBE',
		bc: _List_fromArray(
			['mechanical arm']),
		bg: 'mechanical_arm',
		df: _Utils_Tuple2(44, 24)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDBF',
		bc: _List_fromArray(
			['mechanical leg']),
		bg: 'mechanical_leg',
		df: _Utils_Tuple2(44, 25)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC0',
		bc: _List_fromArray(
			['cheese wedge', 'food', 'chadder']),
		bg: 'cheese_wedge',
		df: _Utils_Tuple2(44, 26)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC1',
		bc: _List_fromArray(
			['cupcake', 'food', 'dessert', 'bakery', 'sweet']),
		bg: 'cupcake',
		df: _Utils_Tuple2(44, 27)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC2',
		bc: _List_fromArray(
			['salt', 'condiment', 'shaker']),
		bg: 'salt',
		df: _Utils_Tuple2(44, 28)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC3',
		bc: _List_fromArray(
			['beverage box']),
		bg: 'beverage_box',
		df: _Utils_Tuple2(44, 29)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC4',
		bc: _List_fromArray(
			['garlic']),
		bg: 'garlic',
		df: _Utils_Tuple2(44, 30)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC5',
		bc: _List_fromArray(
			['onion']),
		bg: 'onion',
		df: _Utils_Tuple2(44, 31)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC6',
		bc: _List_fromArray(
			['falafel']),
		bg: 'falafel',
		df: _Utils_Tuple2(44, 32)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC7',
		bc: _List_fromArray(
			['waffle']),
		bg: 'waffle',
		df: _Utils_Tuple2(44, 33)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC8',
		bc: _List_fromArray(
			['butter']),
		bg: 'butter',
		df: _Utils_Tuple2(44, 34)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDC9',
		bc: _List_fromArray(
			['mate']),
		bg: 'mate_drink',
		df: _Utils_Tuple2(44, 35)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDCA',
		bc: _List_fromArray(
			['ice']),
		bg: 'ice_cube',
		df: _Utils_Tuple2(44, 36)
	},
		{
		cg: 3,
		aW: '\uD83E\uDDCB',
		bc: _List_fromArray(
			['bubble tea', 'taiwan', 'boba', 'milk tea', 'straw']),
		bg: 'bubble_tea',
		df: _Utils_Tuple2(44, 37)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCD\u200D♀️',
		bc: _List_fromArray(
			['woman standing']),
		bg: 'woman_standing',
		df: _Utils_Tuple2(44, 38)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCD\u200D♂️',
		bc: _List_fromArray(
			['man standing']),
		bg: 'man_standing',
		df: _Utils_Tuple2(44, 44)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCD',
		bc: _List_fromArray(
			['person standing']),
		bg: 'standing_person',
		df: _Utils_Tuple2(44, 50)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCE\u200D♀️',
		bc: _List_fromArray(
			['woman kneeling']),
		bg: 'woman_kneeling',
		df: _Utils_Tuple2(44, 56)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCE\u200D♂️',
		bc: _List_fromArray(
			['man kneeling']),
		bg: 'man_kneeling',
		df: _Utils_Tuple2(45, 4)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCE',
		bc: _List_fromArray(
			['person kneeling']),
		bg: 'kneeling_person',
		df: _Utils_Tuple2(45, 10)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCF\u200D♀️',
		bc: _List_fromArray(
			['deaf woman']),
		bg: 'deaf_woman',
		df: _Utils_Tuple2(45, 16)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCF\u200D♂️',
		bc: _List_fromArray(
			['deaf man']),
		bg: 'deaf_man',
		df: _Utils_Tuple2(45, 22)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDCF',
		bc: _List_fromArray(
			['deaf person']),
		bg: 'deaf_person',
		df: _Utils_Tuple2(45, 28)
	},
		{
		cg: 0,
		aW: '\uD83E\uDDD0',
		bc: _List_fromArray(
			['face with monocle', 'face', 'stuffy', 'wealthy']),
		bg: 'face_with_monocle',
		df: _Utils_Tuple2(45, 34)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🌾',
		bc: _List_fromArray(
			['farmer']),
		bg: 'farmer',
		df: _Utils_Tuple2(45, 35)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🍳',
		bc: _List_fromArray(
			['cook']),
		bg: 'cook',
		df: _Utils_Tuple2(45, 41)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🍼',
		bc: _List_fromArray(
			['person feeding baby', 'birth', 'food']),
		bg: 'person_feeding_baby',
		df: _Utils_Tuple2(45, 47)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🎄',
		bc: _List_fromArray(
			['mx claus', 'christmas']),
		bg: 'mx_claus',
		df: _Utils_Tuple2(45, 53)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🎓',
		bc: _List_fromArray(
			['student']),
		bg: 'student',
		df: _Utils_Tuple2(46, 1)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🎤',
		bc: _List_fromArray(
			['singer']),
		bg: 'singer',
		df: _Utils_Tuple2(46, 7)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🎨',
		bc: _List_fromArray(
			['artist']),
		bg: 'artist',
		df: _Utils_Tuple2(46, 13)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🏫',
		bc: _List_fromArray(
			['teacher']),
		bg: 'teacher',
		df: _Utils_Tuple2(46, 19)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🏭',
		bc: _List_fromArray(
			['factory worker']),
		bg: 'factory_worker',
		df: _Utils_Tuple2(46, 25)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D💻',
		bc: _List_fromArray(
			['technologist']),
		bg: 'technologist',
		df: _Utils_Tuple2(46, 31)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D💼',
		bc: _List_fromArray(
			['office worker']),
		bg: 'office_worker',
		df: _Utils_Tuple2(46, 37)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🔧',
		bc: _List_fromArray(
			['mechanic']),
		bg: 'mechanic',
		df: _Utils_Tuple2(46, 43)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🔬',
		bc: _List_fromArray(
			['scientist']),
		bg: 'scientist',
		df: _Utils_Tuple2(46, 49)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🚀',
		bc: _List_fromArray(
			['astronaut']),
		bg: 'astronaut',
		df: _Utils_Tuple2(46, 55)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D🚒',
		bc: _List_fromArray(
			['firefighter']),
		bg: 'firefighter',
		df: _Utils_Tuple2(47, 3)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1',
		bc: _List_fromArray(
			['people holding hands']),
		bg: 'people_holding_hands',
		df: _Utils_Tuple2(47, 9)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDDAF',
		bc: _List_fromArray(
			['person with probing cane']),
		bg: 'person_with_probing_cane',
		df: _Utils_Tuple2(47, 35)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDDB0',
		bc: _List_fromArray(
			['person red hair']),
		bg: 'red_haired_person',
		df: _Utils_Tuple2(47, 41)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDDB1',
		bc: _List_fromArray(
			['person curly hair']),
		bg: 'curly_haired_person',
		df: _Utils_Tuple2(47, 47)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDDB2',
		bc: _List_fromArray(
			['person bald']),
		bg: 'bald_person',
		df: _Utils_Tuple2(47, 53)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDDB3',
		bc: _List_fromArray(
			['person white hair']),
		bg: 'white_haired_person',
		df: _Utils_Tuple2(48, 1)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDDBC',
		bc: _List_fromArray(
			['person in motorized wheelchair']),
		bg: 'person_in_motorized_wheelchair',
		df: _Utils_Tuple2(48, 7)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D\uD83E\uDDBD',
		bc: _List_fromArray(
			['person in manual wheelchair']),
		bg: 'person_in_manual_wheelchair',
		df: _Utils_Tuple2(48, 13)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D⚕️',
		bc: _List_fromArray(
			['health worker']),
		bg: 'health_worker',
		df: _Utils_Tuple2(48, 19)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D⚖️',
		bc: _List_fromArray(
			['judge']),
		bg: 'judge',
		df: _Utils_Tuple2(48, 25)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1\u200D✈️',
		bc: _List_fromArray(
			['pilot']),
		bg: 'pilot',
		df: _Utils_Tuple2(48, 31)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD1',
		bc: _List_fromArray(
			['person', 'gender neutral', 'person']),
		bg: 'adult',
		df: _Utils_Tuple2(48, 37)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD2',
		bc: _List_fromArray(
			['child', 'gender neutral', 'young']),
		bg: 'child',
		df: _Utils_Tuple2(48, 43)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD3',
		bc: _List_fromArray(
			['older person', 'human', 'elder', 'senior', 'gender neutral']),
		bg: 'older_adult',
		df: _Utils_Tuple2(48, 49)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD4',
		bc: _List_fromArray(
			['man beard', 'person', 'bewhiskered']),
		bg: 'bearded_person',
		df: _Utils_Tuple2(48, 55)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD5',
		bc: _List_fromArray(
			['woman with headscarf', 'female', 'hijab', 'mantilla', 'tichel']),
		bg: 'person_with_headscarf',
		df: _Utils_Tuple2(49, 3)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD6\u200D♀️',
		bc: _List_fromArray(
			['woman in steamy room', 'female', 'woman', 'spa', 'steamroom', 'sauna']),
		bg: 'woman_in_steamy_room',
		df: _Utils_Tuple2(49, 9)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD6\u200D♂️',
		bc: _List_fromArray(
			['man in steamy room', 'male', 'man', 'spa', 'steamroom', 'sauna']),
		bg: 'man_in_steamy_room',
		df: _Utils_Tuple2(49, 15)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD6',
		bc: _List_fromArray(
			['person in steamy room']),
		bg: 'person_in_steamy_room',
		df: _Utils_Tuple2(49, 21)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD7\u200D♀️',
		bc: _List_fromArray(
			['woman climbing', 'sports', 'hobby', 'woman', 'female', 'rock']),
		bg: 'woman_climbing',
		df: _Utils_Tuple2(49, 27)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD7\u200D♂️',
		bc: _List_fromArray(
			['man climbing', 'sports', 'hobby', 'man', 'male', 'rock']),
		bg: 'man_climbing',
		df: _Utils_Tuple2(49, 33)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD7',
		bc: _List_fromArray(
			['person climbing']),
		bg: 'person_climbing',
		df: _Utils_Tuple2(49, 39)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD8\u200D♀️',
		bc: _List_fromArray(
			['woman in lotus position', 'woman', 'female', 'meditation', 'yoga', 'serenity', 'zen', 'mindfulness']),
		bg: 'woman_in_lotus_position',
		df: _Utils_Tuple2(49, 45)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD8\u200D♂️',
		bc: _List_fromArray(
			['man in lotus position', 'man', 'male', 'meditation', 'yoga', 'serenity', 'zen', 'mindfulness']),
		bg: 'man_in_lotus_position',
		df: _Utils_Tuple2(49, 51)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD8',
		bc: _List_fromArray(
			['person in lotus position']),
		bg: 'person_in_lotus_position',
		df: _Utils_Tuple2(49, 57)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD9\u200D♀️',
		bc: _List_fromArray(
			['woman mage', 'woman', 'female', 'mage', 'witch']),
		bg: 'female_mage',
		df: _Utils_Tuple2(50, 5)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD9\u200D♂️',
		bc: _List_fromArray(
			['man mage', 'man', 'male', 'mage', 'sorcerer']),
		bg: 'male_mage',
		df: _Utils_Tuple2(50, 11)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDD9',
		bc: _List_fromArray(
			['mage']),
		bg: 'mage',
		df: _Utils_Tuple2(50, 17)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDA\u200D♀️',
		bc: _List_fromArray(
			['woman fairy', 'woman', 'female']),
		bg: 'female_fairy',
		df: _Utils_Tuple2(50, 23)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDA\u200D♂️',
		bc: _List_fromArray(
			['man fairy', 'man', 'male']),
		bg: 'male_fairy',
		df: _Utils_Tuple2(50, 29)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDA',
		bc: _List_fromArray(
			['fairy']),
		bg: 'fairy',
		df: _Utils_Tuple2(50, 35)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDB\u200D♀️',
		bc: _List_fromArray(
			['woman vampire', 'woman', 'female']),
		bg: 'female_vampire',
		df: _Utils_Tuple2(50, 41)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDB\u200D♂️',
		bc: _List_fromArray(
			['man vampire', 'man', 'male', 'dracula']),
		bg: 'male_vampire',
		df: _Utils_Tuple2(50, 47)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDB',
		bc: _List_fromArray(
			['vampire']),
		bg: 'vampire',
		df: _Utils_Tuple2(50, 53)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDC\u200D♀️',
		bc: _List_fromArray(
			['mermaid', 'woman', 'female', 'merwoman', 'ariel']),
		bg: 'mermaid',
		df: _Utils_Tuple2(51, 1)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDC\u200D♂️',
		bc: _List_fromArray(
			['merman', 'man', 'male', 'triton']),
		bg: 'merman',
		df: _Utils_Tuple2(51, 7)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDC',
		bc: _List_fromArray(
			['merperson']),
		bg: 'merperson',
		df: _Utils_Tuple2(51, 13)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDD\u200D♀️',
		bc: _List_fromArray(
			['woman elf', 'woman', 'female']),
		bg: 'female_elf',
		df: _Utils_Tuple2(51, 19)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDD\u200D♂️',
		bc: _List_fromArray(
			['man elf', 'man', 'male']),
		bg: 'male_elf',
		df: _Utils_Tuple2(51, 25)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDD',
		bc: _List_fromArray(
			['elf']),
		bg: 'elf',
		df: _Utils_Tuple2(51, 31)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDE\u200D♀️',
		bc: _List_fromArray(
			['woman genie', 'woman', 'female']),
		bg: 'female_genie',
		df: _Utils_Tuple2(51, 37)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDE\u200D♂️',
		bc: _List_fromArray(
			['man genie', 'man', 'male']),
		bg: 'male_genie',
		df: _Utils_Tuple2(51, 38)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDE',
		bc: _List_fromArray(
			['genie']),
		bg: 'genie',
		df: _Utils_Tuple2(51, 39)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDF\u200D♀️',
		bc: _List_fromArray(
			['woman zombie', 'woman', 'female', 'undead', 'walking dead']),
		bg: 'female_zombie',
		df: _Utils_Tuple2(51, 40)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDF\u200D♂️',
		bc: _List_fromArray(
			['man zombie', 'man', 'male', 'dracula', 'undead', 'walking dead']),
		bg: 'male_zombie',
		df: _Utils_Tuple2(51, 41)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDDF',
		bc: _List_fromArray(
			['zombie']),
		bg: 'zombie',
		df: _Utils_Tuple2(51, 42)
	},
		{
		cg: 1,
		aW: '\uD83E\uDDE0',
		bc: _List_fromArray(
			['brain', 'smart', 'intelligent']),
		bg: 'brain',
		df: _Utils_Tuple2(51, 43)
	},
		{
		cg: 0,
		aW: '\uD83E\uDDE1',
		bc: _List_fromArray(
			['orange heart', 'love', 'like', 'affection', 'valentines']),
		bg: 'orange_heart',
		df: _Utils_Tuple2(51, 44)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDE2',
		bc: _List_fromArray(
			['billed cap', 'cap', 'baseball']),
		bg: 'billed_cap',
		df: _Utils_Tuple2(51, 45)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDE3',
		bc: _List_fromArray(
			['scarf', 'neck', 'winter', 'clothes']),
		bg: 'scarf',
		df: _Utils_Tuple2(51, 46)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDE4',
		bc: _List_fromArray(
			['gloves', 'hands', 'winter', 'clothes']),
		bg: 'gloves',
		df: _Utils_Tuple2(51, 47)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDE5',
		bc: _List_fromArray(
			['coat', 'jacket']),
		bg: 'coat',
		df: _Utils_Tuple2(51, 48)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDE6',
		bc: _List_fromArray(
			['socks', 'stockings', 'clothes']),
		bg: 'socks',
		df: _Utils_Tuple2(51, 49)
	},
		{
		cg: 5,
		aW: '\uD83E\uDDE7',
		bc: _List_fromArray(
			['red envelope', 'gift']),
		bg: 'red_envelope',
		df: _Utils_Tuple2(51, 50)
	},
		{
		cg: 5,
		aW: '\uD83E\uDDE8',
		bc: _List_fromArray(
			['firecracker', 'dynamite', 'boom', 'explode', 'explosion', 'explosive']),
		bg: 'firecracker',
		df: _Utils_Tuple2(51, 51)
	},
		{
		cg: 5,
		aW: '\uD83E\uDDE9',
		bc: _List_fromArray(
			['puzzle piece', 'interlocking', 'puzzle', 'piece']),
		bg: 'jigsaw',
		df: _Utils_Tuple2(51, 52)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDEA',
		bc: _List_fromArray(
			['test tube', 'chemistry', 'experiment', 'lab', 'science']),
		bg: 'test_tube',
		df: _Utils_Tuple2(51, 53)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDEB',
		bc: _List_fromArray(
			['petri dish', 'bacteria', 'biology', 'culture', 'lab']),
		bg: 'petri_dish',
		df: _Utils_Tuple2(51, 54)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDEC',
		bc: _List_fromArray(
			['dna', 'biologist', 'genetics', 'life']),
		bg: 'dna',
		df: _Utils_Tuple2(51, 55)
	},
		{
		cg: 4,
		aW: '\uD83E\uDDED',
		bc: _List_fromArray(
			['compass', 'magnetic', 'navigation', 'orienteering']),
		bg: 'compass',
		df: _Utils_Tuple2(51, 56)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDEE',
		bc: _List_fromArray(
			['abacus', 'calculation']),
		bg: 'abacus',
		df: _Utils_Tuple2(51, 57)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDEF',
		bc: _List_fromArray(
			['fire extinguisher', 'quench']),
		bg: 'fire_extinguisher',
		df: _Utils_Tuple2(52, 0)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDF0',
		bc: _List_fromArray(
			['toolbox', 'tools', 'diy', 'fix', 'maintainer', 'mechanic']),
		bg: 'toolbox',
		df: _Utils_Tuple2(52, 1)
	},
		{
		cg: 4,
		aW: '\uD83E\uDDF1',
		bc: _List_fromArray(
			['brick', 'bricks']),
		bg: 'bricks',
		df: _Utils_Tuple2(52, 2)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDF2',
		bc: _List_fromArray(
			['magnet', 'attraction', 'magnetic']),
		bg: 'magnet',
		df: _Utils_Tuple2(52, 3)
	},
		{
		cg: 4,
		aW: '\uD83E\uDDF3',
		bc: _List_fromArray(
			['luggage', 'packing', 'travel']),
		bg: 'luggage',
		df: _Utils_Tuple2(52, 4)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDF4',
		bc: _List_fromArray(
			['lotion bottle', 'moisturizer', 'sunscreen']),
		bg: 'lotion_bottle',
		df: _Utils_Tuple2(52, 5)
	},
		{
		cg: 5,
		aW: '\uD83E\uDDF5',
		bc: _List_fromArray(
			['thread', 'needle', 'sewing', 'spool', 'string']),
		bg: 'thread',
		df: _Utils_Tuple2(52, 6)
	},
		{
		cg: 5,
		aW: '\uD83E\uDDF6',
		bc: _List_fromArray(
			['yarn', 'ball', 'crochet', 'knit']),
		bg: 'yarn',
		df: _Utils_Tuple2(52, 7)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDF7',
		bc: _List_fromArray(
			['safety pin', 'diaper']),
		bg: 'safety_pin',
		df: _Utils_Tuple2(52, 8)
	},
		{
		cg: 5,
		aW: '\uD83E\uDDF8',
		bc: _List_fromArray(
			['teddy bear', 'plush', 'stuffed']),
		bg: 'teddy_bear',
		df: _Utils_Tuple2(52, 9)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDF9',
		bc: _List_fromArray(
			['broom', 'cleaning', 'sweeping', 'witch']),
		bg: 'broom',
		df: _Utils_Tuple2(52, 10)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDFA',
		bc: _List_fromArray(
			['basket', 'laundry']),
		bg: 'basket',
		df: _Utils_Tuple2(52, 11)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDFB',
		bc: _List_fromArray(
			['roll of paper', 'roll']),
		bg: 'roll_of_paper',
		df: _Utils_Tuple2(52, 12)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDFC',
		bc: _List_fromArray(
			['soap', 'bar', 'bathing', 'cleaning', 'lather']),
		bg: 'soap',
		df: _Utils_Tuple2(52, 13)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDFD',
		bc: _List_fromArray(
			['sponge', 'absorbing', 'cleaning', 'porous']),
		bg: 'sponge',
		df: _Utils_Tuple2(52, 14)
	},
		{
		cg: 6,
		aW: '\uD83E\uDDFE',
		bc: _List_fromArray(
			['receipt', 'accounting', 'expenses']),
		bg: 'receipt',
		df: _Utils_Tuple2(52, 15)
	},
		{
		cg: 5,
		aW: '\uD83E\uDDFF',
		bc: _List_fromArray(
			['nazar amulet', 'bead', 'charm']),
		bg: 'nazar_amulet',
		df: _Utils_Tuple2(52, 16)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE70',
		bc: _List_fromArray(
			['ballet shoes']),
		bg: 'ballet_shoes',
		df: _Utils_Tuple2(52, 17)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE71',
		bc: _List_fromArray(
			['one piece swimsuit']),
		bg: 'one-piece_swimsuit',
		df: _Utils_Tuple2(52, 18)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE72',
		bc: _List_fromArray(
			['briefs']),
		bg: 'briefs',
		df: _Utils_Tuple2(52, 19)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE73',
		bc: _List_fromArray(
			['shorts']),
		bg: 'shorts',
		df: _Utils_Tuple2(52, 20)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE74',
		bc: _List_fromArray(
			['thong sandal', 'footwear', 'summer']),
		bg: 'thong_sandal',
		df: _Utils_Tuple2(52, 21)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE78',
		bc: _List_fromArray(
			['drop of blood']),
		bg: 'drop_of_blood',
		df: _Utils_Tuple2(52, 22)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE79',
		bc: _List_fromArray(
			['adhesive bandage']),
		bg: 'adhesive_bandage',
		df: _Utils_Tuple2(52, 23)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE7A',
		bc: _List_fromArray(
			['stethoscope']),
		bg: 'stethoscope',
		df: _Utils_Tuple2(52, 24)
	},
		{
		cg: 5,
		aW: '\uD83E\uDE80',
		bc: _List_fromArray(
			['yo yo']),
		bg: 'yo-yo',
		df: _Utils_Tuple2(52, 25)
	},
		{
		cg: 5,
		aW: '\uD83E\uDE81',
		bc: _List_fromArray(
			['kite']),
		bg: 'kite',
		df: _Utils_Tuple2(52, 26)
	},
		{
		cg: 4,
		aW: '\uD83E\uDE82',
		bc: _List_fromArray(
			['parachute']),
		bg: 'parachute',
		df: _Utils_Tuple2(52, 27)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE83',
		bc: _List_fromArray(
			['boomerang', 'weapon']),
		bg: 'boomerang',
		df: _Utils_Tuple2(52, 28)
	},
		{
		cg: 5,
		aW: '\uD83E\uDE84',
		bc: _List_fromArray(
			['magic wand', 'supernature', 'power']),
		bg: 'magic_wand',
		df: _Utils_Tuple2(52, 29)
	},
		{
		cg: 5,
		aW: '\uD83E\uDE85',
		bc: _List_fromArray(
			['pinata', 'mexico', 'candy', 'celebration']),
		bg: 'pinata',
		df: _Utils_Tuple2(52, 30)
	},
		{
		cg: 5,
		aW: '\uD83E\uDE86',
		bc: _List_fromArray(
			['nesting dolls', 'matryoshka', 'toy']),
		bg: 'nesting_dolls',
		df: _Utils_Tuple2(52, 31)
	},
		{
		cg: 4,
		aW: '\uD83E\uDE90',
		bc: _List_fromArray(
			['ringed planet']),
		bg: 'ringed_planet',
		df: _Utils_Tuple2(52, 32)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE91',
		bc: _List_fromArray(
			['chair']),
		bg: 'chair',
		df: _Utils_Tuple2(52, 33)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE92',
		bc: _List_fromArray(
			['razor']),
		bg: 'razor',
		df: _Utils_Tuple2(52, 34)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE93',
		bc: _List_fromArray(
			['axe']),
		bg: 'axe',
		df: _Utils_Tuple2(52, 35)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE94',
		bc: _List_fromArray(
			['diya lamp']),
		bg: 'diya_lamp',
		df: _Utils_Tuple2(52, 36)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE95',
		bc: _List_fromArray(
			['banjo']),
		bg: 'banjo',
		df: _Utils_Tuple2(52, 37)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE96',
		bc: _List_fromArray(
			['military helmet', 'army', 'protection']),
		bg: 'military_helmet',
		df: _Utils_Tuple2(52, 38)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE97',
		bc: _List_fromArray(
			['accordion', 'music']),
		bg: 'accordion',
		df: _Utils_Tuple2(52, 39)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE98',
		bc: _List_fromArray(
			['long drum', 'music']),
		bg: 'long_drum',
		df: _Utils_Tuple2(52, 40)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE99',
		bc: _List_fromArray(
			['coin', 'money', 'currency']),
		bg: 'coin',
		df: _Utils_Tuple2(52, 41)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE9A',
		bc: _List_fromArray(
			['carpentry saw', 'cut', 'chop']),
		bg: 'carpentry_saw',
		df: _Utils_Tuple2(52, 42)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE9B',
		bc: _List_fromArray(
			['screwdriver', 'tools']),
		bg: 'screwdriver',
		df: _Utils_Tuple2(52, 43)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE9C',
		bc: _List_fromArray(
			['ladder', 'tools']),
		bg: 'ladder',
		df: _Utils_Tuple2(52, 44)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE9D',
		bc: _List_fromArray(
			['hook', 'tools']),
		bg: 'hook',
		df: _Utils_Tuple2(52, 45)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE9E',
		bc: _List_fromArray(
			['mirror', 'reflection']),
		bg: 'mirror',
		df: _Utils_Tuple2(52, 46)
	},
		{
		cg: 6,
		aW: '\uD83E\uDE9F',
		bc: _List_fromArray(
			['window', 'scenery']),
		bg: 'window',
		df: _Utils_Tuple2(52, 47)
	},
		{
		cg: 6,
		aW: '\uD83E\uDEA0',
		bc: _List_fromArray(
			['plunger', 'toilet']),
		bg: 'plunger',
		df: _Utils_Tuple2(52, 48)
	},
		{
		cg: 5,
		aW: '\uD83E\uDEA1',
		bc: _List_fromArray(
			['sewing needle', 'stitches']),
		bg: 'sewing_needle',
		df: _Utils_Tuple2(52, 49)
	},
		{
		cg: 5,
		aW: '\uD83E\uDEA2',
		bc: _List_fromArray(
			['knot', 'rope', 'scout']),
		bg: 'knot',
		df: _Utils_Tuple2(52, 50)
	},
		{
		cg: 6,
		aW: '\uD83E\uDEA3',
		bc: _List_fromArray(
			['bucket', 'water', 'container']),
		bg: 'bucket',
		df: _Utils_Tuple2(52, 51)
	},
		{
		cg: 6,
		aW: '\uD83E\uDEA4',
		bc: _List_fromArray(
			['mouse trap', 'cheese']),
		bg: 'mouse_trap',
		df: _Utils_Tuple2(52, 52)
	},
		{
		cg: 6,
		aW: '\uD83E\uDEA5',
		bc: _List_fromArray(
			['toothbrush', 'hygiene', 'dental']),
		bg: 'toothbrush',
		df: _Utils_Tuple2(52, 53)
	},
		{
		cg: 6,
		aW: '\uD83E\uDEA6',
		bc: _List_fromArray(
			['headstone', 'death', 'rip', 'grave']),
		bg: 'headstone',
		df: _Utils_Tuple2(52, 54)
	},
		{
		cg: 6,
		aW: '\uD83E\uDEA7',
		bc: _List_fromArray(
			['placard', 'announcement']),
		bg: 'placard',
		df: _Utils_Tuple2(52, 55)
	},
		{
		cg: 4,
		aW: '\uD83E\uDEA8',
		bc: _List_fromArray(
			['rock', 'stone']),
		bg: 'rock',
		df: _Utils_Tuple2(52, 56)
	},
		{
		cg: 2,
		aW: '\uD83E\uDEB0',
		bc: _List_fromArray(
			['fly', 'insect']),
		bg: 'fly',
		df: _Utils_Tuple2(52, 57)
	},
		{
		cg: 2,
		aW: '\uD83E\uDEB1',
		bc: _List_fromArray(
			['worm', 'animal']),
		bg: 'worm',
		df: _Utils_Tuple2(53, 0)
	},
		{
		cg: 2,
		aW: '\uD83E\uDEB2',
		bc: _List_fromArray(
			['beetle', 'insect']),
		bg: 'beetle',
		df: _Utils_Tuple2(53, 1)
	},
		{
		cg: 2,
		aW: '\uD83E\uDEB3',
		bc: _List_fromArray(
			['cockroach', 'insect', 'pests']),
		bg: 'cockroach',
		df: _Utils_Tuple2(53, 2)
	},
		{
		cg: 2,
		aW: '\uD83E\uDEB4',
		bc: _List_fromArray(
			['potted plant', 'greenery', 'house']),
		bg: 'potted_plant',
		df: _Utils_Tuple2(53, 3)
	},
		{
		cg: 4,
		aW: '\uD83E\uDEB5',
		bc: _List_fromArray(
			['wood', 'nature', 'timber', 'trunk']),
		bg: 'wood',
		df: _Utils_Tuple2(53, 4)
	},
		{
		cg: 2,
		aW: '\uD83E\uDEB6',
		bc: _List_fromArray(
			['feather', 'bird', 'fly']),
		bg: 'feather',
		df: _Utils_Tuple2(53, 5)
	},
		{
		cg: 1,
		aW: '\uD83E\uDEC0',
		bc: _List_fromArray(
			['anatomical heart', 'health', 'heartbeat']),
		bg: 'anatomical_heart',
		df: _Utils_Tuple2(53, 6)
	},
		{
		cg: 1,
		aW: '\uD83E\uDEC1',
		bc: _List_fromArray(
			['lungs', 'breathe']),
		bg: 'lungs',
		df: _Utils_Tuple2(53, 7)
	},
		{
		cg: 1,
		aW: '\uD83E\uDEC2',
		bc: _List_fromArray(
			['people hugging', 'care']),
		bg: 'people_hugging',
		df: _Utils_Tuple2(53, 8)
	},
		{
		cg: 3,
		aW: '\uD83E\uDED0',
		bc: _List_fromArray(
			['blueberries', 'fruit']),
		bg: 'blueberries',
		df: _Utils_Tuple2(53, 9)
	},
		{
		cg: 3,
		aW: '\uD83E\uDED1',
		bc: _List_fromArray(
			['bell pepper', 'fruit', 'plant']),
		bg: 'bell_pepper',
		df: _Utils_Tuple2(53, 10)
	},
		{
		cg: 3,
		aW: '\uD83E\uDED2',
		bc: _List_fromArray(
			['olive', 'fruit']),
		bg: 'olive',
		df: _Utils_Tuple2(53, 11)
	},
		{
		cg: 3,
		aW: '\uD83E\uDED3',
		bc: _List_fromArray(
			['flatbread', 'flour', 'food']),
		bg: 'flatbread',
		df: _Utils_Tuple2(53, 12)
	},
		{
		cg: 3,
		aW: '\uD83E\uDED4',
		bc: _List_fromArray(
			['tamale', 'food', 'masa']),
		bg: 'tamale',
		df: _Utils_Tuple2(53, 13)
	},
		{
		cg: 3,
		aW: '\uD83E\uDED5',
		bc: _List_fromArray(
			['fondue', 'cheese', 'pot', 'food']),
		bg: 'fondue',
		df: _Utils_Tuple2(53, 14)
	},
		{
		cg: 3,
		aW: '\uD83E\uDED6',
		bc: _List_fromArray(
			['teapot', 'drink', 'hot']),
		bg: 'teapot',
		df: _Utils_Tuple2(53, 15)
	},
		{
		cg: 7,
		aW: '‼️',
		bc: _List_fromArray(
			['double exclamation mark', 'exclamation', 'surprise']),
		bg: 'bangbang',
		df: _Utils_Tuple2(53, 16)
	},
		{
		cg: 7,
		aW: '⁉️',
		bc: _List_fromArray(
			['exclamation question mark', 'wat', 'punctuation', 'surprise']),
		bg: 'interrobang',
		df: _Utils_Tuple2(53, 17)
	},
		{
		cg: 7,
		aW: '™️',
		bc: _List_fromArray(
			['trade mark', 'trademark', 'brand', 'law', 'legal']),
		bg: 'tm',
		df: _Utils_Tuple2(53, 18)
	},
		{
		cg: 7,
		aW: 'ℹ️',
		bc: _List_fromArray(
			['information', 'blue square', 'alphabet', 'letter']),
		bg: 'information_source',
		df: _Utils_Tuple2(53, 19)
	},
		{
		cg: 7,
		aW: '↔️',
		bc: _List_fromArray(
			['left right arrow', 'shape', 'direction', 'horizontal', 'sideways']),
		bg: 'left_right_arrow',
		df: _Utils_Tuple2(53, 20)
	},
		{
		cg: 7,
		aW: '↕️',
		bc: _List_fromArray(
			['up down arrow', 'blue square', 'direction', 'way', 'vertical']),
		bg: 'arrow_up_down',
		df: _Utils_Tuple2(53, 21)
	},
		{
		cg: 7,
		aW: '↖️',
		bc: _List_fromArray(
			['up left arrow', 'blue square', 'point', 'direction', 'diagonal', 'northwest']),
		bg: 'arrow_upper_left',
		df: _Utils_Tuple2(53, 22)
	},
		{
		cg: 7,
		aW: '↗️',
		bc: _List_fromArray(
			['up right arrow', 'blue square', 'point', 'direction', 'diagonal', 'northeast']),
		bg: 'arrow_upper_right',
		df: _Utils_Tuple2(53, 23)
	},
		{
		cg: 7,
		aW: '↘️',
		bc: _List_fromArray(
			['down right arrow', 'blue square', 'direction', 'diagonal', 'southeast']),
		bg: 'arrow_lower_right',
		df: _Utils_Tuple2(53, 24)
	},
		{
		cg: 7,
		aW: '↙️',
		bc: _List_fromArray(
			['down left arrow', 'blue square', 'direction', 'diagonal', 'southwest']),
		bg: 'arrow_lower_left',
		df: _Utils_Tuple2(53, 25)
	},
		{
		cg: 7,
		aW: '↩️',
		bc: _List_fromArray(
			['right arrow curving left', 'back', 'return', 'blue square', 'undo', 'enter']),
		bg: 'leftwards_arrow_with_hook',
		df: _Utils_Tuple2(53, 26)
	},
		{
		cg: 7,
		aW: '↪️',
		bc: _List_fromArray(
			['left arrow curving right', 'blue square', 'return', 'rotate', 'direction']),
		bg: 'arrow_right_hook',
		df: _Utils_Tuple2(53, 27)
	},
		{
		cg: 4,
		aW: '⌚',
		bc: _List_fromArray(
			['watch', 'time', 'accessories']),
		bg: 'watch',
		df: _Utils_Tuple2(53, 28)
	},
		{
		cg: 4,
		aW: '⌛',
		bc: _List_fromArray(
			['hourglass done', 'time', 'clock', 'oldschool', 'limit', 'exam', 'quiz', 'test']),
		bg: 'hourglass',
		df: _Utils_Tuple2(53, 29)
	},
		{
		cg: 6,
		aW: '⌨️',
		bc: _List_fromArray(
			['keyboard', 'technology', 'computer', 'type', 'input', 'text']),
		bg: 'keyboard',
		df: _Utils_Tuple2(53, 30)
	},
		{
		cg: 7,
		aW: '⏏️',
		bc: _List_fromArray(
			['eject button', 'blue square']),
		bg: 'eject',
		df: _Utils_Tuple2(53, 31)
	},
		{
		cg: 7,
		aW: '⏩',
		bc: _List_fromArray(
			['fast forward button', 'blue square', 'play', 'speed', 'continue']),
		bg: 'fast_forward',
		df: _Utils_Tuple2(53, 32)
	},
		{
		cg: 7,
		aW: '⏪',
		bc: _List_fromArray(
			['fast reverse button', 'play', 'blue square']),
		bg: 'rewind',
		df: _Utils_Tuple2(53, 33)
	},
		{
		cg: 7,
		aW: '⏫',
		bc: _List_fromArray(
			['fast up button', 'blue square', 'direction', 'top']),
		bg: 'arrow_double_up',
		df: _Utils_Tuple2(53, 34)
	},
		{
		cg: 7,
		aW: '⏬',
		bc: _List_fromArray(
			['fast down button', 'blue square', 'direction', 'bottom']),
		bg: 'arrow_double_down',
		df: _Utils_Tuple2(53, 35)
	},
		{
		cg: 7,
		aW: '⏭️',
		bc: _List_fromArray(
			['next track button', 'forward', 'next', 'blue square']),
		bg: 'black_right_pointing_double_triangle_with_vertical_bar',
		df: _Utils_Tuple2(53, 36)
	},
		{
		cg: 7,
		aW: '⏮️',
		bc: _List_fromArray(
			['last track button', 'backward']),
		bg: 'black_left_pointing_double_triangle_with_vertical_bar',
		df: _Utils_Tuple2(53, 37)
	},
		{
		cg: 7,
		aW: '⏯️',
		bc: _List_fromArray(
			['play or pause button', 'blue square', 'play', 'pause']),
		bg: 'black_right_pointing_triangle_with_double_vertical_bar',
		df: _Utils_Tuple2(53, 38)
	},
		{
		cg: 4,
		aW: '⏰',
		bc: _List_fromArray(
			['alarm clock', 'time', 'wake']),
		bg: 'alarm_clock',
		df: _Utils_Tuple2(53, 39)
	},
		{
		cg: 4,
		aW: '⏱️',
		bc: _List_fromArray(
			['stopwatch', 'time', 'deadline']),
		bg: 'stopwatch',
		df: _Utils_Tuple2(53, 40)
	},
		{
		cg: 4,
		aW: '⏲️',
		bc: _List_fromArray(
			['timer clock', 'alarm']),
		bg: 'timer_clock',
		df: _Utils_Tuple2(53, 41)
	},
		{
		cg: 4,
		aW: '⏳',
		bc: _List_fromArray(
			['hourglass not done', 'oldschool', 'time', 'countdown']),
		bg: 'hourglass_flowing_sand',
		df: _Utils_Tuple2(53, 42)
	},
		{
		cg: 7,
		aW: '⏸️',
		bc: _List_fromArray(
			['pause button', 'pause', 'blue square']),
		bg: 'double_vertical_bar',
		df: _Utils_Tuple2(53, 43)
	},
		{
		cg: 7,
		aW: '⏹️',
		bc: _List_fromArray(
			['stop button', 'blue square']),
		bg: 'black_square_for_stop',
		df: _Utils_Tuple2(53, 44)
	},
		{
		cg: 7,
		aW: '⏺️',
		bc: _List_fromArray(
			['record button', 'blue square']),
		bg: 'black_circle_for_record',
		df: _Utils_Tuple2(53, 45)
	},
		{
		cg: 7,
		aW: 'Ⓜ️',
		bc: _List_fromArray(
			['circled m', 'alphabet', 'blue circle', 'letter']),
		bg: 'm',
		df: _Utils_Tuple2(53, 46)
	},
		{
		cg: 7,
		aW: '▪️',
		bc: _List_fromArray(
			['black small square', 'shape', 'icon']),
		bg: 'black_small_square',
		df: _Utils_Tuple2(53, 47)
	},
		{
		cg: 7,
		aW: '▫️',
		bc: _List_fromArray(
			['white small square', 'shape', 'icon']),
		bg: 'white_small_square',
		df: _Utils_Tuple2(53, 48)
	},
		{
		cg: 7,
		aW: '▶️',
		bc: _List_fromArray(
			['play button', 'blue square', 'right', 'direction', 'play']),
		bg: 'arrow_forward',
		df: _Utils_Tuple2(53, 49)
	},
		{
		cg: 7,
		aW: '◀️',
		bc: _List_fromArray(
			['reverse button', 'blue square', 'left', 'direction']),
		bg: 'arrow_backward',
		df: _Utils_Tuple2(53, 50)
	},
		{
		cg: 7,
		aW: '◻️',
		bc: _List_fromArray(
			['white medium square', 'shape', 'stone', 'icon']),
		bg: 'white_medium_square',
		df: _Utils_Tuple2(53, 51)
	},
		{
		cg: 7,
		aW: '◼️',
		bc: _List_fromArray(
			['black medium square', 'shape', 'button', 'icon']),
		bg: 'black_medium_square',
		df: _Utils_Tuple2(53, 52)
	},
		{
		cg: 7,
		aW: '◽',
		bc: _List_fromArray(
			['white medium small square', 'shape', 'stone', 'icon', 'button']),
		bg: 'white_medium_small_square',
		df: _Utils_Tuple2(53, 53)
	},
		{
		cg: 7,
		aW: '◾',
		bc: _List_fromArray(
			['black medium small square', 'icon', 'shape', 'button']),
		bg: 'black_medium_small_square',
		df: _Utils_Tuple2(53, 54)
	},
		{
		cg: 4,
		aW: '☀️',
		bc: _List_fromArray(
			['sun', 'weather', 'nature', 'brightness', 'summer', 'beach', 'spring']),
		bg: 'sunny',
		df: _Utils_Tuple2(53, 55)
	},
		{
		cg: 4,
		aW: '☁️',
		bc: _List_fromArray(
			['cloud', 'weather', 'sky']),
		bg: 'cloud',
		df: _Utils_Tuple2(53, 56)
	},
		{
		cg: 4,
		aW: '☂️',
		bc: _List_fromArray(
			['umbrella', 'weather', 'spring']),
		bg: 'umbrella',
		df: _Utils_Tuple2(53, 57)
	},
		{
		cg: 4,
		aW: '☃️',
		bc: _List_fromArray(
			['snowman', 'winter', 'season', 'cold', 'weather', 'christmas', 'xmas', 'frozen']),
		bg: 'snowman',
		df: _Utils_Tuple2(54, 0)
	},
		{
		cg: 4,
		aW: '☄️',
		bc: _List_fromArray(
			['comet', 'space']),
		bg: 'comet',
		df: _Utils_Tuple2(54, 1)
	},
		{
		cg: 6,
		aW: '☎️',
		bc: _List_fromArray(
			['telephone', 'technology', 'communication', 'dial', 'telephone']),
		bg: 'phone',
		df: _Utils_Tuple2(54, 2)
	},
		{
		cg: 7,
		aW: '☑️',
		bc: _List_fromArray(
			['check box with check', 'ok', 'agree', 'confirm', 'black square', 'vote', 'election', 'yes', 'tick']),
		bg: 'ballot_box_with_check',
		df: _Utils_Tuple2(54, 3)
	},
		{
		cg: 4,
		aW: '☔',
		bc: _List_fromArray(
			['umbrella with rain drops', 'rainy', 'weather', 'spring']),
		bg: 'umbrella_with_rain_drops',
		df: _Utils_Tuple2(54, 4)
	},
		{
		cg: 3,
		aW: '☕',
		bc: _List_fromArray(
			['hot beverage', 'beverage', 'caffeine', 'latte', 'espresso']),
		bg: 'coffee',
		df: _Utils_Tuple2(54, 5)
	},
		{
		cg: 2,
		aW: '☘️',
		bc: _List_fromArray(
			['shamrock', 'vegetable', 'plant', 'nature', 'irish', 'clover']),
		bg: 'shamrock',
		df: _Utils_Tuple2(54, 6)
	},
		{
		cg: 1,
		aW: '☝️',
		bc: _List_fromArray(
			['index pointing up', 'hand', 'fingers', 'direction', 'up']),
		bg: 'point_up',
		df: _Utils_Tuple2(54, 7)
	},
		{
		cg: 0,
		aW: '☠️',
		bc: _List_fromArray(
			['skull and crossbones', 'poison', 'danger', 'deadly', 'scary', 'death', 'pirate', 'evil']),
		bg: 'skull_and_crossbones',
		df: _Utils_Tuple2(54, 13)
	},
		{
		cg: 7,
		aW: '☢️',
		bc: _List_fromArray(
			['radioactive', 'nuclear', 'danger']),
		bg: 'radioactive_sign',
		df: _Utils_Tuple2(54, 14)
	},
		{
		cg: 7,
		aW: '☣️',
		bc: _List_fromArray(
			['biohazard', 'danger']),
		bg: 'biohazard_sign',
		df: _Utils_Tuple2(54, 15)
	},
		{
		cg: 7,
		aW: '☦️',
		bc: _List_fromArray(
			['orthodox cross', 'suppedaneum', 'religion']),
		bg: 'orthodox_cross',
		df: _Utils_Tuple2(54, 16)
	},
		{
		cg: 7,
		aW: '☪️',
		bc: _List_fromArray(
			['star and crescent', 'islam']),
		bg: 'star_and_crescent',
		df: _Utils_Tuple2(54, 17)
	},
		{
		cg: 7,
		aW: '☮️',
		bc: _List_fromArray(
			['peace symbol', 'hippie']),
		bg: 'peace_symbol',
		df: _Utils_Tuple2(54, 18)
	},
		{
		cg: 7,
		aW: '☯️',
		bc: _List_fromArray(
			['yin yang', 'balance']),
		bg: 'yin_yang',
		df: _Utils_Tuple2(54, 19)
	},
		{
		cg: 7,
		aW: '☸️',
		bc: _List_fromArray(
			['wheel of dharma', 'hinduism', 'buddhism', 'sikhism', 'jainism']),
		bg: 'wheel_of_dharma',
		df: _Utils_Tuple2(54, 20)
	},
		{
		cg: 0,
		aW: '☹️',
		bc: _List_fromArray(
			['frowning face', 'face', 'sad', 'upset', 'frown']),
		bg: 'white_frowning_face',
		df: _Utils_Tuple2(54, 21)
	},
		{
		cg: 0,
		aW: '☺️',
		bc: _List_fromArray(
			['smiling face', 'face', 'blush', 'massage', 'happiness']),
		bg: 'relaxed',
		df: _Utils_Tuple2(54, 22)
	},
		{
		cg: 7,
		aW: '♀️',
		bc: _List_fromArray(
			['female sign']),
		bg: 'female_sign',
		df: _Utils_Tuple2(54, 23)
	},
		{
		cg: 7,
		aW: '♂️',
		bc: _List_fromArray(
			['male sign']),
		bg: 'male_sign',
		df: _Utils_Tuple2(54, 24)
	},
		{
		cg: 7,
		aW: '♈',
		bc: _List_fromArray(
			['aries', 'sign', 'purple square', 'zodiac', 'astrology']),
		bg: 'aries',
		df: _Utils_Tuple2(54, 25)
	},
		{
		cg: 7,
		aW: '♉',
		bc: _List_fromArray(
			['taurus', 'purple square', 'sign', 'zodiac', 'astrology']),
		bg: 'taurus',
		df: _Utils_Tuple2(54, 26)
	},
		{
		cg: 7,
		aW: '♊',
		bc: _List_fromArray(
			['gemini', 'sign', 'zodiac', 'purple square', 'astrology']),
		bg: 'gemini',
		df: _Utils_Tuple2(54, 27)
	},
		{
		cg: 7,
		aW: '♋',
		bc: _List_fromArray(
			['cancer', 'sign', 'zodiac', 'purple square', 'astrology']),
		bg: 'cancer',
		df: _Utils_Tuple2(54, 28)
	},
		{
		cg: 7,
		aW: '♌',
		bc: _List_fromArray(
			['leo', 'sign', 'purple square', 'zodiac', 'astrology']),
		bg: 'leo',
		df: _Utils_Tuple2(54, 29)
	},
		{
		cg: 7,
		aW: '♍',
		bc: _List_fromArray(
			['virgo', 'sign', 'zodiac', 'purple square', 'astrology']),
		bg: 'virgo',
		df: _Utils_Tuple2(54, 30)
	},
		{
		cg: 7,
		aW: '♎',
		bc: _List_fromArray(
			['libra', 'sign', 'purple square', 'zodiac', 'astrology']),
		bg: 'libra',
		df: _Utils_Tuple2(54, 31)
	},
		{
		cg: 7,
		aW: '♏',
		bc: _List_fromArray(
			['scorpio', 'sign', 'zodiac', 'purple square', 'astrology', 'scorpio']),
		bg: 'scorpius',
		df: _Utils_Tuple2(54, 32)
	},
		{
		cg: 7,
		aW: '♐',
		bc: _List_fromArray(
			['sagittarius', 'sign', 'zodiac', 'purple square', 'astrology']),
		bg: 'sagittarius',
		df: _Utils_Tuple2(54, 33)
	},
		{
		cg: 7,
		aW: '♑',
		bc: _List_fromArray(
			['capricorn', 'sign', 'zodiac', 'purple square', 'astrology']),
		bg: 'capricorn',
		df: _Utils_Tuple2(54, 34)
	},
		{
		cg: 7,
		aW: '♒',
		bc: _List_fromArray(
			['aquarius', 'sign', 'purple square', 'zodiac', 'astrology']),
		bg: 'aquarius',
		df: _Utils_Tuple2(54, 35)
	},
		{
		cg: 7,
		aW: '♓',
		bc: _List_fromArray(
			['pisces', 'purple square', 'sign', 'zodiac', 'astrology']),
		bg: 'pisces',
		df: _Utils_Tuple2(54, 36)
	},
		{
		cg: 5,
		aW: '♟️',
		bc: _List_fromArray(
			['chess pawn', 'expendable']),
		bg: 'chess_pawn',
		df: _Utils_Tuple2(54, 37)
	},
		{
		cg: 5,
		aW: '♠️',
		bc: _List_fromArray(
			['spade suit', 'poker', 'cards', 'suits', 'magic']),
		bg: 'spades',
		df: _Utils_Tuple2(54, 38)
	},
		{
		cg: 5,
		aW: '♣️',
		bc: _List_fromArray(
			['club suit', 'poker', 'cards', 'magic', 'suits']),
		bg: 'clubs',
		df: _Utils_Tuple2(54, 39)
	},
		{
		cg: 5,
		aW: '♥️',
		bc: _List_fromArray(
			['heart suit', 'poker', 'cards', 'magic', 'suits']),
		bg: 'hearts',
		df: _Utils_Tuple2(54, 40)
	},
		{
		cg: 5,
		aW: '♦️',
		bc: _List_fromArray(
			['diamond suit', 'poker', 'cards', 'magic', 'suits']),
		bg: 'diamonds',
		df: _Utils_Tuple2(54, 41)
	},
		{
		cg: 4,
		aW: '♨️',
		bc: _List_fromArray(
			['hot springs', 'bath', 'warm', 'relax']),
		bg: 'hotsprings',
		df: _Utils_Tuple2(54, 42)
	},
		{
		cg: 7,
		aW: '♻️',
		bc: _List_fromArray(
			['recycling symbol', 'arrow', 'environment', 'garbage', 'trash']),
		bg: 'recycle',
		df: _Utils_Tuple2(54, 43)
	},
		{
		cg: 7,
		aW: '♾️',
		bc: _List_fromArray(
			['infinity', 'forever']),
		bg: 'infinity',
		df: _Utils_Tuple2(54, 44)
	},
		{
		cg: 7,
		aW: '♿',
		bc: _List_fromArray(
			['wheelchair symbol', 'blue square', 'disabled', 'a11y', 'accessibility']),
		bg: 'wheelchair',
		df: _Utils_Tuple2(54, 45)
	},
		{
		cg: 6,
		aW: '⚒️',
		bc: _List_fromArray(
			['hammer and pick', 'tools', 'build', 'create']),
		bg: 'hammer_and_pick',
		df: _Utils_Tuple2(54, 46)
	},
		{
		cg: 4,
		aW: '⚓',
		bc: _List_fromArray(
			['anchor', 'ship', 'ferry', 'sea', 'boat']),
		bg: 'anchor',
		df: _Utils_Tuple2(54, 47)
	},
		{
		cg: 6,
		aW: '⚔️',
		bc: _List_fromArray(
			['crossed swords', 'weapon']),
		bg: 'crossed_swords',
		df: _Utils_Tuple2(54, 48)
	},
		{
		cg: 7,
		aW: '⚕️',
		bc: _List_fromArray(
			['medical symbol']),
		bg: 'medical_symbol',
		df: _Utils_Tuple2(54, 49)
	},
		{
		cg: 6,
		aW: '⚖️',
		bc: _List_fromArray(
			['balance scale', 'law', 'fairness', 'weight']),
		bg: 'scales',
		df: _Utils_Tuple2(54, 50)
	},
		{
		cg: 6,
		aW: '⚗️',
		bc: _List_fromArray(
			['alembic', 'distilling', 'science', 'experiment', 'chemistry']),
		bg: 'alembic',
		df: _Utils_Tuple2(54, 51)
	},
		{
		cg: 6,
		aW: '⚙️',
		bc: _List_fromArray(
			['gear', 'cog']),
		bg: 'gear',
		df: _Utils_Tuple2(54, 52)
	},
		{
		cg: 7,
		aW: '⚛️',
		bc: _List_fromArray(
			['atom symbol', 'science', 'physics', 'chemistry']),
		bg: 'atom_symbol',
		df: _Utils_Tuple2(54, 53)
	},
		{
		cg: 7,
		aW: '⚜️',
		bc: _List_fromArray(
			['fleur de lis', 'decorative', 'scout']),
		bg: 'fleur_de_lis',
		df: _Utils_Tuple2(54, 54)
	},
		{
		cg: 7,
		aW: '⚠️',
		bc: _List_fromArray(
			['warning', 'exclamation', 'wip', 'alert', 'error', 'problem', 'issue']),
		bg: 'warning',
		df: _Utils_Tuple2(54, 55)
	},
		{
		cg: 4,
		aW: '⚡',
		bc: _List_fromArray(
			['high voltage', 'thunder', 'weather', 'lightning bolt', 'fast']),
		bg: 'zap',
		df: _Utils_Tuple2(54, 56)
	},
		{
		cg: 7,
		aW: '⚧️',
		bc: _List_fromArray(
			['transgender symbol', 'lgbtq']),
		bg: 'transgender_symbol',
		df: _Utils_Tuple2(54, 57)
	},
		{
		cg: 7,
		aW: '⚪',
		bc: _List_fromArray(
			['white circle', 'shape', 'round']),
		bg: 'white_circle',
		df: _Utils_Tuple2(55, 0)
	},
		{
		cg: 7,
		aW: '⚫',
		bc: _List_fromArray(
			['black circle', 'shape', 'button', 'round']),
		bg: 'black_circle',
		df: _Utils_Tuple2(55, 1)
	},
		{
		cg: 6,
		aW: '⚰️',
		bc: _List_fromArray(
			['coffin', 'vampire', 'dead', 'die', 'death', 'rip', 'graveyard', 'cemetery', 'casket', 'funeral', 'box']),
		bg: 'coffin',
		df: _Utils_Tuple2(55, 2)
	},
		{
		cg: 6,
		aW: '⚱️',
		bc: _List_fromArray(
			['funeral urn', 'dead', 'die', 'death', 'rip', 'ashes']),
		bg: 'funeral_urn',
		df: _Utils_Tuple2(55, 3)
	},
		{
		cg: 5,
		aW: '⚽',
		bc: _List_fromArray(
			['soccer ball', 'sports', 'football']),
		bg: 'soccer',
		df: _Utils_Tuple2(55, 4)
	},
		{
		cg: 5,
		aW: '⚾',
		bc: _List_fromArray(
			['baseball', 'sports', 'balls']),
		bg: 'baseball',
		df: _Utils_Tuple2(55, 5)
	},
		{
		cg: 4,
		aW: '⛄',
		bc: _List_fromArray(
			['snowman without snow', 'winter', 'season', 'cold', 'weather', 'christmas', 'xmas', 'frozen', 'without snow']),
		bg: 'snowman_without_snow',
		df: _Utils_Tuple2(55, 6)
	},
		{
		cg: 4,
		aW: '⛅',
		bc: _List_fromArray(
			['sun behind cloud', 'weather', 'nature', 'cloudy', 'morning', 'fall', 'spring']),
		bg: 'partly_sunny',
		df: _Utils_Tuple2(55, 7)
	},
		{
		cg: 4,
		aW: '⛈️',
		bc: _List_fromArray(
			['cloud with lightning and rain', 'weather', 'lightning']),
		bg: 'thunder_cloud_and_rain',
		df: _Utils_Tuple2(55, 8)
	},
		{
		cg: 7,
		aW: '⛎',
		bc: _List_fromArray(
			['ophiuchus', 'sign', 'purple square', 'constellation', 'astrology']),
		bg: 'ophiuchus',
		df: _Utils_Tuple2(55, 9)
	},
		{
		cg: 6,
		aW: '⛏️',
		bc: _List_fromArray(
			['pick', 'tools', 'dig']),
		bg: 'pick',
		df: _Utils_Tuple2(55, 10)
	},
		{
		cg: 6,
		aW: '⛑️',
		bc: _List_fromArray(
			['rescue worker s helmet', 'construction', 'build']),
		bg: 'helmet_with_white_cross',
		df: _Utils_Tuple2(55, 11)
	},
		{
		cg: 6,
		aW: '⛓️',
		bc: _List_fromArray(
			['chains', 'lock', 'arrest']),
		bg: 'chains',
		df: _Utils_Tuple2(55, 12)
	},
		{
		cg: 7,
		aW: '⛔',
		bc: _List_fromArray(
			['no entry', 'limit', 'security', 'privacy', 'bad', 'denied', 'stop', 'circle']),
		bg: 'no_entry',
		df: _Utils_Tuple2(55, 13)
	},
		{
		cg: 4,
		aW: '⛩️',
		bc: _List_fromArray(
			['shinto shrine', 'temple', 'japan', 'kyoto']),
		bg: 'shinto_shrine',
		df: _Utils_Tuple2(55, 14)
	},
		{
		cg: 4,
		aW: '⛪',
		bc: _List_fromArray(
			['church', 'building', 'religion', 'christ']),
		bg: 'church',
		df: _Utils_Tuple2(55, 15)
	},
		{
		cg: 4,
		aW: '⛰️',
		bc: _List_fromArray(
			['mountain', 'photo', 'nature', 'environment']),
		bg: 'mountain',
		df: _Utils_Tuple2(55, 16)
	},
		{
		cg: 4,
		aW: '⛱️',
		bc: _List_fromArray(
			['umbrella on ground', 'weather', 'summer']),
		bg: 'umbrella_on_ground',
		df: _Utils_Tuple2(55, 17)
	},
		{
		cg: 4,
		aW: '⛲',
		bc: _List_fromArray(
			['fountain', 'photo', 'summer', 'water', 'fresh']),
		bg: 'fountain',
		df: _Utils_Tuple2(55, 18)
	},
		{
		cg: 5,
		aW: '⛳',
		bc: _List_fromArray(
			['flag in hole', 'sports', 'business', 'flag', 'hole', 'summer']),
		bg: 'golf',
		df: _Utils_Tuple2(55, 19)
	},
		{
		cg: 4,
		aW: '⛴️',
		bc: _List_fromArray(
			['ferry', 'boat', 'ship', 'yacht']),
		bg: 'ferry',
		df: _Utils_Tuple2(55, 20)
	},
		{
		cg: 4,
		aW: '⛵',
		bc: _List_fromArray(
			['sailboat', 'ship', 'summer', 'transportation', 'water', 'sailing']),
		bg: 'boat',
		df: _Utils_Tuple2(55, 21)
	},
		{
		cg: 1,
		aW: '⛷️',
		bc: _List_fromArray(
			['skier', 'sports', 'winter', 'snow']),
		bg: 'skier',
		df: _Utils_Tuple2(55, 22)
	},
		{
		cg: 5,
		aW: '⛸️',
		bc: _List_fromArray(
			['ice skate', 'sports']),
		bg: 'ice_skate',
		df: _Utils_Tuple2(55, 23)
	},
		{
		cg: 1,
		aW: '⛹️\u200D♀️',
		bc: _List_fromArray(
			['woman bouncing ball', 'sports', 'human', 'woman', 'female']),
		bg: 'woman-bouncing-ball',
		df: _Utils_Tuple2(55, 24)
	},
		{
		cg: 1,
		aW: '⛹️\u200D♂️',
		bc: _List_fromArray(
			['man bouncing ball']),
		bg: 'man-bouncing-ball',
		df: _Utils_Tuple2(55, 30)
	},
		{
		cg: 1,
		aW: '⛹️',
		bc: _List_fromArray(
			['person bouncing ball', 'sports', 'human']),
		bg: 'person_with_ball',
		df: _Utils_Tuple2(55, 36)
	},
		{
		cg: 4,
		aW: '⛺',
		bc: _List_fromArray(
			['tent', 'photo', 'camping', 'outdoors']),
		bg: 'tent',
		df: _Utils_Tuple2(55, 42)
	},
		{
		cg: 4,
		aW: '⛽',
		bc: _List_fromArray(
			['fuel pump', 'gas station', 'petroleum']),
		bg: 'fuelpump',
		df: _Utils_Tuple2(55, 43)
	},
		{
		cg: 6,
		aW: '✂️',
		bc: _List_fromArray(
			['scissors', 'stationery', 'cut']),
		bg: 'scissors',
		df: _Utils_Tuple2(55, 44)
	},
		{
		cg: 7,
		aW: '✅',
		bc: _List_fromArray(
			['check mark button', 'green square', 'ok', 'agree', 'vote', 'election', 'answer', 'tick']),
		bg: 'white_check_mark',
		df: _Utils_Tuple2(55, 45)
	},
		{
		cg: 4,
		aW: '✈️',
		bc: _List_fromArray(
			['airplane', 'vehicle', 'transportation', 'flight', 'fly']),
		bg: 'airplane',
		df: _Utils_Tuple2(55, 46)
	},
		{
		cg: 6,
		aW: '✉️',
		bc: _List_fromArray(
			['envelope', 'letter', 'postal', 'inbox', 'communication']),
		bg: 'email',
		df: _Utils_Tuple2(55, 47)
	},
		{
		cg: 1,
		aW: '✊',
		bc: _List_fromArray(
			['raised fist', 'fingers', 'hand', 'grasp']),
		bg: 'fist',
		df: _Utils_Tuple2(55, 48)
	},
		{
		cg: 1,
		aW: '✋',
		bc: _List_fromArray(
			['raised hand', 'fingers', 'stop', 'highfive', 'palm', 'ban']),
		bg: 'hand',
		df: _Utils_Tuple2(55, 54)
	},
		{
		cg: 1,
		aW: '✌️',
		bc: _List_fromArray(
			['victory hand', 'fingers', 'ohyeah', 'hand', 'peace', 'victory', 'two']),
		bg: 'v',
		df: _Utils_Tuple2(56, 2)
	},
		{
		cg: 1,
		aW: '✍️',
		bc: _List_fromArray(
			['writing hand', 'lower left ballpoint pen', 'stationery', 'write', 'compose']),
		bg: 'writing_hand',
		df: _Utils_Tuple2(56, 8)
	},
		{
		cg: 6,
		aW: '✏️',
		bc: _List_fromArray(
			['pencil', 'stationery', 'write', 'paper', 'writing', 'school', 'study']),
		bg: 'pencil2',
		df: _Utils_Tuple2(56, 14)
	},
		{
		cg: 6,
		aW: '✒️',
		bc: _List_fromArray(
			['black nib', 'pen', 'stationery', 'writing', 'write']),
		bg: 'black_nib',
		df: _Utils_Tuple2(56, 15)
	},
		{
		cg: 7,
		aW: '✔️',
		bc: _List_fromArray(
			['check mark', 'ok', 'nike', 'answer', 'yes', 'tick']),
		bg: 'heavy_check_mark',
		df: _Utils_Tuple2(56, 16)
	},
		{
		cg: 7,
		aW: '✖️',
		bc: _List_fromArray(
			['multiplication sign', 'math', 'calculation']),
		bg: 'heavy_multiplication_x',
		df: _Utils_Tuple2(56, 17)
	},
		{
		cg: 7,
		aW: '✝️',
		bc: _List_fromArray(
			['latin cross', 'christianity']),
		bg: 'latin_cross',
		df: _Utils_Tuple2(56, 18)
	},
		{
		cg: 7,
		aW: '✡️',
		bc: _List_fromArray(
			['star of david', 'judaism']),
		bg: 'star_of_david',
		df: _Utils_Tuple2(56, 19)
	},
		{
		cg: 5,
		aW: '✨',
		bc: _List_fromArray(
			['sparkles', 'stars', 'shine', 'shiny', 'cool', 'awesome', 'good', 'magic']),
		bg: 'sparkles',
		df: _Utils_Tuple2(56, 20)
	},
		{
		cg: 7,
		aW: '✳️',
		bc: _List_fromArray(
			['eight spoked asterisk', 'star', 'sparkle', 'green square']),
		bg: 'eight_spoked_asterisk',
		df: _Utils_Tuple2(56, 21)
	},
		{
		cg: 7,
		aW: '✴️',
		bc: _List_fromArray(
			['eight pointed star', 'orange square', 'shape', 'polygon']),
		bg: 'eight_pointed_black_star',
		df: _Utils_Tuple2(56, 22)
	},
		{
		cg: 4,
		aW: '❄️',
		bc: _List_fromArray(
			['snowflake', 'winter', 'season', 'cold', 'weather', 'christmas', 'xmas']),
		bg: 'snowflake',
		df: _Utils_Tuple2(56, 23)
	},
		{
		cg: 7,
		aW: '❇️',
		bc: _List_fromArray(
			['sparkle', 'stars', 'green square', 'awesome', 'good', 'fireworks']),
		bg: 'sparkle',
		df: _Utils_Tuple2(56, 24)
	},
		{
		cg: 7,
		aW: '❌',
		bc: _List_fromArray(
			['cross mark', 'no', 'delete', 'remove', 'cancel', 'red']),
		bg: 'x',
		df: _Utils_Tuple2(56, 25)
	},
		{
		cg: 7,
		aW: '❎',
		bc: _List_fromArray(
			['cross mark button', 'x', 'green square', 'no', 'deny']),
		bg: 'negative_squared_cross_mark',
		df: _Utils_Tuple2(56, 26)
	},
		{
		cg: 7,
		aW: '❓',
		bc: _List_fromArray(
			['question mark', 'doubt', 'confused']),
		bg: 'question',
		df: _Utils_Tuple2(56, 27)
	},
		{
		cg: 7,
		aW: '❔',
		bc: _List_fromArray(
			['white question mark', 'doubts', 'gray', 'huh', 'confused']),
		bg: 'grey_question',
		df: _Utils_Tuple2(56, 28)
	},
		{
		cg: 7,
		aW: '❕',
		bc: _List_fromArray(
			['white exclamation mark', 'surprise', 'punctuation', 'gray', 'wow', 'warning']),
		bg: 'grey_exclamation',
		df: _Utils_Tuple2(56, 29)
	},
		{
		cg: 7,
		aW: '❗',
		bc: _List_fromArray(
			['exclamation mark', 'heavy exclamation mark', 'danger', 'surprise', 'punctuation', 'wow', 'warning']),
		bg: 'exclamation',
		df: _Utils_Tuple2(56, 30)
	},
		{
		cg: 0,
		aW: '❣️',
		bc: _List_fromArray(
			['heart exclamation', 'decoration', 'love']),
		bg: 'heavy_heart_exclamation_mark_ornament',
		df: _Utils_Tuple2(56, 31)
	},
		{
		cg: 0,
		aW: '❤️',
		bc: _List_fromArray(
			['red heart', 'love', 'like', 'valentines']),
		bg: 'heart',
		df: _Utils_Tuple2(56, 32)
	},
		{
		cg: 7,
		aW: '➕',
		bc: _List_fromArray(
			['plus sign', 'math', 'calculation', 'addition', 'more', 'increase']),
		bg: 'heavy_plus_sign',
		df: _Utils_Tuple2(56, 33)
	},
		{
		cg: 7,
		aW: '➖',
		bc: _List_fromArray(
			['minus sign', 'math', 'calculation', 'subtract', 'less']),
		bg: 'heavy_minus_sign',
		df: _Utils_Tuple2(56, 34)
	},
		{
		cg: 7,
		aW: '➗',
		bc: _List_fromArray(
			['division sign', 'divide', 'math', 'calculation']),
		bg: 'heavy_division_sign',
		df: _Utils_Tuple2(56, 35)
	},
		{
		cg: 7,
		aW: '➡️',
		bc: _List_fromArray(
			['right arrow', 'blue square', 'next']),
		bg: 'arrow_right',
		df: _Utils_Tuple2(56, 36)
	},
		{
		cg: 7,
		aW: '➰',
		bc: _List_fromArray(
			['curly loop', 'scribble', 'draw', 'shape', 'squiggle']),
		bg: 'curly_loop',
		df: _Utils_Tuple2(56, 37)
	},
		{
		cg: 7,
		aW: '➿',
		bc: _List_fromArray(
			['double curly loop', 'tape', 'cassette']),
		bg: 'loop',
		df: _Utils_Tuple2(56, 38)
	},
		{
		cg: 7,
		aW: '⤴️',
		bc: _List_fromArray(
			['right arrow curving up', 'blue square', 'direction', 'top']),
		bg: 'arrow_heading_up',
		df: _Utils_Tuple2(56, 39)
	},
		{
		cg: 7,
		aW: '⤵️',
		bc: _List_fromArray(
			['right arrow curving down', 'blue square', 'direction', 'bottom']),
		bg: 'arrow_heading_down',
		df: _Utils_Tuple2(56, 40)
	},
		{
		cg: 7,
		aW: '⬅️',
		bc: _List_fromArray(
			['left arrow', 'blue square', 'previous', 'back']),
		bg: 'arrow_left',
		df: _Utils_Tuple2(56, 41)
	},
		{
		cg: 7,
		aW: '⬆️',
		bc: _List_fromArray(
			['up arrow', 'blue square', 'continue', 'top', 'direction']),
		bg: 'arrow_up',
		df: _Utils_Tuple2(56, 42)
	},
		{
		cg: 7,
		aW: '⬇️',
		bc: _List_fromArray(
			['down arrow', 'blue square', 'direction', 'bottom']),
		bg: 'arrow_down',
		df: _Utils_Tuple2(56, 43)
	},
		{
		cg: 7,
		aW: '⬛',
		bc: _List_fromArray(
			['black large square', 'shape', 'icon', 'button']),
		bg: 'black_large_square',
		df: _Utils_Tuple2(56, 44)
	},
		{
		cg: 7,
		aW: '⬜',
		bc: _List_fromArray(
			['white large square', 'shape', 'icon', 'stone', 'button']),
		bg: 'white_large_square',
		df: _Utils_Tuple2(56, 45)
	},
		{
		cg: 4,
		aW: '⭐',
		bc: _List_fromArray(
			['star', 'night', 'yellow']),
		bg: 'star',
		df: _Utils_Tuple2(56, 46)
	},
		{
		cg: 7,
		aW: '⭕',
		bc: _List_fromArray(
			['hollow red circle', 'circle', 'round']),
		bg: 'o',
		df: _Utils_Tuple2(56, 47)
	},
		{
		cg: 7,
		aW: '〰️',
		bc: _List_fromArray(
			['wavy dash', 'draw', 'line', 'moustache', 'mustache', 'squiggle', 'scribble']),
		bg: 'wavy_dash',
		df: _Utils_Tuple2(56, 48)
	},
		{
		cg: 7,
		aW: '〽️',
		bc: _List_fromArray(
			['part alternation mark', 'graph', 'presentation', 'stats', 'business', 'economics', 'bad']),
		bg: 'part_alternation_mark',
		df: _Utils_Tuple2(56, 49)
	},
		{
		cg: 7,
		aW: '㊗️',
		bc: _List_fromArray(
			['japanese congratulations button', 'chinese', 'kanji', 'japanese', 'red circle']),
		bg: 'congratulations',
		df: _Utils_Tuple2(56, 50)
	},
		{
		cg: 7,
		aW: '㊙️',
		bc: _List_fromArray(
			['japanese secret button', 'privacy', 'chinese', 'sshh', 'kanji', 'red circle']),
		bg: 'secret',
		df: _Utils_Tuple2(56, 51)
	}
	]);
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 0:
						return 'serif';
					case 1:
						return 'sans-serif';
					case 2:
						return 'monospace';
					case 3:
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 4:
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.bg;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Element$Input$HiddenLabel = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Element$Input$labelHidden = $mdgriffith$elm_ui$Element$Input$HiddenLabel;
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = 1;
var $mdgriffith$elm_ui$Internal$Model$Layout = 0;
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	b2: $elm$core$Maybe$Nothing,
	b8: $elm$core$Maybe$Nothing,
	c9: $elm$core$Maybe$Just(
		{
			S: 0,
			T: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			bi: _Utils_Tuple2(0, 0),
			bA: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 0:
					var hoverable = opt.a;
					var _v4 = record.cA;
					if (_v4.$ === 1) {
						return _Utils_update(
							record,
							{
								cA: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 1:
					var focusStyle = opt.a;
					var _v5 = record.cv;
					if (_v5.$ === 1) {
						return _Utils_update(
							record,
							{
								cv: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.cQ;
					if (_v6.$ === 1) {
						return _Utils_update(
							record,
							{
								cQ: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			cv: function () {
				var _v0 = record.cv;
				if (_v0.$ === 1) {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			cA: function () {
				var _v1 = record.cA;
				if (_v1.$ === 1) {
					return 1;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			cQ: function () {
				var _v2 = record.cQ;
				if (_v2.$ === 1) {
					return 0;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{cv: $elm$core$Maybe$Nothing, cA: $elm$core$Maybe$Nothing, cQ: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 0:
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 1:
				var styles = el.a.dm;
				var html = el.a.cB;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 2:
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.cQ;
			if (_v0 === 1) {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.bj;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.c2, $mdgriffith$elm_ui$Internal$Style$classes.b0, $mdgriffith$elm_ui$Internal$Style$classes.da]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{bj: _List_Nil});
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.bG;
		var label = _v0.ar;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.al + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.B + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bd)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var $mdgriffith$elm_ui$Internal$Model$Min = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$minimum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Min, i, l);
	});
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 3};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 7, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $mdgriffith$elm_ui$Element$Input$Placeholder = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$Input$placeholder = $mdgriffith$elm_ui$Element$Input$Placeholder;
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $mdgriffith$elm_ui$Internal$Model$AsRow = 0;
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes._ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.B)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Font$sansSerif = $mdgriffith$elm_ui$Internal$Model$SansSerif;
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 5, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 0};
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 6};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 1) {
			var labelText = label.a;
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asColumn,
				$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position) {
				case 2:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aq),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 3:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aq),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 0:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aq),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aq),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
	$elm$core$Basics$composeL,
	$mdgriffith$elm_ui$Internal$Model$Attr,
	$elm$html$Html$Attributes$attribute('autocomplete'));
var $mdgriffith$elm_ui$Internal$Model$Behind = 5;
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 3) {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 5, element);
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 1) {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 1) {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _v0.a;
		return $mdgriffith$elm_ui$Element$moveUp(
			$elm$core$Basics$floor(vSpace / 2));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.ci);
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		$mdgriffith$elm_ui$Element$Border$rounded(3),
		$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
		$mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$spacing(5),
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
	]);
var $mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 8) {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 4) && (attr.b.$ === 11)) && (!attr.b.a)) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 1) {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Internal$Model$InFront = 4;
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 4, element);
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return true;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (!label.$) {
		var loc = label.a;
		switch (loc) {
			case 0:
				return false;
			case 1:
				return false;
			case 2:
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {cc: -box.cc, cM: -box.cM, c1: -box.c1, dG: -box.dG};
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.dG;
	var right = _v0.c1;
	var bottom = _v0.cc;
	var left = _v0.cM;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 2:
				return true;
			case 1:
				return false;
			case 0:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 9:
				return _Utils_update(
					els,
					{
						a: A2($elm$core$List$cons, attr, els.a)
					});
			case 7:
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b),
						g: A2($elm$core$List$cons, attr, els.g),
						a: A2($elm$core$List$cons, attr, els.a)
					}) : (stacked ? _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					}) : _Utils_update(
					els,
					{
						a: A2($elm$core$List$cons, attr, els.a)
					}));
			case 8:
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b),
						a: A2($elm$core$List$cons, attr, els.a)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b),
						a: A2($elm$core$List$cons, attr, els.a)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						a: A2($elm$core$List$cons, attr, els.a)
					}) : _Utils_update(
					els,
					{
						a: A2($elm$core$List$cons, attr, els.a)
					})));
			case 6:
				return _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					});
			case 5:
				return _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					});
			case 4:
				switch (attr.b.$) {
					case 5:
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								b: A2($elm$core$List$cons, attr, els.b),
								g: A2($elm$core$List$cons, attr, els.g),
								a: A2($elm$core$List$cons, attr, els.a),
								Y: A2($elm$core$List$cons, attr, els.Y)
							});
					case 7:
						var cls = attr.a;
						var _v2 = attr.b;
						var pad = _v2.a;
						var t = _v2.b;
						var r = _v2.c;
						var b = _v2.d;
						var l = _v2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									l: A2($elm$core$List$cons, attr, els.l),
									a: A2($elm$core$List$cons, attr, els.a)
								});
						} else {
							var newTop = t - A2($elm$core$Basics$min, t, b);
							var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newBottom = b - A2($elm$core$Basics$min, t, b);
							var reducedVerticalPadding = A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, r, newBottom, l),
									newTop,
									r,
									newBottom,
									l));
							return _Utils_update(
								els,
								{
									l: A2($elm$core$List$cons, attr, els.l),
									g: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.g)),
									a: A2($elm$core$List$cons, reducedVerticalPadding, els.a)
								});
						}
					case 6:
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								l: A2($elm$core$List$cons, attr, els.l),
								a: A2($elm$core$List$cons, attr, els.a)
							});
					case 10:
						return _Utils_update(
							els,
							{
								l: A2($elm$core$List$cons, attr, els.l),
								a: A2($elm$core$List$cons, attr, els.a)
							});
					case 2:
						return _Utils_update(
							els,
							{
								b: A2($elm$core$List$cons, attr, els.b)
							});
					case 1:
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								b: A2($elm$core$List$cons, attr, els.b)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								a: A2($elm$core$List$cons, attr, els.a)
							});
				}
			case 0:
				return els;
			case 1:
				var a = attr.a;
				return _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					});
			case 2:
				return _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					});
			case 3:
				return _Utils_update(
					els,
					{
						a: A2($elm$core$List$cons, attr, els.a)
					});
			default:
				return _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				l: $elm$core$List$reverse(redist.l),
				b: $elm$core$List$reverse(redist.b),
				g: $elm$core$List$reverse(redist.g),
				a: $elm$core$List$reverse(redist.a),
				Y: $elm$core$List$reverse(redist.Y)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{l: _List_Nil, b: _List_Nil, g: _List_Nil, a: _List_Nil, Y: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var top = _v0.dG;
	var right = _v0.c1;
	var bottom = _v0.cc;
	var left = _v0.cM;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_v0, forPlaceholder, on) {
		var placeholderAttrs = _v0.a;
		var placeholderEl = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bh + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cZ)),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$Border$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.c6);
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.j, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.ar),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.j;
			if (!_v7.$) {
				var inputType = _v7.a;
				return false;
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						$mdgriffith$elm_ui$Element$Input$isConstrained,
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 7)) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						cc: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						cM: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						c1: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						dG: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(t - 3))
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			$elm$core$Maybe$withDefault,
			{cc: 0, cM: 0, c1: 0, dG: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.j;
				if (!_v3.$) {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.j;
					if (!_v4.$) {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cK)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cG),
								$mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								$mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									$elm$html$Html$Attributes$style,
									'margin',
									$mdgriffith$elm_ui$Element$Input$renderBox(
										$mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Input$value(textOptions.$7),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.cR)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.ar),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.u),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.p))
						]),
					redistributed.g)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.j;
			if (_v0.$ === 1) {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.a0),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cJ)
								])),
						redistributed.a),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asParagraph,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cI),
												redistributed.Y)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.$7 === '') {
											var _v1 = textOptions.c_;
											if (_v1.$ === 1) {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.$7 === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.cH)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.$7 + '\u00A0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _v0.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.a0),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.a,
										function () {
										var _v2 = textOptions.c_;
										if (_v2.$ === 1) {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.l, textOptions.$7 === ''))
												]);
										}
									}()
									])))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.co),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.ar) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.b))),
			textOptions.ar,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$text = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		p: $elm$core$Maybe$Nothing,
		u: false,
		j: $mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Main$SelectCategory = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 8};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 1) {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cn);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.cT;
		var label = _v0.ar;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.al + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.B + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.c7 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bh)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 1) {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$Focus = 0;
var $mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
	function (a, b) {
		return {$: 11, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$focus = $mdgriffith$elm_ui$Internal$Flag$flag(31);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 5, a: a};
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 1:
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						cB: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.cB, add, context));
							}),
						dm: styled.dm
					});
			case 0:
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 2:
				var str = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return $mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 2:
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 6:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 5:
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 7:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 8:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 3:
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 4:
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 9:
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 1:
				var htmlAttr = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$removeNever = function (style) {
	return A2($mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, $elm$core$Basics$never, style);
};
var $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
	function (attr, _v0) {
		var styles = _v0.a;
		var trans = _v0.b;
		var _v1 = $mdgriffith$elm_ui$Internal$Model$removeNever(attr);
		switch (_v1.$) {
			case 4:
				var style = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, style, styles),
					trans);
			case 10:
				var flag = _v1.a;
				var component = _v1.b;
				return _Utils_Tuple2(
					styles,
					A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component));
			default:
				return _Utils_Tuple2(styles, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function (attrs) {
	var _v0 = A3(
		$elm$core$List$foldl,
		$mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
		_Utils_Tuple2(_List_Nil, $mdgriffith$elm_ui$Internal$Model$Untransformed),
		attrs);
	var styles = _v0.a;
	var transform = _v0.b;
	return A2(
		$elm$core$List$cons,
		$mdgriffith$elm_ui$Internal$Model$Transform(transform),
		styles);
};
var $mdgriffith$elm_ui$Element$focused = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$focus,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			0,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $author$project$EmojiData$Category$list = $author$project$EmojiData$Category$enum.cN;
var $mdgriffith$elm_ui$Internal$Flag$borderStyle = $mdgriffith$elm_ui$Internal$Flag$flag(11);
var $mdgriffith$elm_ui$Element$Border$solid = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.cb);
var $mdgriffith$elm_ui$Internal$Model$Padding = F5(
	function (a, b, c, d, e) {
		return {$: 0, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Model$Spaced = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, _v0) {
				var pad = _v0.a;
				var spacing = _v0.b;
				return _Utils_Tuple2(
					function () {
						if (!pad.$) {
							var x = pad.a;
							return pad;
						} else {
							if ((attr.$ === 4) && (attr.b.$ === 7)) {
								var _v3 = attr.b;
								var name = _v3.a;
								var t = _v3.b;
								var r = _v3.c;
								var b = _v3.d;
								var l = _v3.e;
								return $elm$core$Maybe$Just(
									A5($mdgriffith$elm_ui$Internal$Model$Padding, name, t, r, b, l));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}(),
					function () {
						if (!spacing.$) {
							var x = spacing.a;
							return spacing;
						} else {
							if ((attr.$ === 4) && (attr.b.$ === 5)) {
								var _v6 = attr.b;
								var name = _v6.a;
								var x = _v6.b;
								var y = _v6.c;
								return $elm$core$Maybe$Just(
									A3($mdgriffith$elm_ui$Internal$Model$Spaced, name, x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}());
			}),
		_Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
		attrs);
};
var $mdgriffith$elm_ui$Element$wrappedRow = F2(
	function (attrs, children) {
		var _v0 = $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding(attrs);
		var padded = _v0.a;
		var spaced = _v0.b;
		if (spaced.$ === 1) {
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asRow,
				$mdgriffith$elm_ui$Internal$Model$div,
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes._ + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.B + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aR)))),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							attrs))),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
		} else {
			var _v2 = spaced.a;
			var spaceName = _v2.a;
			var x = _v2.b;
			var y = _v2.c;
			var newPadding = function () {
				if (!padded.$) {
					var _v5 = padded.a;
					var name = _v5.a;
					var t = _v5.b;
					var r = _v5.c;
					var b = _v5.d;
					var l = _v5.e;
					if ((_Utils_cmp(r, x / 2) > -1) && (_Utils_cmp(b, y / 2) > -1)) {
						var newTop = t - (y / 2);
						var newRight = r - (x / 2);
						var newLeft = l - (x / 2);
						var newBottom = b - (y / 2);
						return $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, newRight, newBottom, newLeft),
									newTop,
									newRight,
									newBottom,
									newLeft)));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}();
			if (!newPadding.$) {
				var pad = newPadding.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asRow,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes._ + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.B + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aR)))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								_Utils_ap(
									attrs,
									_List_fromArray(
										[pad]))))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
			} else {
				var halfY = -(y / 2);
				var halfX = -(x / 2);
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					attrs,
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asRow,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes._ + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.B + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.aR)))),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											A2(
												$elm$html$Html$Attributes$style,
												'margin',
												$elm$core$String$fromFloat(halfY) + ('px' + (' ' + ($elm$core$String$fromFloat(halfX) + 'px'))))),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Internal$Model$Attr(
												A2(
													$elm$html$Html$Attributes$style,
													'width',
													'calc(100% + ' + ($elm$core$String$fromInt(x) + 'px)'))),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$Attr(
													A2(
														$elm$html$Html$Attributes$style,
														'height',
														'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))),
												A2(
													$elm$core$List$cons,
													A2(
														$mdgriffith$elm_ui$Internal$Model$StyleClass,
														$mdgriffith$elm_ui$Internal$Flag$spacing,
														A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, spaceName, x, y)),
													_List_Nil))))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(children))
							])));
			}
		}
	});
var $author$project$Main$viewCategories = function () {
	var viewCategory = function (_v0) {
		var name = _v0.a;
		var category = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 132, 142, 147)),
					$mdgriffith$elm_ui$Element$focused(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$alpha(0.5)
						])),
					$mdgriffith$elm_ui$Element$padding(10),
					$mdgriffith$elm_ui$Element$Border$solid,
					$mdgriffith$elm_ui$Element$Border$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
					$mdgriffith$elm_ui$Element$Border$width(2),
					$mdgriffith$elm_ui$Element$Border$rounded(4),
					$mdgriffith$elm_ui$Element$Font$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
				]),
			{
				ar: $mdgriffith$elm_ui$Element$text(name),
				cT: $elm$core$Maybe$Just(
					$author$project$Main$SelectCategory(category))
			});
	};
	return A2(
		$mdgriffith$elm_ui$Element$wrappedRow,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
			]),
		A2(
			$elm$core$List$map,
			viewCategory,
			A2($elm$core$List$take, 9, $author$project$EmojiData$Category$list)));
}();
var $author$project$EmojiData$View$Apple = 0;
var $author$project$EmojiData$View$Facebook = 3;
var $author$project$EmojiData$View$Google = 1;
var $author$project$EmojiData$View$Twitter = 2;
var $author$project$EmojiData$View$emoji = F3(
	function (source, size, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var sourceStr = function () {
			switch (source) {
				case 0:
					return 'apple';
				case 1:
					return 'google';
				case 2:
					return 'twitter';
				default:
					return 'facebook';
			}
		}();
		var sheetSize = (size > 32) ? '64' : ((size > 16) ? '32' : '16');
		var sheetRows = 58;
		var cdnUrl = 'https://cdn.jsdelivr.net/npm/emoji-datasource-' + (sourceStr + ('@6.0.0/img/' + (sourceStr + ('/sheets/' + (sheetSize + '.png')))));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'inline-block'),
					A2(
					$elm$html$Html$Attributes$style,
					'height',
					$elm$core$String$fromInt(size) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'width',
					$elm$core$String$fromInt(size) + 'px'),
					A2($elm$html$Html$Attributes$style, 'background-image', 'url(' + (cdnUrl + ')')),
					A2($elm$html$Html$Attributes$style, 'background-repeat', 'no-repeat'),
					A2(
					$elm$html$Html$Attributes$style,
					'background-size',
					$elm$core$String$fromInt(size * sheetRows) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'background-position',
					$elm$core$String$concat(
						_List_fromArray(
							[
								$elm$core$String$fromInt(x * (0 - size)),
								'px ',
								$elm$core$String$fromInt(y * (0 - size)),
								'px'
							])))
				]),
			_List_Nil);
	});
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $mdgriffith$elm_ui$Element$spaceEvenly = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$spacing, $mdgriffith$elm_ui$Internal$Style$classes.dc);
var $author$project$Main$viewEmoji = function (emoji) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spaceEvenly,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(
						A2($mdgriffith$elm_ui$Element$minimum, 200, $mdgriffith$elm_ui$Element$shrink))
					]),
				$mdgriffith$elm_ui$Element$text(emoji.bg)),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$text(emoji.aW)),
				$mdgriffith$elm_ui$Element$html(
				A3($author$project$EmojiData$View$emoji, 0, 32, emoji.df)),
				$mdgriffith$elm_ui$Element$html(
				A3($author$project$EmojiData$View$emoji, 1, 32, emoji.df)),
				$mdgriffith$elm_ui$Element$html(
				A3($author$project$EmojiData$View$emoji, 3, 32, emoji.df)),
				$mdgriffith$elm_ui$Element$html(
				A3($author$project$EmojiData$View$emoji, 2, 32, emoji.df))
			]));
};
var $author$project$Main$viewEmojis = function (emojis) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
					]),
				A2($elm$core$List$map, $author$project$Main$viewEmoji, emojis))
			]));
};
var $author$project$Main$view = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$layout,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 11, 33, 39)),
				$mdgriffith$elm_ui$Element$Font$size(16),
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$typeface('Open Sans'),
						$mdgriffith$elm_ui$Element$Font$sansSerif
					]))
			]),
		A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					A2($mdgriffith$elm_ui$Element$maximum, 1030, $mdgriffith$elm_ui$Element$fill)),
					$mdgriffith$elm_ui$Element$centerX
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$padding(5),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$text,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width(
									A2($mdgriffith$elm_ui$Element$minimum, 200, $mdgriffith$elm_ui$Element$shrink))
								]),
							{
								ar: $mdgriffith$elm_ui$Element$Input$labelHidden('Search'),
								cR: $author$project$Main$SearchInput,
								c_: $elm$core$Maybe$Just(
									A2(
										$mdgriffith$elm_ui$Element$Input$placeholder,
										_List_Nil,
										$mdgriffith$elm_ui$Element$text('Search'))),
								$7: model.aK
							}),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$centerX,
									$mdgriffith$elm_ui$Element$Font$bold,
									$mdgriffith$elm_ui$Element$Font$size(20)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_Nil,
									$mdgriffith$elm_ui$Element$text('Emoji Data'))
								])),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$alignRight,
									$mdgriffith$elm_ui$Element$spacing(20)
								]),
							_List_fromArray(
								[
									((!_Utils_eq(model.J, _List_Nil)) && (!_Utils_eq(model.J, $author$project$EmojiData$List$emojis))) ? $mdgriffith$elm_ui$Element$text('⚠️') : $mdgriffith$elm_ui$Element$none,
									A2(
									$mdgriffith$elm_ui$Element$link,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$color(
											A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 255))
										]),
									{
										ar: $mdgriffith$elm_ui$Element$text('Elm Docs'),
										bG: 'https://package.elm-lang.org/packages/chipjacks/emoji-data/latest/'
									}),
									A2(
									$mdgriffith$elm_ui$Element$link,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$color(
											A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 255))
										]),
									{
										ar: $mdgriffith$elm_ui$Element$text('Github'),
										bG: 'https://github.com/chipjacks/emoji-data'
									})
								]))
						])),
					$author$project$Main$viewCategories,
					$author$project$Main$viewEmojis(model.as)
				])));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{
		cF: $author$project$Main$init,
		dn: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		dK: $author$project$Main$update,
		dL: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(0))(0)}});}(this));