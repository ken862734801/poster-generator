import { Canvas } from './canvas/Canvas';
import { ZoomControls } from './canvas/ZoomControls';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';

export default function Editor() {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <main>
          <Canvas />
          <ZoomControls />
        </main>
      </div>
    </div>
  );
}
