import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AppsyncEventbridgeSnsStepfunctionsBackend from '../lib/appsync-eventbridge-sns-stepfunctions-backend-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AppsyncEventbridgeSnsStepfunctionsBackend.AppsyncEventbridgeSnsStepfunctionsBackendStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
