import { objectType } from'nexus'

//user
export const User = objectType({
name:"User",
definition(t){
    t.id("id");
    t.string("Name"); 
}
})
// CATEGORY
export const Category = objectType({
    name:"Category",
    definition(t){
        t.id("id");
        t.string("Name");  
    }
    })

//QUESTION
export const Question = objectType({
    name:"Question",
    definition(t){
        t.id("id")
        t.string("content")
        t.string("difficulty level")  
    }
})

//ANSWER
export const Answer = objectType({
    name:"Answer",
    definition(t){
        t.id("id")
        t.boolean("isCorrect");
        t.string("content");
    }
})


// QUIZ HISTORY 
export const QuizHistory = objectType({
    name:"QuizHistory",
    definition(t){
        t.id("id")
        t.id("UserId")
        t.int("score")
            }
        })
        