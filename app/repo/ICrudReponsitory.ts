export interface ICrudReponsitory<T,K> {
    findAll():T[];
    findOne(k:K):T;
}