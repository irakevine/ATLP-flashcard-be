import {inputObjectType} from "nexus";


export const QuestionWhereUniqueInput = inputObjectType({
    name:"QuestionWhereUniqueInput",
    definition(t){
        t.nonNull.id("id");
    }
})

export const AnswerWhereUniqueInput = inputObjectType({
    name:"AnswerWhereWhereUniqueInput",
    definition(t){
        t.nonNull.id("id");
    }
})

export const CreateQuestionItemInput = inputObjectType({
    name:"CreateQuestionItemInput",
    definition(t){
        t.nonNull.string("title");
        t.nonNull.string("content");

    }
})
export const CreateQuestionInput = inputObjectType({
    name:"CreateQuestionInput",
    definition(t){
        t.nonNull.string("name");
        t.nonNull.string("description");

    }
})

export const CreateAnswerInput = inputObjectType({
    name:"createAnswerWhereUniqueInput",
    definition(t){
        t.nonNull.boolean("isCorrect");
        t.nonNull.string("content");
    }
})

