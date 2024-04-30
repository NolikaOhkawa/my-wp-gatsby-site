/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  GatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectorySortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type FieldSelectorEnum =
  | 'SELECT';

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileConnection_minArgs = {
  field: FileFieldSelector;
};


type FileConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly blksize: InputMaybe<FieldSelectorEnum>;
  readonly blocks: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly publicURL: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_minArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileSortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly blksize: InputMaybe<SortOrderEnum>;
  readonly blocks: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly publicURL: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageDataQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['GatsbyImageData']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
  readonly ne: InputMaybe<Scalars['GatsbyImageData']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type IDQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['ID']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly ne: InputMaybe<Scalars['ID']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
};

type ImageCropFocus =
  | 17
  | 0
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | ''
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly fixed: InputMaybe<ImageSharpFixedFieldSelector>;
  readonly fluid: InputMaybe<ImageSharpFluidFieldSelector>;
  readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly original: InputMaybe<ImageSharpOriginalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly resize: InputMaybe<ImageSharpResizeFieldSelector>;
};

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFixedSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly originalImg: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly presentationHeight: InputMaybe<FieldSelectorEnum>;
  readonly presentationWidth: InputMaybe<FieldSelectorEnum>;
  readonly sizes: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpFluidSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly originalImg: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly presentationHeight: InputMaybe<SortOrderEnum>;
  readonly presentationWidth: InputMaybe<SortOrderEnum>;
  readonly sizes: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpOriginalSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpResizeSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly fixed: InputMaybe<ImageSharpFixedSortInput>;
  readonly fluid: InputMaybe<ImageSharpFluidSortInput>;
  readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly original: InputMaybe<ImageSharpOriginalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly resize: InputMaybe<ImageSharpResizeSortInput>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFieldSelector = {
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly owner: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type InternalSortInput = {
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentDigest: InputMaybe<SortOrderEnum>;
  readonly contentFilePath: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly fieldOwners: InputMaybe<SortOrderEnum>;
  readonly ignoreType: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly owner: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

type MarkdownExcerptFormats =
  | 'HTML'
  | 'MARKDOWN'
  | 'PLAIN';

type MarkdownHeading = {
  readonly depth: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type MarkdownHeadingFieldSelector = {
  readonly depth: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly value: InputMaybe<FieldSelectorEnum>;
};

type MarkdownHeadingFilterInput = {
  readonly depth: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly value: InputMaybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: InputMaybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownHeadingSortInput = {
  readonly depth: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly value: InputMaybe<SortOrderEnum>;
};

type MarkdownRemark = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
};


type MarkdownRemark_excerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading: InputMaybe<Scalars['String']>;
  maxDepth: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


type MarkdownRemarkConnection_groupArgs = {
  field: MarkdownRemarkFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldSelector;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldSelector;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldSelector;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly excerptAst: InputMaybe<FieldSelectorEnum>;
  readonly headings: InputMaybe<MarkdownHeadingFieldSelector>;
  readonly html: InputMaybe<FieldSelectorEnum>;
  readonly htmlAst: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly tableOfContents: InputMaybe<FieldSelectorEnum>;
  readonly timeToRead: InputMaybe<FieldSelectorEnum>;
  readonly wordCount: InputMaybe<MarkdownWordCountFieldSelector>;
};

type MarkdownRemarkFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly excerptAst: InputMaybe<JSONQueryOperatorInput>;
  readonly headings: InputMaybe<MarkdownHeadingFilterListInput>;
  readonly html: InputMaybe<StringQueryOperatorInput>;
  readonly htmlAst: InputMaybe<JSONQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly tableOfContents: InputMaybe<StringQueryOperatorInput>;
  readonly timeToRead: InputMaybe<IntQueryOperatorInput>;
  readonly wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  field: MarkdownRemarkFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldSelector;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldSelector;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldSelector;
};

type MarkdownRemarkSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly excerptAst: InputMaybe<SortOrderEnum>;
  readonly headings: InputMaybe<MarkdownHeadingSortInput>;
  readonly html: InputMaybe<SortOrderEnum>;
  readonly htmlAst: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly tableOfContents: InputMaybe<SortOrderEnum>;
  readonly timeToRead: InputMaybe<SortOrderEnum>;
  readonly wordCount: InputMaybe<MarkdownWordCountSortInput>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFieldSelector = {
  readonly paragraphs: InputMaybe<FieldSelectorEnum>;
  readonly sentences: InputMaybe<FieldSelectorEnum>;
  readonly words: InputMaybe<FieldSelectorEnum>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: InputMaybe<IntQueryOperatorInput>;
  readonly sentences: InputMaybe<IntQueryOperatorInput>;
  readonly words: InputMaybe<IntQueryOperatorInput>;
};

type MarkdownWordCountSortInput = {
  readonly paragraphs: InputMaybe<SortOrderEnum>;
  readonly sentences: InputMaybe<SortOrderEnum>;
  readonly words: InputMaybe<SortOrderEnum>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type NodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type Query = {
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly allWp: WpConnection;
  readonly allWpCategory: WpCategoryConnection;
  readonly allWpComment: WpCommentConnection;
  readonly allWpCommentAuthor: WpCommentAuthorConnection;
  readonly allWpCommenter: WpCommenterConnection;
  readonly allWpContentNode: WpContentNodeConnection;
  readonly allWpContentType: WpContentTypeConnection;
  readonly allWpHierarchicalContentNode: WpHierarchicalContentNodeConnection;
  readonly allWpHierarchicalNode: WpHierarchicalNodeConnection;
  readonly allWpHierarchicalTermNode: WpHierarchicalTermNodeConnection;
  readonly allWpMediaItem: WpMediaItemConnection;
  readonly allWpMenu: WpMenuConnection;
  readonly allWpMenuItem: WpMenuItemConnection;
  readonly allWpMenuItemLinkable: WpMenuItemLinkableConnection;
  readonly allWpNodeWithAuthor: WpNodeWithAuthorConnection;
  readonly allWpNodeWithComments: WpNodeWithCommentsConnection;
  readonly allWpNodeWithContentEditor: WpNodeWithContentEditorConnection;
  readonly allWpNodeWithExcerpt: WpNodeWithExcerptConnection;
  readonly allWpNodeWithFeaturedImage: WpNodeWithFeaturedImageConnection;
  readonly allWpNodeWithPageAttributes: WpNodeWithPageAttributesConnection;
  readonly allWpNodeWithRevisions: WpNodeWithRevisionsConnection;
  readonly allWpNodeWithTemplate: WpNodeWithTemplateConnection;
  readonly allWpNodeWithTitle: WpNodeWithTitleConnection;
  readonly allWpNodeWithTrackbacks: WpNodeWithTrackbacksConnection;
  readonly allWpPage: WpPageConnection;
  readonly allWpPost: WpPostConnection;
  readonly allWpPostFormat: WpPostFormatConnection;
  readonly allWpTag: WpTagConnection;
  readonly allWpTaxonomy: WpTaxonomyConnection;
  readonly allWpTermNode: WpTermNodeConnection;
  readonly allWpUniformResourceIdentifiable: WpUniformResourceIdentifiableConnection;
  readonly allWpUser: WpUserConnection;
  readonly allWpUserRole: WpUserRoleConnection;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly wp: Maybe<Wp>;
  readonly wpCategory: Maybe<WpCategory>;
  readonly wpComment: Maybe<WpComment>;
  readonly wpCommentAuthor: Maybe<WpCommentAuthor>;
  readonly wpCommenter: Maybe<WpCommenter>;
  readonly wpContentNode: Maybe<WpContentNode>;
  readonly wpContentType: Maybe<WpContentType>;
  readonly wpHierarchicalContentNode: Maybe<WpHierarchicalContentNode>;
  readonly wpHierarchicalNode: Maybe<WpHierarchicalNode>;
  readonly wpHierarchicalTermNode: Maybe<WpHierarchicalTermNode>;
  readonly wpMediaItem: Maybe<WpMediaItem>;
  readonly wpMenu: Maybe<WpMenu>;
  readonly wpMenuItem: Maybe<WpMenuItem>;
  readonly wpMenuItemLinkable: Maybe<WpMenuItemLinkable>;
  readonly wpNodeWithAuthor: Maybe<WpNodeWithAuthor>;
  readonly wpNodeWithComments: Maybe<WpNodeWithComments>;
  readonly wpNodeWithContentEditor: Maybe<WpNodeWithContentEditor>;
  readonly wpNodeWithExcerpt: Maybe<WpNodeWithExcerpt>;
  readonly wpNodeWithFeaturedImage: Maybe<WpNodeWithFeaturedImage>;
  readonly wpNodeWithPageAttributes: Maybe<WpNodeWithPageAttributes>;
  readonly wpNodeWithRevisions: Maybe<WpNodeWithRevisions>;
  readonly wpNodeWithTemplate: Maybe<WpNodeWithTemplate>;
  readonly wpNodeWithTitle: Maybe<WpNodeWithTitle>;
  readonly wpNodeWithTrackbacks: Maybe<WpNodeWithTrackbacks>;
  readonly wpPage: Maybe<WpPage>;
  readonly wpPost: Maybe<WpPost>;
  readonly wpPostFormat: Maybe<WpPostFormat>;
  readonly wpTag: Maybe<WpTag>;
  readonly wpTaxonomy: Maybe<WpTaxonomy>;
  readonly wpTermNode: Maybe<WpTermNode>;
  readonly wpUniformResourceIdentifiable: Maybe<WpUniformResourceIdentifiable>;
  readonly wpUser: Maybe<WpUser>;
  readonly wpUserRole: Maybe<WpUserRole>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


type Query_allMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<MarkdownRemarkSortInput>>>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


type Query_allWpArgs = {
  filter: InputMaybe<WpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpSortInput>>>;
};


type Query_allWpCategoryArgs = {
  filter: InputMaybe<WpCategoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpCategorySortInput>>>;
};


type Query_allWpCommentArgs = {
  filter: InputMaybe<WpCommentFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpCommentSortInput>>>;
};


type Query_allWpCommentAuthorArgs = {
  filter: InputMaybe<WpCommentAuthorFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpCommentAuthorSortInput>>>;
};


type Query_allWpCommenterArgs = {
  filter: InputMaybe<WpCommenterFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpCommenterSortInput>>>;
};


type Query_allWpContentNodeArgs = {
  filter: InputMaybe<WpContentNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpContentNodeSortInput>>>;
};


type Query_allWpContentTypeArgs = {
  filter: InputMaybe<WpContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpContentTypeSortInput>>>;
};


type Query_allWpHierarchicalContentNodeArgs = {
  filter: InputMaybe<WpHierarchicalContentNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpHierarchicalContentNodeSortInput>>>;
};


type Query_allWpHierarchicalNodeArgs = {
  filter: InputMaybe<WpHierarchicalNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpHierarchicalNodeSortInput>>>;
};


type Query_allWpHierarchicalTermNodeArgs = {
  filter: InputMaybe<WpHierarchicalTermNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpHierarchicalTermNodeSortInput>>>;
};


type Query_allWpMediaItemArgs = {
  filter: InputMaybe<WpMediaItemFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpMediaItemSortInput>>>;
};


type Query_allWpMenuArgs = {
  filter: InputMaybe<WpMenuFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpMenuSortInput>>>;
};


type Query_allWpMenuItemArgs = {
  filter: InputMaybe<WpMenuItemFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpMenuItemSortInput>>>;
};


type Query_allWpMenuItemLinkableArgs = {
  filter: InputMaybe<WpMenuItemLinkableFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpMenuItemLinkableSortInput>>>;
};


type Query_allWpNodeWithAuthorArgs = {
  filter: InputMaybe<WpNodeWithAuthorFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithAuthorSortInput>>>;
};


type Query_allWpNodeWithCommentsArgs = {
  filter: InputMaybe<WpNodeWithCommentsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithCommentsSortInput>>>;
};


type Query_allWpNodeWithContentEditorArgs = {
  filter: InputMaybe<WpNodeWithContentEditorFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithContentEditorSortInput>>>;
};


type Query_allWpNodeWithExcerptArgs = {
  filter: InputMaybe<WpNodeWithExcerptFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithExcerptSortInput>>>;
};


type Query_allWpNodeWithFeaturedImageArgs = {
  filter: InputMaybe<WpNodeWithFeaturedImageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithFeaturedImageSortInput>>>;
};


type Query_allWpNodeWithPageAttributesArgs = {
  filter: InputMaybe<WpNodeWithPageAttributesFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithPageAttributesSortInput>>>;
};


type Query_allWpNodeWithRevisionsArgs = {
  filter: InputMaybe<WpNodeWithRevisionsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithRevisionsSortInput>>>;
};


type Query_allWpNodeWithTemplateArgs = {
  filter: InputMaybe<WpNodeWithTemplateFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithTemplateSortInput>>>;
};


type Query_allWpNodeWithTitleArgs = {
  filter: InputMaybe<WpNodeWithTitleFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithTitleSortInput>>>;
};


type Query_allWpNodeWithTrackbacksArgs = {
  filter: InputMaybe<WpNodeWithTrackbacksFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpNodeWithTrackbacksSortInput>>>;
};


type Query_allWpPageArgs = {
  filter: InputMaybe<WpPageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpPageSortInput>>>;
};


type Query_allWpPostArgs = {
  filter: InputMaybe<WpPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpPostSortInput>>>;
};


type Query_allWpPostFormatArgs = {
  filter: InputMaybe<WpPostFormatFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpPostFormatSortInput>>>;
};


type Query_allWpTagArgs = {
  filter: InputMaybe<WpTagFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpTagSortInput>>>;
};


type Query_allWpTaxonomyArgs = {
  filter: InputMaybe<WpTaxonomyFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpTaxonomySortInput>>>;
};


type Query_allWpTermNodeArgs = {
  filter: InputMaybe<WpTermNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpTermNodeSortInput>>>;
};


type Query_allWpUniformResourceIdentifiableArgs = {
  filter: InputMaybe<WpUniformResourceIdentifiableFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpUniformResourceIdentifiableSortInput>>>;
};


type Query_allWpUserArgs = {
  filter: InputMaybe<WpUserFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpUserSortInput>>>;
};


type Query_allWpUserRoleArgs = {
  filter: InputMaybe<WpUserRoleFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<WpUserRoleSortInput>>>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_markdownRemarkArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JSONQueryOperatorInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JSONQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpArgs = {
  allSettings: InputMaybe<WpSettingsFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  discussionSettings: InputMaybe<WpDiscussionSettingsFilterInput>;
  generalSettings: InputMaybe<WpGeneralSettingsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  readingSettings: InputMaybe<WpReadingSettingsFilterInput>;
  wpGatsby: InputMaybe<WpWPGatsbyFilterInput>;
  writingSettings: InputMaybe<WpWritingSettingsFilterInput>;
};


type Query_wpCategoryArgs = {
  ancestors: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentNodes: InputMaybe<WpCategoryToContentNodeConnectionTypeFilterInput>;
  count: InputMaybe<IntQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
  posts: InputMaybe<WpCategoryToPostConnectionTypeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  taxonomy: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName: InputMaybe<StringQueryOperatorInput>;
  termGroupId: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
  wpChildren: InputMaybe<WpCategoryToCategoryConnectionTypeFilterInput>;
  wpParent: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeFilterInput>;
};


type Query_wpCommentArgs = {
  agent: InputMaybe<StringQueryOperatorInput>;
  author: InputMaybe<WpCommentToCommenterConnectionEdgeTypeFilterInput>;
  authorIp: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  commentedOn: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeFilterInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  dateGmt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  karma: InputMaybe<IntQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
  replies: InputMaybe<WpCommentToCommentConnectionTypeFilterInput>;
  status: InputMaybe<WpCommentStatusEnumQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
  wpParent: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeFilterInput>;
};


type Query_wpCommentAuthorArgs = {
  avatar: InputMaybe<WpAvatarFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpCommenterArgs = {
  avatar: InputMaybe<WpAvatarFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpContentNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName: InputMaybe<StringQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  dateGmt: InputMaybe<DateQueryOperatorInput>;
  desiredSlug: InputMaybe<StringQueryOperatorInput>;
  enclosure: InputMaybe<StringQueryOperatorInput>;
  guid: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  modified: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  status: InputMaybe<StringQueryOperatorInput>;
  template: InputMaybe<WpContentTemplateFilterInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpContentTypeArgs = {
  archivePath: InputMaybe<StringQueryOperatorInput>;
  canExport: InputMaybe<BooleanQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  connectedTaxonomies: InputMaybe<WpContentTypeToTaxonomyConnectionTypeFilterInput>;
  contentNodes: InputMaybe<WpContentTypeToContentNodeConnectionTypeFilterInput>;
  deleteWithUser: InputMaybe<BooleanQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  excludeFromSearch: InputMaybe<BooleanQueryOperatorInput>;
  graphqlPluralName: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName: InputMaybe<StringQueryOperatorInput>;
  hasArchive: InputMaybe<BooleanQueryOperatorInput>;
  hierarchical: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  labels: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon: InputMaybe<StringQueryOperatorInput>;
  menuPosition: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  public: InputMaybe<BooleanQueryOperatorInput>;
  publiclyQueryable: InputMaybe<BooleanQueryOperatorInput>;
  restBase: InputMaybe<StringQueryOperatorInput>;
  restControllerClass: InputMaybe<StringQueryOperatorInput>;
  showInAdminBar: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus: InputMaybe<BooleanQueryOperatorInput>;
  showInRest: InputMaybe<BooleanQueryOperatorInput>;
  showUi: InputMaybe<BooleanQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpHierarchicalContentNodeArgs = {
  ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName: InputMaybe<StringQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  dateGmt: InputMaybe<DateQueryOperatorInput>;
  desiredSlug: InputMaybe<StringQueryOperatorInput>;
  enclosure: InputMaybe<StringQueryOperatorInput>;
  guid: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  modified: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  status: InputMaybe<StringQueryOperatorInput>;
  template: InputMaybe<WpContentTemplateFilterInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
  wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};


type Query_wpHierarchicalNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
};


type Query_wpHierarchicalTermNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  count: InputMaybe<IntQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  taxonomyName: InputMaybe<StringQueryOperatorInput>;
  termGroupId: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpMediaItemArgs = {
  altText: InputMaybe<StringQueryOperatorInput>;
  ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  authorId: InputMaybe<IDQueryOperatorInput>;
  caption: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  commentCount: InputMaybe<IntQueryOperatorInput>;
  commentStatus: InputMaybe<StringQueryOperatorInput>;
  comments: InputMaybe<WpMediaItemToCommentConnectionTypeFilterInput>;
  contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName: InputMaybe<StringQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  dateGmt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  desiredSlug: InputMaybe<StringQueryOperatorInput>;
  enclosure: InputMaybe<StringQueryOperatorInput>;
  fileSize: InputMaybe<IntQueryOperatorInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  guid: InputMaybe<StringQueryOperatorInput>;
  hasPassword: InputMaybe<BooleanQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  localFile: InputMaybe<FileFilterInput>;
  mediaDetails: InputMaybe<WpMediaDetailsFilterInput>;
  mediaItemUrl: InputMaybe<StringQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  modified: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
  password: InputMaybe<StringQueryOperatorInput>;
  publicUrl: InputMaybe<StringQueryOperatorInput>;
  resize: InputMaybe<RemoteFileResizeFilterInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  sourceUrl: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  status: InputMaybe<StringQueryOperatorInput>;
  template: InputMaybe<WpContentTemplateFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
  wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};


type Query_wpMenuArgs = {
  children: InputMaybe<NodeFilterListInput>;
  count: InputMaybe<IntQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locations: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems: InputMaybe<WpMenuToMenuItemConnectionTypeFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpMenuItemArgs = {
  childItems: InputMaybe<WpMenuItemToMenuItemConnectionTypeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  connectedNode: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeFilterInput>;
  cssClasses: InputMaybe<StringQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  linkRelationship: InputMaybe<StringQueryOperatorInput>;
  locations: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menu: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  order: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  target: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpMenuItemLinkableArgs = {
  children: InputMaybe<NodeFilterListInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpNodeWithAuthorArgs = {
  author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  authorId: InputMaybe<IDQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_wpNodeWithCommentsArgs = {
  children: InputMaybe<NodeFilterListInput>;
  commentCount: InputMaybe<IntQueryOperatorInput>;
  commentStatus: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_wpNodeWithContentEditorArgs = {
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_wpNodeWithExcerptArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_wpNodeWithFeaturedImageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId: InputMaybe<IntQueryOperatorInput>;
  featuredImageId: InputMaybe<IDQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_wpNodeWithPageAttributesArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  menuOrder: InputMaybe<IntQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_wpNodeWithRevisionsArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isRevision: InputMaybe<BooleanQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_wpNodeWithTemplateArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  template: InputMaybe<WpContentTemplateFilterInput>;
};


type Query_wpNodeWithTitleArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpNodeWithTrackbacksArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pingStatus: InputMaybe<StringQueryOperatorInput>;
  pinged: InputMaybe<StringQueryOperatorInput>;
  toPing: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpPageArgs = {
  ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  authorId: InputMaybe<IDQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  commentCount: InputMaybe<IntQueryOperatorInput>;
  commentStatus: InputMaybe<StringQueryOperatorInput>;
  comments: InputMaybe<WpPageToCommentConnectionTypeFilterInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName: InputMaybe<StringQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  dateGmt: InputMaybe<DateQueryOperatorInput>;
  desiredSlug: InputMaybe<StringQueryOperatorInput>;
  enclosure: InputMaybe<StringQueryOperatorInput>;
  featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId: InputMaybe<IntQueryOperatorInput>;
  featuredImageId: InputMaybe<IDQueryOperatorInput>;
  guid: InputMaybe<StringQueryOperatorInput>;
  hasPassword: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isPrivacyPage: InputMaybe<BooleanQueryOperatorInput>;
  isRevision: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  menuOrder: InputMaybe<IntQueryOperatorInput>;
  modified: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  parentId: InputMaybe<IDQueryOperatorInput>;
  password: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  status: InputMaybe<StringQueryOperatorInput>;
  template: InputMaybe<WpContentTemplateFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
  wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};


type Query_wpPostArgs = {
  author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  authorId: InputMaybe<IDQueryOperatorInput>;
  categories: InputMaybe<WpPostToCategoryConnectionTypeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  commentCount: InputMaybe<IntQueryOperatorInput>;
  commentStatus: InputMaybe<StringQueryOperatorInput>;
  comments: InputMaybe<WpPostToCommentConnectionTypeFilterInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName: InputMaybe<StringQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  dateGmt: InputMaybe<DateQueryOperatorInput>;
  desiredSlug: InputMaybe<StringQueryOperatorInput>;
  enclosure: InputMaybe<StringQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId: InputMaybe<IntQueryOperatorInput>;
  featuredImageId: InputMaybe<IDQueryOperatorInput>;
  guid: InputMaybe<StringQueryOperatorInput>;
  hasPassword: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isRevision: InputMaybe<BooleanQueryOperatorInput>;
  isSticky: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  modified: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  password: InputMaybe<StringQueryOperatorInput>;
  pingStatus: InputMaybe<StringQueryOperatorInput>;
  pinged: InputMaybe<StringQueryOperatorInput>;
  postFormats: InputMaybe<WpPostToPostFormatConnectionTypeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  status: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<WpPostToTagConnectionTypeFilterInput>;
  template: InputMaybe<WpContentTemplateFilterInput>;
  terms: InputMaybe<WpPostToTermNodeConnectionTypeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  toPing: InputMaybe<StringQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpPostFormatArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentNodes: InputMaybe<WpPostFormatToContentNodeConnectionTypeFilterInput>;
  count: InputMaybe<IntQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  posts: InputMaybe<WpPostFormatToPostConnectionTypeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  taxonomy: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName: InputMaybe<StringQueryOperatorInput>;
  termGroupId: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpTagArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentNodes: InputMaybe<WpTagToContentNodeConnectionTypeFilterInput>;
  count: InputMaybe<IntQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  posts: InputMaybe<WpTagToPostConnectionTypeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  taxonomy: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName: InputMaybe<StringQueryOperatorInput>;
  termGroupId: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpTaxonomyArgs = {
  archivePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  connectedContentTypes: InputMaybe<WpTaxonomyToContentTypeConnectionTypeFilterInput>;
  connectedTerms: InputMaybe<WpTaxonomyToTermNodeConnectionTypeFilterInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  graphqlPluralName: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName: InputMaybe<StringQueryOperatorInput>;
  hierarchical: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  public: InputMaybe<BooleanQueryOperatorInput>;
  restBase: InputMaybe<StringQueryOperatorInput>;
  restControllerClass: InputMaybe<StringQueryOperatorInput>;
  showCloud: InputMaybe<BooleanQueryOperatorInput>;
  showInAdminColumn: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus: InputMaybe<BooleanQueryOperatorInput>;
  showInQuickEdit: InputMaybe<BooleanQueryOperatorInput>;
  showInRest: InputMaybe<BooleanQueryOperatorInput>;
  showUi: InputMaybe<BooleanQueryOperatorInput>;
};


type Query_wpTermNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  count: InputMaybe<IntQueryOperatorInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  taxonomyName: InputMaybe<StringQueryOperatorInput>;
  termGroupId: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpUniformResourceIdentifiableArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpUserArgs = {
  avatar: InputMaybe<WpAvatarFilterInput>;
  capKey: InputMaybe<StringQueryOperatorInput>;
  capabilities: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  comments: InputMaybe<WpUserToCommentConnectionTypeFilterInput>;
  databaseId: InputMaybe<IntQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  extraCapabilities: InputMaybe<StringQueryOperatorInput>;
  firstName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isComment: InputMaybe<BooleanQueryOperatorInput>;
  isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  lastName: InputMaybe<StringQueryOperatorInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nicename: InputMaybe<StringQueryOperatorInput>;
  nickname: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  pages: InputMaybe<WpUserToPageConnectionTypeFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  posts: InputMaybe<WpUserToPostConnectionTypeFilterInput>;
  registeredDate: InputMaybe<StringQueryOperatorInput>;
  roles: InputMaybe<WpUserToUserRoleConnectionTypeFilterInput>;
  shouldShowAdminToolbar: InputMaybe<BooleanQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  uri: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  username: InputMaybe<StringQueryOperatorInput>;
};


type Query_wpUserRoleArgs = {
  capabilities: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  displayName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeType: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

/** Remote Interface */
type RemoteFile = {
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly mimeType: Scalars['String'];
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly width: Maybe<Scalars['Int']>;
};


/** Remote Interface */
type RemoteFile_gatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
type RemoteFile_resizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type RemoteFileCropFocus =
  | 'bottom'
  | 'center'
  | 'edges'
  | 'entropy'
  | 'faces'
  | 'left'
  | 'right'
  | 'top';

type RemoteFileFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'outside';

type RemoteFileFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | 'png'
  | 'webp';

type RemoteFileLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type RemoteFilePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type RemoteFileResize = {
  readonly height: Maybe<Scalars['Int']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type RemoteFileResizeFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type RemoteFileResizeFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type RemoteFileResizeSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen: InputMaybe<FieldSelectorEnum>;
  readonly host: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
  readonly polyfill: InputMaybe<FieldSelectorEnum>;
  readonly port: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
};

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly functionRoute: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginName: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly functionRoute: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginName: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly component: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly pageContext: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly component: InputMaybe<SortOrderEnum>;
  readonly componentChunkName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly internalComponentName: InputMaybe<SortOrderEnum>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly pageContext: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly pluginCreator: InputMaybe<SitePluginSortInput>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldSelector = {
  readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
  readonly packageJson: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
  readonly resolve: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
  readonly version: InputMaybe<FieldSelectorEnum>;
};

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginSortInput = {
  readonly browserAPIs: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs: InputMaybe<SortOrderEnum>;
  readonly packageJson: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginFilepath: InputMaybe<SortOrderEnum>;
  readonly pluginOptions: InputMaybe<SortOrderEnum>;
  readonly resolve: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs: InputMaybe<SortOrderEnum>;
  readonly version: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadata = {
  readonly author: Maybe<SiteSiteMetadataAuthor>;
  readonly baseUrl: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly social: Maybe<SiteSiteMetadataSocial>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataAuthor = {
  readonly name: Maybe<Scalars['String']>;
  readonly summary: Maybe<Scalars['String']>;
};

type SiteSiteMetadataAuthorFieldSelector = {
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly summary: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataAuthorFilterInput = {
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly summary: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataAuthorSortInput = {
  readonly name: InputMaybe<SortOrderEnum>;
  readonly summary: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadataFieldSelector = {
  readonly author: InputMaybe<SiteSiteMetadataAuthorFieldSelector>;
  readonly baseUrl: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl: InputMaybe<FieldSelectorEnum>;
  readonly social: InputMaybe<SiteSiteMetadataSocialFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataFilterInput = {
  readonly author: InputMaybe<SiteSiteMetadataAuthorFilterInput>;
  readonly baseUrl: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly social: InputMaybe<SiteSiteMetadataSocialFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSocial = {
  readonly twitter: Maybe<Scalars['String']>;
};

type SiteSiteMetadataSocialFieldSelector = {
  readonly twitter: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataSocialFilterInput = {
  readonly twitter: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSocialSortInput = {
  readonly twitter: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadataSortInput = {
  readonly author: InputMaybe<SiteSiteMetadataAuthorSortInput>;
  readonly baseUrl: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly siteUrl: InputMaybe<SortOrderEnum>;
  readonly social: InputMaybe<SiteSiteMetadataSocialSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type SiteSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen: InputMaybe<SortOrderEnum>;
  readonly host: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsxRuntime: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pathPrefix: InputMaybe<SortOrderEnum>;
  readonly polyfill: InputMaybe<SortOrderEnum>;
  readonly port: InputMaybe<SortOrderEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  readonly trailingSlash: InputMaybe<SortOrderEnum>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

/** Non-node WPGraphQL root fields. */
type Wp = Node & {
  /** Entry point to get all settings for the site */
  readonly allSettings: Maybe<WpSettings>;
  readonly children: ReadonlyArray<Node>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  readonly discussionSettings: Maybe<WpDiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  readonly generalSettings: Maybe<WpGeneralSettings>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readonly readingSettings: Maybe<WpReadingSettings>;
  /** Information needed by gatsby-source-wordpress. */
  readonly wpGatsby: Maybe<WpWPGatsby>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  readonly writingSettings: Maybe<WpWritingSettings>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
type WpAvatar = {
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  readonly default: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  readonly extraAttr: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  readonly forceDefault: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  readonly foundAvatar: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  readonly height: Maybe<Scalars['Int']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  readonly rating: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  readonly scheme: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  readonly size: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  readonly url: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  readonly width: Maybe<Scalars['Int']>;
};

type WpAvatarFieldSelector = {
  readonly default: InputMaybe<FieldSelectorEnum>;
  readonly extraAttr: InputMaybe<FieldSelectorEnum>;
  readonly forceDefault: InputMaybe<FieldSelectorEnum>;
  readonly foundAvatar: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly rating: InputMaybe<FieldSelectorEnum>;
  readonly scheme: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type WpAvatarFilterInput = {
  readonly default: InputMaybe<StringQueryOperatorInput>;
  readonly extraAttr: InputMaybe<StringQueryOperatorInput>;
  readonly forceDefault: InputMaybe<BooleanQueryOperatorInput>;
  readonly foundAvatar: InputMaybe<BooleanQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly rating: InputMaybe<StringQueryOperatorInput>;
  readonly scheme: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type WpAvatarSortInput = {
  readonly default: InputMaybe<SortOrderEnum>;
  readonly extraAttr: InputMaybe<SortOrderEnum>;
  readonly forceDefault: InputMaybe<SortOrderEnum>;
  readonly foundAvatar: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly rating: InputMaybe<SortOrderEnum>;
  readonly scheme: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

/** The category type */
type WpCategory = Node & WpDatabaseIdentifier & WpHierarchicalNode & WpHierarchicalTermNode & WpMenuItemLinkable & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpCategoryToAncestorsCategoryConnectionType>;
  readonly children: ReadonlyArray<Node>;
  /** Connection between the Category type and the ContentNode type */
  readonly contentNodes: Maybe<WpCategoryToContentNodeConnectionType>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the Category type and the post type */
  readonly posts: Maybe<WpCategoryToPostConnectionType>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the Category type and the Taxonomy type */
  readonly taxonomy: Maybe<WpCategoryToTaxonomyConnectionEdgeType>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** Connection between the category type and its children categories. */
  readonly wpChildren: Maybe<WpCategoryToCategoryConnectionType>;
  /** Connection between the category type and its parent category. */
  readonly wpParent: Maybe<WpCategoryToParentCategoryConnectionEdgeType>;
};

type WpCategoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCategoryEdge>;
  readonly group: ReadonlyArray<WpCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCategoryConnection_distinctArgs = {
  field: WpCategoryFieldSelector;
};


type WpCategoryConnection_groupArgs = {
  field: WpCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCategoryConnection_maxArgs = {
  field: WpCategoryFieldSelector;
};


type WpCategoryConnection_minArgs = {
  field: WpCategoryFieldSelector;
};


type WpCategoryConnection_sumArgs = {
  field: WpCategoryFieldSelector;
};

type WpCategoryConnectionEdgeType = {
  /** The connected category Node */
  readonly node: WpCategory;
};

type WpCategoryConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpCategoryConnectionType = {
  /** A list of connected category Nodes */
  readonly nodes: ReadonlyArray<WpCategory>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpCategoryConnectionPageInfoType;
};

type WpCategoryEdge = {
  readonly next: Maybe<WpCategory>;
  readonly node: WpCategory;
  readonly previous: Maybe<WpCategory>;
};

type WpCategoryFieldSelector = {
  readonly ancestors: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentNodes: InputMaybe<WpCategoryToContentNodeConnectionTypeFieldSelector>;
  readonly count: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
  readonly posts: InputMaybe<WpCategoryToPostConnectionTypeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly taxonomy: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeFieldSelector>;
  readonly taxonomyName: InputMaybe<FieldSelectorEnum>;
  readonly termGroupId: InputMaybe<FieldSelectorEnum>;
  readonly termTaxonomyId: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
  readonly wpChildren: InputMaybe<WpCategoryToCategoryConnectionTypeFieldSelector>;
  readonly wpParent: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeFieldSelector>;
};

type WpCategoryFilterInput = {
  readonly ancestors: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentNodes: InputMaybe<WpCategoryToContentNodeConnectionTypeFilterInput>;
  readonly count: InputMaybe<IntQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
  readonly posts: InputMaybe<WpCategoryToPostConnectionTypeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly taxonomy: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeFilterInput>;
  readonly taxonomyName: InputMaybe<StringQueryOperatorInput>;
  readonly termGroupId: InputMaybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
  readonly wpChildren: InputMaybe<WpCategoryToCategoryConnectionTypeFilterInput>;
  readonly wpParent: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeFilterInput>;
};

type WpCategoryFilterListInput = {
  readonly elemMatch: InputMaybe<WpCategoryFilterInput>;
};

type WpCategoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCategoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCategoryGroupConnection_distinctArgs = {
  field: WpCategoryFieldSelector;
};


type WpCategoryGroupConnection_groupArgs = {
  field: WpCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCategoryGroupConnection_maxArgs = {
  field: WpCategoryFieldSelector;
};


type WpCategoryGroupConnection_minArgs = {
  field: WpCategoryFieldSelector;
};


type WpCategoryGroupConnection_sumArgs = {
  field: WpCategoryFieldSelector;
};

type WpCategorySortInput = {
  readonly ancestors: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentNodes: InputMaybe<WpCategoryToContentNodeConnectionTypeSortInput>;
  readonly count: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
  readonly posts: InputMaybe<WpCategoryToPostConnectionTypeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly taxonomy: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeSortInput>;
  readonly taxonomyName: InputMaybe<SortOrderEnum>;
  readonly termGroupId: InputMaybe<SortOrderEnum>;
  readonly termTaxonomyId: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
  readonly wpChildren: InputMaybe<WpCategoryToCategoryConnectionTypeSortInput>;
  readonly wpParent: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
type WpCategoryToAncestorsCategoryConnectionPageInfoType = WpCategoryConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpCategoryToAncestorsCategoryConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpCategoryToAncestorsCategoryConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpCategoryToAncestorsCategoryConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the category type */
type WpCategoryToAncestorsCategoryConnectionType = WpCategoryConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpCategory>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpCategoryToAncestorsCategoryConnectionPageInfoType;
};

type WpCategoryToAncestorsCategoryConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCategoryFieldSelector>;
  readonly pageInfo: InputMaybe<WpCategoryToAncestorsCategoryConnectionPageInfoTypeFieldSelector>;
};

type WpCategoryToAncestorsCategoryConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCategoryFilterListInput>;
  readonly pageInfo: InputMaybe<WpCategoryToAncestorsCategoryConnectionPageInfoTypeFilterInput>;
};

type WpCategoryToAncestorsCategoryConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCategorySortInput>;
  readonly pageInfo: InputMaybe<WpCategoryToAncestorsCategoryConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
type WpCategoryToCategoryConnectionPageInfoType = WpCategoryConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpCategoryToCategoryConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpCategoryToCategoryConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpCategoryToCategoryConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the category type */
type WpCategoryToCategoryConnectionType = WpCategoryConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpCategory>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpCategoryToCategoryConnectionPageInfoType;
};

type WpCategoryToCategoryConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCategoryFieldSelector>;
  readonly pageInfo: InputMaybe<WpCategoryToCategoryConnectionPageInfoTypeFieldSelector>;
};

type WpCategoryToCategoryConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCategoryFilterListInput>;
  readonly pageInfo: InputMaybe<WpCategoryToCategoryConnectionPageInfoTypeFilterInput>;
};

type WpCategoryToCategoryConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCategorySortInput>;
  readonly pageInfo: InputMaybe<WpCategoryToCategoryConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
type WpCategoryToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpCategoryToContentNodeConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpCategoryToContentNodeConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpCategoryToContentNodeConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the ContentNode type */
type WpCategoryToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpCategoryToContentNodeConnectionPageInfoType;
};

type WpCategoryToContentNodeConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpContentNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpCategoryToContentNodeConnectionPageInfoTypeFieldSelector>;
};

type WpCategoryToContentNodeConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpContentNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpCategoryToContentNodeConnectionPageInfoTypeFilterInput>;
};

type WpCategoryToContentNodeConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpContentNodeSortInput>;
  readonly pageInfo: InputMaybe<WpCategoryToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Connection between the Category type and the category type */
type WpCategoryToParentCategoryConnectionEdgeType = WpCategoryConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpCategory;
};

type WpCategoryToParentCategoryConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpCategoryFieldSelector>;
};

type WpCategoryToParentCategoryConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpCategoryFilterInput>;
};

type WpCategoryToParentCategoryConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpCategorySortInput>;
};

/** Page Info on the &quot;CategoryToPostConnection&quot; */
type WpCategoryToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpCategoryToPostConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpCategoryToPostConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpCategoryToPostConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the post type */
type WpCategoryToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpPost>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpCategoryToPostConnectionPageInfoType;
};

type WpCategoryToPostConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpPostFieldSelector>;
  readonly pageInfo: InputMaybe<WpCategoryToPostConnectionPageInfoTypeFieldSelector>;
};

type WpCategoryToPostConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpPostFilterListInput>;
  readonly pageInfo: InputMaybe<WpCategoryToPostConnectionPageInfoTypeFilterInput>;
};

type WpCategoryToPostConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpPostSortInput>;
  readonly pageInfo: InputMaybe<WpCategoryToPostConnectionPageInfoTypeSortInput>;
};

/** Connection between the Category type and the Taxonomy type */
type WpCategoryToTaxonomyConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpTaxonomyConnectionEdgeType & {
  /** The node of the connection, without the edges */
  readonly node: WpTaxonomy;
};

type WpCategoryToTaxonomyConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpTaxonomyFieldSelector>;
};

type WpCategoryToTaxonomyConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpTaxonomyFilterInput>;
};

type WpCategoryToTaxonomyConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpTaxonomySortInput>;
};

/** A Comment object */
type WpComment = Node & WpDatabaseIdentifier & WpNode & WpUniformResourceIdentifiable & {
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  readonly agent: Maybe<Scalars['String']>;
  /** The author of the comment */
  readonly author: Maybe<WpCommentToCommenterConnectionEdgeType>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  readonly authorIp: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  /** Connection between the Comment type and the ContentNode type */
  readonly commentedOn: Maybe<WpCommentToContentNodeConnectionEdgeType>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  readonly content: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  readonly date: Maybe<Scalars['Date']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The permalink of the comment */
  readonly link: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The database id of the parent comment node or null if it is the root comment */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  readonly replies: Maybe<WpCommentToCommentConnectionType>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  readonly status: Maybe<WpCommentStatusEnum>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  readonly type: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the Comment type */
  readonly wpParent: Maybe<WpCommentToParentCommentConnectionEdgeType>;
};


/** A Comment object */
type WpComment_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** A Comment object */
type WpComment_dateGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

/** A Comment Author object */
type WpCommentAuthor = Node & WpCommenter & WpDatabaseIdentifier & WpNode & {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<WpAvatar>;
  readonly children: ReadonlyArray<Node>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** The email for the comment author */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** The name for the comment author. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The url the comment author. */
  readonly url: Maybe<Scalars['String']>;
};

type WpCommentAuthorConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCommentAuthorEdge>;
  readonly group: ReadonlyArray<WpCommentAuthorGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpCommentAuthor>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCommentAuthorConnection_distinctArgs = {
  field: WpCommentAuthorFieldSelector;
};


type WpCommentAuthorConnection_groupArgs = {
  field: WpCommentAuthorFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCommentAuthorConnection_maxArgs = {
  field: WpCommentAuthorFieldSelector;
};


type WpCommentAuthorConnection_minArgs = {
  field: WpCommentAuthorFieldSelector;
};


type WpCommentAuthorConnection_sumArgs = {
  field: WpCommentAuthorFieldSelector;
};

type WpCommentAuthorEdge = {
  readonly next: Maybe<WpCommentAuthor>;
  readonly node: WpCommentAuthor;
  readonly previous: Maybe<WpCommentAuthor>;
};

type WpCommentAuthorFieldSelector = {
  readonly avatar: InputMaybe<WpAvatarFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly email: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type WpCommentAuthorFilterInput = {
  readonly avatar: InputMaybe<WpAvatarFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type WpCommentAuthorGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCommentAuthorEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpCommentAuthorGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpCommentAuthor>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCommentAuthorGroupConnection_distinctArgs = {
  field: WpCommentAuthorFieldSelector;
};


type WpCommentAuthorGroupConnection_groupArgs = {
  field: WpCommentAuthorFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCommentAuthorGroupConnection_maxArgs = {
  field: WpCommentAuthorFieldSelector;
};


type WpCommentAuthorGroupConnection_minArgs = {
  field: WpCommentAuthorFieldSelector;
};


type WpCommentAuthorGroupConnection_sumArgs = {
  field: WpCommentAuthorFieldSelector;
};

type WpCommentAuthorSortInput = {
  readonly avatar: InputMaybe<WpAvatarSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly email: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type WpCommentConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCommentEdge>;
  readonly group: ReadonlyArray<WpCommentGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpComment>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCommentConnection_distinctArgs = {
  field: WpCommentFieldSelector;
};


type WpCommentConnection_groupArgs = {
  field: WpCommentFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCommentConnection_maxArgs = {
  field: WpCommentFieldSelector;
};


type WpCommentConnection_minArgs = {
  field: WpCommentFieldSelector;
};


type WpCommentConnection_sumArgs = {
  field: WpCommentFieldSelector;
};

type WpCommentConnectionEdgeType = {
  /** The connected Comment Node */
  readonly node: WpComment;
};

type WpCommentConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpCommentConnectionType = {
  /** A list of connected Comment Nodes */
  readonly nodes: ReadonlyArray<WpComment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpCommentConnectionPageInfoType;
};

type WpCommentEdge = {
  readonly next: Maybe<WpComment>;
  readonly node: WpComment;
  readonly previous: Maybe<WpComment>;
};

type WpCommentFieldSelector = {
  readonly agent: InputMaybe<FieldSelectorEnum>;
  readonly author: InputMaybe<WpCommentToCommenterConnectionEdgeTypeFieldSelector>;
  readonly authorIp: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly commentedOn: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly dateGmt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly karma: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
  readonly replies: InputMaybe<WpCommentToCommentConnectionTypeFieldSelector>;
  readonly status: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
  readonly wpParent: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeFieldSelector>;
};

type WpCommentFilterInput = {
  readonly agent: InputMaybe<StringQueryOperatorInput>;
  readonly author: InputMaybe<WpCommentToCommenterConnectionEdgeTypeFilterInput>;
  readonly authorIp: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly commentedOn: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeFilterInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly dateGmt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly karma: InputMaybe<IntQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
  readonly replies: InputMaybe<WpCommentToCommentConnectionTypeFilterInput>;
  readonly status: InputMaybe<WpCommentStatusEnumQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
  readonly wpParent: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeFilterInput>;
};

type WpCommentFilterListInput = {
  readonly elemMatch: InputMaybe<WpCommentFilterInput>;
};

type WpCommentGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCommentEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpCommentGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpComment>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCommentGroupConnection_distinctArgs = {
  field: WpCommentFieldSelector;
};


type WpCommentGroupConnection_groupArgs = {
  field: WpCommentFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCommentGroupConnection_maxArgs = {
  field: WpCommentFieldSelector;
};


type WpCommentGroupConnection_minArgs = {
  field: WpCommentFieldSelector;
};


type WpCommentGroupConnection_sumArgs = {
  field: WpCommentFieldSelector;
};

type WpCommentSortInput = {
  readonly agent: InputMaybe<SortOrderEnum>;
  readonly author: InputMaybe<WpCommentToCommenterConnectionEdgeTypeSortInput>;
  readonly authorIp: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly commentedOn: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly dateGmt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly karma: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
  readonly replies: InputMaybe<WpCommentToCommentConnectionTypeSortInput>;
  readonly status: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
  readonly wpParent: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeSortInput>;
};

/** The status of the comment object. */
type WpCommentStatusEnum =
  | 'APPROVE'
  | 'HOLD'
  | 'SPAM'
  | 'TRASH';

type WpCommentStatusEnumQueryOperatorInput = {
  readonly eq: InputMaybe<WpCommentStatusEnum>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<WpCommentStatusEnum>>>;
  readonly ne: InputMaybe<WpCommentStatusEnum>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<WpCommentStatusEnum>>>;
};

/** Page Info on the &quot;CommentToCommentConnection&quot; */
type WpCommentToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpCommentToCommentConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpCommentToCommentConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpCommentToCommentConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Comment type and the Comment type */
type WpCommentToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpComment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpCommentToCommentConnectionPageInfoType;
};

type WpCommentToCommentConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCommentFieldSelector>;
  readonly pageInfo: InputMaybe<WpCommentToCommentConnectionPageInfoTypeFieldSelector>;
};

type WpCommentToCommentConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCommentFilterListInput>;
  readonly pageInfo: InputMaybe<WpCommentToCommentConnectionPageInfoTypeFilterInput>;
};

type WpCommentToCommentConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCommentSortInput>;
  readonly pageInfo: InputMaybe<WpCommentToCommentConnectionPageInfoTypeSortInput>;
};

/** Connection between the Comment type and the Commenter type */
type WpCommentToCommenterConnectionEdgeType = WpCommenterConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpCommenter;
};

type WpCommentToCommenterConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpCommenterFieldSelector>;
};

type WpCommentToCommenterConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpCommenterFilterInput>;
};

type WpCommentToCommenterConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpCommenterSortInput>;
};

/** Connection between the Comment type and the ContentNode type */
type WpCommentToContentNodeConnectionEdgeType = WpContentNodeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpContentNode;
};

type WpCommentToContentNodeConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpContentNodeFieldSelector>;
};

type WpCommentToContentNodeConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpContentNodeFilterInput>;
};

type WpCommentToContentNodeConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpContentNodeSortInput>;
};

/** Connection between the Comment type and the Comment type */
type WpCommentToParentCommentConnectionEdgeType = WpCommentConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpComment;
};

type WpCommentToParentCommentConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpCommentFieldSelector>;
};

type WpCommentToParentCommentConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpCommentFilterInput>;
};

type WpCommentToParentCommentConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpCommentSortInput>;
};

type WpCommenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<WpAvatar>;
  readonly children: ReadonlyArray<Node>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** The name of the author of a comment. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The url of the author of a comment. */
  readonly url: Maybe<Scalars['String']>;
};

type WpCommenterConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCommenterEdge>;
  readonly group: ReadonlyArray<WpCommenterGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpCommenter>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCommenterConnection_distinctArgs = {
  field: WpCommenterFieldSelector;
};


type WpCommenterConnection_groupArgs = {
  field: WpCommenterFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCommenterConnection_maxArgs = {
  field: WpCommenterFieldSelector;
};


type WpCommenterConnection_minArgs = {
  field: WpCommenterFieldSelector;
};


type WpCommenterConnection_sumArgs = {
  field: WpCommenterFieldSelector;
};

type WpCommenterConnectionEdgeType = {
  /** The connected Commenter Node */
  readonly node: WpCommenter;
};

type WpCommenterEdge = {
  readonly next: Maybe<WpCommenter>;
  readonly node: WpCommenter;
  readonly previous: Maybe<WpCommenter>;
};

type WpCommenterFieldSelector = {
  readonly avatar: InputMaybe<WpAvatarFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly email: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type WpCommenterFilterInput = {
  readonly avatar: InputMaybe<WpAvatarFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type WpCommenterGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpCommenterEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpCommenterGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpCommenter>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpCommenterGroupConnection_distinctArgs = {
  field: WpCommenterFieldSelector;
};


type WpCommenterGroupConnection_groupArgs = {
  field: WpCommenterFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpCommenterGroupConnection_maxArgs = {
  field: WpCommenterFieldSelector;
};


type WpCommenterGroupConnection_minArgs = {
  field: WpCommenterFieldSelector;
};


type WpCommenterGroupConnection_sumArgs = {
  field: WpCommenterFieldSelector;
};

type WpCommenterSortInput = {
  readonly avatar: InputMaybe<WpAvatarSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly email: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type WpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpEdge>;
  readonly group: ReadonlyArray<WpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Wp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpConnection_distinctArgs = {
  field: WpFieldSelector;
};


type WpConnection_groupArgs = {
  field: WpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpConnection_maxArgs = {
  field: WpFieldSelector;
};


type WpConnection_minArgs = {
  field: WpFieldSelector;
};


type WpConnection_sumArgs = {
  field: WpFieldSelector;
};

type WpConnectionType = {
  /** A list of connected nodes */
  readonly nodes: ReadonlyArray<WpNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPageInfoType;
};

type WpContentNode = {
  readonly children: ReadonlyArray<Node>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


type WpContentNode_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type WpContentNode_dateGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type WpContentNode_modifiedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type WpContentNode_modifiedGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type WpContentNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpContentNodeEdge>;
  readonly group: ReadonlyArray<WpContentNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpContentNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpContentNodeConnection_distinctArgs = {
  field: WpContentNodeFieldSelector;
};


type WpContentNodeConnection_groupArgs = {
  field: WpContentNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpContentNodeConnection_maxArgs = {
  field: WpContentNodeFieldSelector;
};


type WpContentNodeConnection_minArgs = {
  field: WpContentNodeFieldSelector;
};


type WpContentNodeConnection_sumArgs = {
  field: WpContentNodeFieldSelector;
};

type WpContentNodeConnectionEdgeType = {
  /** The connected ContentNode Node */
  readonly node: WpContentNode;
};

type WpContentNodeConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpContentNodeConnectionType = {
  /** A list of connected ContentNode Nodes */
  readonly nodes: ReadonlyArray<WpContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpContentNodeConnectionPageInfoType;
};

type WpContentNodeEdge = {
  readonly next: Maybe<WpContentNode>;
  readonly node: WpContentNode;
  readonly previous: Maybe<WpContentNode>;
};

type WpContentNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  readonly contentTypeName: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly dateGmt: InputMaybe<FieldSelectorEnum>;
  readonly desiredSlug: InputMaybe<FieldSelectorEnum>;
  readonly enclosure: InputMaybe<FieldSelectorEnum>;
  readonly guid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly modified: InputMaybe<FieldSelectorEnum>;
  readonly modifiedGmt: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly status: InputMaybe<FieldSelectorEnum>;
  readonly template: InputMaybe<WpContentTemplateFieldSelector>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpContentNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  readonly contentTypeName: InputMaybe<StringQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly dateGmt: InputMaybe<DateQueryOperatorInput>;
  readonly desiredSlug: InputMaybe<StringQueryOperatorInput>;
  readonly enclosure: InputMaybe<StringQueryOperatorInput>;
  readonly guid: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly modified: InputMaybe<DateQueryOperatorInput>;
  readonly modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly status: InputMaybe<StringQueryOperatorInput>;
  readonly template: InputMaybe<WpContentTemplateFilterInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpContentNodeFilterListInput = {
  readonly elemMatch: InputMaybe<WpContentNodeFilterInput>;
};

type WpContentNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpContentNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpContentNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpContentNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpContentNodeGroupConnection_distinctArgs = {
  field: WpContentNodeFieldSelector;
};


type WpContentNodeGroupConnection_groupArgs = {
  field: WpContentNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpContentNodeGroupConnection_maxArgs = {
  field: WpContentNodeFieldSelector;
};


type WpContentNodeGroupConnection_minArgs = {
  field: WpContentNodeFieldSelector;
};


type WpContentNodeGroupConnection_sumArgs = {
  field: WpContentNodeFieldSelector;
};

type WpContentNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  readonly contentTypeName: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly dateGmt: InputMaybe<SortOrderEnum>;
  readonly desiredSlug: InputMaybe<SortOrderEnum>;
  readonly enclosure: InputMaybe<SortOrderEnum>;
  readonly guid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly modified: InputMaybe<SortOrderEnum>;
  readonly modifiedGmt: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly status: InputMaybe<SortOrderEnum>;
  readonly template: InputMaybe<WpContentTemplateSortInput>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

/** Connection between the ContentNode type and the ContentType type */
type WpContentNodeToContentTypeConnectionEdgeType = WpContentTypeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpContentType;
};

type WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpContentTypeFieldSelector>;
};

type WpContentNodeToContentTypeConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpContentTypeFilterInput>;
};

type WpContentNodeToContentTypeConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpContentTypeSortInput>;
};

/** Connection between the ContentNode type and the User type */
type WpContentNodeToEditLastConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpUserConnectionEdgeType & {
  /** The node of the connection, without the edges */
  readonly node: WpUser;
};

type WpContentNodeToEditLastConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpUserFieldSelector>;
};

type WpContentNodeToEditLastConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpUserFilterInput>;
};

type WpContentNodeToEditLastConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpUserSortInput>;
};

/** Connection between the ContentNode type and the User type */
type WpContentNodeToEditLockConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpUserConnectionEdgeType & {
  /** The timestamp for when the node was last edited */
  readonly lockTimestamp: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  readonly node: WpUser;
};

type WpContentTemplate = {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

type WpContentTemplateFieldSelector = {
  readonly templateName: InputMaybe<FieldSelectorEnum>;
};

type WpContentTemplateFilterInput = {
  readonly templateName: InputMaybe<StringQueryOperatorInput>;
};

type WpContentTemplateSortInput = {
  readonly templateName: InputMaybe<SortOrderEnum>;
};

/** An Post Type object */
type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  /** The url path of the first page of the archive page for this content type. */
  readonly archivePath: Maybe<Scalars['String']>;
  /** Whether this content type should can be exported. */
  readonly canExport: Maybe<Scalars['Boolean']>;
  readonly children: ReadonlyArray<Node>;
  /** Connection between the ContentType type and the Taxonomy type */
  readonly connectedTaxonomies: Maybe<WpContentTypeToTaxonomyConnectionType>;
  /** Connection between the ContentType type and the ContentNode type */
  readonly contentNodes: Maybe<WpContentTypeToContentNodeConnectionType>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  readonly deleteWithUser: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  readonly description: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  readonly excludeFromSearch: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  readonly hasArchive: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** Display name of the content type. */
  readonly label: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  readonly labels: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  readonly menuIcon: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  readonly menuPosition: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  readonly public: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  readonly publiclyQueryable: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  readonly showInAdminBar: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  readonly showUi: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

type WpContentTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpContentTypeEdge>;
  readonly group: ReadonlyArray<WpContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpContentTypeConnection_distinctArgs = {
  field: WpContentTypeFieldSelector;
};


type WpContentTypeConnection_groupArgs = {
  field: WpContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpContentTypeConnection_maxArgs = {
  field: WpContentTypeFieldSelector;
};


type WpContentTypeConnection_minArgs = {
  field: WpContentTypeFieldSelector;
};


type WpContentTypeConnection_sumArgs = {
  field: WpContentTypeFieldSelector;
};

type WpContentTypeConnectionEdgeType = {
  /** The connected ContentType Node */
  readonly node: WpContentType;
};

type WpContentTypeConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpContentTypeConnectionType = {
  /** A list of connected ContentType Nodes */
  readonly nodes: ReadonlyArray<WpContentType>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpContentTypeConnectionPageInfoType;
};

type WpContentTypeEdge = {
  readonly next: Maybe<WpContentType>;
  readonly node: WpContentType;
  readonly previous: Maybe<WpContentType>;
};

type WpContentTypeFieldSelector = {
  readonly archivePath: InputMaybe<FieldSelectorEnum>;
  readonly canExport: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly connectedTaxonomies: InputMaybe<WpContentTypeToTaxonomyConnectionTypeFieldSelector>;
  readonly contentNodes: InputMaybe<WpContentTypeToContentNodeConnectionTypeFieldSelector>;
  readonly deleteWithUser: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly excludeFromSearch: InputMaybe<FieldSelectorEnum>;
  readonly graphqlPluralName: InputMaybe<FieldSelectorEnum>;
  readonly graphqlSingleName: InputMaybe<FieldSelectorEnum>;
  readonly hasArchive: InputMaybe<FieldSelectorEnum>;
  readonly hierarchical: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly label: InputMaybe<FieldSelectorEnum>;
  readonly labels: InputMaybe<WpPostTypeLabelDetailsFieldSelector>;
  readonly menuIcon: InputMaybe<FieldSelectorEnum>;
  readonly menuPosition: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly public: InputMaybe<FieldSelectorEnum>;
  readonly publiclyQueryable: InputMaybe<FieldSelectorEnum>;
  readonly restBase: InputMaybe<FieldSelectorEnum>;
  readonly restControllerClass: InputMaybe<FieldSelectorEnum>;
  readonly showInAdminBar: InputMaybe<FieldSelectorEnum>;
  readonly showInGraphql: InputMaybe<FieldSelectorEnum>;
  readonly showInMenu: InputMaybe<FieldSelectorEnum>;
  readonly showInNavMenus: InputMaybe<FieldSelectorEnum>;
  readonly showInRest: InputMaybe<FieldSelectorEnum>;
  readonly showUi: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpContentTypeFilterInput = {
  readonly archivePath: InputMaybe<StringQueryOperatorInput>;
  readonly canExport: InputMaybe<BooleanQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly connectedTaxonomies: InputMaybe<WpContentTypeToTaxonomyConnectionTypeFilterInput>;
  readonly contentNodes: InputMaybe<WpContentTypeToContentNodeConnectionTypeFilterInput>;
  readonly deleteWithUser: InputMaybe<BooleanQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly excludeFromSearch: InputMaybe<BooleanQueryOperatorInput>;
  readonly graphqlPluralName: InputMaybe<StringQueryOperatorInput>;
  readonly graphqlSingleName: InputMaybe<StringQueryOperatorInput>;
  readonly hasArchive: InputMaybe<BooleanQueryOperatorInput>;
  readonly hierarchical: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly label: InputMaybe<StringQueryOperatorInput>;
  readonly labels: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  readonly menuIcon: InputMaybe<StringQueryOperatorInput>;
  readonly menuPosition: InputMaybe<IntQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly public: InputMaybe<BooleanQueryOperatorInput>;
  readonly publiclyQueryable: InputMaybe<BooleanQueryOperatorInput>;
  readonly restBase: InputMaybe<StringQueryOperatorInput>;
  readonly restControllerClass: InputMaybe<StringQueryOperatorInput>;
  readonly showInAdminBar: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInGraphql: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInMenu: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInNavMenus: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInRest: InputMaybe<BooleanQueryOperatorInput>;
  readonly showUi: InputMaybe<BooleanQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpContentTypeFilterListInput = {
  readonly elemMatch: InputMaybe<WpContentTypeFilterInput>;
};

type WpContentTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpContentTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpContentTypeGroupConnection_distinctArgs = {
  field: WpContentTypeFieldSelector;
};


type WpContentTypeGroupConnection_groupArgs = {
  field: WpContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpContentTypeGroupConnection_maxArgs = {
  field: WpContentTypeFieldSelector;
};


type WpContentTypeGroupConnection_minArgs = {
  field: WpContentTypeFieldSelector;
};


type WpContentTypeGroupConnection_sumArgs = {
  field: WpContentTypeFieldSelector;
};

type WpContentTypeSortInput = {
  readonly archivePath: InputMaybe<SortOrderEnum>;
  readonly canExport: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly connectedTaxonomies: InputMaybe<WpContentTypeToTaxonomyConnectionTypeSortInput>;
  readonly contentNodes: InputMaybe<WpContentTypeToContentNodeConnectionTypeSortInput>;
  readonly deleteWithUser: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly excludeFromSearch: InputMaybe<SortOrderEnum>;
  readonly graphqlPluralName: InputMaybe<SortOrderEnum>;
  readonly graphqlSingleName: InputMaybe<SortOrderEnum>;
  readonly hasArchive: InputMaybe<SortOrderEnum>;
  readonly hierarchical: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly label: InputMaybe<SortOrderEnum>;
  readonly labels: InputMaybe<WpPostTypeLabelDetailsSortInput>;
  readonly menuIcon: InputMaybe<SortOrderEnum>;
  readonly menuPosition: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly public: InputMaybe<SortOrderEnum>;
  readonly publiclyQueryable: InputMaybe<SortOrderEnum>;
  readonly restBase: InputMaybe<SortOrderEnum>;
  readonly restControllerClass: InputMaybe<SortOrderEnum>;
  readonly showInAdminBar: InputMaybe<SortOrderEnum>;
  readonly showInGraphql: InputMaybe<SortOrderEnum>;
  readonly showInMenu: InputMaybe<SortOrderEnum>;
  readonly showInNavMenus: InputMaybe<SortOrderEnum>;
  readonly showInRest: InputMaybe<SortOrderEnum>;
  readonly showUi: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
type WpContentTypeToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpContentTypeToContentNodeConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpContentTypeToContentNodeConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpContentTypeToContentNodeConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the ContentType type and the ContentNode type */
type WpContentTypeToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpContentTypeToContentNodeConnectionPageInfoType;
};

type WpContentTypeToContentNodeConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpContentNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpContentTypeToContentNodeConnectionPageInfoTypeFieldSelector>;
};

type WpContentTypeToContentNodeConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpContentNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpContentTypeToContentNodeConnectionPageInfoTypeFilterInput>;
};

type WpContentTypeToContentNodeConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpContentNodeSortInput>;
  readonly pageInfo: InputMaybe<WpContentTypeToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
type WpContentTypeToTaxonomyConnectionPageInfoType = WpPageInfoType & WpTaxonomyConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpContentTypeToTaxonomyConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpContentTypeToTaxonomyConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpContentTypeToTaxonomyConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the ContentType type and the Taxonomy type */
type WpContentTypeToTaxonomyConnectionType = WpConnectionType & WpTaxonomyConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpTaxonomy>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpContentTypeToTaxonomyConnectionPageInfoType;
};

type WpContentTypeToTaxonomyConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpTaxonomyFieldSelector>;
  readonly pageInfo: InputMaybe<WpContentTypeToTaxonomyConnectionPageInfoTypeFieldSelector>;
};

type WpContentTypeToTaxonomyConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpTaxonomyFilterListInput>;
  readonly pageInfo: InputMaybe<WpContentTypeToTaxonomyConnectionPageInfoTypeFilterInput>;
};

type WpContentTypeToTaxonomyConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpTaxonomySortInput>;
  readonly pageInfo: InputMaybe<WpContentTypeToTaxonomyConnectionPageInfoTypeSortInput>;
};

type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
};

/** The template assigned to the node */
type WpDefaultTemplate = WpContentTemplate & {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** The discussion setting type */
type WpDiscussionSettings = {
  /** Allow people to submit comments on new posts. */
  readonly defaultCommentStatus: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly defaultPingStatus: Maybe<Scalars['String']>;
};

type WpDiscussionSettingsFieldSelector = {
  readonly defaultCommentStatus: InputMaybe<FieldSelectorEnum>;
  readonly defaultPingStatus: InputMaybe<FieldSelectorEnum>;
};

type WpDiscussionSettingsFilterInput = {
  readonly defaultCommentStatus: InputMaybe<StringQueryOperatorInput>;
  readonly defaultPingStatus: InputMaybe<StringQueryOperatorInput>;
};

type WpDiscussionSettingsSortInput = {
  readonly defaultCommentStatus: InputMaybe<SortOrderEnum>;
  readonly defaultPingStatus: InputMaybe<SortOrderEnum>;
};

type WpEdge = {
  readonly next: Maybe<Wp>;
  readonly node: Wp;
  readonly previous: Maybe<Wp>;
};

type WpEdgeType = {
  /** The connected node */
  readonly node: WpNode;
};

type WpFieldSelector = {
  readonly allSettings: InputMaybe<WpSettingsFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly discussionSettings: InputMaybe<WpDiscussionSettingsFieldSelector>;
  readonly generalSettings: InputMaybe<WpGeneralSettingsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly readingSettings: InputMaybe<WpReadingSettingsFieldSelector>;
  readonly wpGatsby: InputMaybe<WpWPGatsbyFieldSelector>;
  readonly writingSettings: InputMaybe<WpWritingSettingsFieldSelector>;
};

type WpFilterInput = {
  readonly allSettings: InputMaybe<WpSettingsFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly discussionSettings: InputMaybe<WpDiscussionSettingsFilterInput>;
  readonly generalSettings: InputMaybe<WpGeneralSettingsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly readingSettings: InputMaybe<WpReadingSettingsFilterInput>;
  readonly wpGatsby: InputMaybe<WpWPGatsbyFilterInput>;
  readonly writingSettings: InputMaybe<WpWritingSettingsFilterInput>;
};

/** The general setting type */
type WpGeneralSettings = {
  /** A date format for all date strings. */
  readonly dateFormat: Maybe<Scalars['String']>;
  /** Site tagline. */
  readonly description: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly email: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  readonly language: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  readonly startOfWeek: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  readonly timeFormat: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  readonly timezone: Maybe<Scalars['String']>;
  /** Site title. */
  readonly title: Maybe<Scalars['String']>;
  /** Site URL. */
  readonly url: Maybe<Scalars['String']>;
};

type WpGeneralSettingsFieldSelector = {
  readonly dateFormat: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly email: InputMaybe<FieldSelectorEnum>;
  readonly language: InputMaybe<FieldSelectorEnum>;
  readonly startOfWeek: InputMaybe<FieldSelectorEnum>;
  readonly timeFormat: InputMaybe<FieldSelectorEnum>;
  readonly timezone: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type WpGeneralSettingsFilterInput = {
  readonly dateFormat: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly language: InputMaybe<StringQueryOperatorInput>;
  readonly startOfWeek: InputMaybe<IntQueryOperatorInput>;
  readonly timeFormat: InputMaybe<StringQueryOperatorInput>;
  readonly timezone: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type WpGeneralSettingsSortInput = {
  readonly dateFormat: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly email: InputMaybe<SortOrderEnum>;
  readonly language: InputMaybe<SortOrderEnum>;
  readonly startOfWeek: InputMaybe<SortOrderEnum>;
  readonly timeFormat: InputMaybe<SortOrderEnum>;
  readonly timezone: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type WpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Wp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpGroupConnection_distinctArgs = {
  field: WpFieldSelector;
};


type WpGroupConnection_groupArgs = {
  field: WpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpGroupConnection_maxArgs = {
  field: WpFieldSelector;
};


type WpGroupConnection_minArgs = {
  field: WpFieldSelector;
};


type WpGroupConnection_sumArgs = {
  field: WpFieldSelector;
};

type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionType>;
  readonly children: ReadonlyArray<Node>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionType>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType>;
};


type WpHierarchicalContentNode_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type WpHierarchicalContentNode_dateGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type WpHierarchicalContentNode_modifiedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type WpHierarchicalContentNode_modifiedGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type WpHierarchicalContentNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpHierarchicalContentNodeEdge>;
  readonly group: ReadonlyArray<WpHierarchicalContentNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpHierarchicalContentNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpHierarchicalContentNodeConnection_distinctArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


type WpHierarchicalContentNodeConnection_groupArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpHierarchicalContentNodeConnection_maxArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


type WpHierarchicalContentNodeConnection_minArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


type WpHierarchicalContentNodeConnection_sumArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};

type WpHierarchicalContentNodeEdge = {
  readonly next: Maybe<WpHierarchicalContentNode>;
  readonly node: WpHierarchicalContentNode;
  readonly previous: Maybe<WpHierarchicalContentNode>;
};

type WpHierarchicalContentNodeFieldSelector = {
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  readonly contentTypeName: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly dateGmt: InputMaybe<FieldSelectorEnum>;
  readonly desiredSlug: InputMaybe<FieldSelectorEnum>;
  readonly enclosure: InputMaybe<FieldSelectorEnum>;
  readonly guid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly modified: InputMaybe<FieldSelectorEnum>;
  readonly modifiedGmt: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly status: InputMaybe<FieldSelectorEnum>;
  readonly template: InputMaybe<WpContentTemplateFieldSelector>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector>;
};

type WpHierarchicalContentNodeFilterInput = {
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  readonly contentTypeName: InputMaybe<StringQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly dateGmt: InputMaybe<DateQueryOperatorInput>;
  readonly desiredSlug: InputMaybe<StringQueryOperatorInput>;
  readonly enclosure: InputMaybe<StringQueryOperatorInput>;
  readonly guid: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly modified: InputMaybe<DateQueryOperatorInput>;
  readonly modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly status: InputMaybe<StringQueryOperatorInput>;
  readonly template: InputMaybe<WpContentTemplateFilterInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};

type WpHierarchicalContentNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpHierarchicalContentNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpHierarchicalContentNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpHierarchicalContentNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpHierarchicalContentNodeGroupConnection_distinctArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


type WpHierarchicalContentNodeGroupConnection_groupArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpHierarchicalContentNodeGroupConnection_maxArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


type WpHierarchicalContentNodeGroupConnection_minArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


type WpHierarchicalContentNodeGroupConnection_sumArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};

type WpHierarchicalContentNodeSortInput = {
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  readonly contentTypeName: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly dateGmt: InputMaybe<SortOrderEnum>;
  readonly desiredSlug: InputMaybe<SortOrderEnum>;
  readonly enclosure: InputMaybe<SortOrderEnum>;
  readonly guid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly modified: InputMaybe<SortOrderEnum>;
  readonly modifiedGmt: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly status: InputMaybe<SortOrderEnum>;
  readonly template: InputMaybe<WpContentTemplateSortInput>;
  readonly uri: InputMaybe<SortOrderEnum>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToContentNodeAncestorsConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoType;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpContentNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFieldSelector>;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpContentNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFilterInput>;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpContentNodeSortInput>;
  readonly pageInfo: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToContentNodeChildrenConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoType;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpContentNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFieldSelector>;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpContentNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFilterInput>;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpContentNodeSortInput>;
  readonly pageInfo: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeSortInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType = WpContentNodeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpContentNode;
};

type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpContentNodeFieldSelector>;
};

type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpContentNodeFilterInput>;
};

type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpContentNodeSortInput>;
};

type WpHierarchicalNode = {
  readonly children: ReadonlyArray<Node>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
};

type WpHierarchicalNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpHierarchicalNodeEdge>;
  readonly group: ReadonlyArray<WpHierarchicalNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpHierarchicalNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpHierarchicalNodeConnection_distinctArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


type WpHierarchicalNodeConnection_groupArgs = {
  field: WpHierarchicalNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpHierarchicalNodeConnection_maxArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


type WpHierarchicalNodeConnection_minArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


type WpHierarchicalNodeConnection_sumArgs = {
  field: WpHierarchicalNodeFieldSelector;
};

type WpHierarchicalNodeEdge = {
  readonly next: Maybe<WpHierarchicalNode>;
  readonly node: WpHierarchicalNode;
  readonly previous: Maybe<WpHierarchicalNode>;
};

type WpHierarchicalNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
};

type WpHierarchicalNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
};

type WpHierarchicalNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpHierarchicalNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpHierarchicalNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpHierarchicalNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpHierarchicalNodeGroupConnection_distinctArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


type WpHierarchicalNodeGroupConnection_groupArgs = {
  field: WpHierarchicalNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpHierarchicalNodeGroupConnection_maxArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


type WpHierarchicalNodeGroupConnection_minArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


type WpHierarchicalNodeGroupConnection_sumArgs = {
  field: WpHierarchicalNodeFieldSelector;
};

type WpHierarchicalNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
};

type WpHierarchicalTermNode = {
  readonly children: ReadonlyArray<Node>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

type WpHierarchicalTermNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpHierarchicalTermNodeEdge>;
  readonly group: ReadonlyArray<WpHierarchicalTermNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpHierarchicalTermNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpHierarchicalTermNodeConnection_distinctArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


type WpHierarchicalTermNodeConnection_groupArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpHierarchicalTermNodeConnection_maxArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


type WpHierarchicalTermNodeConnection_minArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


type WpHierarchicalTermNodeConnection_sumArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};

type WpHierarchicalTermNodeEdge = {
  readonly next: Maybe<WpHierarchicalTermNode>;
  readonly node: WpHierarchicalTermNode;
  readonly previous: Maybe<WpHierarchicalTermNode>;
};

type WpHierarchicalTermNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly count: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly taxonomyName: InputMaybe<FieldSelectorEnum>;
  readonly termGroupId: InputMaybe<FieldSelectorEnum>;
  readonly termTaxonomyId: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpHierarchicalTermNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly count: InputMaybe<IntQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly taxonomyName: InputMaybe<StringQueryOperatorInput>;
  readonly termGroupId: InputMaybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpHierarchicalTermNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpHierarchicalTermNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpHierarchicalTermNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpHierarchicalTermNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpHierarchicalTermNodeGroupConnection_distinctArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


type WpHierarchicalTermNodeGroupConnection_groupArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpHierarchicalTermNodeGroupConnection_maxArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


type WpHierarchicalTermNodeGroupConnection_minArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


type WpHierarchicalTermNodeGroupConnection_sumArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};

type WpHierarchicalTermNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly count: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly taxonomyName: InputMaybe<SortOrderEnum>;
  readonly termGroupId: InputMaybe<SortOrderEnum>;
  readonly termTaxonomyId: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

/** File details for a Media Item */
type WpMediaDetails = {
  /** The filename of the mediaItem */
  readonly file: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  readonly height: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  readonly meta: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  readonly sizes: Maybe<ReadonlyArray<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  readonly width: Maybe<Scalars['Int']>;
};

type WpMediaDetailsFieldSelector = {
  readonly file: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly meta: InputMaybe<WpMediaItemMetaFieldSelector>;
  readonly sizes: InputMaybe<WpMediaSizeFieldSelector>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type WpMediaDetailsFilterInput = {
  readonly file: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly meta: InputMaybe<WpMediaItemMetaFilterInput>;
  readonly sizes: InputMaybe<WpMediaSizeFilterListInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type WpMediaDetailsSortInput = {
  readonly file: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly meta: InputMaybe<WpMediaItemMetaSortInput>;
  readonly sizes: InputMaybe<WpMediaSizeSortInput>;
  readonly width: InputMaybe<SortOrderEnum>;
};

/** The mediaItem type */
type WpMediaItem = Node & RemoteFile & WpContentNode & WpDatabaseIdentifier & WpHierarchicalContentNode & WpHierarchicalNode & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  /** Alternative text to display when resource is not displayed */
  readonly altText: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionType>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  readonly caption: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the MediaItem type and the Comment type */
  readonly comments: Maybe<WpMediaItemToCommentConnectionType>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** Description of the image (stored as post_content) */
  readonly description: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  readonly fileSize: Maybe<Scalars['Int']>;
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** Whether the attachment object is password protected. */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  readonly localFile: Maybe<File>;
  /** Details about the mediaItem */
  readonly mediaDetails: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  readonly mediaItemUrl: Maybe<Scalars['String']>;
  /** Type of resource */
  readonly mediaType: Maybe<Scalars['String']>;
  readonly mimeType: Scalars['String'];
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The password for the attachment object. */
  readonly password: Maybe<Scalars['String']>;
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  /** The sizes attribute value for an image. */
  readonly sizes: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  readonly srcSet: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionType>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType>;
};


/** The mediaItem type */
type WpMediaItem_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
type WpMediaItem_dateGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
type WpMediaItem_gatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
type WpMediaItem_modifiedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
type WpMediaItem_modifiedGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
type WpMediaItem_resizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type WpMediaItemConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMediaItemEdge>;
  readonly group: ReadonlyArray<WpMediaItemGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMediaItem>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMediaItemConnection_distinctArgs = {
  field: WpMediaItemFieldSelector;
};


type WpMediaItemConnection_groupArgs = {
  field: WpMediaItemFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMediaItemConnection_maxArgs = {
  field: WpMediaItemFieldSelector;
};


type WpMediaItemConnection_minArgs = {
  field: WpMediaItemFieldSelector;
};


type WpMediaItemConnection_sumArgs = {
  field: WpMediaItemFieldSelector;
};

type WpMediaItemConnectionEdgeType = {
  /** The connected mediaItem Node */
  readonly node: WpMediaItem;
};

type WpMediaItemConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpMediaItemConnectionType = {
  /** A list of connected mediaItem Nodes */
  readonly nodes: ReadonlyArray<WpMediaItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpMediaItemConnectionPageInfoType;
};

type WpMediaItemEdge = {
  readonly next: Maybe<WpMediaItem>;
  readonly node: WpMediaItem;
  readonly previous: Maybe<WpMediaItem>;
};

type WpMediaItemFieldSelector = {
  readonly altText: InputMaybe<FieldSelectorEnum>;
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector>;
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  readonly authorDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly authorId: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly commentCount: InputMaybe<FieldSelectorEnum>;
  readonly commentStatus: InputMaybe<FieldSelectorEnum>;
  readonly comments: InputMaybe<WpMediaItemToCommentConnectionTypeFieldSelector>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  readonly contentTypeName: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly dateGmt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly desiredSlug: InputMaybe<FieldSelectorEnum>;
  readonly enclosure: InputMaybe<FieldSelectorEnum>;
  readonly fileSize: InputMaybe<FieldSelectorEnum>;
  readonly filename: InputMaybe<FieldSelectorEnum>;
  readonly filesize: InputMaybe<FieldSelectorEnum>;
  readonly gatsbyImage: InputMaybe<FieldSelectorEnum>;
  readonly guid: InputMaybe<FieldSelectorEnum>;
  readonly hasPassword: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly localFile: InputMaybe<FileFieldSelector>;
  readonly mediaDetails: InputMaybe<WpMediaDetailsFieldSelector>;
  readonly mediaItemUrl: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly mimeType: InputMaybe<FieldSelectorEnum>;
  readonly modified: InputMaybe<FieldSelectorEnum>;
  readonly modifiedGmt: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
  readonly password: InputMaybe<FieldSelectorEnum>;
  readonly publicUrl: InputMaybe<FieldSelectorEnum>;
  readonly resize: InputMaybe<RemoteFileResizeFieldSelector>;
  readonly sizes: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly sourceUrl: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly status: InputMaybe<FieldSelectorEnum>;
  readonly template: InputMaybe<WpContentTemplateFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector>;
};

type WpMediaItemFilterInput = {
  readonly altText: InputMaybe<StringQueryOperatorInput>;
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  readonly authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly authorId: InputMaybe<IDQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly commentCount: InputMaybe<IntQueryOperatorInput>;
  readonly commentStatus: InputMaybe<StringQueryOperatorInput>;
  readonly comments: InputMaybe<WpMediaItemToCommentConnectionTypeFilterInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  readonly contentTypeName: InputMaybe<StringQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly dateGmt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly desiredSlug: InputMaybe<StringQueryOperatorInput>;
  readonly enclosure: InputMaybe<StringQueryOperatorInput>;
  readonly fileSize: InputMaybe<IntQueryOperatorInput>;
  readonly filename: InputMaybe<StringQueryOperatorInput>;
  readonly filesize: InputMaybe<IntQueryOperatorInput>;
  readonly gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly guid: InputMaybe<StringQueryOperatorInput>;
  readonly hasPassword: InputMaybe<BooleanQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly mediaDetails: InputMaybe<WpMediaDetailsFilterInput>;
  readonly mediaItemUrl: InputMaybe<StringQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly mimeType: InputMaybe<StringQueryOperatorInput>;
  readonly modified: InputMaybe<DateQueryOperatorInput>;
  readonly modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
  readonly password: InputMaybe<StringQueryOperatorInput>;
  readonly publicUrl: InputMaybe<StringQueryOperatorInput>;
  readonly resize: InputMaybe<RemoteFileResizeFilterInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly sourceUrl: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly status: InputMaybe<StringQueryOperatorInput>;
  readonly template: InputMaybe<WpContentTemplateFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};

type WpMediaItemGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMediaItemEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpMediaItemGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMediaItem>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMediaItemGroupConnection_distinctArgs = {
  field: WpMediaItemFieldSelector;
};


type WpMediaItemGroupConnection_groupArgs = {
  field: WpMediaItemFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMediaItemGroupConnection_maxArgs = {
  field: WpMediaItemFieldSelector;
};


type WpMediaItemGroupConnection_minArgs = {
  field: WpMediaItemFieldSelector;
};


type WpMediaItemGroupConnection_sumArgs = {
  field: WpMediaItemFieldSelector;
};

/** Meta connected to a MediaItem */
type WpMediaItemMeta = {
  /** Aperture measurement of the media item. */
  readonly aperture: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  readonly camera: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  readonly caption: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  readonly copyright: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  readonly createdTimestamp: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  readonly credit: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  readonly focalLength: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  readonly iso: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  readonly orientation: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  readonly shutterSpeed: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  readonly title: Maybe<Scalars['String']>;
};

type WpMediaItemMetaFieldSelector = {
  readonly aperture: InputMaybe<FieldSelectorEnum>;
  readonly camera: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly copyright: InputMaybe<FieldSelectorEnum>;
  readonly createdTimestamp: InputMaybe<FieldSelectorEnum>;
  readonly credit: InputMaybe<FieldSelectorEnum>;
  readonly focalLength: InputMaybe<FieldSelectorEnum>;
  readonly iso: InputMaybe<FieldSelectorEnum>;
  readonly keywords: InputMaybe<FieldSelectorEnum>;
  readonly orientation: InputMaybe<FieldSelectorEnum>;
  readonly shutterSpeed: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type WpMediaItemMetaFilterInput = {
  readonly aperture: InputMaybe<FloatQueryOperatorInput>;
  readonly camera: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly createdTimestamp: InputMaybe<IntQueryOperatorInput>;
  readonly credit: InputMaybe<StringQueryOperatorInput>;
  readonly focalLength: InputMaybe<FloatQueryOperatorInput>;
  readonly iso: InputMaybe<IntQueryOperatorInput>;
  readonly keywords: InputMaybe<StringQueryOperatorInput>;
  readonly orientation: InputMaybe<StringQueryOperatorInput>;
  readonly shutterSpeed: InputMaybe<FloatQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type WpMediaItemMetaSortInput = {
  readonly aperture: InputMaybe<SortOrderEnum>;
  readonly camera: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly copyright: InputMaybe<SortOrderEnum>;
  readonly createdTimestamp: InputMaybe<SortOrderEnum>;
  readonly credit: InputMaybe<SortOrderEnum>;
  readonly focalLength: InputMaybe<SortOrderEnum>;
  readonly iso: InputMaybe<SortOrderEnum>;
  readonly keywords: InputMaybe<SortOrderEnum>;
  readonly orientation: InputMaybe<SortOrderEnum>;
  readonly shutterSpeed: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type WpMediaItemSortInput = {
  readonly altText: InputMaybe<SortOrderEnum>;
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput>;
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  readonly authorDatabaseId: InputMaybe<SortOrderEnum>;
  readonly authorId: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly commentCount: InputMaybe<SortOrderEnum>;
  readonly commentStatus: InputMaybe<SortOrderEnum>;
  readonly comments: InputMaybe<WpMediaItemToCommentConnectionTypeSortInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  readonly contentTypeName: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly dateGmt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly desiredSlug: InputMaybe<SortOrderEnum>;
  readonly enclosure: InputMaybe<SortOrderEnum>;
  readonly fileSize: InputMaybe<SortOrderEnum>;
  readonly filename: InputMaybe<SortOrderEnum>;
  readonly filesize: InputMaybe<SortOrderEnum>;
  readonly gatsbyImage: InputMaybe<SortOrderEnum>;
  readonly guid: InputMaybe<SortOrderEnum>;
  readonly hasPassword: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly localFile: InputMaybe<FileSortInput>;
  readonly mediaDetails: InputMaybe<WpMediaDetailsSortInput>;
  readonly mediaItemUrl: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly mimeType: InputMaybe<SortOrderEnum>;
  readonly modified: InputMaybe<SortOrderEnum>;
  readonly modifiedGmt: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
  readonly password: InputMaybe<SortOrderEnum>;
  readonly publicUrl: InputMaybe<SortOrderEnum>;
  readonly resize: InputMaybe<RemoteFileResizeSortInput>;
  readonly sizes: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly sourceUrl: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly status: InputMaybe<SortOrderEnum>;
  readonly template: InputMaybe<WpContentTemplateSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
type WpMediaItemToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpMediaItemToCommentConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpMediaItemToCommentConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpMediaItemToCommentConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the MediaItem type and the Comment type */
type WpMediaItemToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpComment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpMediaItemToCommentConnectionPageInfoType;
};

type WpMediaItemToCommentConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCommentFieldSelector>;
  readonly pageInfo: InputMaybe<WpMediaItemToCommentConnectionPageInfoTypeFieldSelector>;
};

type WpMediaItemToCommentConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCommentFilterListInput>;
  readonly pageInfo: InputMaybe<WpMediaItemToCommentConnectionPageInfoTypeFilterInput>;
};

type WpMediaItemToCommentConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCommentSortInput>;
  readonly pageInfo: InputMaybe<WpMediaItemToCommentConnectionPageInfoTypeSortInput>;
};

/** Details of an available size for a media item */
type WpMediaSize = {
  /** The filename of the referenced size */
  readonly file: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  readonly fileSize: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  readonly height: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  readonly mimeType: Maybe<Scalars['String']>;
  /** The referenced size name */
  readonly name: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  readonly width: Maybe<Scalars['String']>;
};

type WpMediaSizeFieldSelector = {
  readonly file: InputMaybe<FieldSelectorEnum>;
  readonly fileSize: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mimeType: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly sourceUrl: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type WpMediaSizeFilterInput = {
  readonly file: InputMaybe<StringQueryOperatorInput>;
  readonly fileSize: InputMaybe<IntQueryOperatorInput>;
  readonly height: InputMaybe<StringQueryOperatorInput>;
  readonly mimeType: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly sourceUrl: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<StringQueryOperatorInput>;
};

type WpMediaSizeFilterListInput = {
  readonly elemMatch: InputMaybe<WpMediaSizeFilterInput>;
};

type WpMediaSizeSortInput = {
  readonly file: InputMaybe<SortOrderEnum>;
  readonly fileSize: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mimeType: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly sourceUrl: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
type WpMenu = Node & WpDatabaseIdentifier & WpNode & {
  readonly children: ReadonlyArray<Node>;
  /** The number of items in the menu */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** The locations a menu is assigned to */
  readonly locations: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  readonly menuItems: Maybe<WpMenuToMenuItemConnectionType>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  readonly slug: Maybe<Scalars['String']>;
};

type WpMenuConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMenuEdge>;
  readonly group: ReadonlyArray<WpMenuGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMenu>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMenuConnection_distinctArgs = {
  field: WpMenuFieldSelector;
};


type WpMenuConnection_groupArgs = {
  field: WpMenuFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMenuConnection_maxArgs = {
  field: WpMenuFieldSelector;
};


type WpMenuConnection_minArgs = {
  field: WpMenuFieldSelector;
};


type WpMenuConnection_sumArgs = {
  field: WpMenuFieldSelector;
};

type WpMenuConnectionEdgeType = {
  /** The connected Menu Node */
  readonly node: WpMenu;
};

type WpMenuConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpMenuConnectionType = {
  /** A list of connected Menu Nodes */
  readonly nodes: ReadonlyArray<WpMenu>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpMenuConnectionPageInfoType;
};

type WpMenuEdge = {
  readonly next: Maybe<WpMenu>;
  readonly node: WpMenu;
  readonly previous: Maybe<WpMenu>;
};

type WpMenuFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly count: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locations: InputMaybe<FieldSelectorEnum>;
  readonly menuItems: InputMaybe<WpMenuToMenuItemConnectionTypeFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
};

type WpMenuFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly count: InputMaybe<IntQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locations: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  readonly menuItems: InputMaybe<WpMenuToMenuItemConnectionTypeFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
};

type WpMenuGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMenuEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpMenuGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMenu>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMenuGroupConnection_distinctArgs = {
  field: WpMenuFieldSelector;
};


type WpMenuGroupConnection_groupArgs = {
  field: WpMenuFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMenuGroupConnection_maxArgs = {
  field: WpMenuFieldSelector;
};


type WpMenuGroupConnection_minArgs = {
  field: WpMenuFieldSelector;
};


type WpMenuGroupConnection_sumArgs = {
  field: WpMenuFieldSelector;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
type WpMenuItem = Node & WpDatabaseIdentifier & WpNode & {
  /** Connection between the MenuItem type and the MenuItem type */
  readonly childItems: Maybe<WpMenuItemToMenuItemConnectionType>;
  readonly children: ReadonlyArray<Node>;
  /** Connection from MenuItem to it&#039;s connected node */
  readonly connectedNode: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeType>;
  /** Class attribute for the menu item link */
  readonly cssClasses: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Description of the menu item. */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Label or title of the menu item. */
  readonly label: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  readonly linkRelationship: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  readonly locations: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  readonly menu: Maybe<WpMenuItemToMenuConnectionEdgeType>;
  readonly nodeType: Maybe<Scalars['String']>;
  /** Menu item order */
  readonly order: Maybe<Scalars['Int']>;
  readonly parent: Maybe<Node>;
  /** The database id of the parent menu item or null if it is the root */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  readonly path: Maybe<Scalars['String']>;
  /** Target attribute for the menu item link. */
  readonly target: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  readonly title: Maybe<Scalars['String']>;
  /** The uri of the resource the menu item links to */
  readonly uri: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  readonly url: Maybe<Scalars['String']>;
};

type WpMenuItemConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMenuItemEdge>;
  readonly group: ReadonlyArray<WpMenuItemGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMenuItem>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMenuItemConnection_distinctArgs = {
  field: WpMenuItemFieldSelector;
};


type WpMenuItemConnection_groupArgs = {
  field: WpMenuItemFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMenuItemConnection_maxArgs = {
  field: WpMenuItemFieldSelector;
};


type WpMenuItemConnection_minArgs = {
  field: WpMenuItemFieldSelector;
};


type WpMenuItemConnection_sumArgs = {
  field: WpMenuItemFieldSelector;
};

type WpMenuItemConnectionEdgeType = {
  /** The connected MenuItem Node */
  readonly node: WpMenuItem;
};

type WpMenuItemConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpMenuItemConnectionType = {
  /** A list of connected MenuItem Nodes */
  readonly nodes: ReadonlyArray<WpMenuItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpMenuItemConnectionPageInfoType;
};

type WpMenuItemEdge = {
  readonly next: Maybe<WpMenuItem>;
  readonly node: WpMenuItem;
  readonly previous: Maybe<WpMenuItem>;
};

type WpMenuItemFieldSelector = {
  readonly childItems: InputMaybe<WpMenuItemToMenuItemConnectionTypeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly connectedNode: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeFieldSelector>;
  readonly cssClasses: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly label: InputMaybe<FieldSelectorEnum>;
  readonly linkRelationship: InputMaybe<FieldSelectorEnum>;
  readonly locations: InputMaybe<FieldSelectorEnum>;
  readonly menu: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly order: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly target: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type WpMenuItemFilterInput = {
  readonly childItems: InputMaybe<WpMenuItemToMenuItemConnectionTypeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly connectedNode: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeFilterInput>;
  readonly cssClasses: InputMaybe<StringQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly label: InputMaybe<StringQueryOperatorInput>;
  readonly linkRelationship: InputMaybe<StringQueryOperatorInput>;
  readonly locations: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  readonly menu: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly order: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly target: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type WpMenuItemFilterListInput = {
  readonly elemMatch: InputMaybe<WpMenuItemFilterInput>;
};

type WpMenuItemGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMenuItemEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpMenuItemGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMenuItem>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMenuItemGroupConnection_distinctArgs = {
  field: WpMenuItemFieldSelector;
};


type WpMenuItemGroupConnection_groupArgs = {
  field: WpMenuItemFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMenuItemGroupConnection_maxArgs = {
  field: WpMenuItemFieldSelector;
};


type WpMenuItemGroupConnection_minArgs = {
  field: WpMenuItemFieldSelector;
};


type WpMenuItemGroupConnection_sumArgs = {
  field: WpMenuItemFieldSelector;
};

type WpMenuItemLinkable = {
  readonly children: ReadonlyArray<Node>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

type WpMenuItemLinkableConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMenuItemLinkableEdge>;
  readonly group: ReadonlyArray<WpMenuItemLinkableGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMenuItemLinkable>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMenuItemLinkableConnection_distinctArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


type WpMenuItemLinkableConnection_groupArgs = {
  field: WpMenuItemLinkableFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMenuItemLinkableConnection_maxArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


type WpMenuItemLinkableConnection_minArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


type WpMenuItemLinkableConnection_sumArgs = {
  field: WpMenuItemLinkableFieldSelector;
};

type WpMenuItemLinkableConnectionEdgeType = {
  /** The connected MenuItemLinkable Node */
  readonly node: WpMenuItemLinkable;
};

type WpMenuItemLinkableEdge = {
  readonly next: Maybe<WpMenuItemLinkable>;
  readonly node: WpMenuItemLinkable;
  readonly previous: Maybe<WpMenuItemLinkable>;
};

type WpMenuItemLinkableFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpMenuItemLinkableFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpMenuItemLinkableGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpMenuItemLinkableEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpMenuItemLinkableGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpMenuItemLinkable>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpMenuItemLinkableGroupConnection_distinctArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


type WpMenuItemLinkableGroupConnection_groupArgs = {
  field: WpMenuItemLinkableFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpMenuItemLinkableGroupConnection_maxArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


type WpMenuItemLinkableGroupConnection_minArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


type WpMenuItemLinkableGroupConnection_sumArgs = {
  field: WpMenuItemLinkableFieldSelector;
};

type WpMenuItemLinkableSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

type WpMenuItemSortInput = {
  readonly childItems: InputMaybe<WpMenuItemToMenuItemConnectionTypeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly connectedNode: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeSortInput>;
  readonly cssClasses: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly label: InputMaybe<SortOrderEnum>;
  readonly linkRelationship: InputMaybe<SortOrderEnum>;
  readonly locations: InputMaybe<SortOrderEnum>;
  readonly menu: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly order: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly target: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

/** Connection between the MenuItem type and the Menu type */
type WpMenuItemToMenuConnectionEdgeType = WpEdgeType & WpMenuConnectionEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpMenu;
};

type WpMenuItemToMenuConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpMenuFieldSelector>;
};

type WpMenuItemToMenuConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpMenuFilterInput>;
};

type WpMenuItemToMenuConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpMenuSortInput>;
};

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
type WpMenuItemToMenuItemConnectionPageInfoType = WpMenuItemConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpMenuItemToMenuItemConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpMenuItemToMenuItemConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpMenuItemToMenuItemConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the MenuItem type and the MenuItem type */
type WpMenuItemToMenuItemConnectionType = WpConnectionType & WpMenuItemConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpMenuItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpMenuItemToMenuItemConnectionPageInfoType;
};

type WpMenuItemToMenuItemConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpMenuItemFieldSelector>;
  readonly pageInfo: InputMaybe<WpMenuItemToMenuItemConnectionPageInfoTypeFieldSelector>;
};

type WpMenuItemToMenuItemConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpMenuItemFilterListInput>;
  readonly pageInfo: InputMaybe<WpMenuItemToMenuItemConnectionPageInfoTypeFilterInput>;
};

type WpMenuItemToMenuItemConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpMenuItemSortInput>;
  readonly pageInfo: InputMaybe<WpMenuItemToMenuItemConnectionPageInfoTypeSortInput>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
type WpMenuItemToMenuItemLinkableConnectionEdgeType = WpEdgeType & WpMenuItemLinkableConnectionEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpMenuItemLinkable;
};

type WpMenuItemToMenuItemLinkableConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpMenuItemLinkableFieldSelector>;
};

type WpMenuItemToMenuItemLinkableConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpMenuItemLinkableFilterInput>;
};

type WpMenuItemToMenuItemLinkableConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpMenuItemLinkableSortInput>;
};

/** Registered menu locations */
type WpMenuLocationEnum =
  | 'EMPTY';

type WpMenuLocationEnumQueryOperatorInput = {
  readonly eq: InputMaybe<WpMenuLocationEnum>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<WpMenuLocationEnum>>>;
  readonly ne: InputMaybe<WpMenuLocationEnum>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<WpMenuLocationEnum>>>;
};

type WpMenuSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly count: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locations: InputMaybe<SortOrderEnum>;
  readonly menuItems: InputMaybe<WpMenuToMenuItemConnectionTypeSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
type WpMenuToMenuItemConnectionPageInfoType = WpMenuItemConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpMenuToMenuItemConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpMenuToMenuItemConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpMenuToMenuItemConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Menu type and the MenuItem type */
type WpMenuToMenuItemConnectionType = WpConnectionType & WpMenuItemConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpMenuItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpMenuToMenuItemConnectionPageInfoType;
};

type WpMenuToMenuItemConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpMenuItemFieldSelector>;
  readonly pageInfo: InputMaybe<WpMenuToMenuItemConnectionPageInfoTypeFieldSelector>;
};

type WpMenuToMenuItemConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpMenuItemFilterListInput>;
  readonly pageInfo: InputMaybe<WpMenuToMenuItemConnectionPageInfoTypeFilterInput>;
};

type WpMenuToMenuItemConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpMenuItemSortInput>;
  readonly pageInfo: InputMaybe<WpMenuToMenuItemConnectionPageInfoTypeSortInput>;
};

type WpNode = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID'];
};

type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpNodeWithAuthorConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithAuthorEdge>;
  readonly group: ReadonlyArray<WpNodeWithAuthorGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithAuthor>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithAuthorConnection_distinctArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


type WpNodeWithAuthorConnection_groupArgs = {
  field: WpNodeWithAuthorFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithAuthorConnection_maxArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


type WpNodeWithAuthorConnection_minArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


type WpNodeWithAuthorConnection_sumArgs = {
  field: WpNodeWithAuthorFieldSelector;
};

type WpNodeWithAuthorEdge = {
  readonly next: Maybe<WpNodeWithAuthor>;
  readonly node: WpNodeWithAuthor;
  readonly previous: Maybe<WpNodeWithAuthor>;
};

type WpNodeWithAuthorFieldSelector = {
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  readonly authorDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly authorId: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpNodeWithAuthorFilterInput = {
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  readonly authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly authorId: InputMaybe<IDQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpNodeWithAuthorGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithAuthorEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithAuthorGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithAuthor>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithAuthorGroupConnection_distinctArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


type WpNodeWithAuthorGroupConnection_groupArgs = {
  field: WpNodeWithAuthorFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithAuthorGroupConnection_maxArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


type WpNodeWithAuthorGroupConnection_minArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


type WpNodeWithAuthorGroupConnection_sumArgs = {
  field: WpNodeWithAuthorFieldSelector;
};

type WpNodeWithAuthorSortInput = {
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  readonly authorDatabaseId: InputMaybe<SortOrderEnum>;
  readonly authorId: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

/** Connection between the NodeWithAuthor type and the User type */
type WpNodeWithAuthorToUserConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpUserConnectionEdgeType & {
  /** The node of the connection, without the edges */
  readonly node: WpUser;
};

type WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpUserFieldSelector>;
};

type WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpUserFilterInput>;
};

type WpNodeWithAuthorToUserConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpUserSortInput>;
};

type WpNodeWithComments = {
  readonly children: ReadonlyArray<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpNodeWithCommentsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithCommentsEdge>;
  readonly group: ReadonlyArray<WpNodeWithCommentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithComments>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithCommentsConnection_distinctArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


type WpNodeWithCommentsConnection_groupArgs = {
  field: WpNodeWithCommentsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithCommentsConnection_maxArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


type WpNodeWithCommentsConnection_minArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


type WpNodeWithCommentsConnection_sumArgs = {
  field: WpNodeWithCommentsFieldSelector;
};

type WpNodeWithCommentsEdge = {
  readonly next: Maybe<WpNodeWithComments>;
  readonly node: WpNodeWithComments;
  readonly previous: Maybe<WpNodeWithComments>;
};

type WpNodeWithCommentsFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly commentCount: InputMaybe<FieldSelectorEnum>;
  readonly commentStatus: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpNodeWithCommentsFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly commentCount: InputMaybe<IntQueryOperatorInput>;
  readonly commentStatus: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpNodeWithCommentsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithCommentsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithCommentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithComments>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithCommentsGroupConnection_distinctArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


type WpNodeWithCommentsGroupConnection_groupArgs = {
  field: WpNodeWithCommentsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithCommentsGroupConnection_maxArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


type WpNodeWithCommentsGroupConnection_minArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


type WpNodeWithCommentsGroupConnection_sumArgs = {
  field: WpNodeWithCommentsFieldSelector;
};

type WpNodeWithCommentsSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly commentCount: InputMaybe<SortOrderEnum>;
  readonly commentStatus: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type WpNodeWithContentEditor = {
  readonly children: ReadonlyArray<Node>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpNodeWithContentEditorConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithContentEditorEdge>;
  readonly group: ReadonlyArray<WpNodeWithContentEditorGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithContentEditor>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithContentEditorConnection_distinctArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


type WpNodeWithContentEditorConnection_groupArgs = {
  field: WpNodeWithContentEditorFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithContentEditorConnection_maxArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


type WpNodeWithContentEditorConnection_minArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


type WpNodeWithContentEditorConnection_sumArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};

type WpNodeWithContentEditorEdge = {
  readonly next: Maybe<WpNodeWithContentEditor>;
  readonly node: WpNodeWithContentEditor;
  readonly previous: Maybe<WpNodeWithContentEditor>;
};

type WpNodeWithContentEditorFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpNodeWithContentEditorFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpNodeWithContentEditorGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithContentEditorEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithContentEditorGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithContentEditor>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithContentEditorGroupConnection_distinctArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


type WpNodeWithContentEditorGroupConnection_groupArgs = {
  field: WpNodeWithContentEditorFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithContentEditorGroupConnection_maxArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


type WpNodeWithContentEditorGroupConnection_minArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


type WpNodeWithContentEditorGroupConnection_sumArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};

type WpNodeWithContentEditorSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type WpNodeWithExcerpt = {
  readonly children: ReadonlyArray<Node>;
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpNodeWithExcerptConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithExcerptEdge>;
  readonly group: ReadonlyArray<WpNodeWithExcerptGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithExcerpt>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithExcerptConnection_distinctArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


type WpNodeWithExcerptConnection_groupArgs = {
  field: WpNodeWithExcerptFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithExcerptConnection_maxArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


type WpNodeWithExcerptConnection_minArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


type WpNodeWithExcerptConnection_sumArgs = {
  field: WpNodeWithExcerptFieldSelector;
};

type WpNodeWithExcerptEdge = {
  readonly next: Maybe<WpNodeWithExcerpt>;
  readonly node: WpNodeWithExcerpt;
  readonly previous: Maybe<WpNodeWithExcerpt>;
};

type WpNodeWithExcerptFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpNodeWithExcerptFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpNodeWithExcerptGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithExcerptEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithExcerptGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithExcerpt>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithExcerptGroupConnection_distinctArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


type WpNodeWithExcerptGroupConnection_groupArgs = {
  field: WpNodeWithExcerptFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithExcerptGroupConnection_maxArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


type WpNodeWithExcerptGroupConnection_minArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


type WpNodeWithExcerptGroupConnection_sumArgs = {
  field: WpNodeWithExcerptFieldSelector;
};

type WpNodeWithExcerptSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type WpNodeWithFeaturedImage = {
  readonly children: ReadonlyArray<Node>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeType>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpNodeWithFeaturedImageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithFeaturedImageEdge>;
  readonly group: ReadonlyArray<WpNodeWithFeaturedImageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithFeaturedImage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithFeaturedImageConnection_distinctArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


type WpNodeWithFeaturedImageConnection_groupArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithFeaturedImageConnection_maxArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


type WpNodeWithFeaturedImageConnection_minArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


type WpNodeWithFeaturedImageConnection_sumArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};

type WpNodeWithFeaturedImageEdge = {
  readonly next: Maybe<WpNodeWithFeaturedImage>;
  readonly node: WpNodeWithFeaturedImage;
  readonly previous: Maybe<WpNodeWithFeaturedImage>;
};

type WpNodeWithFeaturedImageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector>;
  readonly featuredImageDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly featuredImageId: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpNodeWithFeaturedImageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  readonly featuredImageDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly featuredImageId: InputMaybe<IDQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpNodeWithFeaturedImageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithFeaturedImageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithFeaturedImageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithFeaturedImage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithFeaturedImageGroupConnection_distinctArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


type WpNodeWithFeaturedImageGroupConnection_groupArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithFeaturedImageGroupConnection_maxArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


type WpNodeWithFeaturedImageGroupConnection_minArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


type WpNodeWithFeaturedImageGroupConnection_sumArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};

type WpNodeWithFeaturedImageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput>;
  readonly featuredImageDatabaseId: InputMaybe<SortOrderEnum>;
  readonly featuredImageId: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
type WpNodeWithFeaturedImageToMediaItemConnectionEdgeType = WpEdgeType & WpMediaItemConnectionEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpMediaItem;
};

type WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpMediaItemFieldSelector>;
};

type WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpMediaItemFilterInput>;
};

type WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpMediaItemSortInput>;
};

type WpNodeWithPageAttributes = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpNodeWithPageAttributesConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithPageAttributesEdge>;
  readonly group: ReadonlyArray<WpNodeWithPageAttributesGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithPageAttributes>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithPageAttributesConnection_distinctArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


type WpNodeWithPageAttributesConnection_groupArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithPageAttributesConnection_maxArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


type WpNodeWithPageAttributesConnection_minArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


type WpNodeWithPageAttributesConnection_sumArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};

type WpNodeWithPageAttributesEdge = {
  readonly next: Maybe<WpNodeWithPageAttributes>;
  readonly node: WpNodeWithPageAttributes;
  readonly previous: Maybe<WpNodeWithPageAttributes>;
};

type WpNodeWithPageAttributesFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly menuOrder: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpNodeWithPageAttributesFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly menuOrder: InputMaybe<IntQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpNodeWithPageAttributesGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithPageAttributesEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithPageAttributesGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithPageAttributes>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithPageAttributesGroupConnection_distinctArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


type WpNodeWithPageAttributesGroupConnection_groupArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithPageAttributesGroupConnection_maxArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


type WpNodeWithPageAttributesGroupConnection_minArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


type WpNodeWithPageAttributesGroupConnection_sumArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};

type WpNodeWithPageAttributesSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly menuOrder: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type WpNodeWithRevisions = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpNodeWithRevisionsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithRevisionsEdge>;
  readonly group: ReadonlyArray<WpNodeWithRevisionsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithRevisions>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithRevisionsConnection_distinctArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


type WpNodeWithRevisionsConnection_groupArgs = {
  field: WpNodeWithRevisionsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithRevisionsConnection_maxArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


type WpNodeWithRevisionsConnection_minArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


type WpNodeWithRevisionsConnection_sumArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};

type WpNodeWithRevisionsEdge = {
  readonly next: Maybe<WpNodeWithRevisions>;
  readonly node: WpNodeWithRevisions;
  readonly previous: Maybe<WpNodeWithRevisions>;
};

type WpNodeWithRevisionsFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isRevision: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpNodeWithRevisionsFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isRevision: InputMaybe<BooleanQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpNodeWithRevisionsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithRevisionsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithRevisionsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithRevisions>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithRevisionsGroupConnection_distinctArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


type WpNodeWithRevisionsGroupConnection_groupArgs = {
  field: WpNodeWithRevisionsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithRevisionsGroupConnection_maxArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


type WpNodeWithRevisionsGroupConnection_minArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


type WpNodeWithRevisionsGroupConnection_sumArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};

type WpNodeWithRevisionsSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isRevision: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
type WpNodeWithRevisionsToContentNodeConnectionEdgeType = WpContentNodeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  /** The node of the connection, without the edges */
  readonly node: WpContentNode;
};

type WpNodeWithTemplate = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The template assigned to the node */
  readonly template: Maybe<WpContentTemplate>;
};

type WpNodeWithTemplateConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithTemplateEdge>;
  readonly group: ReadonlyArray<WpNodeWithTemplateGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithTemplate>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithTemplateConnection_distinctArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


type WpNodeWithTemplateConnection_groupArgs = {
  field: WpNodeWithTemplateFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithTemplateConnection_maxArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


type WpNodeWithTemplateConnection_minArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


type WpNodeWithTemplateConnection_sumArgs = {
  field: WpNodeWithTemplateFieldSelector;
};

type WpNodeWithTemplateEdge = {
  readonly next: Maybe<WpNodeWithTemplate>;
  readonly node: WpNodeWithTemplate;
  readonly previous: Maybe<WpNodeWithTemplate>;
};

type WpNodeWithTemplateFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly template: InputMaybe<WpContentTemplateFieldSelector>;
};

type WpNodeWithTemplateFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly template: InputMaybe<WpContentTemplateFilterInput>;
};

type WpNodeWithTemplateGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithTemplateEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithTemplateGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithTemplate>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithTemplateGroupConnection_distinctArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


type WpNodeWithTemplateGroupConnection_groupArgs = {
  field: WpNodeWithTemplateFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithTemplateGroupConnection_maxArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


type WpNodeWithTemplateGroupConnection_minArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


type WpNodeWithTemplateGroupConnection_sumArgs = {
  field: WpNodeWithTemplateFieldSelector;
};

type WpNodeWithTemplateSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly template: InputMaybe<WpContentTemplateSortInput>;
};

type WpNodeWithTitle = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
};

type WpNodeWithTitleConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithTitleEdge>;
  readonly group: ReadonlyArray<WpNodeWithTitleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithTitle>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithTitleConnection_distinctArgs = {
  field: WpNodeWithTitleFieldSelector;
};


type WpNodeWithTitleConnection_groupArgs = {
  field: WpNodeWithTitleFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithTitleConnection_maxArgs = {
  field: WpNodeWithTitleFieldSelector;
};


type WpNodeWithTitleConnection_minArgs = {
  field: WpNodeWithTitleFieldSelector;
};


type WpNodeWithTitleConnection_sumArgs = {
  field: WpNodeWithTitleFieldSelector;
};

type WpNodeWithTitleEdge = {
  readonly next: Maybe<WpNodeWithTitle>;
  readonly node: WpNodeWithTitle;
  readonly previous: Maybe<WpNodeWithTitle>;
};

type WpNodeWithTitleFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type WpNodeWithTitleFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type WpNodeWithTitleGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithTitleEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithTitleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithTitle>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithTitleGroupConnection_distinctArgs = {
  field: WpNodeWithTitleFieldSelector;
};


type WpNodeWithTitleGroupConnection_groupArgs = {
  field: WpNodeWithTitleFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithTitleGroupConnection_maxArgs = {
  field: WpNodeWithTitleFieldSelector;
};


type WpNodeWithTitleGroupConnection_minArgs = {
  field: WpNodeWithTitleFieldSelector;
};


type WpNodeWithTitleGroupConnection_sumArgs = {
  field: WpNodeWithTitleFieldSelector;
};

type WpNodeWithTitleSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type WpNodeWithTrackbacks = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type WpNodeWithTrackbacksConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithTrackbacksEdge>;
  readonly group: ReadonlyArray<WpNodeWithTrackbacksGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithTrackbacks>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithTrackbacksConnection_distinctArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


type WpNodeWithTrackbacksConnection_groupArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithTrackbacksConnection_maxArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


type WpNodeWithTrackbacksConnection_minArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


type WpNodeWithTrackbacksConnection_sumArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};

type WpNodeWithTrackbacksEdge = {
  readonly next: Maybe<WpNodeWithTrackbacks>;
  readonly node: WpNodeWithTrackbacks;
  readonly previous: Maybe<WpNodeWithTrackbacks>;
};

type WpNodeWithTrackbacksFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pingStatus: InputMaybe<FieldSelectorEnum>;
  readonly pinged: InputMaybe<FieldSelectorEnum>;
  readonly toPing: InputMaybe<FieldSelectorEnum>;
};

type WpNodeWithTrackbacksFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pingStatus: InputMaybe<StringQueryOperatorInput>;
  readonly pinged: InputMaybe<StringQueryOperatorInput>;
  readonly toPing: InputMaybe<StringQueryOperatorInput>;
};

type WpNodeWithTrackbacksGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpNodeWithTrackbacksEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpNodeWithTrackbacksGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpNodeWithTrackbacks>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpNodeWithTrackbacksGroupConnection_distinctArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


type WpNodeWithTrackbacksGroupConnection_groupArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpNodeWithTrackbacksGroupConnection_maxArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


type WpNodeWithTrackbacksGroupConnection_minArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


type WpNodeWithTrackbacksGroupConnection_sumArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};

type WpNodeWithTrackbacksSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pingStatus: InputMaybe<SortOrderEnum>;
  readonly pinged: InputMaybe<SortOrderEnum>;
  readonly toPing: InputMaybe<SortOrderEnum>;
};

type WpOneToOneConnectionType = {
  /** The connected node */
  readonly node: WpNode;
};

/** The page type */
type WpPage = Node & WpContentNode & WpDatabaseIdentifier & WpHierarchicalContentNode & WpHierarchicalNode & WpMenuItemLinkable & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithContentEditor & WpNodeWithFeaturedImage & WpNodeWithPageAttributes & WpNodeWithRevisions & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionType>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  readonly children: ReadonlyArray<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the Page type and the Comment type */
  readonly comments: Maybe<WpPageToCommentConnectionType>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeType>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** Whether the page object is password protected. */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether this page is set to the privacy page. */
  readonly isPrivacyPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The password for the page object. */
  readonly password: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionType>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType>;
};


/** The page type */
type WpPage_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The page type */
type WpPage_dateGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The page type */
type WpPage_modifiedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The page type */
type WpPage_modifiedGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type WpPageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpPageEdge>;
  readonly group: ReadonlyArray<WpPageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpPage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpPageConnection_distinctArgs = {
  field: WpPageFieldSelector;
};


type WpPageConnection_groupArgs = {
  field: WpPageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpPageConnection_maxArgs = {
  field: WpPageFieldSelector;
};


type WpPageConnection_minArgs = {
  field: WpPageFieldSelector;
};


type WpPageConnection_sumArgs = {
  field: WpPageFieldSelector;
};

type WpPageConnectionEdgeType = {
  /** The connected page Node */
  readonly node: WpPage;
};

type WpPageConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPageConnectionType = {
  /** A list of connected page Nodes */
  readonly nodes: ReadonlyArray<WpPage>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPageConnectionPageInfoType;
};

type WpPageEdge = {
  readonly next: Maybe<WpPage>;
  readonly node: WpPage;
  readonly previous: Maybe<WpPage>;
};

type WpPageFieldSelector = {
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector>;
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  readonly authorDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly authorId: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly commentCount: InputMaybe<FieldSelectorEnum>;
  readonly commentStatus: InputMaybe<FieldSelectorEnum>;
  readonly comments: InputMaybe<WpPageToCommentConnectionTypeFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  readonly contentTypeName: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly dateGmt: InputMaybe<FieldSelectorEnum>;
  readonly desiredSlug: InputMaybe<FieldSelectorEnum>;
  readonly enclosure: InputMaybe<FieldSelectorEnum>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector>;
  readonly featuredImageDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly featuredImageId: InputMaybe<FieldSelectorEnum>;
  readonly guid: InputMaybe<FieldSelectorEnum>;
  readonly hasPassword: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isPrivacyPage: InputMaybe<FieldSelectorEnum>;
  readonly isRevision: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly menuOrder: InputMaybe<FieldSelectorEnum>;
  readonly modified: InputMaybe<FieldSelectorEnum>;
  readonly modifiedGmt: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly parentDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly parentId: InputMaybe<FieldSelectorEnum>;
  readonly password: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly status: InputMaybe<FieldSelectorEnum>;
  readonly template: InputMaybe<WpContentTemplateFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector>;
};

type WpPageFilterInput = {
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  readonly authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly authorId: InputMaybe<IDQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly commentCount: InputMaybe<IntQueryOperatorInput>;
  readonly commentStatus: InputMaybe<StringQueryOperatorInput>;
  readonly comments: InputMaybe<WpPageToCommentConnectionTypeFilterInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  readonly contentTypeName: InputMaybe<StringQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly dateGmt: InputMaybe<DateQueryOperatorInput>;
  readonly desiredSlug: InputMaybe<StringQueryOperatorInput>;
  readonly enclosure: InputMaybe<StringQueryOperatorInput>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  readonly featuredImageDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly featuredImageId: InputMaybe<IDQueryOperatorInput>;
  readonly guid: InputMaybe<StringQueryOperatorInput>;
  readonly hasPassword: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPrivacyPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isRevision: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly menuOrder: InputMaybe<IntQueryOperatorInput>;
  readonly modified: InputMaybe<DateQueryOperatorInput>;
  readonly modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly parentDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly parentId: InputMaybe<IDQueryOperatorInput>;
  readonly password: InputMaybe<StringQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly status: InputMaybe<StringQueryOperatorInput>;
  readonly template: InputMaybe<WpContentTemplateFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};

type WpPageFilterListInput = {
  readonly elemMatch: InputMaybe<WpPageFilterInput>;
};

type WpPageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpPageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpPageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpPage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpPageGroupConnection_distinctArgs = {
  field: WpPageFieldSelector;
};


type WpPageGroupConnection_groupArgs = {
  field: WpPageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpPageGroupConnection_maxArgs = {
  field: WpPageFieldSelector;
};


type WpPageGroupConnection_minArgs = {
  field: WpPageFieldSelector;
};


type WpPageGroupConnection_sumArgs = {
  field: WpPageFieldSelector;
};

type WpPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPageSortInput = {
  readonly ancestors: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput>;
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  readonly authorDatabaseId: InputMaybe<SortOrderEnum>;
  readonly authorId: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly commentCount: InputMaybe<SortOrderEnum>;
  readonly commentStatus: InputMaybe<SortOrderEnum>;
  readonly comments: InputMaybe<WpPageToCommentConnectionTypeSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  readonly contentTypeName: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly dateGmt: InputMaybe<SortOrderEnum>;
  readonly desiredSlug: InputMaybe<SortOrderEnum>;
  readonly enclosure: InputMaybe<SortOrderEnum>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput>;
  readonly featuredImageDatabaseId: InputMaybe<SortOrderEnum>;
  readonly featuredImageId: InputMaybe<SortOrderEnum>;
  readonly guid: InputMaybe<SortOrderEnum>;
  readonly hasPassword: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isPrivacyPage: InputMaybe<SortOrderEnum>;
  readonly isRevision: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly menuOrder: InputMaybe<SortOrderEnum>;
  readonly modified: InputMaybe<SortOrderEnum>;
  readonly modifiedGmt: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly parentDatabaseId: InputMaybe<SortOrderEnum>;
  readonly parentId: InputMaybe<SortOrderEnum>;
  readonly password: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly status: InputMaybe<SortOrderEnum>;
  readonly template: InputMaybe<WpContentTemplateSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
  readonly wpChildren: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput>;
  readonly wpParent: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;PageToCommentConnection&quot; */
type WpPageToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPageToCommentConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPageToCommentConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPageToCommentConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Page type and the Comment type */
type WpPageToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpComment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPageToCommentConnectionPageInfoType;
};

type WpPageToCommentConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCommentFieldSelector>;
  readonly pageInfo: InputMaybe<WpPageToCommentConnectionPageInfoTypeFieldSelector>;
};

type WpPageToCommentConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCommentFilterListInput>;
  readonly pageInfo: InputMaybe<WpPageToCommentConnectionPageInfoTypeFilterInput>;
};

type WpPageToCommentConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCommentSortInput>;
  readonly pageInfo: InputMaybe<WpPageToCommentConnectionPageInfoTypeSortInput>;
};

/** The post type */
type WpPost = Node & WpContentNode & WpDatabaseIdentifier & WpMenuItemLinkable & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithContentEditor & WpNodeWithExcerpt & WpNodeWithFeaturedImage & WpNodeWithRevisions & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithTrackbacks & WpUniformResourceIdentifiable & {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Connection between the Post type and the category type */
  readonly categories: Maybe<WpPostToCategoryConnectionType>;
  readonly children: ReadonlyArray<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the Post type and the Comment type */
  readonly comments: Maybe<WpPostToCommentConnectionType>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeType>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** Whether the post object is password protected. */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  readonly isSticky: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The password for the post object. */
  readonly password: Maybe<Scalars['String']>;
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Connection between the Post type and the postFormat type */
  readonly postFormats: Maybe<WpPostToPostFormatConnectionType>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** Connection between the Post type and the tag type */
  readonly tags: Maybe<WpPostToTagConnectionType>;
  /** The template assigned to the node */
  readonly template: Maybe<WpContentTemplate>;
  /** Connection between the Post type and the TermNode type */
  readonly terms: Maybe<WpPostToTermNodeConnectionType>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The post type */
type WpPost_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The post type */
type WpPost_dateGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The post type */
type WpPost_modifiedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


/** The post type */
type WpPost_modifiedGmtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type WpPostConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpPostEdge>;
  readonly group: ReadonlyArray<WpPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpPostConnection_distinctArgs = {
  field: WpPostFieldSelector;
};


type WpPostConnection_groupArgs = {
  field: WpPostFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpPostConnection_maxArgs = {
  field: WpPostFieldSelector;
};


type WpPostConnection_minArgs = {
  field: WpPostFieldSelector;
};


type WpPostConnection_sumArgs = {
  field: WpPostFieldSelector;
};

type WpPostConnectionEdgeType = {
  /** The connected post Node */
  readonly node: WpPost;
};

type WpPostConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostConnectionType = {
  /** A list of connected post Nodes */
  readonly nodes: ReadonlyArray<WpPost>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostConnectionPageInfoType;
};

type WpPostEdge = {
  readonly next: Maybe<WpPost>;
  readonly node: WpPost;
  readonly previous: Maybe<WpPost>;
};

type WpPostFieldSelector = {
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  readonly authorDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly authorId: InputMaybe<FieldSelectorEnum>;
  readonly categories: InputMaybe<WpPostToCategoryConnectionTypeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly commentCount: InputMaybe<FieldSelectorEnum>;
  readonly commentStatus: InputMaybe<FieldSelectorEnum>;
  readonly comments: InputMaybe<WpPostToCommentConnectionTypeFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  readonly contentTypeName: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly dateGmt: InputMaybe<FieldSelectorEnum>;
  readonly desiredSlug: InputMaybe<FieldSelectorEnum>;
  readonly enclosure: InputMaybe<FieldSelectorEnum>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector>;
  readonly featuredImageDatabaseId: InputMaybe<FieldSelectorEnum>;
  readonly featuredImageId: InputMaybe<FieldSelectorEnum>;
  readonly guid: InputMaybe<FieldSelectorEnum>;
  readonly hasPassword: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isRevision: InputMaybe<FieldSelectorEnum>;
  readonly isSticky: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly modified: InputMaybe<FieldSelectorEnum>;
  readonly modifiedGmt: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly password: InputMaybe<FieldSelectorEnum>;
  readonly pingStatus: InputMaybe<FieldSelectorEnum>;
  readonly pinged: InputMaybe<FieldSelectorEnum>;
  readonly postFormats: InputMaybe<WpPostToPostFormatConnectionTypeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly status: InputMaybe<FieldSelectorEnum>;
  readonly tags: InputMaybe<WpPostToTagConnectionTypeFieldSelector>;
  readonly template: InputMaybe<WpContentTemplateFieldSelector>;
  readonly terms: InputMaybe<WpPostToTermNodeConnectionTypeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly toPing: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpPostFilterInput = {
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  readonly authorDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly authorId: InputMaybe<IDQueryOperatorInput>;
  readonly categories: InputMaybe<WpPostToCategoryConnectionTypeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly commentCount: InputMaybe<IntQueryOperatorInput>;
  readonly commentStatus: InputMaybe<StringQueryOperatorInput>;
  readonly comments: InputMaybe<WpPostToCommentConnectionTypeFilterInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  readonly contentTypeName: InputMaybe<StringQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly dateGmt: InputMaybe<DateQueryOperatorInput>;
  readonly desiredSlug: InputMaybe<StringQueryOperatorInput>;
  readonly enclosure: InputMaybe<StringQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  readonly featuredImageDatabaseId: InputMaybe<IntQueryOperatorInput>;
  readonly featuredImageId: InputMaybe<IDQueryOperatorInput>;
  readonly guid: InputMaybe<StringQueryOperatorInput>;
  readonly hasPassword: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isRevision: InputMaybe<BooleanQueryOperatorInput>;
  readonly isSticky: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly modified: InputMaybe<DateQueryOperatorInput>;
  readonly modifiedGmt: InputMaybe<DateQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly password: InputMaybe<StringQueryOperatorInput>;
  readonly pingStatus: InputMaybe<StringQueryOperatorInput>;
  readonly pinged: InputMaybe<StringQueryOperatorInput>;
  readonly postFormats: InputMaybe<WpPostToPostFormatConnectionTypeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly status: InputMaybe<StringQueryOperatorInput>;
  readonly tags: InputMaybe<WpPostToTagConnectionTypeFilterInput>;
  readonly template: InputMaybe<WpContentTemplateFilterInput>;
  readonly terms: InputMaybe<WpPostToTermNodeConnectionTypeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly toPing: InputMaybe<StringQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpPostFilterListInput = {
  readonly elemMatch: InputMaybe<WpPostFilterInput>;
};

/** The postFormat type */
type WpPostFormat = Node & WpDatabaseIdentifier & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  readonly children: ReadonlyArray<Node>;
  /** Connection between the PostFormat type and the ContentNode type */
  readonly contentNodes: Maybe<WpPostFormatToContentNodeConnectionType>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Connection between the PostFormat type and the post type */
  readonly posts: Maybe<WpPostFormatToPostConnectionType>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the PostFormat type and the Taxonomy type */
  readonly taxonomy: Maybe<WpPostFormatToTaxonomyConnectionEdgeType>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

type WpPostFormatConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpPostFormatEdge>;
  readonly group: ReadonlyArray<WpPostFormatGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpPostFormat>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpPostFormatConnection_distinctArgs = {
  field: WpPostFormatFieldSelector;
};


type WpPostFormatConnection_groupArgs = {
  field: WpPostFormatFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpPostFormatConnection_maxArgs = {
  field: WpPostFormatFieldSelector;
};


type WpPostFormatConnection_minArgs = {
  field: WpPostFormatFieldSelector;
};


type WpPostFormatConnection_sumArgs = {
  field: WpPostFormatFieldSelector;
};

type WpPostFormatConnectionEdgeType = {
  /** The connected postFormat Node */
  readonly node: WpPostFormat;
};

type WpPostFormatConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostFormatConnectionType = {
  /** A list of connected postFormat Nodes */
  readonly nodes: ReadonlyArray<WpPostFormat>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostFormatConnectionPageInfoType;
};

type WpPostFormatEdge = {
  readonly next: Maybe<WpPostFormat>;
  readonly node: WpPostFormat;
  readonly previous: Maybe<WpPostFormat>;
};

type WpPostFormatFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentNodes: InputMaybe<WpPostFormatToContentNodeConnectionTypeFieldSelector>;
  readonly count: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly posts: InputMaybe<WpPostFormatToPostConnectionTypeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly taxonomy: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeFieldSelector>;
  readonly taxonomyName: InputMaybe<FieldSelectorEnum>;
  readonly termGroupId: InputMaybe<FieldSelectorEnum>;
  readonly termTaxonomyId: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpPostFormatFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentNodes: InputMaybe<WpPostFormatToContentNodeConnectionTypeFilterInput>;
  readonly count: InputMaybe<IntQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly posts: InputMaybe<WpPostFormatToPostConnectionTypeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly taxonomy: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeFilterInput>;
  readonly taxonomyName: InputMaybe<StringQueryOperatorInput>;
  readonly termGroupId: InputMaybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpPostFormatFilterListInput = {
  readonly elemMatch: InputMaybe<WpPostFormatFilterInput>;
};

type WpPostFormatGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpPostFormatEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpPostFormatGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpPostFormat>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpPostFormatGroupConnection_distinctArgs = {
  field: WpPostFormatFieldSelector;
};


type WpPostFormatGroupConnection_groupArgs = {
  field: WpPostFormatFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpPostFormatGroupConnection_maxArgs = {
  field: WpPostFormatFieldSelector;
};


type WpPostFormatGroupConnection_minArgs = {
  field: WpPostFormatFieldSelector;
};


type WpPostFormatGroupConnection_sumArgs = {
  field: WpPostFormatFieldSelector;
};

type WpPostFormatSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentNodes: InputMaybe<WpPostFormatToContentNodeConnectionTypeSortInput>;
  readonly count: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly posts: InputMaybe<WpPostFormatToPostConnectionTypeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly taxonomy: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeSortInput>;
  readonly taxonomyName: InputMaybe<SortOrderEnum>;
  readonly termGroupId: InputMaybe<SortOrderEnum>;
  readonly termTaxonomyId: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
type WpPostFormatToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostFormatToContentNodeConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPostFormatToContentNodeConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPostFormatToContentNodeConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the PostFormat type and the ContentNode type */
type WpPostFormatToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostFormatToContentNodeConnectionPageInfoType;
};

type WpPostFormatToContentNodeConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpContentNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpPostFormatToContentNodeConnectionPageInfoTypeFieldSelector>;
};

type WpPostFormatToContentNodeConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpContentNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpPostFormatToContentNodeConnectionPageInfoTypeFilterInput>;
};

type WpPostFormatToContentNodeConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpContentNodeSortInput>;
  readonly pageInfo: InputMaybe<WpPostFormatToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
type WpPostFormatToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostFormatToPostConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPostFormatToPostConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPostFormatToPostConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the PostFormat type and the post type */
type WpPostFormatToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpPost>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostFormatToPostConnectionPageInfoType;
};

type WpPostFormatToPostConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpPostFieldSelector>;
  readonly pageInfo: InputMaybe<WpPostFormatToPostConnectionPageInfoTypeFieldSelector>;
};

type WpPostFormatToPostConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpPostFilterListInput>;
  readonly pageInfo: InputMaybe<WpPostFormatToPostConnectionPageInfoTypeFilterInput>;
};

type WpPostFormatToPostConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpPostSortInput>;
  readonly pageInfo: InputMaybe<WpPostFormatToPostConnectionPageInfoTypeSortInput>;
};

/** Connection between the PostFormat type and the Taxonomy type */
type WpPostFormatToTaxonomyConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpTaxonomyConnectionEdgeType & {
  /** The node of the connection, without the edges */
  readonly node: WpTaxonomy;
};

type WpPostFormatToTaxonomyConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpTaxonomyFieldSelector>;
};

type WpPostFormatToTaxonomyConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpTaxonomyFilterInput>;
};

type WpPostFormatToTaxonomyConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpTaxonomySortInput>;
};

type WpPostGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpPostEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpPostGroupConnection_distinctArgs = {
  field: WpPostFieldSelector;
};


type WpPostGroupConnection_groupArgs = {
  field: WpPostFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpPostGroupConnection_maxArgs = {
  field: WpPostFieldSelector;
};


type WpPostGroupConnection_minArgs = {
  field: WpPostFieldSelector;
};


type WpPostGroupConnection_sumArgs = {
  field: WpPostFieldSelector;
};

type WpPostSortInput = {
  readonly author: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  readonly authorDatabaseId: InputMaybe<SortOrderEnum>;
  readonly authorId: InputMaybe<SortOrderEnum>;
  readonly categories: InputMaybe<WpPostToCategoryConnectionTypeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly commentCount: InputMaybe<SortOrderEnum>;
  readonly commentStatus: InputMaybe<SortOrderEnum>;
  readonly comments: InputMaybe<WpPostToCommentConnectionTypeSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentType: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  readonly contentTypeName: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly dateGmt: InputMaybe<SortOrderEnum>;
  readonly desiredSlug: InputMaybe<SortOrderEnum>;
  readonly enclosure: InputMaybe<SortOrderEnum>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly featuredImage: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput>;
  readonly featuredImageDatabaseId: InputMaybe<SortOrderEnum>;
  readonly featuredImageId: InputMaybe<SortOrderEnum>;
  readonly guid: InputMaybe<SortOrderEnum>;
  readonly hasPassword: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isRevision: InputMaybe<SortOrderEnum>;
  readonly isSticky: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly lastEditedBy: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly modified: InputMaybe<SortOrderEnum>;
  readonly modifiedGmt: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly password: InputMaybe<SortOrderEnum>;
  readonly pingStatus: InputMaybe<SortOrderEnum>;
  readonly pinged: InputMaybe<SortOrderEnum>;
  readonly postFormats: InputMaybe<WpPostToPostFormatConnectionTypeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly status: InputMaybe<SortOrderEnum>;
  readonly tags: InputMaybe<WpPostToTagConnectionTypeSortInput>;
  readonly template: InputMaybe<WpContentTemplateSortInput>;
  readonly terms: InputMaybe<WpPostToTermNodeConnectionTypeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly toPing: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;PostToCategoryConnection&quot; */
type WpPostToCategoryConnectionPageInfoType = WpCategoryConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostToCategoryConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPostToCategoryConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPostToCategoryConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the category type */
type WpPostToCategoryConnectionType = WpCategoryConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpCategory>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostToCategoryConnectionPageInfoType;
};

type WpPostToCategoryConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCategoryFieldSelector>;
  readonly pageInfo: InputMaybe<WpPostToCategoryConnectionPageInfoTypeFieldSelector>;
};

type WpPostToCategoryConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCategoryFilterListInput>;
  readonly pageInfo: InputMaybe<WpPostToCategoryConnectionPageInfoTypeFilterInput>;
};

type WpPostToCategoryConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCategorySortInput>;
  readonly pageInfo: InputMaybe<WpPostToCategoryConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToCommentConnection&quot; */
type WpPostToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostToCommentConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPostToCommentConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPostToCommentConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the Comment type */
type WpPostToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpComment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostToCommentConnectionPageInfoType;
};

type WpPostToCommentConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCommentFieldSelector>;
  readonly pageInfo: InputMaybe<WpPostToCommentConnectionPageInfoTypeFieldSelector>;
};

type WpPostToCommentConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCommentFilterListInput>;
  readonly pageInfo: InputMaybe<WpPostToCommentConnectionPageInfoTypeFilterInput>;
};

type WpPostToCommentConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCommentSortInput>;
  readonly pageInfo: InputMaybe<WpPostToCommentConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
type WpPostToPostFormatConnectionPageInfoType = WpPageInfoType & WpPostFormatConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostToPostFormatConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPostToPostFormatConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPostToPostFormatConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the postFormat type */
type WpPostToPostFormatConnectionType = WpConnectionType & WpPostFormatConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpPostFormat>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostToPostFormatConnectionPageInfoType;
};

type WpPostToPostFormatConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpPostFormatFieldSelector>;
  readonly pageInfo: InputMaybe<WpPostToPostFormatConnectionPageInfoTypeFieldSelector>;
};

type WpPostToPostFormatConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpPostFormatFilterListInput>;
  readonly pageInfo: InputMaybe<WpPostToPostFormatConnectionPageInfoTypeFilterInput>;
};

type WpPostToPostFormatConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpPostFormatSortInput>;
  readonly pageInfo: InputMaybe<WpPostToPostFormatConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToTagConnection&quot; */
type WpPostToTagConnectionPageInfoType = WpPageInfoType & WpTagConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostToTagConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPostToTagConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPostToTagConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the tag type */
type WpPostToTagConnectionType = WpConnectionType & WpTagConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpTag>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostToTagConnectionPageInfoType;
};

type WpPostToTagConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpTagFieldSelector>;
  readonly pageInfo: InputMaybe<WpPostToTagConnectionPageInfoTypeFieldSelector>;
};

type WpPostToTagConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpTagFilterListInput>;
  readonly pageInfo: InputMaybe<WpPostToTagConnectionPageInfoTypeFilterInput>;
};

type WpPostToTagConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpTagSortInput>;
  readonly pageInfo: InputMaybe<WpPostToTagConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
type WpPostToTermNodeConnectionPageInfoType = WpPageInfoType & WpTermNodeConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpPostToTermNodeConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpPostToTermNodeConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpPostToTermNodeConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the TermNode type */
type WpPostToTermNodeConnectionType = WpConnectionType & WpTermNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpTermNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpPostToTermNodeConnectionPageInfoType;
};

type WpPostToTermNodeConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpTermNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpPostToTermNodeConnectionPageInfoTypeFieldSelector>;
};

type WpPostToTermNodeConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpTermNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpPostToTermNodeConnectionPageInfoTypeFilterInput>;
};

type WpPostToTermNodeConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpTermNodeSortInput>;
  readonly pageInfo: InputMaybe<WpPostToTermNodeConnectionPageInfoTypeSortInput>;
};

/** Details for labels of the PostType */
type WpPostTypeLabelDetails = {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  readonly addNew: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  readonly addNewItem: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  readonly allItems: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  readonly archives: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  readonly attributes: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  readonly editItem: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  readonly featuredImage: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  readonly filterItemsList: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  readonly insertIntoItem: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  readonly itemsList: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  readonly itemsListNavigation: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  readonly menuName: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  readonly name: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  readonly newItem: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  readonly notFound: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  readonly notFoundInTrash: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  readonly parentItemColon: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  readonly removeFeaturedImage: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  readonly searchItems: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  readonly setFeaturedImage: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  readonly singularName: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  readonly uploadedToThisItem: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  readonly useFeaturedImage: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  readonly viewItem: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  readonly viewItems: Maybe<Scalars['String']>;
};

type WpPostTypeLabelDetailsFieldSelector = {
  readonly addNew: InputMaybe<FieldSelectorEnum>;
  readonly addNewItem: InputMaybe<FieldSelectorEnum>;
  readonly allItems: InputMaybe<FieldSelectorEnum>;
  readonly archives: InputMaybe<FieldSelectorEnum>;
  readonly attributes: InputMaybe<FieldSelectorEnum>;
  readonly editItem: InputMaybe<FieldSelectorEnum>;
  readonly featuredImage: InputMaybe<FieldSelectorEnum>;
  readonly filterItemsList: InputMaybe<FieldSelectorEnum>;
  readonly insertIntoItem: InputMaybe<FieldSelectorEnum>;
  readonly itemsList: InputMaybe<FieldSelectorEnum>;
  readonly itemsListNavigation: InputMaybe<FieldSelectorEnum>;
  readonly menuName: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly newItem: InputMaybe<FieldSelectorEnum>;
  readonly notFound: InputMaybe<FieldSelectorEnum>;
  readonly notFoundInTrash: InputMaybe<FieldSelectorEnum>;
  readonly parentItemColon: InputMaybe<FieldSelectorEnum>;
  readonly removeFeaturedImage: InputMaybe<FieldSelectorEnum>;
  readonly searchItems: InputMaybe<FieldSelectorEnum>;
  readonly setFeaturedImage: InputMaybe<FieldSelectorEnum>;
  readonly singularName: InputMaybe<FieldSelectorEnum>;
  readonly uploadedToThisItem: InputMaybe<FieldSelectorEnum>;
  readonly useFeaturedImage: InputMaybe<FieldSelectorEnum>;
  readonly viewItem: InputMaybe<FieldSelectorEnum>;
  readonly viewItems: InputMaybe<FieldSelectorEnum>;
};

type WpPostTypeLabelDetailsFilterInput = {
  readonly addNew: InputMaybe<StringQueryOperatorInput>;
  readonly addNewItem: InputMaybe<StringQueryOperatorInput>;
  readonly allItems: InputMaybe<StringQueryOperatorInput>;
  readonly archives: InputMaybe<StringQueryOperatorInput>;
  readonly attributes: InputMaybe<StringQueryOperatorInput>;
  readonly editItem: InputMaybe<StringQueryOperatorInput>;
  readonly featuredImage: InputMaybe<StringQueryOperatorInput>;
  readonly filterItemsList: InputMaybe<StringQueryOperatorInput>;
  readonly insertIntoItem: InputMaybe<StringQueryOperatorInput>;
  readonly itemsList: InputMaybe<StringQueryOperatorInput>;
  readonly itemsListNavigation: InputMaybe<StringQueryOperatorInput>;
  readonly menuName: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly newItem: InputMaybe<StringQueryOperatorInput>;
  readonly notFound: InputMaybe<StringQueryOperatorInput>;
  readonly notFoundInTrash: InputMaybe<StringQueryOperatorInput>;
  readonly parentItemColon: InputMaybe<StringQueryOperatorInput>;
  readonly removeFeaturedImage: InputMaybe<StringQueryOperatorInput>;
  readonly searchItems: InputMaybe<StringQueryOperatorInput>;
  readonly setFeaturedImage: InputMaybe<StringQueryOperatorInput>;
  readonly singularName: InputMaybe<StringQueryOperatorInput>;
  readonly uploadedToThisItem: InputMaybe<StringQueryOperatorInput>;
  readonly useFeaturedImage: InputMaybe<StringQueryOperatorInput>;
  readonly viewItem: InputMaybe<StringQueryOperatorInput>;
  readonly viewItems: InputMaybe<StringQueryOperatorInput>;
};

type WpPostTypeLabelDetailsSortInput = {
  readonly addNew: InputMaybe<SortOrderEnum>;
  readonly addNewItem: InputMaybe<SortOrderEnum>;
  readonly allItems: InputMaybe<SortOrderEnum>;
  readonly archives: InputMaybe<SortOrderEnum>;
  readonly attributes: InputMaybe<SortOrderEnum>;
  readonly editItem: InputMaybe<SortOrderEnum>;
  readonly featuredImage: InputMaybe<SortOrderEnum>;
  readonly filterItemsList: InputMaybe<SortOrderEnum>;
  readonly insertIntoItem: InputMaybe<SortOrderEnum>;
  readonly itemsList: InputMaybe<SortOrderEnum>;
  readonly itemsListNavigation: InputMaybe<SortOrderEnum>;
  readonly menuName: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly newItem: InputMaybe<SortOrderEnum>;
  readonly notFound: InputMaybe<SortOrderEnum>;
  readonly notFoundInTrash: InputMaybe<SortOrderEnum>;
  readonly parentItemColon: InputMaybe<SortOrderEnum>;
  readonly removeFeaturedImage: InputMaybe<SortOrderEnum>;
  readonly searchItems: InputMaybe<SortOrderEnum>;
  readonly setFeaturedImage: InputMaybe<SortOrderEnum>;
  readonly singularName: InputMaybe<SortOrderEnum>;
  readonly uploadedToThisItem: InputMaybe<SortOrderEnum>;
  readonly useFeaturedImage: InputMaybe<SortOrderEnum>;
  readonly viewItem: InputMaybe<SortOrderEnum>;
  readonly viewItems: InputMaybe<SortOrderEnum>;
};

/** The reading setting type */
type WpReadingSettings = {
  /** The ID of the page that should display the latest posts */
  readonly pageForPosts: Maybe<Scalars['Int']>;
  /** The ID of the page that should be displayed on the front page */
  readonly pageOnFront: Maybe<Scalars['Int']>;
  /** Blog pages show at most. */
  readonly postsPerPage: Maybe<Scalars['Int']>;
  /** What to show on the front page */
  readonly showOnFront: Maybe<Scalars['String']>;
};

type WpReadingSettingsFieldSelector = {
  readonly pageForPosts: InputMaybe<FieldSelectorEnum>;
  readonly pageOnFront: InputMaybe<FieldSelectorEnum>;
  readonly postsPerPage: InputMaybe<FieldSelectorEnum>;
  readonly showOnFront: InputMaybe<FieldSelectorEnum>;
};

type WpReadingSettingsFilterInput = {
  readonly pageForPosts: InputMaybe<IntQueryOperatorInput>;
  readonly pageOnFront: InputMaybe<IntQueryOperatorInput>;
  readonly postsPerPage: InputMaybe<IntQueryOperatorInput>;
  readonly showOnFront: InputMaybe<StringQueryOperatorInput>;
};

type WpReadingSettingsSortInput = {
  readonly pageForPosts: InputMaybe<SortOrderEnum>;
  readonly pageOnFront: InputMaybe<SortOrderEnum>;
  readonly postsPerPage: InputMaybe<SortOrderEnum>;
  readonly showOnFront: InputMaybe<SortOrderEnum>;
};

/** All of the registered settings */
type WpSettings = {
  /** Settings of the the string Settings Group */
  readonly discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsDateFormat: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsDescription: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsEmail: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsLanguage: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readonly generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsTimeFormat: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsTimezone: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsTitle: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsUrl: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readonly readingSettingsPageForPosts: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readonly readingSettingsPageOnFront: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readonly readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readonly readingSettingsShowOnFront: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readonly writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readonly writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  readonly writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
};

type WpSettingsFieldSelector = {
  readonly discussionSettingsDefaultCommentStatus: InputMaybe<FieldSelectorEnum>;
  readonly discussionSettingsDefaultPingStatus: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsDateFormat: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsDescription: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsEmail: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsLanguage: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsStartOfWeek: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsTimeFormat: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsTimezone: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsTitle: InputMaybe<FieldSelectorEnum>;
  readonly generalSettingsUrl: InputMaybe<FieldSelectorEnum>;
  readonly readingSettingsPageForPosts: InputMaybe<FieldSelectorEnum>;
  readonly readingSettingsPageOnFront: InputMaybe<FieldSelectorEnum>;
  readonly readingSettingsPostsPerPage: InputMaybe<FieldSelectorEnum>;
  readonly readingSettingsShowOnFront: InputMaybe<FieldSelectorEnum>;
  readonly writingSettingsDefaultCategory: InputMaybe<FieldSelectorEnum>;
  readonly writingSettingsDefaultPostFormat: InputMaybe<FieldSelectorEnum>;
  readonly writingSettingsUseSmilies: InputMaybe<FieldSelectorEnum>;
};

type WpSettingsFilterInput = {
  readonly discussionSettingsDefaultCommentStatus: InputMaybe<StringQueryOperatorInput>;
  readonly discussionSettingsDefaultPingStatus: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsDateFormat: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsDescription: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsEmail: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsLanguage: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsStartOfWeek: InputMaybe<IntQueryOperatorInput>;
  readonly generalSettingsTimeFormat: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsTimezone: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsTitle: InputMaybe<StringQueryOperatorInput>;
  readonly generalSettingsUrl: InputMaybe<StringQueryOperatorInput>;
  readonly readingSettingsPageForPosts: InputMaybe<IntQueryOperatorInput>;
  readonly readingSettingsPageOnFront: InputMaybe<IntQueryOperatorInput>;
  readonly readingSettingsPostsPerPage: InputMaybe<IntQueryOperatorInput>;
  readonly readingSettingsShowOnFront: InputMaybe<StringQueryOperatorInput>;
  readonly writingSettingsDefaultCategory: InputMaybe<IntQueryOperatorInput>;
  readonly writingSettingsDefaultPostFormat: InputMaybe<StringQueryOperatorInput>;
  readonly writingSettingsUseSmilies: InputMaybe<BooleanQueryOperatorInput>;
};

type WpSettingsSortInput = {
  readonly discussionSettingsDefaultCommentStatus: InputMaybe<SortOrderEnum>;
  readonly discussionSettingsDefaultPingStatus: InputMaybe<SortOrderEnum>;
  readonly generalSettingsDateFormat: InputMaybe<SortOrderEnum>;
  readonly generalSettingsDescription: InputMaybe<SortOrderEnum>;
  readonly generalSettingsEmail: InputMaybe<SortOrderEnum>;
  readonly generalSettingsLanguage: InputMaybe<SortOrderEnum>;
  readonly generalSettingsStartOfWeek: InputMaybe<SortOrderEnum>;
  readonly generalSettingsTimeFormat: InputMaybe<SortOrderEnum>;
  readonly generalSettingsTimezone: InputMaybe<SortOrderEnum>;
  readonly generalSettingsTitle: InputMaybe<SortOrderEnum>;
  readonly generalSettingsUrl: InputMaybe<SortOrderEnum>;
  readonly readingSettingsPageForPosts: InputMaybe<SortOrderEnum>;
  readonly readingSettingsPageOnFront: InputMaybe<SortOrderEnum>;
  readonly readingSettingsPostsPerPage: InputMaybe<SortOrderEnum>;
  readonly readingSettingsShowOnFront: InputMaybe<SortOrderEnum>;
  readonly writingSettingsDefaultCategory: InputMaybe<SortOrderEnum>;
  readonly writingSettingsDefaultPostFormat: InputMaybe<SortOrderEnum>;
  readonly writingSettingsUseSmilies: InputMaybe<SortOrderEnum>;
};

type WpSortInput = {
  readonly allSettings: InputMaybe<WpSettingsSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly discussionSettings: InputMaybe<WpDiscussionSettingsSortInput>;
  readonly generalSettings: InputMaybe<WpGeneralSettingsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly readingSettings: InputMaybe<WpReadingSettingsSortInput>;
  readonly wpGatsby: InputMaybe<WpWPGatsbySortInput>;
  readonly writingSettings: InputMaybe<WpWritingSettingsSortInput>;
};

/** The tag type */
type WpTag = Node & WpDatabaseIdentifier & WpMenuItemLinkable & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  readonly children: ReadonlyArray<Node>;
  /** Connection between the Tag type and the ContentNode type */
  readonly contentNodes: Maybe<WpTagToContentNodeConnectionType>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Connection between the Tag type and the post type */
  readonly posts: Maybe<WpTagToPostConnectionType>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the Tag type and the Taxonomy type */
  readonly taxonomy: Maybe<WpTagToTaxonomyConnectionEdgeType>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

type WpTagConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpTagEdge>;
  readonly group: ReadonlyArray<WpTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpTagConnection_distinctArgs = {
  field: WpTagFieldSelector;
};


type WpTagConnection_groupArgs = {
  field: WpTagFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpTagConnection_maxArgs = {
  field: WpTagFieldSelector;
};


type WpTagConnection_minArgs = {
  field: WpTagFieldSelector;
};


type WpTagConnection_sumArgs = {
  field: WpTagFieldSelector;
};

type WpTagConnectionEdgeType = {
  /** The connected tag Node */
  readonly node: WpTag;
};

type WpTagConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpTagConnectionType = {
  /** A list of connected tag Nodes */
  readonly nodes: ReadonlyArray<WpTag>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpTagConnectionPageInfoType;
};

type WpTagEdge = {
  readonly next: Maybe<WpTag>;
  readonly node: WpTag;
  readonly previous: Maybe<WpTag>;
};

type WpTagFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentNodes: InputMaybe<WpTagToContentNodeConnectionTypeFieldSelector>;
  readonly count: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly posts: InputMaybe<WpTagToPostConnectionTypeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly taxonomy: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeFieldSelector>;
  readonly taxonomyName: InputMaybe<FieldSelectorEnum>;
  readonly termGroupId: InputMaybe<FieldSelectorEnum>;
  readonly termTaxonomyId: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpTagFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentNodes: InputMaybe<WpTagToContentNodeConnectionTypeFilterInput>;
  readonly count: InputMaybe<IntQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly posts: InputMaybe<WpTagToPostConnectionTypeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly taxonomy: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeFilterInput>;
  readonly taxonomyName: InputMaybe<StringQueryOperatorInput>;
  readonly termGroupId: InputMaybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpTagFilterListInput = {
  readonly elemMatch: InputMaybe<WpTagFilterInput>;
};

type WpTagGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpTagEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpTagGroupConnection_distinctArgs = {
  field: WpTagFieldSelector;
};


type WpTagGroupConnection_groupArgs = {
  field: WpTagFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpTagGroupConnection_maxArgs = {
  field: WpTagFieldSelector;
};


type WpTagGroupConnection_minArgs = {
  field: WpTagFieldSelector;
};


type WpTagGroupConnection_sumArgs = {
  field: WpTagFieldSelector;
};

type WpTagSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentNodes: InputMaybe<WpTagToContentNodeConnectionTypeSortInput>;
  readonly count: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly posts: InputMaybe<WpTagToPostConnectionTypeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly taxonomy: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeSortInput>;
  readonly taxonomyName: InputMaybe<SortOrderEnum>;
  readonly termGroupId: InputMaybe<SortOrderEnum>;
  readonly termTaxonomyId: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
type WpTagToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpTagToContentNodeConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpTagToContentNodeConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpTagToContentNodeConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Tag type and the ContentNode type */
type WpTagToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpTagToContentNodeConnectionPageInfoType;
};

type WpTagToContentNodeConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpContentNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpTagToContentNodeConnectionPageInfoTypeFieldSelector>;
};

type WpTagToContentNodeConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpContentNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpTagToContentNodeConnectionPageInfoTypeFilterInput>;
};

type WpTagToContentNodeConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpContentNodeSortInput>;
  readonly pageInfo: InputMaybe<WpTagToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;TagToPostConnection&quot; */
type WpTagToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpTagToPostConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpTagToPostConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpTagToPostConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Tag type and the post type */
type WpTagToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpPost>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpTagToPostConnectionPageInfoType;
};

type WpTagToPostConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpPostFieldSelector>;
  readonly pageInfo: InputMaybe<WpTagToPostConnectionPageInfoTypeFieldSelector>;
};

type WpTagToPostConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpPostFilterListInput>;
  readonly pageInfo: InputMaybe<WpTagToPostConnectionPageInfoTypeFilterInput>;
};

type WpTagToPostConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpPostSortInput>;
  readonly pageInfo: InputMaybe<WpTagToPostConnectionPageInfoTypeSortInput>;
};

/** Connection between the Tag type and the Taxonomy type */
type WpTagToTaxonomyConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpTaxonomyConnectionEdgeType & {
  /** The node of the connection, without the edges */
  readonly node: WpTaxonomy;
};

type WpTagToTaxonomyConnectionEdgeTypeFieldSelector = {
  readonly node: InputMaybe<WpTaxonomyFieldSelector>;
};

type WpTagToTaxonomyConnectionEdgeTypeFilterInput = {
  readonly node: InputMaybe<WpTaxonomyFilterInput>;
};

type WpTagToTaxonomyConnectionEdgeTypeSortInput = {
  readonly node: InputMaybe<WpTaxonomySortInput>;
};

/** A taxonomy object */
type WpTaxonomy = Node & WpNode & {
  /** The url path of the first page of the archive page for this content type. */
  readonly archivePath: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  /** List of Content Types associated with the Taxonomy */
  readonly connectedContentTypes: Maybe<WpTaxonomyToContentTypeConnectionType>;
  /** List of Term Nodes associated with the Taxonomy */
  readonly connectedTerms: Maybe<WpTaxonomyToTermNodeConnectionType>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  readonly description: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  readonly label: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** Whether the taxonomy is publicly queryable */
  readonly public: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  readonly showCloud: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  readonly showInAdminColumn: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  readonly showInQuickEdit: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  readonly showUi: Maybe<Scalars['Boolean']>;
};

type WpTaxonomyConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpTaxonomyEdge>;
  readonly group: ReadonlyArray<WpTaxonomyGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpTaxonomy>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpTaxonomyConnection_distinctArgs = {
  field: WpTaxonomyFieldSelector;
};


type WpTaxonomyConnection_groupArgs = {
  field: WpTaxonomyFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpTaxonomyConnection_maxArgs = {
  field: WpTaxonomyFieldSelector;
};


type WpTaxonomyConnection_minArgs = {
  field: WpTaxonomyFieldSelector;
};


type WpTaxonomyConnection_sumArgs = {
  field: WpTaxonomyFieldSelector;
};

type WpTaxonomyConnectionEdgeType = {
  /** The connected Taxonomy Node */
  readonly node: WpTaxonomy;
};

type WpTaxonomyConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpTaxonomyConnectionType = {
  /** A list of connected Taxonomy Nodes */
  readonly nodes: ReadonlyArray<WpTaxonomy>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpTaxonomyConnectionPageInfoType;
};

type WpTaxonomyEdge = {
  readonly next: Maybe<WpTaxonomy>;
  readonly node: WpTaxonomy;
  readonly previous: Maybe<WpTaxonomy>;
};

type WpTaxonomyFieldSelector = {
  readonly archivePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly connectedContentTypes: InputMaybe<WpTaxonomyToContentTypeConnectionTypeFieldSelector>;
  readonly connectedTerms: InputMaybe<WpTaxonomyToTermNodeConnectionTypeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly graphqlPluralName: InputMaybe<FieldSelectorEnum>;
  readonly graphqlSingleName: InputMaybe<FieldSelectorEnum>;
  readonly hierarchical: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly label: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly public: InputMaybe<FieldSelectorEnum>;
  readonly restBase: InputMaybe<FieldSelectorEnum>;
  readonly restControllerClass: InputMaybe<FieldSelectorEnum>;
  readonly showCloud: InputMaybe<FieldSelectorEnum>;
  readonly showInAdminColumn: InputMaybe<FieldSelectorEnum>;
  readonly showInGraphql: InputMaybe<FieldSelectorEnum>;
  readonly showInMenu: InputMaybe<FieldSelectorEnum>;
  readonly showInNavMenus: InputMaybe<FieldSelectorEnum>;
  readonly showInQuickEdit: InputMaybe<FieldSelectorEnum>;
  readonly showInRest: InputMaybe<FieldSelectorEnum>;
  readonly showUi: InputMaybe<FieldSelectorEnum>;
};

type WpTaxonomyFilterInput = {
  readonly archivePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly connectedContentTypes: InputMaybe<WpTaxonomyToContentTypeConnectionTypeFilterInput>;
  readonly connectedTerms: InputMaybe<WpTaxonomyToTermNodeConnectionTypeFilterInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly graphqlPluralName: InputMaybe<StringQueryOperatorInput>;
  readonly graphqlSingleName: InputMaybe<StringQueryOperatorInput>;
  readonly hierarchical: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly label: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly public: InputMaybe<BooleanQueryOperatorInput>;
  readonly restBase: InputMaybe<StringQueryOperatorInput>;
  readonly restControllerClass: InputMaybe<StringQueryOperatorInput>;
  readonly showCloud: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInAdminColumn: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInGraphql: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInMenu: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInNavMenus: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInQuickEdit: InputMaybe<BooleanQueryOperatorInput>;
  readonly showInRest: InputMaybe<BooleanQueryOperatorInput>;
  readonly showUi: InputMaybe<BooleanQueryOperatorInput>;
};

type WpTaxonomyFilterListInput = {
  readonly elemMatch: InputMaybe<WpTaxonomyFilterInput>;
};

type WpTaxonomyGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpTaxonomyEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpTaxonomyGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpTaxonomy>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpTaxonomyGroupConnection_distinctArgs = {
  field: WpTaxonomyFieldSelector;
};


type WpTaxonomyGroupConnection_groupArgs = {
  field: WpTaxonomyFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpTaxonomyGroupConnection_maxArgs = {
  field: WpTaxonomyFieldSelector;
};


type WpTaxonomyGroupConnection_minArgs = {
  field: WpTaxonomyFieldSelector;
};


type WpTaxonomyGroupConnection_sumArgs = {
  field: WpTaxonomyFieldSelector;
};

type WpTaxonomySortInput = {
  readonly archivePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly connectedContentTypes: InputMaybe<WpTaxonomyToContentTypeConnectionTypeSortInput>;
  readonly connectedTerms: InputMaybe<WpTaxonomyToTermNodeConnectionTypeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly graphqlPluralName: InputMaybe<SortOrderEnum>;
  readonly graphqlSingleName: InputMaybe<SortOrderEnum>;
  readonly hierarchical: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly label: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly public: InputMaybe<SortOrderEnum>;
  readonly restBase: InputMaybe<SortOrderEnum>;
  readonly restControllerClass: InputMaybe<SortOrderEnum>;
  readonly showCloud: InputMaybe<SortOrderEnum>;
  readonly showInAdminColumn: InputMaybe<SortOrderEnum>;
  readonly showInGraphql: InputMaybe<SortOrderEnum>;
  readonly showInMenu: InputMaybe<SortOrderEnum>;
  readonly showInNavMenus: InputMaybe<SortOrderEnum>;
  readonly showInQuickEdit: InputMaybe<SortOrderEnum>;
  readonly showInRest: InputMaybe<SortOrderEnum>;
  readonly showUi: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
type WpTaxonomyToContentTypeConnectionPageInfoType = WpContentTypeConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpTaxonomyToContentTypeConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpTaxonomyToContentTypeConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpTaxonomyToContentTypeConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Taxonomy type and the ContentType type */
type WpTaxonomyToContentTypeConnectionType = WpConnectionType & WpContentTypeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpContentType>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpTaxonomyToContentTypeConnectionPageInfoType;
};

type WpTaxonomyToContentTypeConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpContentTypeFieldSelector>;
  readonly pageInfo: InputMaybe<WpTaxonomyToContentTypeConnectionPageInfoTypeFieldSelector>;
};

type WpTaxonomyToContentTypeConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpContentTypeFilterListInput>;
  readonly pageInfo: InputMaybe<WpTaxonomyToContentTypeConnectionPageInfoTypeFilterInput>;
};

type WpTaxonomyToContentTypeConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpContentTypeSortInput>;
  readonly pageInfo: InputMaybe<WpTaxonomyToContentTypeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
type WpTaxonomyToTermNodeConnectionPageInfoType = WpPageInfoType & WpTermNodeConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpTaxonomyToTermNodeConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpTaxonomyToTermNodeConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpTaxonomyToTermNodeConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the Taxonomy type and the TermNode type */
type WpTaxonomyToTermNodeConnectionType = WpConnectionType & WpTermNodeConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpTermNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpTaxonomyToTermNodeConnectionPageInfoType;
};

type WpTaxonomyToTermNodeConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpTermNodeFieldSelector>;
  readonly pageInfo: InputMaybe<WpTaxonomyToTermNodeConnectionPageInfoTypeFieldSelector>;
};

type WpTaxonomyToTermNodeConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpTermNodeFilterListInput>;
  readonly pageInfo: InputMaybe<WpTaxonomyToTermNodeConnectionPageInfoTypeFilterInput>;
};

type WpTaxonomyToTermNodeConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpTermNodeSortInput>;
  readonly pageInfo: InputMaybe<WpTaxonomyToTermNodeConnectionPageInfoTypeSortInput>;
};

/** The template assigned to the node */
type WpTemplate_PageNoTitle = WpContentTemplate & {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
type WpTemplate_PageWithSidebar = WpContentTemplate & {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
type WpTemplate_PageWithWideImage = WpContentTemplate & {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
type WpTemplate_SingleWithSidebar = WpContentTemplate & {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

type WpTermNode = {
  readonly children: ReadonlyArray<Node>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

type WpTermNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpTermNodeEdge>;
  readonly group: ReadonlyArray<WpTermNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpTermNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpTermNodeConnection_distinctArgs = {
  field: WpTermNodeFieldSelector;
};


type WpTermNodeConnection_groupArgs = {
  field: WpTermNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpTermNodeConnection_maxArgs = {
  field: WpTermNodeFieldSelector;
};


type WpTermNodeConnection_minArgs = {
  field: WpTermNodeFieldSelector;
};


type WpTermNodeConnection_sumArgs = {
  field: WpTermNodeFieldSelector;
};

type WpTermNodeConnectionEdgeType = {
  /** The connected TermNode Node */
  readonly node: WpTermNode;
};

type WpTermNodeConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpTermNodeConnectionType = {
  /** A list of connected TermNode Nodes */
  readonly nodes: ReadonlyArray<WpTermNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpTermNodeConnectionPageInfoType;
};

type WpTermNodeEdge = {
  readonly next: Maybe<WpTermNode>;
  readonly node: WpTermNode;
  readonly previous: Maybe<WpTermNode>;
};

type WpTermNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly count: InputMaybe<FieldSelectorEnum>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly taxonomyName: InputMaybe<FieldSelectorEnum>;
  readonly termGroupId: InputMaybe<FieldSelectorEnum>;
  readonly termTaxonomyId: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpTermNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly count: InputMaybe<IntQueryOperatorInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly taxonomyName: InputMaybe<StringQueryOperatorInput>;
  readonly termGroupId: InputMaybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: InputMaybe<IntQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpTermNodeFilterListInput = {
  readonly elemMatch: InputMaybe<WpTermNodeFilterInput>;
};

type WpTermNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpTermNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpTermNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpTermNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpTermNodeGroupConnection_distinctArgs = {
  field: WpTermNodeFieldSelector;
};


type WpTermNodeGroupConnection_groupArgs = {
  field: WpTermNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpTermNodeGroupConnection_maxArgs = {
  field: WpTermNodeFieldSelector;
};


type WpTermNodeGroupConnection_minArgs = {
  field: WpTermNodeFieldSelector;
};


type WpTermNodeGroupConnection_sumArgs = {
  field: WpTermNodeFieldSelector;
};

type WpTermNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly count: InputMaybe<SortOrderEnum>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly taxonomyName: InputMaybe<SortOrderEnum>;
  readonly termGroupId: InputMaybe<SortOrderEnum>;
  readonly termTaxonomyId: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

type WpUniformResourceIdentifiable = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

type WpUniformResourceIdentifiableConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpUniformResourceIdentifiableEdge>;
  readonly group: ReadonlyArray<WpUniformResourceIdentifiableGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpUniformResourceIdentifiable>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpUniformResourceIdentifiableConnection_distinctArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


type WpUniformResourceIdentifiableConnection_groupArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpUniformResourceIdentifiableConnection_maxArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


type WpUniformResourceIdentifiableConnection_minArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


type WpUniformResourceIdentifiableConnection_sumArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};

type WpUniformResourceIdentifiableEdge = {
  readonly next: Maybe<WpUniformResourceIdentifiable>;
  readonly node: WpUniformResourceIdentifiable;
  readonly previous: Maybe<WpUniformResourceIdentifiable>;
};

type WpUniformResourceIdentifiableFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
};

type WpUniformResourceIdentifiableFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
};

type WpUniformResourceIdentifiableGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpUniformResourceIdentifiableEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpUniformResourceIdentifiableGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpUniformResourceIdentifiable>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpUniformResourceIdentifiableGroupConnection_distinctArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


type WpUniformResourceIdentifiableGroupConnection_groupArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpUniformResourceIdentifiableGroupConnection_maxArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


type WpUniformResourceIdentifiableGroupConnection_minArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


type WpUniformResourceIdentifiableGroupConnection_sumArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};

type WpUniformResourceIdentifiableSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly uri: InputMaybe<SortOrderEnum>;
};

/** A User object */
type WpUser = Node & WpCommenter & WpDatabaseIdentifier & WpNode & WpUniformResourceIdentifiable & {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<WpAvatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  readonly capKey: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  /** Connection between the User type and the Comment type */
  readonly comments: Maybe<WpUserToCommentConnectionType>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** Description of the user. */
  readonly description: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  readonly email: Maybe<Scalars['String']>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  readonly extraCapabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  readonly firstName: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  readonly lastName: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  readonly locale: Maybe<Scalars['String']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
  readonly name: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  readonly nicename: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  readonly nickname: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  readonly pages: Maybe<WpUserToPageConnectionType>;
  readonly parent: Maybe<Node>;
  /** Connection between the User type and the post type */
  readonly posts: Maybe<WpUserToPostConnectionType>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  readonly registeredDate: Maybe<Scalars['String']>;
  /** Connection between the User type and the UserRole type */
  readonly roles: Maybe<WpUserToUserRoleConnectionType>;
  /** Whether the Toolbar should be displayed when the user is viewing the site. */
  readonly shouldShowAdminToolbar: Maybe<Scalars['Boolean']>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  readonly slug: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  readonly url: Maybe<Scalars['String']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  readonly username: Maybe<Scalars['String']>;
};

type WpUserConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpUserEdge>;
  readonly group: ReadonlyArray<WpUserGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpUser>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpUserConnection_distinctArgs = {
  field: WpUserFieldSelector;
};


type WpUserConnection_groupArgs = {
  field: WpUserFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpUserConnection_maxArgs = {
  field: WpUserFieldSelector;
};


type WpUserConnection_minArgs = {
  field: WpUserFieldSelector;
};


type WpUserConnection_sumArgs = {
  field: WpUserFieldSelector;
};

type WpUserConnectionEdgeType = {
  /** The connected User Node */
  readonly node: WpUser;
};

type WpUserConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpUserConnectionType = {
  /** A list of connected User Nodes */
  readonly nodes: ReadonlyArray<WpUser>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpUserConnectionPageInfoType;
};

type WpUserEdge = {
  readonly next: Maybe<WpUser>;
  readonly node: WpUser;
  readonly previous: Maybe<WpUser>;
};

type WpUserFieldSelector = {
  readonly avatar: InputMaybe<WpAvatarFieldSelector>;
  readonly capKey: InputMaybe<FieldSelectorEnum>;
  readonly capabilities: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly comments: InputMaybe<WpUserToCommentConnectionTypeFieldSelector>;
  readonly databaseId: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly email: InputMaybe<FieldSelectorEnum>;
  readonly extraCapabilities: InputMaybe<FieldSelectorEnum>;
  readonly firstName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isComment: InputMaybe<FieldSelectorEnum>;
  readonly isContentNode: InputMaybe<FieldSelectorEnum>;
  readonly isFrontPage: InputMaybe<FieldSelectorEnum>;
  readonly isPostsPage: InputMaybe<FieldSelectorEnum>;
  readonly isTermNode: InputMaybe<FieldSelectorEnum>;
  readonly lastName: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nicename: InputMaybe<FieldSelectorEnum>;
  readonly nickname: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly pages: InputMaybe<WpUserToPageConnectionTypeFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly posts: InputMaybe<WpUserToPostConnectionTypeFieldSelector>;
  readonly registeredDate: InputMaybe<FieldSelectorEnum>;
  readonly roles: InputMaybe<WpUserToUserRoleConnectionTypeFieldSelector>;
  readonly shouldShowAdminToolbar: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly uri: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly username: InputMaybe<FieldSelectorEnum>;
};

type WpUserFilterInput = {
  readonly avatar: InputMaybe<WpAvatarFilterInput>;
  readonly capKey: InputMaybe<StringQueryOperatorInput>;
  readonly capabilities: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly comments: InputMaybe<WpUserToCommentConnectionTypeFilterInput>;
  readonly databaseId: InputMaybe<IntQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly extraCapabilities: InputMaybe<StringQueryOperatorInput>;
  readonly firstName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isComment: InputMaybe<BooleanQueryOperatorInput>;
  readonly isContentNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly isFrontPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly isTermNode: InputMaybe<BooleanQueryOperatorInput>;
  readonly lastName: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nicename: InputMaybe<StringQueryOperatorInput>;
  readonly nickname: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly pages: InputMaybe<WpUserToPageConnectionTypeFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly posts: InputMaybe<WpUserToPostConnectionTypeFilterInput>;
  readonly registeredDate: InputMaybe<StringQueryOperatorInput>;
  readonly roles: InputMaybe<WpUserToUserRoleConnectionTypeFilterInput>;
  readonly shouldShowAdminToolbar: InputMaybe<BooleanQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly uri: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly username: InputMaybe<StringQueryOperatorInput>;
};

type WpUserGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpUserEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpUserGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpUser>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpUserGroupConnection_distinctArgs = {
  field: WpUserFieldSelector;
};


type WpUserGroupConnection_groupArgs = {
  field: WpUserFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpUserGroupConnection_maxArgs = {
  field: WpUserFieldSelector;
};


type WpUserGroupConnection_minArgs = {
  field: WpUserFieldSelector;
};


type WpUserGroupConnection_sumArgs = {
  field: WpUserFieldSelector;
};

/** A user role object */
type WpUserRole = Node & WpNode & {
  /** The capabilities that belong to this role */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  /** The display name of the role */
  readonly displayName: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  /** The registered name of the role */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type WpUserRoleConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpUserRoleEdge>;
  readonly group: ReadonlyArray<WpUserRoleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpUserRole>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpUserRoleConnection_distinctArgs = {
  field: WpUserRoleFieldSelector;
};


type WpUserRoleConnection_groupArgs = {
  field: WpUserRoleFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpUserRoleConnection_maxArgs = {
  field: WpUserRoleFieldSelector;
};


type WpUserRoleConnection_minArgs = {
  field: WpUserRoleFieldSelector;
};


type WpUserRoleConnection_sumArgs = {
  field: WpUserRoleFieldSelector;
};

type WpUserRoleConnectionEdgeType = {
  /** The connected UserRole Node */
  readonly node: WpUserRole;
};

type WpUserRoleConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpUserRoleConnectionType = {
  /** A list of connected UserRole Nodes */
  readonly nodes: ReadonlyArray<WpUserRole>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpUserRoleConnectionPageInfoType;
};

type WpUserRoleEdge = {
  readonly next: Maybe<WpUserRole>;
  readonly node: WpUserRole;
  readonly previous: Maybe<WpUserRole>;
};

type WpUserRoleFieldSelector = {
  readonly capabilities: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly displayName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeType: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type WpUserRoleFilterInput = {
  readonly capabilities: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly displayName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeType: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type WpUserRoleFilterListInput = {
  readonly elemMatch: InputMaybe<WpUserRoleFilterInput>;
};

type WpUserRoleGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<WpUserRoleEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<WpUserRoleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<WpUserRole>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type WpUserRoleGroupConnection_distinctArgs = {
  field: WpUserRoleFieldSelector;
};


type WpUserRoleGroupConnection_groupArgs = {
  field: WpUserRoleFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type WpUserRoleGroupConnection_maxArgs = {
  field: WpUserRoleFieldSelector;
};


type WpUserRoleGroupConnection_minArgs = {
  field: WpUserRoleFieldSelector;
};


type WpUserRoleGroupConnection_sumArgs = {
  field: WpUserRoleFieldSelector;
};

type WpUserRoleSortInput = {
  readonly capabilities: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly displayName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type WpUserSortInput = {
  readonly avatar: InputMaybe<WpAvatarSortInput>;
  readonly capKey: InputMaybe<SortOrderEnum>;
  readonly capabilities: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly comments: InputMaybe<WpUserToCommentConnectionTypeSortInput>;
  readonly databaseId: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly email: InputMaybe<SortOrderEnum>;
  readonly extraCapabilities: InputMaybe<SortOrderEnum>;
  readonly firstName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isComment: InputMaybe<SortOrderEnum>;
  readonly isContentNode: InputMaybe<SortOrderEnum>;
  readonly isFrontPage: InputMaybe<SortOrderEnum>;
  readonly isPostsPage: InputMaybe<SortOrderEnum>;
  readonly isTermNode: InputMaybe<SortOrderEnum>;
  readonly lastName: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nicename: InputMaybe<SortOrderEnum>;
  readonly nickname: InputMaybe<SortOrderEnum>;
  readonly nodeType: InputMaybe<SortOrderEnum>;
  readonly pages: InputMaybe<WpUserToPageConnectionTypeSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly posts: InputMaybe<WpUserToPostConnectionTypeSortInput>;
  readonly registeredDate: InputMaybe<SortOrderEnum>;
  readonly roles: InputMaybe<WpUserToUserRoleConnectionTypeSortInput>;
  readonly shouldShowAdminToolbar: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly uri: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly username: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;UserToCommentConnection&quot; */
type WpUserToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpUserToCommentConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpUserToCommentConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpUserToCommentConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the Comment type */
type WpUserToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpComment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpUserToCommentConnectionPageInfoType;
};

type WpUserToCommentConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpCommentFieldSelector>;
  readonly pageInfo: InputMaybe<WpUserToCommentConnectionPageInfoTypeFieldSelector>;
};

type WpUserToCommentConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpCommentFilterListInput>;
  readonly pageInfo: InputMaybe<WpUserToCommentConnectionPageInfoTypeFilterInput>;
};

type WpUserToCommentConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpCommentSortInput>;
  readonly pageInfo: InputMaybe<WpUserToCommentConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;UserToPageConnection&quot; */
type WpUserToPageConnectionPageInfoType = WpPageConnectionPageInfoType & WpPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpUserToPageConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpUserToPageConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpUserToPageConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the page type */
type WpUserToPageConnectionType = WpConnectionType & WpPageConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpPage>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpUserToPageConnectionPageInfoType;
};

type WpUserToPageConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpPageFieldSelector>;
  readonly pageInfo: InputMaybe<WpUserToPageConnectionPageInfoTypeFieldSelector>;
};

type WpUserToPageConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpPageFilterListInput>;
  readonly pageInfo: InputMaybe<WpUserToPageConnectionPageInfoTypeFilterInput>;
};

type WpUserToPageConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpPageSortInput>;
  readonly pageInfo: InputMaybe<WpUserToPageConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;UserToPostConnection&quot; */
type WpUserToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpUserToPostConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpUserToPostConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpUserToPostConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the post type */
type WpUserToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpPost>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpUserToPostConnectionPageInfoType;
};

type WpUserToPostConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpPostFieldSelector>;
  readonly pageInfo: InputMaybe<WpUserToPostConnectionPageInfoTypeFieldSelector>;
};

type WpUserToPostConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpPostFilterListInput>;
  readonly pageInfo: InputMaybe<WpUserToPostConnectionPageInfoTypeFilterInput>;
};

type WpUserToPostConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpPostSortInput>;
  readonly pageInfo: InputMaybe<WpUserToPostConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
type WpUserToUserRoleConnectionPageInfoType = WpPageInfoType & WpUserRoleConnectionPageInfoType & {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type WpUserToUserRoleConnectionPageInfoTypeFieldSelector = {
  readonly endCursor: InputMaybe<FieldSelectorEnum>;
  readonly hasNextPage: InputMaybe<FieldSelectorEnum>;
  readonly hasPreviousPage: InputMaybe<FieldSelectorEnum>;
  readonly startCursor: InputMaybe<FieldSelectorEnum>;
};

type WpUserToUserRoleConnectionPageInfoTypeFilterInput = {
  readonly endCursor: InputMaybe<StringQueryOperatorInput>;
  readonly hasNextPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly hasPreviousPage: InputMaybe<BooleanQueryOperatorInput>;
  readonly startCursor: InputMaybe<StringQueryOperatorInput>;
};

type WpUserToUserRoleConnectionPageInfoTypeSortInput = {
  readonly endCursor: InputMaybe<SortOrderEnum>;
  readonly hasNextPage: InputMaybe<SortOrderEnum>;
  readonly hasPreviousPage: InputMaybe<SortOrderEnum>;
  readonly startCursor: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the UserRole type */
type WpUserToUserRoleConnectionType = WpConnectionType & WpUserRoleConnectionType & {
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<WpUserRole>;
  /** Information about pagination in a connection. */
  readonly pageInfo: WpUserToUserRoleConnectionPageInfoType;
};

type WpUserToUserRoleConnectionTypeFieldSelector = {
  readonly nodes: InputMaybe<WpUserRoleFieldSelector>;
  readonly pageInfo: InputMaybe<WpUserToUserRoleConnectionPageInfoTypeFieldSelector>;
};

type WpUserToUserRoleConnectionTypeFilterInput = {
  readonly nodes: InputMaybe<WpUserRoleFilterListInput>;
  readonly pageInfo: InputMaybe<WpUserToUserRoleConnectionPageInfoTypeFilterInput>;
};

type WpUserToUserRoleConnectionTypeSortInput = {
  readonly nodes: InputMaybe<WpUserRoleSortInput>;
  readonly pageInfo: InputMaybe<WpUserToUserRoleConnectionPageInfoTypeSortInput>;
};

/** Information needed by gatsby-source-wordpress. */
type WpWPGatsby = {
  /** Returns wether or not pretty permalinks are enabled. */
  readonly arePrettyPermalinksEnabled: Maybe<Scalars['Boolean']>;
  /** Wether or not the Preview frontend URL is online. */
  readonly isPreviewFrontendOnline: Maybe<Scalars['Boolean']>;
};

type WpWPGatsbyFieldSelector = {
  readonly arePrettyPermalinksEnabled: InputMaybe<FieldSelectorEnum>;
  readonly isPreviewFrontendOnline: InputMaybe<FieldSelectorEnum>;
};

type WpWPGatsbyFilterInput = {
  readonly arePrettyPermalinksEnabled: InputMaybe<BooleanQueryOperatorInput>;
  readonly isPreviewFrontendOnline: InputMaybe<BooleanQueryOperatorInput>;
};

type WpWPGatsbySortInput = {
  readonly arePrettyPermalinksEnabled: InputMaybe<SortOrderEnum>;
  readonly isPreviewFrontendOnline: InputMaybe<SortOrderEnum>;
};

/** The writing setting type */
type WpWritingSettings = {
  /** Default post category. */
  readonly defaultCategory: Maybe<Scalars['Int']>;
  /** Default post format. */
  readonly defaultPostFormat: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly useSmilies: Maybe<Scalars['Boolean']>;
};

type WpWritingSettingsFieldSelector = {
  readonly defaultCategory: InputMaybe<FieldSelectorEnum>;
  readonly defaultPostFormat: InputMaybe<FieldSelectorEnum>;
  readonly useSmilies: InputMaybe<FieldSelectorEnum>;
};

type WpWritingSettingsFilterInput = {
  readonly defaultCategory: InputMaybe<IntQueryOperatorInput>;
  readonly defaultPostFormat: InputMaybe<StringQueryOperatorInput>;
  readonly useSmilies: InputMaybe<BooleanQueryOperatorInput>;
};

type WpWritingSettingsSortInput = {
  readonly defaultCategory: InputMaybe<SortOrderEnum>;
  readonly defaultPostFormat: InputMaybe<SortOrderEnum>;
  readonly useSmilies: InputMaybe<SortOrderEnum>;
};

type BioQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BioQueryQuery = { readonly author: { readonly firstName: string | null, readonly description: string | null, readonly twitter: string | null, readonly avatar: { readonly url: string | null } | null } | null };

type BlogPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId: InputMaybe<Scalars['String']>;
  nextPostId: InputMaybe<Scalars['String']>;
}>;


type BlogPostByIdQuery = { readonly post: { readonly id: string, readonly excerpt: string | null, readonly content: string | null, readonly title: string | null, readonly date: string | null, readonly featuredImage: { readonly node: { readonly altText: string | null, readonly localFile: { readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } | null } | null } } | null } | null, readonly previous: { readonly uri: string | null, readonly title: string | null } | null, readonly next: { readonly uri: string | null, readonly title: string | null } | null };

type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


type LayoutQueryQuery = { readonly wp: { readonly generalSettings: { readonly title: string | null, readonly description: string | null } | null } | null };

type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


type MyQueryQuery = { readonly allWpPost: { readonly nodes: ReadonlyArray<{ readonly date: string | null, readonly id: string, readonly title: string | null }> } };

type WordPressPostArchiveQueryVariables = Exact<{
  offset: Scalars['Int'];
  postsPerPage: Scalars['Int'];
}>;


type WordPressPostArchiveQuery = { readonly allWpPost: { readonly nodes: ReadonlyArray<{ readonly excerpt: string | null, readonly uri: string | null, readonly date: string | null, readonly title: string | null }> } };


}
