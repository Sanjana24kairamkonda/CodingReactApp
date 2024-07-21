export const questions = [
    {
      title: 'Given a string s, find the length of the longest substring without repeating characters.',
      test_cases: [
        {
          input: 's = "pwwkew"',
          output: '3',
          explanation: 'The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.'
        },
        {
          input: 's = "abcabcbb"',
          output: '3',
          explanation: 'The answer is "abc", with the length of 3.'
        },
        {
          input: 's = "bbbbb"',
          output: '1',
          explanation: 'The answer is "b", with the length of 1.'
        }
      ]
    },
    {
      title: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      test_cases: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
        },
        {
          input: 'nums = [3,2,4], target = 6',
          output: '[1,2]',
          explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
        },
        {
          input: 'nums = [3,3], target = 6',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 6, we return [0, 1].'
        }
      ]
    },
    {
      title: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
      test_cases: [
        {
          input: 'l1 = [2,4,3], l2 = [5,6,4]',
          output: '[7,0,8]',
          explanation: '342 + 465 = 807.'
        },
        {
          input: 'l1 = [0], l2 = [0]',
          output: '[0]',
          explanation: '0 + 0 = 0.'
        },
        {
          input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]',
          output: '[8,9,9,9,0,0,0,1]',
          explanation: '9999999 + 9999 = 10009998.'
        }
      ]
    }
  ];
  