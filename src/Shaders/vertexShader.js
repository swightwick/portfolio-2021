import noise from "./noise.js";

const vertexShader = `  
varying vec3 vNormal;

uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

${noise}

void main() {
	float t = uTime * uSpeed;
	float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

	vec3 pos = position + (normal * distortion);
	
	vNormal = normal;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}  

`;

export default vertexShader;