export default interface ICatData {
    _id: string,
    tags: string[],
    owner: string,
    createdAt: Date | null,
    updatedAt: Date | null
}