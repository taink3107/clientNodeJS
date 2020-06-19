export interface ICrudReponsitory<T,K> {
    findAll(K):T[];
    findOne(k:K):T;
}