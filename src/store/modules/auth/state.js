import JwtService from "@/common/jwt.service";

export const state = {
    isAuthenticated : !!JwtService.isAuthenticated()
}
