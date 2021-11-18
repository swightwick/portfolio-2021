const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(abs(sin(u_time)),0.28,0.27,1);
}
`;

export default fragmentShader;