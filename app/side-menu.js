import Link from "next/link";
export default function SideMenu({ sideActive, setSideActive }) {
  const handleSideActive = () => {
    setSideActive(false);
    document.querySelector("body").style.overflow = "auto";
  };
  return (
    <div>
      <div
        id="flyout_cover"
        onClick={handleSideActive}
        className={`w-screen h-screen absolute top-0 left-0 bg-opacity-80 bg-black z-40
      ${sideActive ? "block" : "hidden"}`}
      >
        ffffff
      </div>
      <div
        id="flyout_menu"
        className={`p-5 flex flex-col min-w-260 h-screen fixed top-0 left-0 z-50 bg-white dark:bg-black transition-all transform
      ${sideActive ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          onClick={handleSideActive}
          class="text-xl text-balck dark:text-white self-end cursor-pointer"
        >
          x
        </div>
        <nav class="flyout-menu-wrapper-nav">
          <ul class="flex flex-col space-y-4">
            <li
              className="[
              'cursor-pointer text-lg hover:text-primary transition duration-300 ease-in-out',
              { 'text-primary': navActive == item.to },
            ]"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="[
              'cursor-pointer text-lg hover:text-primary transition duration-300 ease-in-out',
              { 'text-primary': navActive == item.to },
            ]"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className="[
              'cursor-pointer text-lg hover:text-primary transition duration-300 ease-in-out',
              { 'text-primary': navActive == item.to },
            ]"
            >
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
