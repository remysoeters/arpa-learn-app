const expect = require('expect')
const request = require('supertest')

const {app} = require('./../server')
const {Question} = require('./../models/questionModel')

beforeEach((done)=>{
    Question.remove({}).then(()=>done())
})


describe('POST /questions', ()=>{
    it('should create a new question'), (done)=>{
        const category = 'test'
        const content = 'content test'
        const score = 5
        const direction = 'positive'
        const root = 'stam vraag'

        request(app)
            .post('/questions')
            .send({
                category
            }, {
                content
            }, {
                score
            },{
                direction
            }, {
                root
            })
            .expect(200)
            .expect((res)=>{
                expect(res.body.category).toBe(category)
                expect(res.body.content).toBe(content)
                expect(res.body.score).toBe(score)
                expect(res.body.direction).toBe(direction)
                expect(res.body.root).toBe(root)


            })
            .end((error, res)=>{
                if(error){
                    return done(error)
                }

                Question.find().then((questions) =>{
                    expect(questions.length).toBe(1)
                    expect(questions[0].content).toBe(content)
                    done();
                }).catch((error)=> done(error))
            })

    }
})