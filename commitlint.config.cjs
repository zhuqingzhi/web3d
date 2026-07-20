module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 提交类型必须合法
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // bug修复
        'docs', // 文档修改
        'style', // 格式、样式，无逻辑变更
        'refactor', // 重构，无bug无新功能
        'perf', // 性能优化
        'test', // 新增/修改测试用例
        'build', // 构建、依赖变更
        'ci', // CI流水线配置
        'chore', // 其他杂项
      ],
    ],
    // type 必须小写
    'type-case': [2, 'always', 'lower-case'],
    // type不能为空
    'type-empty': [2, 'never'],
    // 主题不能为空
    'subject-empty': [2, 'never'],
    // 主题首字母小写
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // 主题结尾禁止句号
    'subject-full-stop': [2, 'never', '.'],
    // 换行规则
    'header-max-length': [2, 'always', 100],
  },
}
