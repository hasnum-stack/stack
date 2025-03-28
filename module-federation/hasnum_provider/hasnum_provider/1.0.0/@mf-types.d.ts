
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Button' | 'REMOTE_ALIAS_IDENTIFIER/Part';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Part' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Part') :T extends 'REMOTE_ALIAS_IDENTIFIER/Button' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Button') :any;