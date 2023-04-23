import { Logo } from "../modules/Logo";
import Image from 'next/image';

export function Header({ src }: any) {
    return (
        <header className="grid grid-cols-3 font-monsterrat">
            <Image src={src} alt="CarExHead" width={500} height={500}
                className="absolute object-cover opacity-40 w-full h-[90%]"
            />
            <div className="ml-5 mt-5">
                <Logo className='xl:text-2xl' />
                <h3 className="dark:text-white text-3xl">
                    Feel Modernity and Futuristic
                </h3>
                <h4 className="dark:text-white flex gap-1 text-md">
                    Car
                    <strong className="text-oceanBlue font-bold">Exhibition</strong>
                </h4>
            </div>
            <div></div>
            <div></div>
        </header>
    );
}