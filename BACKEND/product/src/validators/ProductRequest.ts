import { Request, Response, NextFunction } from "express";
import {check, validationResult} from "express-validator";
import * as config from "../../configs/constant.json";

export class ProductRequest {
    validateInsertorUpdateProduct = [
        check('name', 'field Name must be a string and under 50 char')
            .not().isEmpty().withMessage('field Name must be not null')
            .isLength({max: 50}).withMessage('field Name must be under 50 char'),
        check('description', 'field Description must be a string and under 300 char').not().isEmpty().withMessage('field Description must be not null')
            .isLength({max: 300}).withMessage('field Description must be under 300 char'),
        check('price', 'field Price must be a string and under 300 char')
            .not().isEmpty().withMessage('field price must be not null')
            .isInt().withMessage('field price must be a Int type')
            .custom((value, { req }) => value >= 1000 && value <= 999999999).withMessage('field price must be more than or equal to 1000 and less than or equal to 999999999'),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({
                    "code" : config.code.CODE_ERROR_VALIDATOR,
                    "message" : errors
                });
            } else {
                next();
            }
        }
    ];
}



