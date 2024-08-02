import { Pool } from 'mysql2/promise';

export class UserRepository {
    constructor(private pool: Pool) {}
    
    async all() {
        try {
            const [rows] = await this.pool.query('SELECT * FROM users');
            return rows;
        } catch (err: any) {
            console.error("Este es un error:", err.message);
            
        }
    }
};