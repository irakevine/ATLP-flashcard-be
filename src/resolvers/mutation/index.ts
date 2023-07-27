// import { mutationField, nonNull, nullable } from "nexus";
// import { Question , Answer} from "../models";
// import { AnswerWhereUniqueInput, CreateAnswerInput, CreateQuestionInput, CreateQuestionItemInput, QuestionWhereUniqueInput} from "../inputs";

// export const createQuestion = mutationField("createQuestion",{
//     type:nullable(Question),
//     args:{
//         input:nonNull(CreateQuestionInput)
        
//     },
//     resolve: async (_root, args,ctx)=>{
//         return ctx.prisma.question.create({
//             data:{
//                 ...args.input
           
//             }
//         })
//             }
// })

// export const createQuestionItem = mutationField("createQuestionItem",{
//     type:nullable(Question),
//     args:{
//         input:nonNull(CreateQuestionItemInput)
//     },
//     resolve: async (_root, args,ctx)=>{
//         return ctx.prisma.question.create({
//             data:{
//                 ...args.input
//             }
//         })
//             }
// })

// export const createAnswer = mutationField("createAnswer",{
//     type:nullable(Answer),
//     args:{
//         input:nonNull(CreateAnswerInput),
//         where:(QuestionWhereUniqueInput)

//     },
//     resolve: async (_root, args,ctx)=>{
//         return ctx.prisma.answer.create({
//             data:{
//                 ...args.input,
           
//             }
//         })
//             }
// })

// export const removeQuestion = mutationField("removeQuestion",{
//     type:nullable(Question),
//     args:{
//         where:nonNull(QuestionWhereUniqueInput)
//     },
//     resolve: async (_root, args,ctx)=>{
//         return ctx.prisma.question.delete({
//             where:args.where
           
            
//         })
//             }
// })

// export const voteAnswer = mutationField("voteQuestion",{
//     type:nullable(vote),
//     args:{
//         where:nonNull(AnswerWhereUniqueInput)
//     },
//     resolve: async (_root, args,ctx)=>{
//         return ctx.prisma.vote.create({
//             data:{
//                 UserId:'',
//                 QuestionId: args.where.id
//             }
           
            
//         })
//             }
// })