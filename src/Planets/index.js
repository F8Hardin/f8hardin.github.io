import { useCallback } from 'react';
import { mount } from './stars';
import './index.css'

export default function Stars() {
	const containerRef = useCallback(mount, []);
	return <div className="ThreeJS-Container" ref={containerRef}></div>
}