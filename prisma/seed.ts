import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.admin.create({
        data: {
            email: 'admin@gmail.com',
            name: "Admin",
            password: await bcrypt.hash('123456', 20),
        },
    });

    console.log('Data seeded:', { user });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });