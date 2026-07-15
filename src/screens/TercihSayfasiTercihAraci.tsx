// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Tercih Sayfası - Tercih Aracı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, CircleHelp, Home, ListChecks, ListTodo, Settings, User } from "lucide-react";


export type TercihSayfasiTercihAraciActionId = "hazir-4";

export interface TercihSayfasiTercihAraciProps {
  actions?: Partial<Record<TercihSayfasiTercihAraciActionId, () => void>>;

}

export function TercihSayfasiTercihAraci({ actions }: TercihSayfasiTercihAraciProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest border-b border-secondary-container flat no shadows flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16 hidden md:flex top-0 w-full z-50">
      <div className="flex items-center gap-6">
      <span className="font-headline-md text-headline-md font-bold text-primary">Tercih Aracı</span>
      <nav className="flex gap-4 items-center h-full pt-4">
      <a className="text-secondary font-label-md text-label-md pb-4 hover:text-primary-container transition-colors duration-200" hidden={true} aria-hidden={true} data-setfarm-rejected-control="kilavuz-1">Kılavuz</a>
      <a className="text-primary border-b-2 border-primary font-label-md text-label-md pb-4 opacity-80 transition-opacity" hidden={true} aria-hidden={true} data-setfarm-rejected-control="tercihlerim-2">Tercihlerim</a>
      <a className="text-secondary font-label-md text-label-md pb-4 hover:text-primary-container transition-colors duration-200" hidden={true} aria-hidden={true} data-setfarm-rejected-control="analiz-3">Analiz</a>
      </nav>
      </div>
      <div className="flex items-center gap-4">
      <button aria-label="Help" className="text-secondary hover:text-primary-container transition-colors duration-200" disabled hidden={true} aria-hidden={true} data-setfarm-rejected-control="help-1">
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="text-secondary hover:text-primary-container transition-colors duration-200" disabled hidden={true} aria-hidden={true} data-setfarm-rejected-control="settings-2">
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-DEFAULT hover:bg-primary-container transition-colors duration-200" disabled hidden={true} aria-hidden={true} data-setfarm-rejected-control="giris-yap-3">Giriş Yap</button>
      </div>
      </header>
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-margin-mobile md:p-margin-desktop" data-surface-id="SURF_TERCIH_SAYFA">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 max-w-md w-full shadow-[0px_4px_8px_rgba(0,0,0,0.05)] text-center flex flex-col items-center gap-8 relative overflow-hidden group">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="flex flex-col items-center gap-4 relative z-10">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-2">
      <ListChecks className="text-primary text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Tercihleriniz Hazır</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
                          Seçimleriniz başarıyla kaydedildi ve değerlendirme için sistemimize eklendi.
                      </p>
      </div>
      {/* Status Indicator Section */}
      <div className="w-full bg-surface-container-low rounded-lg p-4 flex items-center justify-between border border-secondary-container relative z-10">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Durum hazır</span>
      <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
      <span aria-label="Hazır" className="font-label-md text-label-md text-on-surface" role="status" data-observable-refs="OBS_HAZIR_DUGMESINI_ISARETLE_HAZIR_DEGER_GORUNUR">Hazır</span>
      </div>
      </div>
      {/* Action Button */}
      <button aria-label="Hazır" className="w-full h-12 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-DEFAULT transition-colors duration-200 flex items-center justify-center shadow-sm relative z-10" data-action="ACT_HAZIR_DUGMESINI_ISARETLE" role="button" data-observable-refs="OBS_HAZIR_DUGMESINI_ISARETLE_HAZIR_DUGMESI_GORUNUR_ETKIN" type="button" data-action-id="hazir-4" onClick={actions?.["hazir-4"]}>
                      Hazır
                  </button>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-2 md:hidden bg-surface-container-lowest border-t border-secondary-container flat no shadows pb-safe">
      <button className="flex flex-col items-center justify-center text-secondary px-4 py-1 hover:bg-surface-container-high transition-colors" disabled hidden={true} aria-hidden={true} data-setfarm-rejected-control="ana-sayfa-5">
      <Home aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">Ana Sayfa</span>
      </button>
      <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 scale-95 duration-150 transition-colors" disabled hidden={true} aria-hidden={true} data-setfarm-rejected-control="tercihler-6">
      <ListTodo aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">Tercihler</span>
      </button>
      <button className="flex flex-col items-center justify-center text-secondary px-4 py-1 hover:bg-surface-container-high transition-colors" disabled hidden={true} aria-hidden={true} data-setfarm-rejected-control="siralama-7">
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">Sıralama</span>
      </button>
      <button className="flex flex-col items-center justify-center text-secondary px-4 py-1 hover:bg-surface-container-high transition-colors" disabled hidden={true} aria-hidden={true} data-setfarm-rejected-control="profil-8">
      <User aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">Profil</span>
      </button>
      </nav>
      <style>{`
              /* Safe area padding for iOS */
              @supports (padding-bottom: env(safe-area-inset-bottom)) {
                  .pb-safe {
                      padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
                  }
              }
          `}</style>
    </>
  );
}
