export class FrontOrigins {
  public readonly origin: string;
  public readonly humanReadableOrigin: string;
  public readonly domainProd: string;
  public readonly domainDev;

  constructor(
    origin: string,
    humanReadableOrigin: string,
    domainProd: string,
    domainDev: string
  ) {
    this.origin = origin;
    this.humanReadableOrigin = humanReadableOrigin;
    this.domainProd = domainProd;
    this.domainDev = domainDev;
  }

  public static getRedirectAuthOrigin(origin: string): FrontOrigins | null {
    if (!origin) {
      return null;
    }

    for (const frontOrigin of Object.values(FrontOrigins)) {
      if (frontOrigin.origin === origin) {
        return frontOrigin;
      }
    }
    return null;
  }
}

export const FUNIX_PRODUCTIONS_DASHBOARD = new FrontOrigins(
  "funixproductions-dashboard",
  "Dashboard Funix Productions",
  "https://dashboard.funixproductions.com",
  "http://localhost:4200"
);

export const PACIFISTA_PUBLIC_WEB = new FrontOrigins(
  "pacifista-public-web",
  "Pacifista Web",
  "https://pacifista.fr",
  "http://localhost:4200"
);
