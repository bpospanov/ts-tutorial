const titleInput = document.querySelector(
    'input[name="title"]'
) as HTMLInputElement

const descriptionInput = document.querySelector(
    'textarea'
)

const form: HTMLFormElement = document.querySelector('.create')!

form.addEventListener('submit', async (e) => {
    e.preventDefault()

})