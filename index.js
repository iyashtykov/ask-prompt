(async function(codioIDE, window) {

  const systemPrompt = "You are a help assistant"
  codioIDE.coachBot.register("askPromtButton", "Ask a question", onButtonPress)
  async function onButtonPress() {
    const context = await codioIDE.coachBot.getContext()
    const input = await codioIDE.coachBot.input("Please paste the message you want me to explain!")

    let userPrompt = ""
    if(context.files.length > 0 && context.files[0].path === "student_file.py"){
        userPrompt = "{% prompt 'ASK_PROMT_PYTHON' %}"
    }
    if(context.files.length > 0 && context.files[0].path === "student_file.java"){
        userPrompt = "{% prompt 'ASK_PROMT_JAVA' %}"
    }
    if(context.files.length > 0 && context.files[0].path === "student_file.cpp"){
        userPrompt = "{% prompt 'ASK_PROMT_CPP' %}"
    }

    const result = await codioIDE.coachBot.ask({
      systemPrompt: systemPrompt,
      userPrompt: userPrompt,
      vars: {
        "GUIDE_CONTENT": context.guidesPage.content,
        "INPUT": input
      }
    })

  }
})(window.codioIDE, window)
