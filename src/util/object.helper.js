export const nullFunc = () => true

// generate screen list for nav
export const screenData = (data) => {
	let screens = {}
	let screenList = {}

  // deconstruct screenData
	data.map((screen, i) => {
    screens[screen.id] = screen.component
    screenList[screen.id] = {id: screen.id, title: screen.title, note: screen.note}
  })

  return {
  	screens,
  	screenList
  }
}