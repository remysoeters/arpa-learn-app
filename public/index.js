


    const app = new Vue({
        el:"#questionaire",
        data:{
                questions:[{
                    questionid:'8TMsPq9D66',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'Voel ik me persoonlijk verantwoordelijk voor de resultaten die ik behaal.',
                    questionAnswers:[{
                        answerId: '8TMsPq9D661',
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                        answerId: '8TMsPq9D662',
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                            answerId: '8TMsPq9D663',
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                            answerId: '8TMsPq9D664',
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                            answerId: '8TMsPq9D665',
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                },{
                    questionid:'AcCxLq5TuH',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'heb ik het gevoel dat ik mijn werkzaamheden zelf mag bepalen',
                    questionAnswers:[{
                        answerid:'AcCxLq5TuH1',
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                        answerId:'AcCxLq5TuH2',
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                        answerId:'AcCxLq5TuH3',
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                            answerId:'AcCxLq5TuH4',
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                            answerId:'AcCxLq5TuH5',
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                },
                {
                    questionid:'qbrGWOPftM',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'voel ik mijzelf vrij in mijn werkzaamheden die ik uitvoer',
                    questionAnswers:[{
                        answerId:'qbrGWOPftM1',
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                            answerId:'qbrGWOPftM2',
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                            answerId:'qbrGWOPftM3',
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                            answerId:'qbrGWOPftM4',
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                            answerId:'qbrGWOPftM5',
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                },
                {
                    questionid:'Q6Bv07YEB1',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'4.	heb ik het gevoel dat ik mijn eigen planning mag bepalen',
                    questionAnswers:[{
                        answerId:'Q6Bv07YEB11',
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                            answerId:'Q6Bv07YEB12',
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                            answerId:'Q6Bv07YEB13',
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                            answerId:'Q6Bv07YEB14',
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                            answerId:'Q6Bv07YEB15',
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                }],
    
            pageNumber:0,
            finished: false
                
        },
        methods:{
            nextPage:function(){
                if(this.pageNumber === this.questions.length){

                    this.finished = true
            
        
                }else{
                    this.pageNumber++
                }
                
            },
            previousPage:function(){
                if(this.pageNumber >0 ){
                    this.pageNumber--
                }else{
                    return
                }
                
            }
        },
    })


/*   server.get('*', (req, res) => {
    const app = new Vue({
        el:"#questionaire",
        data:{
                questions:[{
                    questionid:'qoweughwoeg1',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'Voel ik me persoonlijk verantwoordelijk voor de resultaten die ik behaal.',
                    questionAnswers:[{
                        answerId: new ObjectID(),
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                        answerId: 'test1234',
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                            answerId: 'test1235',
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                            answerId: 'test1235',
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                            answerId: 'test1235',
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                },{
                    questionid:'qoweughwoeg2',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'Voel ik me persoonlijk verantwoordelijk voor de resultaten die ik behaal.',
                    questionAnswers:[{
                        answerid:'test124',
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                },
                {
                    questionid:'qoweughwoeg3',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'Voel ik me persoonlijk verantwoordelijk voor de resultaten die ik behaal.',
                    questionAnswers:[{
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                },
                {
                    questionid:'qoweughwoeg4',
                    questionStem:'Tijdens mijn werk:',
                    questionContent:'Voel ik me persoonlijk verantwoordelijk voor de resultaten die ik behaal.',
                    questionAnswers:[{
                        answerContent:'Volledig mee oneens',
                        answerValue:1,
                        },
                        {
                        answerContent:'Enigzins mee oneens',
                        answerValue:2,
                        },
                        {
                        answerContent:'niet mee eens, niet mee oneens',
                        answerValue:3,
                        },
                        {
                        answerContent:'Enigzins mee eens',
                        answerValue:4,
                        },
                        {
                        answerContent:'Volledig mee eens',
                        answerValue:5,
                        }]
                }],
    
            pageNumber:0,
                
        },
        methods:{
            nextPage:function(){
        
                this.pageNumber++
            },
            previousPage:function(){
                if(this.pageNumber >0 ){
                    this.pageNumber--
                }else{
                    return
                }
                
            }
        },
    })
  
    renderer.renderToString(app, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head><title>Hello</title></head>
          <body>${html}</body>
        </html>
      `)
    })
  })
  
  server.listen(8080) */