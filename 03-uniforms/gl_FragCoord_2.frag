#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 mu = gl_FragCoord.xy/u_mouse;

    // static
	// gl_FragColor = vec4(st.x,st.y,0.4,1.0);

    // interactive
	// gl_FragColor = vec4(mu.x,mu.y,0.4,1.0);

	// gl_FragColor = vec4(
    //     abs(sin(mu.x * u_time * 10.0)),
    //     mu.y,
    //     0.4,
    //     1.0);

    // Options:  sin(), cos(), tan(), asin(), 
    // acos(), atan(), pow(), exp(), log(), 
    // sqrt(), abs(), sign(), floor(), ceil(), 
    // fract(), mod(), min(), max() and clamp()

    gl_FragColor = vec4(
        (abs(cos(mu.y * u_time * 40.0)) + abs(sin(mu.x * u_time / 2.0))) / 2.0,
        (abs(cos(mu.y * u_time * 20.0)) + abs(sin(mu.x * u_time * 60.0))) / 2.0,
        (abs(cos(mu.y * u_time * 4.0)) + abs(sin(mu.x * u_time * 10.0))) / 2.0 ,
        1.0);
}