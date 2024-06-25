export const getUsers: any = async () => {
    await fetch('https://65f49eabf54db27bc0221b07.mockapi.io/api/student').then(
        res => {
            const data = JSON.parse(JSON.stringify(res))
            return data
        }
    ).catch(err => {
        return err
    }
    )
}