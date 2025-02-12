class userInformation {
    constructor(data) {
        ({
            id: this.id,
            userInfos: this.userInfos,
            keyData: this.keyData
        } = data)
        this.score = data.todayScore ?? data.score
    }
}

export default userInformation