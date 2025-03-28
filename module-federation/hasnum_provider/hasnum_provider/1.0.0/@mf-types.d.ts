
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/part';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/part' ? typeof import('REMOTE_ALIAS_IDENTIFIER/part') :any;