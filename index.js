(async function(codioIDE, window) {

  const systemPrompt = "You are a help assistant"
  codioIDE.coachBot.register("iNeedHelpButton", "Ask a question", onButtonPress)
  async function onButtonPress() {
    const context = await codioIDE.coachBot.getContext()
    const input = await codioIDE.coachBot.input("Please paste the error message you want me to explain!")

    const userPrompt = "{% prompt 'ASK_PROMT' %}"
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