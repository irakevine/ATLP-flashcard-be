import {list, nonNull, nullable, queryField} from 'nexus'
import { Question } from '../models'
import { QuestionWhereUniqueInput } from '../inputs';


export  const questions = queryField("Questions",{
    type :nonNull(list(nonNull(Question))),
    resolve: async (_root, _args,ctx)=>{
return ctx.prisma.question.findMany({}); 
    },
});

export const question = queryField("question",{
    type :nullable (Question),
    args:{
        where:nonNull(QuestionWhereUniqueInput)
    },
    resolve: async (_root, args,ctx)=>{
return ctx.prisma.question.findUnique({
    where:{
        id: args.where.id
    }
})
        
    }
})


