'use server';
import { prisma } from '../lib/prisma';

export async function incrementLove() {

    return await prisma.loveButton.upsert({
        where: { id: '6647cb1d27c8037816cb61a5' },
        update: { count: { increment: 1 } },
        create: { id: '6647cb1d27c8037816cb61a5', count: 1 },
    });

};

export async function getLoveCount() {      
    return  await prisma.loveButton.findFirst({
        select: {
            count: true,
        },
    });
};