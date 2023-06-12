const byteSize = (str) => {
  // write your code here
const encoder = new TextEncoder();
	const encodeByte = encoder.encode(str);
	const len = encodeByte.length;
	return len;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
