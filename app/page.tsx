import Image from "next/image";
import { ToggleModeTheme } from '@/components/toggle-mode-theme';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ToggleModeTheme/>
    </main>
  );
}
