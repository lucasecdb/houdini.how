/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Demo from '../components/Demo/index.js'
import workletData from '../worklet-data.js'

const worklets = Object.values(workletData).sort(() => Math.random()-.5);

export default function Home() {
  return (
    <div>
      {worklets.map(worklet => (
        <Demo worklet={worklet} />
      ))}
    </div>
  );
}
