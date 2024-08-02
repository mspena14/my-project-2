import { Request, Response } from 'express';
import { User } from '../interfaces/User';
import pool from '../config/db';
import { UserRepository } from '../data-access/userRepository';

export class UserController {
  static  async getAll(req: Request, res: Response) {
    const userRepository = new UserRepository(pool)
    try {
      const [rows]:any = await userRepository.all();
      console.log(rows);
      
      res.json({status: 200, message: "Todo salio bien", rows: rows});
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
}
// export const getUserById = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     const [rows]:any = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

// export const createUser = async (req: Request, res: Response) => {
//   const newUser: User = req.body;
//   try {
//     const [result] = await pool.query('INSERT INTO users SET ?', [newUser]);
//     res.status(201).json({ id: (result as any).insertId, ...newUser });
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

