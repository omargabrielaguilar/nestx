import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>, private jwtService: JwtService,
    ){}


    async register(authDto: AuthDto): Promise<User> {
        const {email, password} = authDto;
        const existingUser 
    }
}