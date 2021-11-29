/* !!! THIS FILE WAS AUTO-GENERATED BY `npm run gen` !!! */
import { NodePath } from "../lib/node-path";
import { Context } from "../lib/path-visitor";
import { namedTypes } from "./namedTypes";

export interface Visitor<M = {}> {
  visitPrintable?(this: Context & M, path: NodePath<namedTypes.Printable>): any;
  visitSourceLocation?(this: Context & M, path: NodePath<namedTypes.SourceLocation>): any;
  visitNode?(this: Context & M, path: NodePath<namedTypes.Node>): any;
  visitComment?(this: Context & M, path: NodePath<namedTypes.Comment>): any;
  visitPosition?(this: Context & M, path: NodePath<namedTypes.Position>): any;
  visitFile?(this: Context & M, path: NodePath<namedTypes.File>): any;
  visitProgram?(this: Context & M, path: NodePath<namedTypes.Program>): any;
  visitStatement?(this: Context & M, path: NodePath<namedTypes.Statement>): any;
  visitFunction?(this: Context & M, path: NodePath<namedTypes.Function>): any;
  visitExpression?(this: Context & M, path: NodePath<namedTypes.Expression>): any;
  visitPattern?(this: Context & M, path: NodePath<namedTypes.Pattern>): any;
  visitIdentifier?(this: Context & M, path: NodePath<namedTypes.Identifier>): any;
  visitBlockStatement?(this: Context & M, path: NodePath<namedTypes.BlockStatement>): any;
  visitEmptyStatement?(this: Context & M, path: NodePath<namedTypes.EmptyStatement>): any;
  visitExpressionStatement?(this: Context & M, path: NodePath<namedTypes.ExpressionStatement>): any;
  visitIfStatement?(this: Context & M, path: NodePath<namedTypes.IfStatement>): any;
  visitLabeledStatement?(this: Context & M, path: NodePath<namedTypes.LabeledStatement>): any;
  visitBreakStatement?(this: Context & M, path: NodePath<namedTypes.BreakStatement>): any;
  visitContinueStatement?(this: Context & M, path: NodePath<namedTypes.ContinueStatement>): any;
  visitWithStatement?(this: Context & M, path: NodePath<namedTypes.WithStatement>): any;
  visitSwitchStatement?(this: Context & M, path: NodePath<namedTypes.SwitchStatement>): any;
  visitSwitchCase?(this: Context & M, path: NodePath<namedTypes.SwitchCase>): any;
  visitReturnStatement?(this: Context & M, path: NodePath<namedTypes.ReturnStatement>): any;
  visitThrowStatement?(this: Context & M, path: NodePath<namedTypes.ThrowStatement>): any;
  visitTryStatement?(this: Context & M, path: NodePath<namedTypes.TryStatement>): any;
  visitCatchClause?(this: Context & M, path: NodePath<namedTypes.CatchClause>): any;
  visitWhileStatement?(this: Context & M, path: NodePath<namedTypes.WhileStatement>): any;
  visitDoWhileStatement?(this: Context & M, path: NodePath<namedTypes.DoWhileStatement>): any;
  visitForStatement?(this: Context & M, path: NodePath<namedTypes.ForStatement>): any;
  visitDeclaration?(this: Context & M, path: NodePath<namedTypes.Declaration>): any;
  visitVariableDeclaration?(this: Context & M, path: NodePath<namedTypes.VariableDeclaration>): any;
  visitForInStatement?(this: Context & M, path: NodePath<namedTypes.ForInStatement>): any;
  visitDebuggerStatement?(this: Context & M, path: NodePath<namedTypes.DebuggerStatement>): any;
  visitFunctionDeclaration?(this: Context & M, path: NodePath<namedTypes.FunctionDeclaration>): any;
  visitFunctionExpression?(this: Context & M, path: NodePath<namedTypes.FunctionExpression>): any;
  visitVariableDeclarator?(this: Context & M, path: NodePath<namedTypes.VariableDeclarator>): any;
  visitThisExpression?(this: Context & M, path: NodePath<namedTypes.ThisExpression>): any;
  visitArrayExpression?(this: Context & M, path: NodePath<namedTypes.ArrayExpression>): any;
  visitObjectExpression?(this: Context & M, path: NodePath<namedTypes.ObjectExpression>): any;
  visitProperty?(this: Context & M, path: NodePath<namedTypes.Property>): any;
  visitLiteral?(this: Context & M, path: NodePath<namedTypes.Literal>): any;
  visitSequenceExpression?(this: Context & M, path: NodePath<namedTypes.SequenceExpression>): any;
  visitUnaryExpression?(this: Context & M, path: NodePath<namedTypes.UnaryExpression>): any;
  visitBinaryExpression?(this: Context & M, path: NodePath<namedTypes.BinaryExpression>): any;
  visitAssignmentExpression?(this: Context & M, path: NodePath<namedTypes.AssignmentExpression>): any;
  visitChainElement?(this: Context & M, path: NodePath<namedTypes.ChainElement>): any;
  visitMemberExpression?(this: Context & M, path: NodePath<namedTypes.MemberExpression>): any;
  visitUpdateExpression?(this: Context & M, path: NodePath<namedTypes.UpdateExpression>): any;
  visitLogicalExpression?(this: Context & M, path: NodePath<namedTypes.LogicalExpression>): any;
  visitConditionalExpression?(this: Context & M, path: NodePath<namedTypes.ConditionalExpression>): any;
  visitNewExpression?(this: Context & M, path: NodePath<namedTypes.NewExpression>): any;
  visitCallExpression?(this: Context & M, path: NodePath<namedTypes.CallExpression>): any;
  visitRestElement?(this: Context & M, path: NodePath<namedTypes.RestElement>): any;
  visitTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.TypeAnnotation>): any;
  visitTSTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.TSTypeAnnotation>): any;
  visitSpreadElementPattern?(this: Context & M, path: NodePath<namedTypes.SpreadElementPattern>): any;
  visitArrowFunctionExpression?(this: Context & M, path: NodePath<namedTypes.ArrowFunctionExpression>): any;
  visitForOfStatement?(this: Context & M, path: NodePath<namedTypes.ForOfStatement>): any;
  visitYieldExpression?(this: Context & M, path: NodePath<namedTypes.YieldExpression>): any;
  visitGeneratorExpression?(this: Context & M, path: NodePath<namedTypes.GeneratorExpression>): any;
  visitComprehensionBlock?(this: Context & M, path: NodePath<namedTypes.ComprehensionBlock>): any;
  visitComprehensionExpression?(this: Context & M, path: NodePath<namedTypes.ComprehensionExpression>): any;
  visitObjectProperty?(this: Context & M, path: NodePath<namedTypes.ObjectProperty>): any;
  visitPropertyPattern?(this: Context & M, path: NodePath<namedTypes.PropertyPattern>): any;
  visitObjectPattern?(this: Context & M, path: NodePath<namedTypes.ObjectPattern>): any;
  visitArrayPattern?(this: Context & M, path: NodePath<namedTypes.ArrayPattern>): any;
  visitSpreadElement?(this: Context & M, path: NodePath<namedTypes.SpreadElement>): any;
  visitAssignmentPattern?(this: Context & M, path: NodePath<namedTypes.AssignmentPattern>): any;
  visitMethodDefinition?(this: Context & M, path: NodePath<namedTypes.MethodDefinition>): any;
  visitClassPropertyDefinition?(this: Context & M, path: NodePath<namedTypes.ClassPropertyDefinition>): any;
  visitClassProperty?(this: Context & M, path: NodePath<namedTypes.ClassProperty>): any;
  visitClassBody?(this: Context & M, path: NodePath<namedTypes.ClassBody>): any;
  visitClassDeclaration?(this: Context & M, path: NodePath<namedTypes.ClassDeclaration>): any;
  visitClassExpression?(this: Context & M, path: NodePath<namedTypes.ClassExpression>): any;
  visitSuper?(this: Context & M, path: NodePath<namedTypes.Super>): any;
  visitSpecifier?(this: Context & M, path: NodePath<namedTypes.Specifier>): any;
  visitModuleSpecifier?(this: Context & M, path: NodePath<namedTypes.ModuleSpecifier>): any;
  visitImportSpecifier?(this: Context & M, path: NodePath<namedTypes.ImportSpecifier>): any;
  visitImportDefaultSpecifier?(this: Context & M, path: NodePath<namedTypes.ImportDefaultSpecifier>): any;
  visitImportNamespaceSpecifier?(this: Context & M, path: NodePath<namedTypes.ImportNamespaceSpecifier>): any;
  visitImportDeclaration?(this: Context & M, path: NodePath<namedTypes.ImportDeclaration>): any;
  visitExportNamedDeclaration?(this: Context & M, path: NodePath<namedTypes.ExportNamedDeclaration>): any;
  visitExportSpecifier?(this: Context & M, path: NodePath<namedTypes.ExportSpecifier>): any;
  visitExportDefaultDeclaration?(this: Context & M, path: NodePath<namedTypes.ExportDefaultDeclaration>): any;
  visitExportAllDeclaration?(this: Context & M, path: NodePath<namedTypes.ExportAllDeclaration>): any;
  visitTaggedTemplateExpression?(this: Context & M, path: NodePath<namedTypes.TaggedTemplateExpression>): any;
  visitTemplateLiteral?(this: Context & M, path: NodePath<namedTypes.TemplateLiteral>): any;
  visitTemplateElement?(this: Context & M, path: NodePath<namedTypes.TemplateElement>): any;
  visitMetaProperty?(this: Context & M, path: NodePath<namedTypes.MetaProperty>): any;
  visitAwaitExpression?(this: Context & M, path: NodePath<namedTypes.AwaitExpression>): any;
  visitSpreadProperty?(this: Context & M, path: NodePath<namedTypes.SpreadProperty>): any;
  visitSpreadPropertyPattern?(this: Context & M, path: NodePath<namedTypes.SpreadPropertyPattern>): any;
  visitImportExpression?(this: Context & M, path: NodePath<namedTypes.ImportExpression>): any;
  visitChainExpression?(this: Context & M, path: NodePath<namedTypes.ChainExpression>): any;
  visitOptionalCallExpression?(this: Context & M, path: NodePath<namedTypes.OptionalCallExpression>): any;
  visitOptionalMemberExpression?(this: Context & M, path: NodePath<namedTypes.OptionalMemberExpression>): any;
  visitStaticBlock?(this: Context & M, path: NodePath<namedTypes.StaticBlock>): any;
  visitDecorator?(this: Context & M, path: NodePath<namedTypes.Decorator>): any;
  visitPrivateName?(this: Context & M, path: NodePath<namedTypes.PrivateName>): any;
  visitClassPrivateProperty?(this: Context & M, path: NodePath<namedTypes.ClassPrivateProperty>): any;
  visitImportAttribute?(this: Context & M, path: NodePath<namedTypes.ImportAttribute>): any;
  visitRecordExpression?(this: Context & M, path: NodePath<namedTypes.RecordExpression>): any;
  visitObjectMethod?(this: Context & M, path: NodePath<namedTypes.ObjectMethod>): any;
  visitTupleExpression?(this: Context & M, path: NodePath<namedTypes.TupleExpression>): any;
  visitJSXAttribute?(this: Context & M, path: NodePath<namedTypes.JSXAttribute>): any;
  visitJSXIdentifier?(this: Context & M, path: NodePath<namedTypes.JSXIdentifier>): any;
  visitJSXNamespacedName?(this: Context & M, path: NodePath<namedTypes.JSXNamespacedName>): any;
  visitJSXExpressionContainer?(this: Context & M, path: NodePath<namedTypes.JSXExpressionContainer>): any;
  visitJSXElement?(this: Context & M, path: NodePath<namedTypes.JSXElement>): any;
  visitJSXFragment?(this: Context & M, path: NodePath<namedTypes.JSXFragment>): any;
  visitJSXMemberExpression?(this: Context & M, path: NodePath<namedTypes.JSXMemberExpression>): any;
  visitJSXSpreadAttribute?(this: Context & M, path: NodePath<namedTypes.JSXSpreadAttribute>): any;
  visitJSXEmptyExpression?(this: Context & M, path: NodePath<namedTypes.JSXEmptyExpression>): any;
  visitJSXText?(this: Context & M, path: NodePath<namedTypes.JSXText>): any;
  visitJSXSpreadChild?(this: Context & M, path: NodePath<namedTypes.JSXSpreadChild>): any;
  visitJSXOpeningElement?(this: Context & M, path: NodePath<namedTypes.JSXOpeningElement>): any;
  visitJSXClosingElement?(this: Context & M, path: NodePath<namedTypes.JSXClosingElement>): any;
  visitJSXOpeningFragment?(this: Context & M, path: NodePath<namedTypes.JSXOpeningFragment>): any;
  visitJSXClosingFragment?(this: Context & M, path: NodePath<namedTypes.JSXClosingFragment>): any;
  visitTypeParameterDeclaration?(this: Context & M, path: NodePath<namedTypes.TypeParameterDeclaration>): any;
  visitTSTypeParameterDeclaration?(this: Context & M, path: NodePath<namedTypes.TSTypeParameterDeclaration>): any;
  visitTypeParameterInstantiation?(this: Context & M, path: NodePath<namedTypes.TypeParameterInstantiation>): any;
  visitTSTypeParameterInstantiation?(this: Context & M, path: NodePath<namedTypes.TSTypeParameterInstantiation>): any;
  visitClassImplements?(this: Context & M, path: NodePath<namedTypes.ClassImplements>): any;
  visitTSType?(this: Context & M, path: NodePath<namedTypes.TSType>): any;
  visitTSHasOptionalTypeParameterInstantiation?(
    this: Context & M,
    path: NodePath<namedTypes.TSHasOptionalTypeParameterInstantiation>
  ): any;
  visitTSExpressionWithTypeArguments?(
    this: Context & M,
    path: NodePath<namedTypes.TSExpressionWithTypeArguments>
  ): any;
  visitFlow?(this: Context & M, path: NodePath<namedTypes.Flow>): any;
  visitFlowType?(this: Context & M, path: NodePath<namedTypes.FlowType>): any;
  visitAnyTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.AnyTypeAnnotation>): any;
  visitEmptyTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.EmptyTypeAnnotation>): any;
  visitMixedTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.MixedTypeAnnotation>): any;
  visitVoidTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.VoidTypeAnnotation>): any;
  visitSymbolTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.SymbolTypeAnnotation>): any;
  visitNumberTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.NumberTypeAnnotation>): any;
  visitBigIntTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.BigIntTypeAnnotation>): any;
  visitNumberLiteralTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.NumberLiteralTypeAnnotation>): any;
  visitNumericLiteralTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.NumericLiteralTypeAnnotation>): any;
  visitBigIntLiteralTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.BigIntLiteralTypeAnnotation>): any;
  visitStringTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.StringTypeAnnotation>): any;
  visitStringLiteralTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.StringLiteralTypeAnnotation>): any;
  visitBooleanTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.BooleanTypeAnnotation>): any;
  visitBooleanLiteralTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.BooleanLiteralTypeAnnotation>): any;
  visitNullableTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.NullableTypeAnnotation>): any;
  visitNullLiteralTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.NullLiteralTypeAnnotation>): any;
  visitNullTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.NullTypeAnnotation>): any;
  visitThisTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.ThisTypeAnnotation>): any;
  visitExistsTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.ExistsTypeAnnotation>): any;
  visitExistentialTypeParam?(this: Context & M, path: NodePath<namedTypes.ExistentialTypeParam>): any;
  visitFunctionTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.FunctionTypeAnnotation>): any;
  visitFunctionTypeParam?(this: Context & M, path: NodePath<namedTypes.FunctionTypeParam>): any;
  visitArrayTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.ArrayTypeAnnotation>): any;
  visitObjectTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.ObjectTypeAnnotation>): any;
  visitObjectTypeProperty?(this: Context & M, path: NodePath<namedTypes.ObjectTypeProperty>): any;
  visitObjectTypeSpreadProperty?(this: Context & M, path: NodePath<namedTypes.ObjectTypeSpreadProperty>): any;
  visitObjectTypeIndexer?(this: Context & M, path: NodePath<namedTypes.ObjectTypeIndexer>): any;
  visitObjectTypeCallProperty?(this: Context & M, path: NodePath<namedTypes.ObjectTypeCallProperty>): any;
  visitObjectTypeInternalSlot?(this: Context & M, path: NodePath<namedTypes.ObjectTypeInternalSlot>): any;
  visitVariance?(this: Context & M, path: NodePath<namedTypes.Variance>): any;
  visitQualifiedTypeIdentifier?(this: Context & M, path: NodePath<namedTypes.QualifiedTypeIdentifier>): any;
  visitGenericTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.GenericTypeAnnotation>): any;
  visitMemberTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.MemberTypeAnnotation>): any;
  visitIndexedAccessType?(this: Context & M, path: NodePath<namedTypes.IndexedAccessType>): any;
  visitOptionalIndexedAccessType?(this: Context & M, path: NodePath<namedTypes.OptionalIndexedAccessType>): any;
  visitUnionTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.UnionTypeAnnotation>): any;
  visitIntersectionTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.IntersectionTypeAnnotation>): any;
  visitTypeofTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.TypeofTypeAnnotation>): any;
  visitTypeParameter?(this: Context & M, path: NodePath<namedTypes.TypeParameter>): any;
  visitInterfaceTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.InterfaceTypeAnnotation>): any;
  visitInterfaceExtends?(this: Context & M, path: NodePath<namedTypes.InterfaceExtends>): any;
  visitInterfaceDeclaration?(this: Context & M, path: NodePath<namedTypes.InterfaceDeclaration>): any;
  visitDeclareInterface?(this: Context & M, path: NodePath<namedTypes.DeclareInterface>): any;
  visitTypeAlias?(this: Context & M, path: NodePath<namedTypes.TypeAlias>): any;
  visitDeclareTypeAlias?(this: Context & M, path: NodePath<namedTypes.DeclareTypeAlias>): any;
  visitOpaqueType?(this: Context & M, path: NodePath<namedTypes.OpaqueType>): any;
  visitDeclareOpaqueType?(this: Context & M, path: NodePath<namedTypes.DeclareOpaqueType>): any;
  visitTypeCastExpression?(this: Context & M, path: NodePath<namedTypes.TypeCastExpression>): any;
  visitTupleTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.TupleTypeAnnotation>): any;
  visitDeclareVariable?(this: Context & M, path: NodePath<namedTypes.DeclareVariable>): any;
  visitDeclareFunction?(this: Context & M, path: NodePath<namedTypes.DeclareFunction>): any;
  visitFlowPredicate?(this: Context & M, path: NodePath<namedTypes.FlowPredicate>): any;
  visitDeclareClass?(this: Context & M, path: NodePath<namedTypes.DeclareClass>): any;
  visitDeclareModule?(this: Context & M, path: NodePath<namedTypes.DeclareModule>): any;
  visitDeclareModuleExports?(this: Context & M, path: NodePath<namedTypes.DeclareModuleExports>): any;
  visitDeclareExportDeclaration?(this: Context & M, path: NodePath<namedTypes.DeclareExportDeclaration>): any;
  visitExportBatchSpecifier?(this: Context & M, path: NodePath<namedTypes.ExportBatchSpecifier>): any;
  visitDeclareExportAllDeclaration?(this: Context & M, path: NodePath<namedTypes.DeclareExportAllDeclaration>): any;
  visitInferredPredicate?(this: Context & M, path: NodePath<namedTypes.InferredPredicate>): any;
  visitDeclaredPredicate?(this: Context & M, path: NodePath<namedTypes.DeclaredPredicate>): any;
  visitEnumDeclaration?(this: Context & M, path: NodePath<namedTypes.EnumDeclaration>): any;
  visitEnumBooleanBody?(this: Context & M, path: NodePath<namedTypes.EnumBooleanBody>): any;
  visitEnumNumberBody?(this: Context & M, path: NodePath<namedTypes.EnumNumberBody>): any;
  visitEnumStringBody?(this: Context & M, path: NodePath<namedTypes.EnumStringBody>): any;
  visitEnumSymbolBody?(this: Context & M, path: NodePath<namedTypes.EnumSymbolBody>): any;
  visitEnumBooleanMember?(this: Context & M, path: NodePath<namedTypes.EnumBooleanMember>): any;
  visitEnumNumberMember?(this: Context & M, path: NodePath<namedTypes.EnumNumberMember>): any;
  visitEnumStringMember?(this: Context & M, path: NodePath<namedTypes.EnumStringMember>): any;
  visitEnumDefaultedMember?(this: Context & M, path: NodePath<namedTypes.EnumDefaultedMember>): any;
  visitExportDeclaration?(this: Context & M, path: NodePath<namedTypes.ExportDeclaration>): any;
  visitBlock?(this: Context & M, path: NodePath<namedTypes.Block>): any;
  visitLine?(this: Context & M, path: NodePath<namedTypes.Line>): any;
  visitNoop?(this: Context & M, path: NodePath<namedTypes.Noop>): any;
  visitDoExpression?(this: Context & M, path: NodePath<namedTypes.DoExpression>): any;
  visitBindExpression?(this: Context & M, path: NodePath<namedTypes.BindExpression>): any;
  visitParenthesizedExpression?(this: Context & M, path: NodePath<namedTypes.ParenthesizedExpression>): any;
  visitExportNamespaceSpecifier?(this: Context & M, path: NodePath<namedTypes.ExportNamespaceSpecifier>): any;
  visitExportDefaultSpecifier?(this: Context & M, path: NodePath<namedTypes.ExportDefaultSpecifier>): any;
  visitCommentBlock?(this: Context & M, path: NodePath<namedTypes.CommentBlock>): any;
  visitCommentLine?(this: Context & M, path: NodePath<namedTypes.CommentLine>): any;
  visitDirective?(this: Context & M, path: NodePath<namedTypes.Directive>): any;
  visitDirectiveLiteral?(this: Context & M, path: NodePath<namedTypes.DirectiveLiteral>): any;
  visitInterpreterDirective?(this: Context & M, path: NodePath<namedTypes.InterpreterDirective>): any;
  visitStringLiteral?(this: Context & M, path: NodePath<namedTypes.StringLiteral>): any;
  visitNumericLiteral?(this: Context & M, path: NodePath<namedTypes.NumericLiteral>): any;
  visitBigIntLiteral?(this: Context & M, path: NodePath<namedTypes.BigIntLiteral>): any;
  visitDecimalLiteral?(this: Context & M, path: NodePath<namedTypes.DecimalLiteral>): any;
  visitNullLiteral?(this: Context & M, path: NodePath<namedTypes.NullLiteral>): any;
  visitBooleanLiteral?(this: Context & M, path: NodePath<namedTypes.BooleanLiteral>): any;
  visitRegExpLiteral?(this: Context & M, path: NodePath<namedTypes.RegExpLiteral>): any;
  visitClassMethod?(this: Context & M, path: NodePath<namedTypes.ClassMethod>): any;
  visitClassPrivateMethod?(this: Context & M, path: NodePath<namedTypes.ClassPrivateMethod>): any;
  visitRestProperty?(this: Context & M, path: NodePath<namedTypes.RestProperty>): any;
  visitForAwaitStatement?(this: Context & M, path: NodePath<namedTypes.ForAwaitStatement>): any;
  visitImport?(this: Context & M, path: NodePath<namedTypes.Import>): any;
  visitV8IntrinsicIdentifier?(this: Context & M, path: NodePath<namedTypes.V8IntrinsicIdentifier>): any;
  visitTSQualifiedName?(this: Context & M, path: NodePath<namedTypes.TSQualifiedName>): any;
  visitTSTypeReference?(this: Context & M, path: NodePath<namedTypes.TSTypeReference>): any;
  visitTSHasOptionalTypeParameters?(this: Context & M, path: NodePath<namedTypes.TSHasOptionalTypeParameters>): any;
  visitTSHasOptionalTypeAnnotation?(this: Context & M, path: NodePath<namedTypes.TSHasOptionalTypeAnnotation>): any;
  visitTSAsExpression?(this: Context & M, path: NodePath<namedTypes.TSAsExpression>): any;
  visitTSNonNullExpression?(this: Context & M, path: NodePath<namedTypes.TSNonNullExpression>): any;
  visitTSAnyKeyword?(this: Context & M, path: NodePath<namedTypes.TSAnyKeyword>): any;
  visitTSBigIntKeyword?(this: Context & M, path: NodePath<namedTypes.TSBigIntKeyword>): any;
  visitTSBooleanKeyword?(this: Context & M, path: NodePath<namedTypes.TSBooleanKeyword>): any;
  visitTSNeverKeyword?(this: Context & M, path: NodePath<namedTypes.TSNeverKeyword>): any;
  visitTSNullKeyword?(this: Context & M, path: NodePath<namedTypes.TSNullKeyword>): any;
  visitTSNumberKeyword?(this: Context & M, path: NodePath<namedTypes.TSNumberKeyword>): any;
  visitTSObjectKeyword?(this: Context & M, path: NodePath<namedTypes.TSObjectKeyword>): any;
  visitTSStringKeyword?(this: Context & M, path: NodePath<namedTypes.TSStringKeyword>): any;
  visitTSSymbolKeyword?(this: Context & M, path: NodePath<namedTypes.TSSymbolKeyword>): any;
  visitTSUndefinedKeyword?(this: Context & M, path: NodePath<namedTypes.TSUndefinedKeyword>): any;
  visitTSUnknownKeyword?(this: Context & M, path: NodePath<namedTypes.TSUnknownKeyword>): any;
  visitTSVoidKeyword?(this: Context & M, path: NodePath<namedTypes.TSVoidKeyword>): any;
  visitTSIntrinsicKeyword?(this: Context & M, path: NodePath<namedTypes.TSIntrinsicKeyword>): any;
  visitTSThisType?(this: Context & M, path: NodePath<namedTypes.TSThisType>): any;
  visitTSArrayType?(this: Context & M, path: NodePath<namedTypes.TSArrayType>): any;
  visitTSLiteralType?(this: Context & M, path: NodePath<namedTypes.TSLiteralType>): any;
  visitTSUnionType?(this: Context & M, path: NodePath<namedTypes.TSUnionType>): any;
  visitTSIntersectionType?(this: Context & M, path: NodePath<namedTypes.TSIntersectionType>): any;
  visitTSConditionalType?(this: Context & M, path: NodePath<namedTypes.TSConditionalType>): any;
  visitTSInferType?(this: Context & M, path: NodePath<namedTypes.TSInferType>): any;
  visitTSTypeParameter?(this: Context & M, path: NodePath<namedTypes.TSTypeParameter>): any;
  visitTSParenthesizedType?(this: Context & M, path: NodePath<namedTypes.TSParenthesizedType>): any;
  visitTSFunctionType?(this: Context & M, path: NodePath<namedTypes.TSFunctionType>): any;
  visitTSConstructorType?(this: Context & M, path: NodePath<namedTypes.TSConstructorType>): any;
  visitTSDeclareFunction?(this: Context & M, path: NodePath<namedTypes.TSDeclareFunction>): any;
  visitTSDeclareMethod?(this: Context & M, path: NodePath<namedTypes.TSDeclareMethod>): any;
  visitTSMappedType?(this: Context & M, path: NodePath<namedTypes.TSMappedType>): any;
  visitTSTupleType?(this: Context & M, path: NodePath<namedTypes.TSTupleType>): any;
  visitTSNamedTupleMember?(this: Context & M, path: NodePath<namedTypes.TSNamedTupleMember>): any;
  visitTSRestType?(this: Context & M, path: NodePath<namedTypes.TSRestType>): any;
  visitTSOptionalType?(this: Context & M, path: NodePath<namedTypes.TSOptionalType>): any;
  visitTSIndexedAccessType?(this: Context & M, path: NodePath<namedTypes.TSIndexedAccessType>): any;
  visitTSTypeOperator?(this: Context & M, path: NodePath<namedTypes.TSTypeOperator>): any;
  visitTSIndexSignature?(this: Context & M, path: NodePath<namedTypes.TSIndexSignature>): any;
  visitTSPropertySignature?(this: Context & M, path: NodePath<namedTypes.TSPropertySignature>): any;
  visitTSMethodSignature?(this: Context & M, path: NodePath<namedTypes.TSMethodSignature>): any;
  visitTSTypePredicate?(this: Context & M, path: NodePath<namedTypes.TSTypePredicate>): any;
  visitTSCallSignatureDeclaration?(this: Context & M, path: NodePath<namedTypes.TSCallSignatureDeclaration>): any;
  visitTSConstructSignatureDeclaration?(
    this: Context & M,
    path: NodePath<namedTypes.TSConstructSignatureDeclaration>
  ): any;
  visitTSEnumMember?(this: Context & M, path: NodePath<namedTypes.TSEnumMember>): any;
  visitTSTypeQuery?(this: Context & M, path: NodePath<namedTypes.TSTypeQuery>): any;
  visitTSImportType?(this: Context & M, path: NodePath<namedTypes.TSImportType>): any;
  visitTSTypeLiteral?(this: Context & M, path: NodePath<namedTypes.TSTypeLiteral>): any;
  visitTSTypeAssertion?(this: Context & M, path: NodePath<namedTypes.TSTypeAssertion>): any;
  visitTSEnumDeclaration?(this: Context & M, path: NodePath<namedTypes.TSEnumDeclaration>): any;
  visitTSTypeAliasDeclaration?(this: Context & M, path: NodePath<namedTypes.TSTypeAliasDeclaration>): any;
  visitTSModuleBlock?(this: Context & M, path: NodePath<namedTypes.TSModuleBlock>): any;
  visitTSModuleDeclaration?(this: Context & M, path: NodePath<namedTypes.TSModuleDeclaration>): any;
  visitTSImportEqualsDeclaration?(this: Context & M, path: NodePath<namedTypes.TSImportEqualsDeclaration>): any;
  visitTSExternalModuleReference?(this: Context & M, path: NodePath<namedTypes.TSExternalModuleReference>): any;
  visitTSExportAssignment?(this: Context & M, path: NodePath<namedTypes.TSExportAssignment>): any;
  visitTSNamespaceExportDeclaration?(this: Context & M, path: NodePath<namedTypes.TSNamespaceExportDeclaration>): any;
  visitTSInterfaceBody?(this: Context & M, path: NodePath<namedTypes.TSInterfaceBody>): any;
  visitTSInterfaceDeclaration?(this: Context & M, path: NodePath<namedTypes.TSInterfaceDeclaration>): any;
  visitTSParameterProperty?(this: Context & M, path: NodePath<namedTypes.TSParameterProperty>): any;
}