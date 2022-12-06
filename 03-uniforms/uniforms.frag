#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(
        abs(sin(u_time * 10.0)),
        abs(cos(u_time / 2.0)),
        abs(sin(u_time * 5000.0)),
        1.0);
}