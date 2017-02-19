import {CanActivate} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }

}
