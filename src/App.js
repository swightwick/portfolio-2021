import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Companies from "./Components/Companies";
import Footer from "./Components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPaintBrush, faCode, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import vertexShader from "./Shaders/vertexShader.js";
import fragmentShader from "./Shaders/fragmentShader.js";
import * as THREE from "three";
import ScrollAnimation from 'react-animate-on-scroll';
library.add(fab, faPaintBrush, faCode, faCalendarDay)
class App extends Component {
  componentDidMount() {
    const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true
		});
    renderer.setSize( window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		renderer.setClearColor(0xffffff, 0);
    this.mount.appendChild( renderer.domElement );

		const scene = new THREE.Scene();
		const clock = new THREE.Clock();
		const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(0, -0.7, 1.6);    
    
		const geometry = new THREE.IcosahedronBufferGeometry(1, 64);
		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uSpeed: { value: .15 },
				uNoiseDensity: { value: 2.5 },
				uNoiseStrength: { value: .3 },
			},
			wireframe: true,
		});
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const addEvents = function () {
			window.addEventListener('resize', resize.bind(this));
		}  

		const resize = function () {
			let width = window.innerWidth;
			let height = window.innerHeight;
	
			camera.aspect = width / height;
			renderer.setSize(width, height);
			camera.updateProjectionMatrix();
		}

		let ticking = false;
		let animationFrame = null
		
		const onMouseMove = (event) => {
			const animate = () => {
				const position = {
					x: event.clientX / window.innerWidth,
					y: event.clientY / window.innerHeight,
				};
				material.uniforms.uSpeed.value = .14 + (position.y / 14);
				material.uniforms.uNoiseDensity.value = 2.25 + (position.y / 18);
				material.uniforms.uNoiseStrength.value = .235 + (position.x / 14);
				ticking = false;
			};
		
			if (!ticking) {
				animationFrame = requestAnimationFrame(animate);
				ticking = true;
			}
		};
		
		var header = document.getElementById('header');
		header.addEventListener('mousemove', onMouseMove);

    const animate = function () {
			requestAnimationFrame( animate );
			mesh.rotation.y += 0.001;
			mesh.material.uniforms.uTime.value = clock.getElapsedTime() / 6;
			renderer.render(scene, camera);
    };

    addEvents()
    animate()  

  }
  render() {
    return (
      <div className="App">
				<div className="position-absolute three w-100" ref={ref => (this.mount = ref)} />
        <Navbar />
				<Hero />
				<ScrollAnimation animateIn="visible" animateOnce>
					<Projects title="Projects" id="projects"/>
				</ScrollAnimation>
				<About title="About" id="about" />
				<Companies id="companies" />
				<Footer id="contact" />
      </div>
    );
  }
}

export default App;
