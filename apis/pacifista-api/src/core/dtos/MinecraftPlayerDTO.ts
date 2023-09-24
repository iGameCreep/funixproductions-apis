import { ApiDTO } from "funixproductions-apis-core";

export abstract class MinecraftPlayerDTO extends ApiDTO {
  minecraftUuid!: string;
  minecraftUsername!: string | null;

  public setMinecraftUsername(minecraftUsername: string | null): void {
    if (minecraftUsername === null) {
      this.minecraftUsername = null;
    } else {
      this.minecraftUsername = minecraftUsername;
    }
  }

  public getMinecraftUsername(): string | null {
    if (this.minecraftUsername === null) {
      return null;
    } else {
      return this.minecraftUsername.toLowerCase();
    }
  }
}
