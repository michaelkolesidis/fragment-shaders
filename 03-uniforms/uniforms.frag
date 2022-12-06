#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {

    // Options:  sin(), cos(), tan(), asin(), 
    // acos(), atan(), pow(), exp(), log(), 
    // sqrt(), abs(), sign(), floor(), ceil(), 
    // fract(), mod(), min(), max() and clamp()

	gl_FragColor = vec4(
        abs(sin(u_time * 5.0)),
        abs(cos(u_time / 2.0)),
        abs(sin(u_time * 10.0)),
        1.0);
}