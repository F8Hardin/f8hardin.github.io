import { useCallback } from 'react';
import { mount } from './main';
import './index.css'

export default function StarSystem() {
	const containerRef = useCallback(mount, []);
	return <div className="ThreeJS-Container" ref={containerRef}></div>
}