import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from './../../generated/prisma/client'
import { problemSchema } from '@/validators/problem'
const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  try {
    const problems = await prisma.problem.findMany({
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      }
    })
    return NextResponse.json(problems)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch problems' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validation = problemSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      )
    }

    const problem = await prisma.problem.create({
      data: {
        ...validation.data,
        userId: 'current_user_id' // Replace with actual user ID from auth
      }
    })

    return NextResponse.json(problem, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create problem' },
      { status: 500 }
    )
  }
}