import SpeedIcon from "@mui/icons-material/Speed";
import { Logo } from "../modules/Logo";

export function BrandNav() {
  return (
    <div className="grid xxs:justify-start lg:justify-center font-monsterratItalic mb-2 z-10">
      <div className="grid xxs:w-[400px] lg:w-[600px]">
        <div className="grid grid-cols-3 align-center justify-around content-center">
          <div className="grid justify-around content-center align-center max-w-[250px]">
            <span className="dark:text-white text-midnight">
              Here&apos;s The
            </span>
          </div>
          <div className="grid place-items-center gap-y-4">
            <SpeedIcon className="text-lg text-aboveOcean justify-self-center" />
            <span className="text-white text-center max-w-[250px]">
              <Logo className="dark:text-white text-midnight" />
            </span>
          </div>
          <div className="grid align-center justify-around content-center max-w-[250px]">
            <span className="text-aboveOcean">Exhibition App</span>
          </div>
        </div>
      </div>
    </div>
  );
}
