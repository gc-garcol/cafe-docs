// Cafe Docs: content registry + search, filter and graph view.
// To add a doc: append an entry to DOCS. Categories and topics are derived from it.
// `order` is the reading order inside a category (lower first, prerequisites before what builds on them).
// A doc can sit in more categories: `also: [{ category, topic, order }]` adds it there with its own topic and order.

const DOCS = [
  {
    title: 'Skip List',
    path: 'content/datastructure-algorithm/skiplist/skiplist.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    order: 7,
    level: 'Intermediate',
    tags: ['probabilistic', 'linked list', 'search', 'insert', 'delete', 'balanced'],
    summary: 'A sorted linked list with express lanes on top. Random coin flips decide who gets promoted, and search takes expected O(log n) steps.',
    related: ['Sparse Table', 'Segment Tree'],
  },
  {
    title: 'Sparse Table',
    path: 'content/datastructure-algorithm/sparse-table/sparse-table.html',
    category: 'Data structures',
    topic: 'Range queries',
    order: 9,
    level: 'Intermediate',
    tags: ['rmq', 'min', 'static', 'precompute', 'idempotent', 'O(1) query'],
    summary: 'Precompute the answer for every block whose length is a power of two. Any range minimum is then two lookups.',
    related: ['Segment Tree', 'Skip List'],
  },
  {
    title: 'Merkle Tree',
    path: 'content/datastructure-algorithm/merkle-tree/merkle-tree.html',
    category: 'Data structures',
    topic: 'Hash trees',
    order: 15,
    level: 'Intermediate',
    tags: ['hash', 'proof', 'blockchain', 'integrity', 'verification', 'O(log n) proof'],
    summary: 'Hash items, then hash the hashes in pairs up to a single root. Any item can be proved with only log n sibling hashes.',
    related: ['Skip List'],
  },
  {
    title: 'Timer Wheel',
    path: 'content/datastructure-algorithm/timer-wheel/timer-wheel.html',
    category: 'Data structures',
    topic: 'Scheduling',
    order: 18,
    level: 'Intermediate',
    tags: ['timer', 'timeout', 'scheduler', 'hashed wheel', 'hierarchical', 'O(1) insert'],
    summary: 'A clock face for timeouts. Each timer drops into the slot where it will expire, one hand sweeps around, and add or cancel costs O(1).',
    related: ['Skip List'],
  },
  {
    title: 'Heap',
    path: 'content/datastructure-algorithm/heap/heap.html',
    category: 'Data structures',
    topic: 'Priority queues',
    order: 1,
    level: 'Beginner',
    tags: ['priority queue', 'binary tree', 'array', 'sift up', 'sift down', 'heapsort', 'O(log n)'],
    summary: 'A complete binary tree stored in an array where every parent is no larger than its children. The minimum is on top, and push and pop cost O(log n).',
    related: ['Skip List', 'A* Search'],
  },
  {
    title: 'Count-Min Sketch',
    path: 'content/datastructure-algorithm/count-min-sketch/count-min-sketch.html',
    category: 'Data structures',
    topic: 'Probabilistic',
    order: 13,
    level: 'Intermediate',
    tags: ['probabilistic', 'frequency', 'streaming', 'hash', 'heavy hitters', 'approximate', 'O(1) update'],
    summary: 'A fixed-size grid of counters that estimates item frequencies in a stream. It may over-count but never under-counts, and the minimum counter is the answer.',
    related: ['Heap', 'Merkle Tree'],
  },
  {
    title: 'Segment Tree',
    path: 'content/datastructure-algorithm/segment-tree/segment-tree.html',
    category: 'Data structures',
    topic: 'Range queries',
    order: 8,
    level: 'Intermediate',
    tags: ['range sum', 'point update', 'divide and conquer', 'O(log n)', 'associative'],
    summary: 'A binary tree where every node stores the answer for one segment. Range queries and point updates both take O(log n).',
    related: ['Sparse Table', 'Skip List'],
  },
  {
    title: 'Bloom Filter',
    path: 'content/datastructure-algorithm/bloom-filter/bloom-filter.html',
    category: 'Data structures',
    topic: 'Probabilistic sets',
    order: 12,
    level: 'Intermediate',
    tags: ['probabilistic', 'hash', 'membership', 'false positive', 'bit array', 'O(k)'],
    summary: 'A bit array and a few hashes answer "seen it before?" in tiny memory. It never misses an added item, but it can say yes to one you never added.',
    related: ['HyperLogLog', 'Merkle Tree'],
  },
  {
    title: 'HyperLogLog',
    path: 'content/datastructure-algorithm/hyperloglog/hyperloglog.html',
    category: 'Data structures',
    topic: 'Probabilistic sets',
    order: 14,
    level: 'Advanced',
    tags: ['probabilistic', 'hash', 'cardinality', 'distinct count', 'sketch', 'O(1) add'],
    summary: 'Count distinct items within a few percent using kilobytes. Each bucket remembers only its rarest hash pattern, and a harmonic mean turns that into a count.',
    related: ['Bloom Filter'],
  },
  {
    title: 'Roaring Bitmap',
    path: 'content/datastructure-algorithm/roaring-bitmap/roaring-bitmap.html',
    category: 'Data structures',
    topic: 'Bitmaps',
    order: 16,
    level: 'Intermediate',
    tags: ['bitmap', 'compression', 'integer set', 'index', 'simd', 'union', 'intersection'],
    summary: 'A compressed set of 32-bit integers. Split values into chunks and store each one as an array, a bitmap, or runs, whichever is smallest.',
    related: ['Sparse Table', 'Skip List'],
  },
  {
    title: 'LSM Tree',
    path: 'content/datastructure-algorithm/lsm-tree/lsm-tree.html',
    category: 'Data structures',
    topic: 'Storage engines',
    order: 17,
    level: 'Advanced',
    tags: ['memtable', 'sstable', 'compaction', 'tombstone', 'write-optimized', 'database', 'O(1) write'],
    summary: 'Buffer writes in memory, flush them as sorted immutable files, and merge in the background. Writes are sequential and fast, and reads check newest data first.',
    related: ['Skip List', 'Bloom Filter'],
  },
  {
    title: 'Quad Tree',
    path: 'content/datastructure-algorithm/quad-tree/quad-tree.html',
    category: 'Data structures',
    topic: 'Spatial indexes',
    order: 10,
    level: 'Intermediate',
    tags: ['spatial', 'geometry', 'range query', 'nearest neighbor', 'collision', '2d', 'recursion'],
    summary: 'Split a square into four quarters whenever it gets crowded. Range queries skip every cell that misses the search box.',
    related: ['Segment Tree', 'Skip List'],
  },
  {
    title: 'Octree',
    path: 'content/datastructure-algorithm/oct-tree/oct-tree.html',
    category: 'Data structures',
    topic: 'Spatial indexes',
    order: 11,
    level: 'Intermediate',
    tags: ['spatial', 'geometry', 'range query', 'nearest neighbor', 'collision', '3d', 'recursion'],
    summary: 'Split a cube into eight octants whenever it gets crowded. Range queries skip every cell that misses the search box.',
    related: ['Quad Tree', 'Segment Tree'],
  },
  {
    title: 'AVL Tree',
    path: 'content/datastructure-algorithm/avl-tree/avl-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    order: 3,
    level: 'Intermediate',
    tags: ['balanced', 'binary search tree', 'rotation', 'self-balancing', 'search', 'insert', 'delete', 'O(log n)'],
    summary: 'A binary search tree that keeps every subtree within one level of its sibling. Rotations after each insert or delete hold the height near log n.',
    related: ['Red-Black Tree', 'Skip List', 'Heap'],
  },
  {
    title: 'Red-Black Tree',
    path: 'content/datastructure-algorithm/red-black-tree/red-black-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    order: 4,
    level: 'Advanced',
    tags: ['balanced', 'binary search tree', 'rotation', 'self-balancing', 'recoloring', 'insert', 'O(log n)'],
    summary: 'A search tree that colors nodes red or black. A few color rules cap the longest path at twice the shortest, with very few rotations per update.',
    related: ['AVL Tree', 'Skip List'],
  },
  {
    title: 'B-Tree',
    path: 'content/datastructure-algorithm/b-tree/b-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    order: 5,
    level: 'Intermediate',
    tags: ['balanced', 'search tree', 'disk', 'database', 'index', 'split', 'file system', 'O(log n)'],
    summary: 'A search tree with wide nodes that hold many sorted keys. It stays very short, so a lookup reads only a handful of disk pages.',
    related: ['B+ Tree', 'AVL Tree', 'LSM Tree'],
  },
  {
    title: 'B+ Tree',
    path: 'content/datastructure-algorithm/b-plus-tree/b-plus-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    order: 6,
    level: 'Intermediate',
    tags: ['balanced', 'search tree', 'range scan', 'database', 'index', 'linked leaves', 'file system', 'O(log n)'],
    summary: 'A B-Tree that keeps every key in linked leaves and uses upper levels only for routing. Lookups stay shallow, and range scans walk the leaf chain.',
    related: ['B-Tree', 'LSM Tree', 'Skip List'],
  },
  {
    title: 'Genetic Algorithm',
    path: 'content/datastructure-algorithm/genetic-algorithm/genetic-algorithm.html',
    category: 'Algorithms',
    topic: 'Optimization',
    order: 5,
    level: 'Beginner',
    tags: ['evolution', 'heuristic', 'crossover', 'mutation', 'selection', 'probabilistic', 'proof', 'convergence', 'schema theorem'],
    summary: 'Search by evolution: select the fittest candidates, cross them over, mutate a little, and repeat. Includes proofs of convergence, the failure without mutation, a running-time bound and the schema theorem.',
    related: ['Particle Swarm Optimization', 'Ant Colony Optimization'],
  },
  {
    title: 'Minimax',
    path: 'content/datastructure-algorithm/minimax/minimax.html',
    category: 'Algorithms',
    topic: 'Game search',
    order: 4,
    level: 'Intermediate',
    tags: ['game tree', 'adversarial search', 'alpha-beta', 'pruning', 'zero-sum', 'recursion'],
    summary: 'Pick the move whose worst case is best. Assume the opponent plays perfectly, search the game tree, and prune branches that cannot matter.',
    related: ['Genetic Algorithm'],
  },
  {
    title: 'A* Search',
    path: 'content/datastructure-algorithm/a-star/a-star.html',
    category: 'Algorithms',
    topic: 'Pathfinding',
    order: 3,
    level: 'Intermediate',
    tags: ['shortest path', 'heuristic', 'graph', 'grid', 'priority queue', 'admissible', 'dijkstra'],
    summary: 'Find the shortest path by expanding the node with the lowest cost so far plus a guess of the cost left. A good heuristic skips most of the map.',
    related: ['Heap'],
  },
  {
    title: 'Particle Swarm Optimization',
    path: 'content/datastructure-algorithm/particle-swarm-optimization/particle-swarm-optimization.html',
    category: 'Algorithms',
    topic: 'Optimization',
    order: 6,
    level: 'Beginner',
    tags: ['swarm', 'optimization', 'heuristic', 'population', 'inertia', 'continuous', 'gradient-free'],
    summary: 'A swarm of particles searches a landscape, pulled toward its own best and the swarm best. Tune inertia and pulls and watch it converge or stall.',
    related: ['Genetic Algorithm', 'Ant Colony Optimization'],
  },
  {
    title: 'Ant Colony Optimization',
    path: 'content/datastructure-algorithm/ant-colony-optimization/ant-colony-optimization.html',
    category: 'Algorithms',
    topic: 'Optimization',
    order: 7,
    level: 'Intermediate',
    tags: ['swarm', 'optimization', 'tsp', 'pheromone', 'stigmergy', 'heuristic', 'routing'],
    summary: 'Virtual ants build tours of 5 to 30 cities (you choose) and leave pheromone on short ones. Tune trail, distance and evaporation and beat the greedy tour.',
    related: ['Genetic Algorithm', 'Particle Swarm Optimization', 'A* Search'],
  },
  {
    title: 'Raft',
    path: 'content/datastructure-algorithm/raft/raft.html',
    category: 'Algorithms',
    topic: 'Distributed systems',
    order: 8,
    level: 'Advanced',
    tags: ['consensus', 'leader election', 'replication', 'replicated log', 'fault tolerance', 'quorum', 'etcd'],
    summary: 'Servers elect one leader, and the leader replicates an ordered log. An entry is committed once a majority stores it, so the cluster survives crashes.',
    related: ['Merkle Tree', 'LSM Tree'],
  },
  {
    title: 'Quicksort',
    path: 'content/datastructure-algorithm/quicksort/quicksort.html',
    category: 'Algorithms',
    topic: 'Sorting',
    order: 1,
    level: 'Beginner',
    tags: ['sorting', 'divide and conquer', 'partition', 'pivot', 'in place', 'O(n log n)'],
    summary: 'Pick a pivot, push smaller items left and larger items right, then sort each side. The pivot lands in its final place after every pass.',
    related: ['Merge Sort', 'Heap'],
  },
  {
    title: 'Merge Sort',
    path: 'content/datastructure-algorithm/merge-sort/merge-sort.html',
    category: 'Algorithms',
    topic: 'Sorting',
    order: 2,
    level: 'Beginner',
    tags: ['sorting', 'divide and conquer', 'merge', 'stable', 'O(n log n)', 'external sort'],
    summary: 'Split the array in half, sort each half, then merge the two sorted halves. It is stable and always runs in O(n log n).',
    related: ['Quicksort', 'Heap'],
  },
  {
    title: 'Trie',
    path: 'content/datastructure-algorithm/trie/trie.html',
    category: 'Data structures',
    topic: 'Strings',
    order: 2,
    level: 'Beginner',
    tags: ['prefix tree', 'autocomplete', 'string', 'search', 'insert', 'O(L)'],
    summary: 'A tree where each edge is one character and each path spells a prefix. Words that share a start share nodes, and lookup costs O(L) for a word of length L.',
    related: ['Bloom Filter'],
  },
  {
    title: 'Limits',
    path: 'content/math/limits/limits.html',
    category: 'Mathematics',
    topic: 'Calculus',
    order: 2,
    level: 'Beginner',
    tags: ['limit', 'continuity', 'epsilon-delta', 'one-sided', 'calculus'],
    summary: 'What value does a function head toward as x approaches a point? Slide x toward a and watch f(x) settle, or fail to agree between sides.',
    related: ['Derivatives', 'Integrals', "L'Hôpital's Rule"],
  },
  {
    title: 'Derivatives',
    path: 'content/math/derivatives/derivatives.html',
    category: 'Mathematics',
    topic: 'Calculus',
    order: 3,
    level: 'Beginner',
    tags: ['derivative', 'slope', 'tangent', 'secant', 'chain rule', 'calculus'],
    summary: 'The slope of a curve at one point. Shrink the gap h and a secant line turns into the tangent, giving the instant rate of change.',
    related: ['Limits', 'Integrals', "L'Hôpital's Rule"],
  },
  {
    title: "L'Hôpital's Rule",
    path: 'content/math/lhopital-rule/lhopital-rule.html',
    category: 'Mathematics',
    topic: 'Calculus',
    order: 4,
    level: 'Intermediate',
    tags: ['lhopital', 'indeterminate form', 'limit', 'derivative', '0/0', 'calculus'],
    summary: 'When plugging in gives 0/0 or infinity over infinity, compare slopes instead. Slide x toward the point and watch f/g and f\'/g\' close in on the same limit.',
    related: ['Limits', 'Derivatives', 'Taylor Series'],
  },
  {
    title: 'Integrals',
    path: 'content/math/integrals/integrals.html',
    category: 'Mathematics',
    topic: 'Calculus',
    order: 5,
    level: 'Beginner',
    tags: ['integral', 'area', 'riemann sum', 'antiderivative', 'calculus'],
    summary: 'Add up infinitely many thin slices. Riemann sums close in on the area under a curve, and the Fundamental Theorem gives the shortcut.',
    related: ['Limits', 'Derivatives'],
  },
  {
    title: 'Fourier Transform',
    path: 'content/math/fourier-transform/fourier-transform.html',
    category: 'Mathematics',
    topic: 'Signals',
    order: 32,
    level: 'Intermediate',
    tags: ['fourier', 'frequency', 'signal', 'fft', 'dft', 'sine waves', 'spectrum'],
    summary: 'Any signal is a stack of simple waves. Chain turning circles tip to tail, watch them draw a waveform, and read off which frequencies it contains.',
    related: ['Integrals', 'Merge Sort'],
  },
  {
    title: 'Laplace Transform',
    path: 'content/math/laplace-transform/laplace-transform.html',
    category: 'Mathematics',
    topic: 'Signals',
    order: 33,
    level: 'Intermediate',
    tags: ['laplace', 'transform', 's-domain', 'differential equation', 'transfer function', 'integral'],
    summary: 'Weight a signal by a fading exponential and measure the area. The result turns derivatives into multiplication and differential equations into algebra.',
    related: ['Fourier Transform', 'Integrals', 'Derivatives'],
  },
  {
    title: 'Complex Analysis',
    path: 'content/math/complex-analysis/complex-analysis.html',
    category: 'Mathematics',
    topic: 'Complex numbers',
    order: 31,
    level: 'Advanced',
    tags: ['complex', 'analytic', 'conformal', 'cauchy-riemann', 'contour integral', 'residue', 'pole'],
    summary: 'Calculus on the complex plane. Watch a grid bend under z², 1/z, eᶻ and sin z while keeping right angles, then count poles to evaluate loop integrals.',
    related: ['Derivatives', 'Integrals', 'Laplace Transform', 'Fourier Transform'],
  },
  {
    title: 'Taylor Series',
    path: 'content/math/taylor-series/taylor-series.html',
    category: 'Mathematics',
    topic: 'Calculus',
    order: 6,
    level: 'Intermediate',
    tags: ['taylor', 'maclaurin', 'series', 'polynomial', 'approximation', 'convergence', 'calculus'],
    summary: 'Near one point, a smooth function looks like a polynomial. Add one derivative-matched term at a time and watch the polynomial hug the curve.',
    related: ['Derivatives', 'Limits', 'Fourier Transform'],
  },
  {
    title: "Euler's Formula",
    path: 'content/math/euler-formula/euler-formula.html',
    category: 'Mathematics',
    topic: 'Complex numbers',
    order: 30,
    level: 'Intermediate',
    tags: ['euler', 'complex', 'exponential', 'unit circle', 'sine', 'cosine', 'series', 'identity'],
    summary: 'Raise e to an imaginary power and you walk around a circle. See cosine and sine as shadows of one spinning point, and build it from the exponential series.',
    related: ['Complex Analysis', 'Taylor Series', 'Fourier Transform', 'Laplace Transform'],
  },
  {
    title: "Bayes' Theorem",
    path: 'content/math/bayes-theorem/bayes-theorem.html',
    category: 'Mathematics',
    topic: 'Probability',
    order: 16,
    level: 'Beginner',
    tags: ['probability', 'bayes', 'prior', 'posterior', 'conditional probability', 'base rate', 'inference'],
    summary: 'Update a belief when evidence arrives. Count 1000 people and see why a positive test for a rare condition is usually a false alarm.',
    related: ['Bloom Filter', 'Integrals'],
  },
  {
    title: 'Gaussian Distribution',
    path: 'content/math/gaussian-distribution/gaussian-distribution.html',
    category: 'Mathematics',
    topic: 'Probability',
    order: 17,
    level: 'Beginner',
    tags: ['probability', 'gaussian', 'normal distribution', 'bell curve', 'standard deviation', 'z-score', 'central limit theorem', 'statistics'],
    summary: 'The bell curve from two numbers, center and spread. Slide them, shade a band to see the 68-95-99.7 rule, and draw samples to watch sums of random numbers form a bell.',
    related: ["Bayes' Theorem", 'Integrals', 'Fourier Transform'],
  },
  {
    title: 'Polynomial Interpolation',
    path: 'content/math/polynomial-interpolation/polynomial-interpolation.html',
    category: 'Mathematics',
    topic: 'Numerical analysis',
    order: 34,
    level: 'Intermediate',
    tags: ['interpolation', 'polynomial', 'lagrange', 'newton', 'runge', 'chebyshev', 'numerical', 'approximation'],
    summary: 'Find the one polynomial that passes through every data point. Add points, compare equal and Chebyshev spacing, and watch Runge\'s phenomenon appear.',
    related: ['Taylor Series', 'Derivatives', 'Integrals'],
  },
  {
    title: 'Binomial Theorem',
    path: 'content/math/binomial-theorem/binomial-theorem.html',
    category: 'Mathematics',
    topic: 'Algebra',
    order: 1,
    level: 'Beginner',
    tags: ['binomial', 'newton', 'pascal', 'combinations', 'expansion', 'series', 'counting', 'algebra'],
    summary: 'Expand (a+b)^n without multiplying out brackets. Coefficients come from counting choices and line up in Pascal\'s triangle, and Newton extended the rule to any exponent.',
    related: ['Taylor Series', 'Bayes\' Theorem', 'Limits'],
  },
  {
    title: 'Matrices',
    path: 'content/math/matrices/matrices.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 7,
    level: 'Beginner',
    tags: ['matrix', 'matrices', 'linear algebra', 'matrix multiplication', 'transpose', 'identity', 'inverse', 'vectors'],
    summary: 'A matrix is a grid of numbers that acts on vectors. Edit two small matrices, add, scale, transpose and multiply them, and see why AB and BA differ.',
    related: ['Determinants', 'Linear Maps', 'Matrix Rank'],
  },
  {
    title: 'Determinants',
    path: 'content/math/determinants/determinants.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 8,
    level: 'Beginner',
    tags: ['determinant', 'area', 'volume', 'invertible', 'cofactor', 'cramer', 'orientation', 'linear algebra'],
    summary: 'One number that tells how a matrix scales area and whether it flips space. Drag a 2x2 matrix, watch the unit square become a parallelogram, and expand a 3x3 by cofactors.',
    related: ['Matrices', 'Matrix Rank', 'Eigenvalues and Eigenvectors'],
  },
  {
    title: 'Matrix Rank',
    path: 'content/math/matrix-rank/matrix-rank.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 9,
    level: 'Intermediate',
    tags: ['rank', 'row reduction', 'gaussian elimination', 'null space', 'rank-nullity', 'column space', 'independence', 'linear algebra'],
    summary: 'Rank counts the independent directions in a matrix. Edit a 3x3 matrix, watch row reduction find the pivots, and see rank plus nullity always add up to the number of columns.',
    related: ['Matrices', 'Determinants', 'Vector Spaces'],
  },
  {
    title: 'Vector Spaces',
    path: 'content/math/vector-spaces/vector-spaces.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 10,
    level: 'Intermediate',
    tags: ['vector space', 'subspace', 'span', 'basis', 'dimension', 'linear independence', 'coordinates', 'linear algebra'],
    summary: 'The abstract setting where vectors can be added and scaled. Move two vectors, see their span fill a plane or collapse to a line, and read off the coordinates of a third vector in that basis.',
    related: ['Matrix Rank', 'Linear Maps', 'Matrices'],
  },
  {
    title: 'Linear Maps',
    path: 'content/math/linear-maps/linear-maps.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 11,
    level: 'Intermediate',
    tags: ['linear map', 'linear transformation', 'kernel', 'image', 'rank-nullity', 'injective', 'surjective', 'linear algebra'],
    summary: 'Functions that respect addition and scaling. Pick a map, test additivity and homogeneity on two vectors, and see why shifts and squaring fail while rotations, shears and projections pass.',
    related: ['Matrix of a Linear Map', 'Vector Spaces', 'Matrices'],
  },
  {
    title: 'Matrix of a Linear Map',
    path: 'content/math/matrix-of-linear-map/matrix-of-linear-map.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 12,
    level: 'Intermediate',
    tags: ['matrix of linear map', 'change of basis', 'coordinates', 'similar matrices', 'basis', 'linear transformation', 'linear algebra'],
    summary: 'Every linear map becomes a matrix once you pick a basis. Change the basis, watch the same map get a different matrix, and see how P inverse A P translates between the two.',
    related: ['Linear Maps', 'Vector Spaces', 'Matrix Diagonalization'],
  },
  {
    title: 'Eigenvalues and Eigenvectors',
    path: 'content/math/eigenvalues-eigenvectors/eigenvalues-eigenvectors.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 13,
    level: 'Intermediate',
    tags: ['eigenvalue', 'eigenvector', 'characteristic polynomial', 'trace', 'determinant', 'spectrum', 'invariant direction', 'linear algebra'],
    summary: 'The special directions a matrix only stretches. Sweep a vector around the circle, spot where A v lines up with v, and find the eigenvalues from the characteristic polynomial.',
    related: ['Matrix Diagonalization', 'Determinants', 'Complex Analysis'],
  },
  {
    title: 'Matrix Diagonalization',
    path: 'content/math/matrix-diagonalization/matrix-diagonalization.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 14,
    level: 'Advanced',
    tags: ['diagonalization', 'eigenvalue', 'eigenvector', 'matrix power', 'similar matrices', 'spectral theorem', 'defective matrix', 'linear algebra'],
    summary: 'Write a matrix as P D P inverse and powers become easy. Raise a 2x2 matrix to a power both ways, see the ellipse align with the dominant eigenvector, and learn when diagonalization fails.',
    related: ['Eigenvalues and Eigenvectors', 'Matrix of a Linear Map', 'Matrices'],
  },
  {
    title: 'Machine Learning Algorithm Groups',
    path: 'content/AI/machine-learning/ml-algorithm-groups/ml-algorithm-groups.html',
    category: 'AI',
    topic: 'Overview',
    order: 1,
    level: 'Beginner',
    tags: ['taxonomy', 'supervised', 'unsupervised', 'reinforcement', 'classification', 'regression', 'clustering', 'overview'],
    summary: 'A map of machine learning. Sort algorithms by the feedback they learn from and the job they do, then explore the tree and jump to a doc.',
    related: ['Linear Regression', 'Logistic Regression', 'Perceptron Learning Algorithm', 'K-means Clustering', 'Gradient Descent'],
  },
  {
    title: 'Linear Regression',
    path: 'content/AI/machine-learning/linear-regression/linear-regression.html',
    category: 'AI',
    topic: 'Regression',
    order: 2,
    level: 'Beginner',
    tags: ['supervised', 'regression', 'least squares', 'mse', 'normal equation', 'residual', 'line fitting'],
    summary: 'Fit the straight line that sits closest to a cloud of points. Drag the line, watch the squared errors, and compare with the exact least squares answer.',
    related: ['Logistic Regression', 'Gradient Descent', 'Machine Learning Algorithm Groups', 'Polynomial Interpolation'],
  },
  {
    title: 'k-Nearest Neighbors',
    path: 'content/AI/machine-learning/k-nearest-neighbors/k-nearest-neighbors.html',
    category: 'AI',
    topic: 'Classification',
    order: 8,
    level: 'Beginner',
    tags: ['supervised','classification','distance','lazy learning','instance based','voting','knn'],
    summary: 'Classify a point by letting its k closest neighbors vote. Move the query, change k, and see the decision regions smooth out.',
    related: ['Logistic Regression','Decision Tree','Principal Component Analysis','Quad Tree','Machine Learning Algorithm Groups'],
  },
  {
    title: 'Naive Bayes',
    path: 'content/AI/machine-learning/naive-bayes/naive-bayes.html',
    category: 'AI',
    topic: 'Classification',
    order: 9,
    level: 'Beginner',
    tags: ['supervised','classification','bayes','probability','spam filter','log-odds','laplace smoothing'],
    summary: 'Build a spam filter from counts. Tick the words in an email and watch each one push the log-odds toward spam or normal mail.',
    related: ['Logistic Regression',"Bayes' Theorem",'Machine Learning Algorithm Groups'],
  },
  {
    title: 'Decision Tree',
    path: 'content/AI/machine-learning/decision-tree/decision-tree.html',
    category: 'AI',
    topic: 'Classification',
    order: 10,
    level: 'Beginner',
    tags: ['supervised','classification','gini','split','overfitting','cart','interpretable'],
    summary: 'Learn a flowchart of yes or no questions. Grow the tree one level at a time and see overfitting appear in held-out accuracy.',
    related: ['k-Nearest Neighbors','Logistic Regression','Machine Learning Algorithm Groups','AVL Tree'],
  },
  {
    title: 'K-means Clustering',
    path: 'content/AI/machine-learning/k-means-clustering/k-means-clustering.html',
    category: 'AI',
    topic: 'Clustering',
    order: 14,
    level: 'Beginner',
    tags: ['unsupervised', 'clustering', 'centroid', 'inertia', 'lloyd', 'elbow method', 'iterative'],
    summary: 'Find groups without labels. Assign each point to its nearest center, move each center to its group mean, and repeat until nothing changes.',
    related: ['Machine Learning Algorithm Groups', 'Gradient Descent', 'Quad Tree'],
  },
  {
    title: 'Gradient Descent',
    path: 'content/AI/machine-learning/gradient-descent/gradient-descent.html',
    category: 'AI',
    topic: 'Optimization',
    order: 4,
    level: 'Beginner',
    tags: ['optimization', 'gradient', 'learning rate', 'momentum', 'loss', 'sgd', 'convergence'],
    summary: 'Step downhill against the gradient of the loss. See slow, good and diverging learning rates on a contour map, and how momentum helps in a narrow valley.',
    related: ['Linear Regression', 'Logistic Regression', 'Perceptron Learning Algorithm', 'Derivatives'],
  },
  {
    title: 'Perceptron Learning Algorithm',
    path: 'content/AI/machine-learning/perceptron-learning-algorithm/perceptron-learning-algorithm.html',
    category: 'AI',
    topic: 'Classification',
    order: 7,
    level: 'Beginner',
    tags: ['supervised', 'classification', 'linear classifier', 'neuron', 'online learning', 'xor', 'separable'],
    summary: 'A line that learns from its mistakes. Each misclassified point tilts the boundary toward it, which converges on separable data and fails on XOR.',
    related: ['Logistic Regression', 'Gradient Descent', 'Machine Learning Algorithm Groups'],
  },
  {
    title: 'Logistic Regression',
    path: 'content/AI/machine-learning/logistic-regression/logistic-regression.html',
    category: 'AI',
    topic: 'Classification',
    order: 6,
    level: 'Intermediate',
    tags: ['supervised', 'classification', 'sigmoid', 'log loss', 'probability', 'threshold', 'log-odds'],
    summary: 'Turn a linear score into a probability with the sigmoid. Fit the curve by gradient descent and move the threshold to trade false alarms for misses.',
    related: ['Linear Regression', 'Perceptron Learning Algorithm', 'Gradient Descent', "Bayes' Theorem"],
  },
  {
    title: 'Principal Component Analysis',
    path: 'content/AI/machine-learning/principal-component-analysis/principal-component-analysis.html',
    category: 'AI',
    topic: 'Dimensionality reduction',
    order: 18,
    level: 'Beginner',
    tags: ['unsupervised','dimensionality reduction','variance','eigenvector','covariance','projection','pca'],
    summary: 'Find the direction of greatest spread. Turn a line through a cloud, compare variance kept with distance dropped, and snap to the best axis.',
    related: ['Eigenvalues and Eigenvectors','Matrix Diagonalization','K-means Clustering','k-Nearest Neighbors','Machine Learning Algorithm Groups'],
  },
  {
    title: 'Ridge and Lasso Regression',
    path: 'content/AI/machine-learning/ridge-lasso-regression/ridge-lasso-regression.html',
    category: 'AI',
    topic: 'Regression',
    order: 3,
    level: 'Intermediate',
    tags: ['regression', 'regularization', 'ridge', 'lasso', 'l1', 'l2', 'overfitting', 'feature selection'],
    summary: 'Add a penalty on weight size. Slide lambda and watch coefficients shrink or hit zero while test error dips and rises.',
    related: ['Linear Regression', 'Overfitting and Regularization'],
  },
  {
    title: 'Optimizers: SGD, Adam and Newton\'s Method',
    path: 'content/AI/machine-learning/optimizers-sgd-adam-newton/optimizers-sgd-adam-newton.html',
    category: 'AI',
    topic: 'Optimization',
    order: 5,
    level: 'Intermediate',
    tags: ['optimization', 'sgd', 'adam', 'newton', 'momentum', 'learning rate', 'hessian'],
    summary: 'Race four optimizers down a narrow valley. See zigzags, noise, adaptive steps and one-step Newton.',
    related: ['Gradient Descent', 'Backpropagation'],
  },
  {
    title: 'Random Forest',
    path: 'content/AI/machine-learning/random-forest/random-forest.html',
    category: 'AI',
    topic: 'Classification',
    order: 11,
    level: 'Intermediate',
    tags: ['supervised', 'ensemble', 'bagging', 'decision tree', 'variance', 'random forest'],
    summary: 'Add trees and watch a jagged single-tree boundary smooth out as the votes average.',
    related: ['Decision Tree', 'Support Vector Machine'],
  },
  {
    title: 'Support Vector Machine',
    path: 'content/AI/machine-learning/support-vector-machine/support-vector-machine.html',
    category: 'AI',
    topic: 'Classification',
    order: 13,
    level: 'Intermediate',
    tags: ['supervised', 'svm', 'margin', 'kernel', 'support vectors', 'hinge loss', 'svr'],
    summary: 'The widest street between classes. Tune C, spot the support vectors, and bend the boundary with an extra feature.',
    related: ['Logistic Regression', 'Perceptron Learning Algorithm'],
  },
  {
    title: 'Hierarchical Clustering',
    path: 'content/AI/machine-learning/hierarchical-clustering/hierarchical-clustering.html',
    category: 'AI',
    topic: 'Clustering',
    order: 15,
    level: 'Beginner',
    tags: ['unsupervised', 'clustering', 'dendrogram', 'linkage', 'agglomerative'],
    summary: 'Merge the closest clusters into a tree and cut it anywhere. Compare single, complete and average linkage.',
    related: ['K-means Clustering', 'DBSCAN'],
  },
  {
    title: 'DBSCAN',
    path: 'content/AI/machine-learning/dbscan/dbscan.html',
    category: 'AI',
    topic: 'Clustering',
    order: 16,
    level: 'Intermediate',
    tags: ['unsupervised', 'clustering', 'density', 'noise', 'outliers', 'epsilon'],
    summary: 'Grow clusters from dense crowds. Tune the radius and neighbor count and click a point to see its neighborhood.',
    related: ['K-means Clustering', 'Hierarchical Clustering'],
  },
  {
    title: 'Gaussian Mixture Models',
    path: 'content/AI/machine-learning/gaussian-mixture-models/gaussian-mixture-models.html',
    category: 'AI',
    topic: 'Clustering',
    order: 17,
    level: 'Intermediate',
    tags: ['unsupervised', 'clustering', 'em', 'expectation maximization', 'soft clustering', 'density estimation'],
    summary: 'Step through Expectation-Maximization and watch tilted ellipses and soft memberships settle.',
    related: ['K-means Clustering', 'DBSCAN'],
  },
  {
    title: 't-SNE',
    path: 'content/AI/machine-learning/t-sne/t-sne.html',
    category: 'AI',
    topic: 'Dimensionality reduction',
    order: 19,
    level: 'Intermediate',
    tags: ['unsupervised', 'visualization', 'embedding', 'perplexity', 'manifold', 'neighbors'],
    summary: 'Run a real t-SNE on 5D data and watch three groups separate on a plane. Change the perplexity.',
    related: ['Principal Component Analysis', 'Autoencoder'],
  },
  {
    title: 'Autoencoder',
    path: 'content/AI/machine-learning/autoencoder/autoencoder.html',
    category: 'AI',
    topic: 'Dimensionality reduction',
    order: 20,
    level: 'Intermediate',
    tags: ['unsupervised', 'neural network', 'bottleneck', 'reconstruction', 'self-supervised', 'manifold'],
    summary: 'Train a tiny autoencoder to squeeze a curve to one number. Linear layers find a line, nonlinear ones bend.',
    related: ['Principal Component Analysis', 't-SNE', 'Backpropagation'],
  },
  {
    title: 'Apriori',
    path: 'content/AI/machine-learning/apriori/apriori.html',
    category: 'AI',
    topic: 'Association rules',
    order: 21,
    level: 'Beginner',
    tags: ['unsupervised', 'association rules', 'market basket', 'support', 'confidence', 'lift', 'frequent itemsets'],
    summary: 'Mine twelve shopping baskets for frequent itemsets and rules, with live support and confidence thresholds.',
    related: ['K-means Clustering'],
  },
  {
    title: 'Semi-Supervised Learning',
    path: 'content/AI/machine-learning/semi-supervised-learning/semi-supervised-learning.html',
    category: 'AI',
    topic: 'Semi-supervised',
    order: 22,
    level: 'Intermediate',
    tags: ['semi-supervised', 'self-training', 'co-training', 'label propagation', 'unlabeled data'],
    summary: 'Four labels on two moons. Compare self-training, which reinforces its mistakes, with label propagation, which follows the shape.',
    related: ['k-Nearest Neighbors', 'DBSCAN'],
  },
  {
    title: 'Q-learning and Dyna-Q',
    path: 'content/AI/machine-learning/q-learning/q-learning.html',
    category: 'AI',
    topic: 'Reinforcement learning',
    order: 23,
    level: 'Intermediate',
    tags: ['reinforcement learning', 'q-learning', 'dyna-q', 'temporal difference', 'epsilon-greedy', 'model-based'],
    summary: 'Teach an agent to cross a grid. Tune alpha, gamma and epsilon, then add planning steps for Dyna-Q.',
    related: ['Deep Q-Network', 'Policy Gradients: REINFORCE and PPO'],
  },
  {
    title: 'Deep Q-Network',
    path: 'content/AI/machine-learning/deep-q-network/deep-q-network.html',
    category: 'AI',
    topic: 'Reinforcement learning',
    order: 24,
    level: 'Advanced',
    tags: ['reinforcement learning', 'dqn', 'experience replay', 'target network', 'neural network'],
    summary: 'Train a small Q-network on a corridor. Switch replay and the target network on and off.',
    related: ['Q-learning and Dyna-Q', 'Backpropagation'],
  },
  {
    title: 'Policy Gradients: REINFORCE and PPO',
    path: 'content/AI/machine-learning/policy-gradient/policy-gradient.html',
    category: 'AI',
    topic: 'Reinforcement learning',
    order: 25,
    level: 'Advanced',
    tags: ['reinforcement learning', 'policy gradient', 'reinforce', 'ppo', 'baseline', 'advantage', 'bandit'],
    summary: 'Learn a policy on a four-armed bandit. Compare REINFORCE, a baseline and PPO clipping.',
    related: ['Q-learning and Dyna-Q', 'Deep Q-Network'],
  },
  {
    title: 'Monte Carlo Tree Search',
    path: 'content/AI/machine-learning/monte-carlo-tree-search/monte-carlo-tree-search.html',
    category: 'AI',
    topic: 'Reinforcement learning',
    order: 26,
    level: 'Advanced',
    tags: ['reinforcement learning', 'mcts', 'uct', 'tree search', 'planning', 'tic-tac-toe', 'simulation'],
    summary: 'Run MCTS on tic-tac-toe positions and see visit counts and win rates concentrate on the best move.',
    related: ['Q-learning and Dyna-Q', 'Policy Gradients: REINFORCE and PPO'],
  },
  {
    title: 'Deep Learning Overview',
    path: 'content/AI/deep-learning/deep-learning-overview/deep-learning-overview.html',
    category: 'AI',
    topic: 'Deep learning',
    order: 27,
    level: 'Beginner',
    tags: ['deep learning', 'neural network', 'layers', 'activation', 'backpropagation', 'gradient descent', 'architectures', 'overview'],
    summary: 'From one neuron to modern architectures. Train a tiny network on four datasets, add hidden layers, and watch the decision boundary bend where a single neuron only draws a line.',
    related: ['Machine Learning Algorithm Groups', 'Gradient Descent', 'Logistic Regression', 'Perceptron Learning Algorithm', 'Matrices', 'Derivatives'],
  },
  {
    title: 'Activation Functions',
    path: 'content/AI/deep-learning/activation-functions/activation-functions.html',
    category: 'AI',
    topic: 'Deep learning',
    order: 28,
    level: 'Beginner',
    tags: ['activation', 'sigmoid', 'tanh', 'relu', 'gelu', 'softmax', 'vanishing gradient', 'saturation', 'nonlinearity'],
    summary: 'The nonlinear bend after every layer. Plot sigmoid, tanh, ReLU, Leaky ReLU and GELU with their slopes, and see why stacking small slopes makes gradients vanish with depth.',
    related: ['Deep Learning Overview', 'Backpropagation', 'Gradient Descent', 'Derivatives'],
  },
  {
    title: 'Backpropagation',
    path: 'content/AI/deep-learning/backpropagation/backpropagation.html',
    category: 'AI',
    topic: 'Deep learning',
    order: 29,
    level: 'Intermediate',
    tags: ['backpropagation', 'chain rule', 'gradient', 'computation graph', 'forward pass', 'backward pass', 'loss', 'training'],
    summary: 'Run a forward and backward pass through a tiny network. See every weight get its gradient from the chain rule, check it against a numeric estimate, and step downhill.',
    related: ['Deep Learning Overview', 'Activation Functions', 'Gradient Descent', 'Derivatives'],
  },
  {
    title: 'Convolution and CNNs',
    path: 'content/AI/deep-learning/convolution/convolution.html',
    category: 'AI',
    topic: 'Deep learning',
    order: 30,
    level: 'Intermediate',
    tags: ['convolution', 'cnn', 'kernel', 'filter', 'feature map', 'stride', 'padding', 'pooling', 'weight sharing'],
    summary: 'Slide a small filter over an image and see which patch makes each output. Edit the kernel, change stride and padding, and add ReLU and max pooling.',
    related: ['Deep Learning Overview', 'Activation Functions', 'Backpropagation', 'Matrices'],
  },
  {
    title: 'Overfitting and Regularization',
    path: 'content/AI/deep-learning/overfitting-regularization/overfitting-regularization.html',
    category: 'AI',
    topic: 'Deep learning',
    order: 31,
    level: 'Beginner',
    tags: ['overfitting', 'underfitting', 'regularization', 'weight decay', 'ridge', 'validation', 'generalization', 'dropout', 'early stopping'],
    summary: 'Raise the model size and watch training error fall while validation error climbs. Add an L2 penalty to tame the fit, and learn dropout, augmentation and early stopping.',
    related: ['Deep Learning Overview', 'Linear Regression', 'Gradient Descent', 'Backpropagation'],
  },
  {
    title: 'Sequence Models and Transformers',
    path: 'content/AI/deep-learning/sequence-models-transformers/sequence-models-transformers.html',
    category: 'AI',
    topic: 'Deep learning',
    order: 32,
    also: [{ category: 'Quant', topic: 'Deep learning and RL', order: 28 }],
    level: 'Intermediate',
    tags: ['transformer', 'attention', 'rnn', 'lstm', 'sequence model', 'self-attention', 'positional encoding', 'time series'],
    summary: 'Pick a word and watch one attention head weigh every other word, with and without a causal mask. Compare how far gradients reach in an RNN, an LSTM and attention, then see what it takes to use these models on market data.',
    related: ['Backpropagation', 'Convolution and CNNs', 'Deep Learning Overview', 'Walk-Forward and Purged Cross-Validation', 'Feature Engineering and Leakage'],
  },
  {
    title: 'Network Protocols',
    path: 'content/engineering/protocols/network-protocols/network-protocols.html',
    category: 'Engineering',
    topic: 'Protocols',
    order: 1,
    level: 'Intermediate',
    tags: ['protocols', 'tcp', 'udp', 'http', 'http2', 'http3', 'quic', 'tls', 'websocket', 'sse', 'webtransport', 'grpc', 'mqtt', 'amqp', 'webrtc', 'fix', 'head-of-line blocking', 'networking'],
    summary: 'TCP, UDP, TLS, HTTP/1.1, HTTP/2, QUIC, HTTP/3, SSE, WebSocket, WebTransport, gRPC, MQTT, AMQP, WebRTC and FIX on one page. Count handshake round trips, lose packets to see head-of-line blocking, and build a WebSocket frame and a FIX order byte by byte.',
    related: ['Aeron Transport', 'Kubernetes Networking', 'AWS Networking', 'AWS Messaging and Streaming', 'Kafka Use Cases'],
  },
  {
    title: 'Aeron Transport',
    path: 'content/engineering/aeron/aeron-transport/aeron-transport.html',
    category: 'Engineering',
    topic: 'Messaging',
    order: 6,
    level: 'Intermediate',
    tags: ['aeron', 'messaging', 'low latency', 'log buffer', 'media driver', 'shared memory', 'udp', 'ipc', 'back-pressure'],
    summary: 'Publishers write into a three-term log buffer in shared memory, a media driver moves it over UDP or IPC, and subscribers read by position. Offer, send and poll to see back-pressure.',
    related: ['Aeron Channels and Streams', 'Aeron Reliability and Flow Control'],
  },
  {
    title: 'Aeron Channels and Streams',
    path: 'content/engineering/aeron/aeron-channels/aeron-channels.html',
    category: 'Engineering',
    topic: 'Messaging',
    order: 7,
    level: 'Beginner',
    tags: ['aeron', 'channel', 'stream', 'session', 'uri', 'multicast', 'mdc', 'ipc', 'spy'],
    summary: 'How publishers and subscribers find each other. Build channel URIs for unicast, multicast, multi-destination-cast and IPC, and see how stream and session ids tell flows apart.',
    related: ['Aeron Transport', 'Aeron Reliability and Flow Control'],
  },
  {
    title: 'Aeron Reliability and Flow Control',
    path: 'content/engineering/aeron/aeron-reliability/aeron-reliability.html',
    category: 'Engineering',
    topic: 'Messaging',
    order: 8,
    level: 'Intermediate',
    tags: ['aeron', 'nak', 'loss', 'flow control', 'back-pressure', 'status message', 'reliable', 'multicast'],
    summary: 'Drop packets on a simulated link and watch NAKs repair the gap, or fill it with padding on an unreliable stream. Then see how windows and status messages hold a publisher back.',
    related: ['Aeron Transport', 'Aeron Channels and Streams', 'Aeron Archive'],
  },
  {
    title: 'Aeron Archive',
    path: 'content/engineering/aeron/aeron-archive/aeron-archive.html',
    category: 'Engineering',
    topic: 'Messaging',
    order: 9,
    level: 'Intermediate',
    tags: ['aeron', 'archive', 'recording', 'replay', 'replay merge', 'catalog', 'durability', 'checksum'],
    summary: 'Record a live stream to disk and replay it. Watch a late subscriber replay history, catch up with the live stream, and merge into it with no gap.',
    related: ['Aeron Transport', 'Aeron Cluster'],
  },
  {
    title: 'Aeron Cluster',
    path: 'content/engineering/aeron/aeron/aeron.html',
    category: 'Engineering',
    topic: 'Messaging',
    order: 10,
    level: 'Intermediate',
    tags: ['aeron', 'cluster', 'raft', 'consensus', 'replicated state machine', 'leader election', 'snapshot', 'determinism', 'low latency'],
    summary: 'Fault-tolerant services as replicated state machines. Send bids to a three-node cluster, crash nodes, and watch Raft commit by majority and elect a new leader.',
    related: ['Aeron Transport', 'Aeron Archive', 'Aeron Reliability and Flow Control'],
  },
  {
    title: 'Kubernetes Fundamentals',
    path: 'content/engineering/k8s/k8s-fundamentals/k8s-fundamentals.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 11,
    level: 'Beginner',
    tags: ['kubernetes', 'k8s', 'cluster', 'pod', 'namespace', 'labels', 'kubectl', 'yaml', 'reconciliation'],
    summary: 'Cluster architecture, control plane and nodes, Pods and Namespaces, labels, kubectl, manifests and the reconcile loop. Step one kubectl apply through every component.',
    related: ['Kubernetes Workloads', 'Kubernetes Networking'],
  },
  {
    title: 'Kubernetes Workloads',
    path: 'content/engineering/k8s/k8s-workloads/k8s-workloads.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 12,
    level: 'Beginner',
    tags: ['kubernetes', 'k8s', 'replicaset', 'deployment', 'statefulset', 'daemonset', 'job', 'cronjob', 'rolling update'],
    summary: 'ReplicaSet, Deployment, StatefulSet, DaemonSet, Job and sidecars. Step through a rolling update, break the image on purpose, and roll back.',
    related: ['Kubernetes Fundamentals', 'Kubernetes Scheduling and Scaling'],
  },
  {
    title: 'Kubernetes Networking',
    path: 'content/engineering/k8s/k8s-networking/k8s-networking.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 13,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'service', 'coredns', 'ingress', 'gateway api', 'cni', 'networkpolicy', 'kube-proxy'],
    summary: 'Pod networking, Services, DNS, Ingress, Gateway API, CNI, NetworkPolicy and kube-proxy. Flip Pod readiness and watch a Service rebuild its endpoints.',
    related: ['Kubernetes Workloads', 'Kubernetes Configuration and Security'],
  },
  {
    title: 'Kubernetes Storage',
    path: 'content/engineering/k8s/k8s-storage/k8s-storage.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 14,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'volume', 'pv', 'pvc', 'storageclass', 'csi', 'access modes', 'statefulset'],
    summary: 'Volumes, PV and PVC, StorageClass, CSI and access modes. Make a claim and see it bind to a volume or trigger dynamic provisioning.',
    related: ['Kubernetes Workloads', 'Kubernetes Scheduling and Scaling'],
  },
  {
    title: 'Kubernetes Configuration and Security',
    path: 'content/engineering/k8s/k8s-security/k8s-security.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 15,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'configmap', 'secret', 'rbac', 'serviceaccount', 'securitycontext', 'pod security', 'admission', 'oidc', 'tls'],
    summary: 'ConfigMap and Secret, RBAC, ServiceAccount, SecurityContext, Pod Security Standards, admission and OIDC. Check who may do what.',
    related: ['Kubernetes Networking', 'Kubernetes DevOps and Advanced'],
  },
  {
    title: 'Kubernetes Scheduling and Scaling',
    path: 'content/engineering/k8s/k8s-scheduling-scaling/k8s-scheduling-scaling.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 16,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'requests', 'limits', 'qos', 'affinity', 'taints', 'probes', 'hpa', 'vpa', 'keda', 'pdb'],
    summary: 'Requests and limits, QoS, affinity, taints, probes, HPA, VPA, KEDA and PDB. See how the scheduler filters and scores nodes.',
    related: ['Kubernetes Workloads', 'Kubernetes Observability'],
  },
  {
    title: 'Kubernetes Observability',
    path: 'content/engineering/k8s/k8s-observability/k8s-observability.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 17,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'prometheus', 'grafana', 'logging', 'opentelemetry', 'tracing', 'alertmanager', 'sli', 'slo'],
    summary: 'Prometheus, Grafana, logging, OpenTelemetry, tracing, Alertmanager and SLOs. Spend an error budget and see what is left.',
    related: ['Kubernetes Scheduling and Scaling', 'Kubernetes DevOps and Advanced'],
  },
  {
    title: 'Kubernetes DevOps and Advanced',
    path: 'content/engineering/k8s/k8s-devops-advanced/k8s-devops-advanced.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 18,
    level: 'Advanced',
    tags: ['kubernetes', 'k8s', 'helm', 'kustomize', 'argo cd', 'gitops', 'etcd', 'informer', 'crd', 'operator', 'webhook', 'troubleshooting', 'disaster recovery'],
    summary: 'Helm, Kustomize, GitOps, etcd, scheduler internals, informers, CRDs and operators, webhooks, troubleshooting and HA. Watch GitOps catch drift.',
    related: ['Kubernetes Observability', 'Kubernetes Configuration and Security'],
  },
  {
    title: 'K9s Terminal UI',
    path: 'content/engineering/k8s/k8s-k9s/k8s-k9s.html',
    category: 'Engineering',
    topic: 'Kubernetes',
    order: 19,
    level: 'Beginner',
    tags: ['kubernetes', 'k8s', 'k9s', 'tui', 'kubectl', 'terminal', 'debugging', 'logs'],
    summary: 'Navigate, filter, describe, read logs and delete from a terminal UI. Drive a simulated K9s with commands, filters and key actions.',
    related: ['Kubernetes Fundamentals', 'Kubernetes DevOps and Advanced'],
  },
  {
    title: 'AWS Fundamentals',
    path: 'content/engineering/aws/aws-fundamentals/aws-fundamentals.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 20,
    level: 'Beginner',
    tags: ['aws', 'regions', 'availability zones', 'global infrastructure', 'iam', 'shared responsibility'],
    summary: 'Global infrastructure, Regions, Availability Zones and IAM basics. Fail a zone and see how much capacity survives.',
    related: ['AWS Compute', 'AWS Security'],
  },
  {
    title: 'AWS Compute',
    path: 'content/engineering/aws/aws-compute/aws-compute.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 21,
    level: 'Beginner',
    tags: ['aws', 'ec2', 'auto scaling', 'lambda', 'ecs', 'eks', 'fargate'],
    summary: 'EC2, Auto Scaling, Lambda, ECS and EKS. Move the load and watch target tracking add and remove instances.',
    related: ['AWS Fundamentals', 'AWS Networking'],
  },
  {
    title: 'AWS Networking',
    path: 'content/engineering/aws/aws-networking/aws-networking.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 22,
    level: 'Intermediate',
    tags: ['aws', 'vpc', 'subnet', 'route table', 'nat gateway', 'alb', 'nlb', 'load balancer'],
    summary: 'VPC, subnets, route tables, NAT, ALB and NLB. Change routes and addresses to see when traffic gets through.',
    related: ['AWS Compute', 'AWS Security'],
  },
  {
    title: 'AWS Storage',
    path: 'content/engineering/aws/aws-storage/aws-storage.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 23,
    level: 'Beginner',
    tags: ['aws', 's3', 'ebs', 'efs', 'fsx', 'object storage', 'block storage'],
    summary: 'S3, EBS, EFS and FSx. Describe how data is used and see which service fits.',
    related: ['AWS Compute', 'AWS Databases'],
  },
  {
    title: 'AWS Databases',
    path: 'content/engineering/aws/aws-database/aws-database.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 24,
    level: 'Intermediate',
    tags: ['aws', 'rds', 'aurora', 'dynamodb', 'elasticache', 'database', 'cache'],
    summary: 'RDS, Aurora, DynamoDB and ElastiCache. Match a workload to the right managed database.',
    related: ['AWS Storage', 'AWS Messaging and Streaming'],
  },
  {
    title: 'AWS Messaging and Streaming',
    path: 'content/engineering/aws/aws-messaging/aws-messaging.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 25,
    level: 'Intermediate',
    tags: ['aws', 'sqs', 'sns', 'eventbridge', 'msk', 'kinesis', 'fan-out', 'queue'],
    summary: 'SQS, SNS, EventBridge, MSK and Kinesis. Publish to a queue and to a topic and see who gets the message.',
    related: ['AWS Databases', 'AWS Monitoring'],
  },
  {
    title: 'AWS Security',
    path: 'content/engineering/aws/aws-security/aws-security.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 26,
    level: 'Intermediate',
    tags: ['aws', 'iam', 'kms', 'secrets manager', 'waf', 'encryption', 'least privilege'],
    summary: 'IAM, KMS, Secrets Manager and WAF. Attach allow and deny policies and see why an explicit deny wins.',
    related: ['AWS Fundamentals', 'AWS Networking'],
  },
  {
    title: 'AWS Monitoring',
    path: 'content/engineering/aws/aws-monitoring/aws-monitoring.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 27,
    level: 'Intermediate',
    tags: ['aws', 'cloudwatch', 'cloudtrail', 'x-ray', 'alarm', 'observability'],
    summary: 'CloudWatch, CloudTrail and X-Ray. Add data points and see when an M of N alarm fires.',
    related: ['AWS Messaging and Streaming', 'AWS DevOps and IaC'],
  },
  {
    title: 'AWS DevOps and IaC',
    path: 'content/engineering/aws/aws-devops-iac/aws-devops-iac.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 28,
    level: 'Intermediate',
    tags: ['aws', 'terraform', 'cloudformation', 'codepipeline', 'iac', 'drift', 'ci/cd'],
    summary: 'Terraform, CloudFormation and CodePipeline. Edit config, cause drift and read the plan.',
    related: ['AWS Monitoring', 'AWS Advanced Architecture'],
  },
  {
    title: 'AWS Advanced Architecture',
    path: 'content/engineering/aws/aws-advanced-architecture/aws-advanced-architecture.html',
    category: 'Engineering',
    topic: 'AWS',
    order: 29,
    level: 'Advanced',
    tags: ['aws', 'high availability', 'disaster recovery', 'multi-region', 'cost optimization', 'rto', 'rpo'],
    summary: 'HA, disaster recovery, multi-region and cost optimization. Pick a recovery time and see the cheapest strategy.',
    related: ['AWS DevOps and IaC', 'AWS Fundamentals'],
  },
  {
    title: 'Kafka Use Cases',
    path: 'content/engineering/kafka/kafka-use-cases/kafka-use-cases.html',
    category: 'Engineering',
    topic: 'Kafka',
    order: 30,
    level: 'Beginner',
    tags: ['kafka', 'event streaming', 'event-driven', 'cdc', 'stream processing', 'kafka connect', 'debezium', 'logging'],
    summary: 'Step an event through five Kafka use cases: data pipelines, event-driven services, stream processing, centralized logs and change data capture.',
    related: ['Aeron Transport', 'AWS Compute'],
  },
  {
    title: 'Quant Roadmap',
    path: 'content/quant/quant-roadmap/quant-roadmap.html',
    category: 'Quant',
    topic: 'Roadmap',
    order: 1,
    level: 'Beginner',
    tags: ['quant', 'roadmap', 'finance', 'machine learning', 'probability', 'derivatives', 'backtesting', 'career'],
    summary: 'An eight-phase study path into quantitative finance: calculus and linear algebra, probability, derivatives pricing, time series, machine learning, engineering, and research engineering with MLOps, with a project for each phase.',
    related: ['Bayes\' Theorem', 'Gaussian Distribution', 'Linear Regression', 'Overfitting and Regularization', 'Machine Learning Algorithm Groups'],
  },
  {
    title: 'False Sharing',
    path: 'content/engineering/concurrency/false-sharing/false-sharing.html',
    category: 'Engineering',
    topic: 'Concurrency',
    order: 2,
    level: 'Intermediate',
    tags: ['false sharing', 'cache line', 'concurrency', 'performance', 'mesi', 'cache coherence', 'padding', 'low latency'],
    summary: 'Two threads write two different variables and still slow each other down, because they share one 64-byte cache line. Step through the MESI ping-pong, then pad the fields apart.',
    related: ['Memory Fence', 'Aeron Transport'],
  },
  {
    title: 'Memory Fence',
    path: 'content/engineering/concurrency/memory-fence/memory-fence.html',
    category: 'Engineering',
    topic: 'Concurrency',
    order: 3,
    level: 'Advanced',
    tags: ['memory fence', 'memory ordering', 'concurrency', 'atomics', 'store buffer', 'acquire release', 'memory barrier', 'lock-free'],
    summary: 'CPUs buffer stores and let later loads run first. Drive the store buffering test on two cores, get r0 = r1 = 0, then add a fence and see that outcome disappear. Covers acquire and release too.',
    related: ['False Sharing', 'Aeron Transport'],
  },
  {
    title: 'Caching Strategies',
    path: 'content/engineering/caching/caching-strategies/caching-strategies.html',
    category: 'Engineering',
    topic: 'Caching',
    order: 4,
    level: 'Intermediate',
    tags: ['caching', 'cache-aside', 'write-through', 'write-behind', 'read-through', 'refresh-ahead', 'cache invalidation', 'eviction', 'lru', 'cache stampede', 'redis', 'ttl'],
    summary: 'Run cache-aside, read-through, write-through, write-behind, write-around, refresh-ahead, request coalescing and stale-while-revalidate on one key. Count DB queries and stale reads, crash the cache, then compare LRU, LFU and FIFO eviction.',
    related: ['AWS Databases', 'Kafka Use Cases', 'Network Protocols', 'False Sharing', 'Rate Limiter Strategies'],
  },
  {
    title: 'Rate Limiter Strategies',
    path: 'content/engineering/rate-limiting/rate-limiter-strategies/rate-limiter-strategies.html',
    category: 'Engineering',
    topic: 'Rate limiting',
    order: 5,
    level: 'Intermediate',
    tags: ['rate limiting', 'token bucket', 'leaky bucket', 'sliding window', 'fixed window', 'gcra', 'throttling', 'concurrency limit', 'redis', 'http 429', 'retry-after', 'backoff', 'api gateway'],
    summary: 'Run fixed window, sliding log, sliding window counter, token bucket, leaky bucket and GCRA on the same traffic and see who lets a boundary burst through. Then drive a live token bucket, and cover concurrency limits, distributed counters in Redis, 429 and RateLimit headers, and backoff with jitter.',
    related: ['Caching Strategies', 'Network Protocols', 'AWS Security', 'Kubernetes Networking', 'Aeron Reliability and Flow Control'],
  },
  {
    title: 'Expectation, Variance and Covariance',
    path: 'content/quant/expectation-variance/expectation-variance.html',
    category: 'Quant',
    topic: 'Probability and statistics',
    order: 2,
    also: [{ category: 'Mathematics', topic: 'Probability', order: 18 }],
    level: 'Beginner',
    tags: ['expectation', 'variance', 'covariance', 'correlation', 'diversification', 'portfolio risk', 'probability', 'statistics'],
    summary: 'The three numbers behind every risk model. Draw returns for two assets, change their correlation, and watch how covariance decides the risk of a mix.',
    related: ['Gaussian Distribution', 'Law of Large Numbers and the CLT', 'Mean-Variance Portfolios'],
  },
  {
    title: 'Law of Large Numbers and the CLT',
    path: 'content/quant/law-of-large-numbers-clt/law-of-large-numbers-clt.html',
    category: 'Quant',
    topic: 'Probability and statistics',
    order: 3,
    also: [{ category: 'Mathematics', topic: 'Probability', order: 19 }],
    level: 'Beginner',
    tags: ['law of large numbers', 'central limit theorem', 'sampling', 'standard error', 'probability', 'statistics', 'normal distribution', 'monte carlo'],
    summary: 'Average more and more draws from any distribution. The running mean settles on the true mean, and the spread of many averages turns into a bell curve of width sigma over root n.',
    related: ['Expectation, Variance and Covariance', 'Gaussian Distribution', 'Hypothesis Tests and p-values', 'Monte Carlo Pricing'],
  },
  {
    title: 'Maximum Likelihood Estimation',
    path: 'content/quant/maximum-likelihood/maximum-likelihood.html',
    category: 'Quant',
    topic: 'Probability and statistics',
    order: 4,
    also: [{ category: 'Mathematics', topic: 'Probability', order: 20 }],
    level: 'Intermediate',
    tags: ['maximum likelihood', 'mle', 'estimation', 'log-likelihood', 'statistics', 'fisher information', 'normal distribution', 'model fitting'],
    summary: 'Guess the mean and volatility behind a set of returns and watch the log-likelihood score your guess. The best guess is the peak, and the curvature at the peak says how sure you can be.',
    related: ['Expectation, Variance and Covariance', 'Gaussian Distribution', 'Hypothesis Tests and p-values', 'ARMA and GARCH'],
  },
  {
    title: 'Hypothesis Tests and p-values',
    path: 'content/quant/hypothesis-testing/hypothesis-testing.html',
    category: 'Quant',
    topic: 'Probability and statistics',
    order: 5,
    also: [{ category: 'Mathematics', topic: 'Probability', order: 21 }],
    level: 'Intermediate',
    tags: ['hypothesis test', 'p-value', 't-test', 'multiple testing', 'statistics', 'significance', 'bonferroni', 'data snooping'],
    summary: 'Test whether a strategy\'s mean return is really above zero with a t-test, then run hundreds of strategies with no edge at all and watch five percent of them pass by luck.',
    related: ['Law of Large Numbers and the CLT', 'Maximum Likelihood Estimation', 'Backtesting Without Look-Ahead', 'Walk-Forward and Purged Cross-Validation'],
  },
  {
    title: 'Returns, Compounding and Time Value',
    path: 'content/quant/returns-compounding/returns-compounding.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 7,
    level: 'Beginner',
    tags: ['returns', 'compounding', 'log returns', 'time value of money', 'discounting', 'present value', 'volatility drag', 'finance'],
    summary: 'Grow one dollar with yearly, monthly and continuous compounding, discount future cash back to today, and see why +50% then -50% leaves you down 25%: the volatility drag on compounded returns.',
    related: ['Expectation, Variance and Covariance', 'No-Arbitrage and Put-Call Parity', 'Random Walks and Brownian Motion', 'Itô\'s Lemma'],
  },
  {
    title: 'Futures, Forwards and Option Payoffs',
    path: 'content/quant/option-payoffs/option-payoffs.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 8,
    level: 'Beginner',
    tags: ['options', 'futures', 'forwards', 'payoff', 'call', 'put', 'option strategies', 'derivatives'],
    summary: 'Build positions from calls, puts, forwards and stock, and read the payoff at expiry. Load spreads, straddles and covered calls, then edit the legs and watch the breakevens move.',
    related: ['Returns, Compounding and Time Value', 'No-Arbitrage and Put-Call Parity', 'Black-Scholes and the Greeks'],
  },
  {
    title: 'No-Arbitrage and Put-Call Parity',
    path: 'content/quant/put-call-parity/put-call-parity.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 9,
    level: 'Intermediate',
    tags: ['no-arbitrage', 'put-call parity', 'arbitrage', 'replication', 'forward price', 'options', 'derivatives', 'law of one price'],
    summary: 'Two portfolios with the same payoff must cost the same. Misprice a call or a put, and the simulator builds the trade that locks in a riskless profit whatever the stock does.',
    related: ['Futures, Forwards and Option Payoffs', 'Returns, Compounding and Time Value', 'Black-Scholes and the Greeks', 'Binomial Trees'],
  },
  {
    title: 'Random Walks and Brownian Motion',
    path: 'content/quant/brownian-motion/brownian-motion.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 10,
    also: [{ category: 'Mathematics', topic: 'Stochastic processes', order: 23 }],
    level: 'Intermediate',
    tags: ['brownian motion', 'random walk', 'wiener process', 'stochastic process', 'quadratic variation', 'diffusion', 'square root of time', 'gbm'],
    summary: 'Shrink the steps of a coin-flip walk until it becomes Brownian motion. See the spread grow like the square root of time and the sum of squared steps settle on exactly t.',
    related: ['Law of Large Numbers and the CLT', 'Itô\'s Lemma', 'Black-Scholes and the Greeks', 'Monte Carlo Pricing'],
  },
  {
    title: 'Itô\'s Lemma',
    path: 'content/quant/ito-lemma/ito-lemma.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 11,
    also: [{ category: 'Mathematics', topic: 'Stochastic processes', order: 24 }],
    level: 'Advanced',
    tags: ['ito\'s lemma', 'stochastic calculus', 'chain rule', 'brownian motion', 'gbm', 'quadratic variation', 'log price', 'derivatives pricing'],
    summary: 'The chain rule for random paths. Follow a function of a simulated stock price step by step and see that the ordinary first-order term misses a second-order piece that never averages away.',
    related: ['Random Walks and Brownian Motion', 'Black-Scholes and the Greeks', 'Returns, Compounding and Time Value', 'Monte Carlo Pricing'],
  },
  {
    title: 'Black-Scholes and the Greeks',
    path: 'content/quant/black-scholes/black-scholes.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 13,
    level: 'Intermediate',
    tags: ['black-scholes', 'greeks', 'delta', 'gamma', 'vega', 'theta', 'option pricing', 'hedging'],
    summary: 'Price a European call or put with the Black-Scholes formula. Move spot, volatility and time, watch the price curve bend toward the payoff, and read delta, gamma, vega and theta off the chart.',
    related: ['Itô\'s Lemma', 'No-Arbitrage and Put-Call Parity', 'Binomial Trees', 'Monte Carlo Pricing', 'Futures, Forwards and Option Payoffs'],
  },
  {
    title: 'Binomial Trees',
    path: 'content/quant/binomial-tree/binomial-tree.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 14,
    level: 'Intermediate',
    tags: ['binomial tree', 'cox-ross-rubinstein', 'option pricing', 'risk-neutral', 'american option', 'early exercise', 'backward induction', 'derivatives'],
    summary: 'Let the stock move up or down in each step, price the option at the leaves, and roll back with risk-neutral probabilities. See early exercise of an American put and watch the price converge to Black-Scholes.',
    related: ['Black-Scholes and the Greeks', 'No-Arbitrage and Put-Call Parity', 'Monte Carlo Pricing', 'Random Walks and Brownian Motion'],
  },
  {
    title: 'Monte Carlo Pricing',
    path: 'content/quant/monte-carlo-pricing/monte-carlo-pricing.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 15,
    also: [{ category: 'Mathematics', topic: 'Numerical analysis', order: 35 }],
    level: 'Intermediate',
    tags: ['monte carlo', 'simulation', 'option pricing', 'variance reduction', 'antithetic variates', 'asian option', 'standard error', 'risk-neutral'],
    summary: 'Simulate thousands of risk-neutral stock paths, average the discounted payoffs, and watch the estimate close in on Black-Scholes with an error band that shrinks like one over root N. Then price an Asian option that has no simple formula.',
    related: ['Law of Large Numbers and the CLT', 'Black-Scholes and the Greeks', 'Binomial Trees', 'Random Walks and Brownian Motion'],
  },
  {
    title: 'Stationarity and Autocorrelation',
    path: 'content/quant/stationarity-autocorrelation/stationarity-autocorrelation.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 16,
    also: [{ category: 'Mathematics', topic: 'Time series', order: 26 }],
    level: 'Intermediate',
    tags: ['stationarity', 'autocorrelation', 'acf', 'ar(1)', 'unit root', 'mean reversion', 'time series', 'random walk'],
    summary: 'Turn one dial from white noise to a mean-reverting AR(1) to a random walk. Watch the autocorrelation bars, the half-life, and why prices need differencing before most statistics make sense.',
    related: ['Random Walks and Brownian Motion', 'ARMA and GARCH', 'Hypothesis Tests and p-values', 'Backtesting Without Look-Ahead'],
  },
  {
    title: 'ARMA and GARCH',
    path: 'content/quant/arma-garch/arma-garch.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 17,
    also: [{ category: 'Mathematics', topic: 'Time series', order: 27 }],
    level: 'Advanced',
    tags: ['garch', 'arma', 'volatility clustering', 'time series', 'conditional variance', 'fat tails', 'forecasting', 'volatility'],
    summary: 'ARMA models the predictable part of returns, GARCH the predictable part of their size. Tune alpha and beta, watch calm and stormy periods form, and see why squared returns are autocorrelated when returns are not.',
    related: ['Stationarity and Autocorrelation', 'Maximum Likelihood Estimation', 'Value at Risk and Drawdown', 'Black-Scholes and the Greeks'],
  },
  {
    title: 'Mean-Variance Portfolios',
    path: 'content/quant/mean-variance-portfolio/mean-variance-portfolio.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 20,
    level: 'Intermediate',
    tags: ['portfolio optimization', 'markowitz', 'efficient frontier', 'sharpe ratio', 'diversification', 'tangency portfolio', 'capital market line', 'covariance matrix'],
    summary: 'Mix three assets and see every possible portfolio as a point of risk and return. Trace the efficient frontier, find the minimum-variance and maximum-Sharpe portfolios, and watch correlation reshape them.',
    related: ['Expectation, Variance and Covariance', 'CAPM and Factor Models', 'Value at Risk and Drawdown', 'Principal Component Analysis'],
  },
  {
    title: 'CAPM and Factor Models',
    path: 'content/quant/capm-factor-models/capm-factor-models.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 21,
    level: 'Intermediate',
    tags: ['capm', 'beta', 'alpha', 'factor model', 'fama-french', 'regression', 'systematic risk', 'security market line'],
    summary: 'Regress a stock on the market to split its return into beta times the market plus alpha plus noise. See how hard alpha is to detect, then plot assets against the security market line.',
    related: ['Mean-Variance Portfolios', 'Linear Regression', 'Hypothesis Tests and p-values', 'Principal Component Analysis'],
  },
  {
    title: 'Value at Risk and Drawdown',
    path: 'content/quant/value-at-risk-drawdown/value-at-risk-drawdown.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 22,
    level: 'Intermediate',
    tags: ['value at risk', 'expected shortfall', 'drawdown', 'risk management', 'fat tails', 'var backtest', 'tail risk', 'volatility'],
    summary: 'Measure how much a portfolio can lose: one-day Value at Risk, the expected shortfall beyond it, and the worst peak-to-trough drawdown of the equity curve. Switch to fat tails and see the normal model underestimate the damage.',
    related: ['ARMA and GARCH', 'Mean-Variance Portfolios', 'Expectation, Variance and Covariance', 'Backtesting Without Look-Ahead'],
  },
  {
    title: 'Backtesting Without Look-Ahead',
    path: 'content/quant/backtesting/backtesting.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 23,
    level: 'Intermediate',
    tags: ['backtesting', 'look-ahead bias', 'overfitting', 'out-of-sample', 'trading strategy', 'data snooping', 'moving average', 'sharpe ratio'],
    summary: 'Backtest a moving-average strategy on prices with no edge at all. Use today\'s close to trade today\'s return and it looks brilliant. Tune the window on the whole sample and it still looks good, until you check the data you did not tune on.',
    related: ['Hypothesis Tests and p-values', 'Transaction Costs and Slippage', 'Walk-Forward and Purged Cross-Validation', 'Feature Engineering and Leakage'],
  },
  {
    title: 'Transaction Costs and Slippage',
    path: 'content/quant/transaction-costs/transaction-costs.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 24,
    level: 'Intermediate',
    tags: ['transaction costs', 'slippage', 'market impact', 'turnover', 'bid-ask spread', 'execution', 'backtesting', 'capacity'],
    summary: 'Give a strategy a small real edge, then pay the spread and the market impact on every trade. See how trading frequency and size eat the profit, and find the break-even cost where the edge disappears.',
    related: ['Backtesting Without Look-Ahead', 'Value at Risk and Drawdown', 'Futures, Forwards and Option Payoffs'],
  },
  {
    title: 'Gradient Boosting',
    path: 'content/quant/gradient-boosting/gradient-boosting.html',
    category: 'Quant',
    topic: 'Machine learning for markets',
    order: 25,
    also: [{ category: 'AI', topic: 'Classification', order: 12 }],
    level: 'Intermediate',
    tags: ['gradient boosting', 'boosting', 'decision tree', 'ensemble', 'xgboost', 'lightgbm', 'learning rate', 'overfitting'],
    summary: 'Fit small trees one after another, each to the mistakes of the ones before. Step through the rounds, tune the learning rate and depth, and watch validation error find its minimum and then rise again.',
    related: ['Decision Tree', 'Random Forest', 'Gradient Descent', 'Overfitting and Regularization', 'Walk-Forward and Purged Cross-Validation'],
  },
  {
    title: 'Walk-Forward and Purged Cross-Validation',
    path: 'content/quant/walk-forward-purged-cv/walk-forward-purged-cv.html',
    category: 'Quant',
    topic: 'Machine learning for markets',
    order: 26,
    level: 'Intermediate',
    tags: ['cross-validation', 'walk-forward', 'purging', 'embargo', 'leakage', 'time series', 'overfitting', 'backtesting'],
    summary: 'Shuffled K-fold finds an edge in pure noise when labels overlap and features drift. Compare shuffled, blocked, walk-forward, purged and combinatorial splits, and watch the fake skill vanish.',
    related: ['Backtesting Without Look-Ahead', 'Feature Engineering and Leakage', 'Gradient Boosting', 'Hypothesis Tests and p-values', 'Overfitting and Regularization'],
  },
  {
    title: 'Feature Engineering and Leakage',
    path: 'content/quant/feature-engineering-leakage/feature-engineering-leakage.html',
    category: 'Quant',
    topic: 'Machine learning for markets',
    order: 27,
    level: 'Intermediate',
    tags: ['feature engineering', 'leakage', 'look-ahead bias', 'point-in-time', 'stationarity', 'normalization', 'selection bias', 'backtesting'],
    summary: 'Five common leaks turn a random walk into a winning strategy: full-sample z-scores, off-by-one alignment, centered smoothing, selection on all data and mis-dated releases. See each one, then the point-in-time fix.',
    related: ['Walk-Forward and Purged Cross-Validation', 'Backtesting Without Look-Ahead', 'Stationarity and Autocorrelation', 'Gradient Boosting'],
  },
  {
    title: 'Data Structures and Algorithms for Quants',
    path: 'content/quant/data-structures-algorithms/data-structures-algorithms.html',
    category: 'Quant',
    topic: 'Engineering and interviews',
    order: 29,
    also: [{ category: 'Algorithms', topic: 'Applications', order: 9 }],
    level: 'Intermediate',
    tags: ['data structures', 'algorithms', 'order book', 'complexity', 'streaming', 'interview', 'latency', 'hash map'],
    summary: 'Run one order stream through four order book designs and count the work each does. Then the streaming statistics, hash maps, ring buffers and interview patterns that trading code is built on.',
    related: ['Heap', 'Skip List', 'Red-Black Tree', 'Timer Wheel', 'Probability Puzzles'],
  },
  {
    title: 'Probability Puzzles',
    path: 'content/quant/probability-puzzles/probability-puzzles.html',
    category: 'Quant',
    topic: 'Engineering and interviews',
    order: 30,
    also: [{ category: 'Mathematics', topic: 'Probability', order: 36 }],
    level: 'Intermediate',
    tags: ['probability', 'puzzles', 'interview', 'expectation', 'markov chain', 'monte carlo', 'optimal stopping', 'kelly criterion'],
    summary: 'Ten classic interview puzzles, from HH versus HT to the broken stick and the hat check, each solved with one of five tools and checked by a live Monte Carlo run. Plus Kelly betting and the numbers to know by heart.',
    related: ['Expectation, Variance and Covariance', 'Law of Large Numbers and the CLT', "Bayes' Theorem", 'Monte Carlo Pricing', 'Data Structures and Algorithms for Quants'],
  },
  {
    title: 'Singular Value Decomposition',
    path: 'content/math/singular-value-decomposition/singular-value-decomposition.html',
    category: 'Mathematics',
    topic: 'Linear algebra',
    order: 15,
    level: 'Intermediate',
    tags: ['svd', 'linear algebra', 'matrix factorization', 'low-rank approximation', 'singular values', 'pca', 'least squares', 'condition number'],
    summary: 'Every matrix is a rotation, a stretch along the axes, and another rotation. Drag the entries of a 2 by 2 matrix, step through V transpose, Sigma and U, and see the unit circle turn into an ellipse whose axes are the singular values.',
    related: ['Eigenvalues and Eigenvectors', 'Matrix Diagonalization', 'Matrix Rank', 'Principal Component Analysis', 'Linear Regression'],
  },
  {
    title: 'Markov Chains',
    path: 'content/quant/markov-chains/markov-chains.html',
    category: 'Quant',
    topic: 'Probability and statistics',
    order: 6,
    also: [{ category: 'Mathematics', topic: 'Stochastic processes', order: 22 }],
    level: 'Intermediate',
    tags: ['markov chain', 'transition matrix', 'stationary distribution', 'stochastic process', 'regimes', 'markov property', 'eigenvalues', 'probability'],
    summary: 'A process whose next step depends only on where it is now. Tune a three-regime market chain, watch the state distribution converge to its stationary limit, and read regime durations and mixing speed off the transition matrix.',
    related: ['Eigenvalues and Eigenvectors', 'Matrix Diagonalization', 'Random Walks and Brownian Motion', 'Maximum Likelihood Estimation', 'Bayes\' Theorem'],
  },
  {
    title: 'Ornstein-Uhlenbeck Process',
    path: 'content/quant/ornstein-uhlenbeck/ornstein-uhlenbeck.html',
    category: 'Quant',
    topic: 'Markets and derivatives',
    order: 12,
    also: [{ category: 'Mathematics', topic: 'Stochastic processes', order: 25 }],
    level: 'Advanced',
    tags: ['ornstein-uhlenbeck', 'mean reversion', 'stochastic differential equation', 'half-life', 'vasicek', 'ar(1)', 'stochastic process', 'pairs trading'],
    summary: 'Brownian motion with a spring attached. Tune the pull speed, long-run mean and noise, watch paths fall back to the mean, and connect the half-life, the stationary spread and the AR(1) regression used to estimate it all from data.',
    related: ['Random Walks and Brownian Motion', 'Itô\'s Lemma', 'Stationarity and Autocorrelation', 'ARMA and GARCH', 'Markov Chains'],
  },
  {
    title: 'Cointegration and Pairs Trading',
    path: 'content/quant/cointegration-pairs-trading/cointegration-pairs-trading.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 18,
    also: [{ category: 'Mathematics', topic: 'Time series', order: 28 }],
    level: 'Advanced',
    tags: ['cointegration', 'pairs trading', 'statistical arbitrage', 'engle-granger', 'spread', 'mean reversion', 'unit root', 'hedge ratio'],
    summary: 'Two random walks that never drift apart. Fit the hedge ratio on a formation window, test the spread for a unit root, then trade its z-score out of sample, and see how the result collapses when the cointegration is switched off.',
    related: ['Stationarity and Autocorrelation', 'Ornstein-Uhlenbeck Process', 'Linear Regression', 'Backtesting Without Look-Ahead', 'Transaction Costs and Slippage'],
  },
  {
    title: 'Kalman Filter',
    path: 'content/quant/kalman-filter/kalman-filter.html',
    category: 'Quant',
    topic: 'Time series and portfolios',
    order: 19,
    also: [{ category: 'Mathematics', topic: 'Time series', order: 29 }],
    level: 'Advanced',
    tags: ['kalman filter', 'state space model', 'filtering', 'time series', 'dynamic hedge ratio', 'bayesian updating', 'noise', 'forecasting'],
    summary: 'Track a hidden value from noisy observations by predicting, then correcting by a gain that weighs the two noise levels. Tune process and measurement noise, watch the gain settle, and see why a steady-state Kalman filter is an exponential moving average with a well-chosen weight.',
    related: ['Bayes\' Theorem', 'Gaussian Distribution', 'Cointegration and Pairs Trading', 'Linear Regression', 'Stationarity and Autocorrelation'],
  },
];

// ---------- helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const NS = 'http://www.w3.org/2000/svg';
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const state = { tagq: '', q: '', cat: 'All', tag: '', level: 'All', sort: 'order' };

// every (category, topic, order) a doc is listed under; the first one is its home category
const placements = d => [{ category: d.category, topic: d.topic, order: d.order }, ...(d.also || [])];
const inCat = (d, c) => placements(d).some(p => p.category === c);
const place = (d, c) => placements(d).find(p => p.category === c) || placements(d)[0];
// categories listed here come first, in this order; any others follow alphabetically
const CAT_ORDER = ['Mathematics', 'Quant', 'AI'];
const catRank = c => { const i = CAT_ORDER.indexOf(c); return i < 0 ? CAT_ORDER.length : i; };
const byCat = (a, b) => catRank(a) - catRank(b) || a.localeCompare(b);
const allCats = () => [...new Set(DOCS.flatMap(d => placements(d).map(p => p.category)))].sort(byCat);
function haystack(d) {
  return norm([d.title, d.summary, ...placements(d).flatMap(p => [p.category, p.topic]), d.level, ...d.tags].join(' '));
}
function matches(d) {
  if (state.cat !== 'All' && !inCat(d, state.cat)) return false;
  if (state.level !== 'All' && d.level !== state.level) return false;
  if (state.tag && !d.tags.includes(state.tag)) return false;
  const terms = norm(state.q).split(/\s+/).filter(Boolean);
  const h = haystack(d);
  return terms.every(t => h.includes(t));
}
// reading order inside a category; docs without `order` go last, then by title
const ord = (d, c) => { const o = place(d, c).order; return typeof o === 'number' ? o : 1e6; };
const byOrderIn = c => (a, b) => ord(a, c) - ord(b, c) || a.title.localeCompare(b.title);
const byOrder = byOrderIn(undefined);
// topics follow the first doc they contain
const topicRank = (c, t) => Math.min(...DOCS.filter(d => placements(d).some(p => p.category === c && p.topic === t)).map(d => ord(d, c)));
const byTopic = c => (a, b) => topicRank(c, a) - topicRank(c, b) || a.localeCompare(b);
function visibleDocs() {
  const list = DOCS.filter(matches);
  const by = {
    order: state.cat !== 'All' ? byOrderIn(state.cat) : (a, b) => byCat(a.category, b.category) || byOrder(a, b),
    title: (a, b) => a.title.localeCompare(b.title),
    category: (a, b) => byCat(a.category, b.category) || a.title.localeCompare(b.title),
  };
  return list.sort(by[state.sort]);
}
function highlight(text) {
  const terms = norm(state.q).split(/\s+/).filter(Boolean);
  let out = esc(text);
  if (!terms.length) return out;
  const n = norm(text);
  // ranges are computed on the normalized text; lengths match for these inputs
  const marks = [];
  terms.forEach(t => { let i = n.indexOf(t); while (i >= 0) { marks.push([i, i + t.length]); i = n.indexOf(t, i + t.length); } });
  if (!marks.length || n.length !== text.length) return out;
  marks.sort((a, b) => a[0] - b[0]);
  const merged = [];
  marks.forEach(m => { const l = merged[merged.length - 1]; if (l && m[0] <= l[1]) l[1] = Math.max(l[1], m[1]); else merged.push(m.slice()); });
  let res = '', p = 0;
  merged.forEach(([a, b]) => { res += esc(text.slice(p, a)) + '<mark>' + esc(text.slice(a, b)) + '</mark>'; p = b; });
  return res + esc(text.slice(p));
}

// ---------- URL state ----------
function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  state.q = p.get('q') || '';
  state.cat = p.get('cat') || 'All';
  state.tag = p.get('tag') || '';
  state.level = p.get('level') || 'All';
  state.sort = p.get('sort') || 'order';
}
function writeHash() {
  const p = new URLSearchParams();
  if (state.q) p.set('q', state.q);
  if (state.cat !== 'All') p.set('cat', state.cat);
  if (state.tag) p.set('tag', state.tag);
  if (state.level !== 'All') p.set('level', state.level);
  if (state.sort !== 'order') p.set('sort', state.sort);
  const h = p.toString();
  history.replaceState(null, '', h ? '#' + h : location.pathname + location.search);
}

// ---------- controls ----------
function renderControls() {
  const cats = ['All', ...allCats()];
  $('#cats').innerHTML = cats.map(c => {
    const n = c === 'All' ? DOCS.length : DOCS.filter(d => inCat(d, c)).length;
    return `<button type="button" class="chip" data-cat="${esc(c)}" aria-pressed="${state.cat === c}">${esc(c)} <span class="n">${n}</span></button>`;
  }).join('');

  const levels = ['All', ...new Set(DOCS.map(d => d.level))];
  $('#level').innerHTML = levels.map(l => `<option ${state.level === l ? 'selected' : ''}>${esc(l)}</option>`).join('');
  $('#sort').value = state.sort;

  renderTags();
}

function renderTags() {
  const tagCount = {};
  DOCS.forEach(d => d.tags.forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; }));
  const all = Object.keys(tagCount).sort((a, b) => tagCount[b] - tagCount[a] || a.localeCompare(b));
  const q = norm(state.tagq.trim());
  const shown = all.filter(t => !q || norm(t).includes(q));
  $('#tagTotal').textContent = q ? `${shown.length}/${all.length}` : `(${all.length})`;
  $('#clearTag').hidden = !state.tag;
  const at = $('#activeTags');
  at.hidden = !state.tag;
  at.innerHTML = state.tag
    ? `<span class="lbl">Filtering by tag:</span><button type="button" class="tag" data-tag="${esc(state.tag)}" aria-pressed="true" aria-label="Remove tag filter ${esc(state.tag)}">#${esc(state.tag)}<span class="x" aria-hidden="true">×</span></button>`
    : '';
  $('#tags').innerHTML = shown.map(t =>
    `<button type="button" class="tag" data-tag="${esc(t)}" aria-pressed="${state.tag === t}">#${esc(t)}<span class="n">${tagCount[t]}</span></button>`).join('')
    || '<span class="tag-none">No tag matches.</span>';
}

// ---------- list ----------
const CARD_TAGS = 3;
function cardTags(d) {
  // show the first few tags (plus the active one) so cards stay compact however many tags exist
  const keep = d.tags.filter((t, i) => i < CARD_TAGS || t === state.tag);
  const rest = d.tags.length - keep.length;
  return keep.map(t => `<button type="button" class="tag sm" data-tag="${esc(t)}" aria-pressed="${state.tag === t}">#${esc(t)}</button>`).join('')
    + (rest > 0 ? `<span class="tag sm more" title="${esc(d.tags.filter(t => !keep.includes(t)).join(', '))}">+${rest}</span>` : '');
}
function renderList() {
  const docs = visibleDocs();
  $('#count').textContent = `${docs.length} of ${DOCS.length} docs`;
  $('#empty').hidden = docs.length > 0;
  $('#list').innerHTML = docs.map(d => {
    const p = place(d, state.cat), others = placements(d).filter(x => x.category !== p.category).map(x => x.category);
    return `
    <li class="doc">
      <a class="doc-link" href="${esc(d.path)}">
        <div class="eyebrow">${highlight(p.category)} · ${highlight(p.topic)}${others.length ? ` <span class="also">· also ${others.map(highlight).join(', ')}</span>` : ''}</div>
        <h3>${highlight(d.title)}</h3>
        <p>${highlight(d.summary)}</p>
      </a>
      <div class="meta">
        <span class="lvl">${esc(d.level)}</span>
        ${cardTags(d)}
      </div>
      ${d.related && d.related.length ? `<div class="rel">Related: ${d.related.map(r => {
        const x = DOCS.find(z => z.title === r);
        return x ? `<a href="${esc(x.path)}">${esc(r)}</a>` : esc(r);
      }).join(', ')}</div>` : ''}
    </li>`;
  }).join('');
}

// ---------- contents (grouped index) ----------
function renderToc() {
  const docs = visibleDocs();
  const tree = {};
  docs.forEach(d => placements(d).forEach(p => {
    if (state.cat === 'All' || p.category === state.cat) ((tree[p.category] ||= {})[p.topic] ||= []).push(d);
  }));
  $('#toc').innerHTML = Object.keys(tree).sort(byCat).map(c =>
    `<li><b>${esc(c)}</b><ul>${Object.keys(tree[c]).sort(byTopic(c)).map(t => tree[c][t].sort(byOrderIn(c)) &&
      `<li><span class="topic">${esc(t)}</span><ul>${tree[c][t].map(d =>
        `<li><a href="${esc(d.path)}">${esc(d.title)}</a></li>`).join('')}</ul></li>`).join('')}</ul></li>`).join('')
    || '<li class="na">Nothing to list</li>';
}

// ---------- graph view (Obsidian-style force-directed graph) ----------
// Every doc is a node, every `related` link is an edge, colours follow the home category.
// Optional category hubs connect each doc to the categories it is listed under.
const CAT_COLORS = ['#bf4520', '#2e5aa8', '#3d8b5f', '#7a4fb0', '#2a8a8a', '#b8860b', '#b04a7a', '#5a6580'];
const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const G = {
  nodes: [], links: [], byId: new Map(), adj: new Map(), alpha: 0, alphaTarget: 0, raf: 0,
  view: { k: 1, x: 0, y: 0 }, W: 0, H: 0, dpr: 1, sized: false, fitted: false,
  hover: null, live: new Set(), hubs: true, built: '',
};
const catColor = c => CAT_COLORS[allCats().indexOf(c) % CAT_COLORS.length];
const hash01 = s => { let h = 2166136261; for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return ((h >>> 0) % 10000) / 10000; };

function buildGraph() {
  const key = String(G.hubs);
  if (G.built === key) return;
  G.built = key;
  const old = G.byId, cats = allCats(), titles = new Set(DOCS.map(d => d.title));
  const nodes = [], links = [], byId = new Map(), seen = new Set();
  const add = n => {
    const prev = old.get(n.id);
    const ci = cats.indexOf(n.cat), a = (ci / cats.length) * Math.PI * 2 + hash01(n.id) * 0.9, r = 120 + hash01(n.id + '#') * 140;
    Object.assign(n, prev ? { x: prev.x, y: prev.y } : { x: Math.cos(a) * r, y: Math.sin(a) * r }, { vx: 0, vy: 0, fx: null, fy: null, deg: 0 });
    nodes.push(n); byId.set(n.id, n);
  };
  DOCS.forEach(d => add({ id: 'd:' + d.title, kind: 'doc', label: d.title, doc: d, cat: d.category }));
  const link = (a, b, hub) => {
    const k = a < b ? a + '|' + b : b + '|' + a;
    if (a === b || seen.has(k)) return;
    seen.add(k); links.push({ s: byId.get(a), t: byId.get(b), hub });
  };
  DOCS.forEach(d => (d.related || []).filter(r => titles.has(r)).forEach(r => link('d:' + d.title, 'd:' + r, false)));
  if (G.hubs) {
    cats.forEach(c => add({ id: 'c:' + c, kind: 'cat', label: c, cat: c }));
    DOCS.forEach(d => placements(d).forEach(p => link('d:' + d.title, 'c:' + p.category, true)));
  }
  const adj = new Map(nodes.map(n => [n, new Set()]));
  links.forEach(l => { l.s.deg++; l.t.deg++; adj.get(l.s).add(l.t); adj.get(l.t).add(l.s); });
  nodes.forEach(n => { n.r = n.kind === 'cat' ? 11 : 3.2 + Math.sqrt(n.deg) * 1.25; });
  Object.assign(G, { nodes, links, byId, adj });
}

function tick() {
  const { nodes, links } = G, a = G.alpha;
  // repulsion between every pair (n is small, so O(n^2) is fine)
  for (let i = 0; i < nodes.length; i++) {
    const p = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const q = nodes[j];
      let dx = q.x - p.x, dy = q.y - p.y, d2 = dx * dx + dy * dy;
      if (d2 > 250000) continue;
      if (d2 < 1) { dx = hash01(p.id + q.id) - 0.5; dy = 0.5 - hash01(q.id + p.id); d2 = 1; }
      const s = (p.kind === 'cat' || q.kind === 'cat' ? -260 : -110) * a / d2;
      p.vx += dx * s; p.vy += dy * s; q.vx -= dx * s; q.vy -= dy * s;
    }
  }
  // springs along links
  links.forEach(l => {
    const { s, t } = l, len = l.hub ? 90 : 46;
    let dx = t.x + t.vx - s.x - s.vx, dy = t.y + t.vy - s.y - s.vy, d = Math.hypot(dx, dy) || 1;
    const k = (d - len) / d * a * (l.hub ? 0.12 : 1 / Math.min(s.deg, t.deg)), b = s.deg / (s.deg + t.deg);
    dx *= k; dy *= k;
    t.vx -= dx * b; t.vy -= dy * b; s.vx += dx * (1 - b); s.vy += dy * (1 - b);
  });
  nodes.forEach(n => {
    n.vx -= n.x * 0.035 * a; n.vy -= n.y * 0.035 * a;  // gentle pull to the centre
    if (n.fx != null) { n.x = n.fx; n.y = n.fy; n.vx = n.vy = 0; return; }
    n.vx *= 0.6; n.vy *= 0.6; n.x += n.vx; n.y += n.vy;
  });
  G.alpha += (G.alphaTarget - G.alpha) * 0.0228;
}

function heat(a = 0.6) {
  G.alpha = Math.max(G.alpha, a);
  if (reduceMotion()) { for (let i = 0; i < 300 && G.alpha > 0.005; i++) tick(); return drawGraph(); }
  if (!G.raf) G.raf = requestAnimationFrame(loop);
}
function loop() {
  G.raf = 0;
  tick(); drawGraph();
  if (G.alpha > 0.005 || G.alphaTarget > 0) G.raf = requestAnimationFrame(loop);
}

function drawGraph() {
  const cv = $('#map');
  if (!cv || !G.sized) return;
  const ctx = cv.getContext('2d'), { k, x, y } = G.view, d = G.dpr;
  ctx.setTransform(d, 0, 0, d, 0, 0);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, G.W, G.H);
  ctx.setTransform(d * k, 0, 0, d * k, d * x, d * y);

  const f = G.hover, near = f ? G.adj.get(f) : null;
  const isLive = n => n.kind === 'cat' ? (state.cat === 'All' || state.cat === n.cat) : G.live.has(n.doc.title);
  const filtered = G.live.size !== DOCS.length;
  const lit = n => (!f || n === f || near.has(n)) && isLive(n);

  // edges
  ctx.lineWidth = 1 / Math.sqrt(k);
  G.links.forEach(l => {
    const on = f ? (l.s === f || l.t === f) : true, live = isLive(l.s) && isLive(l.t);
    ctx.strokeStyle = on && f ? catColor(f.cat) : '#4f5d75';
    ctx.globalAlpha = f ? (on ? 0.9 : 0.05) : live ? (l.hub ? 0.18 : 0.32) : 0.05;
    ctx.beginPath(); ctx.moveTo(l.s.x, l.s.y); ctx.lineTo(l.t.x, l.t.y); ctx.stroke();
  });

  // nodes
  G.nodes.forEach(n => {
    ctx.globalAlpha = lit(n) ? 1 : 0.14;
    ctx.fillStyle = catColor(n.cat);
    ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    if (n.kind === 'cat') { ctx.lineWidth = 2 / k; ctx.strokeStyle = '#fff'; ctx.stroke(); }
    if (n === f || (filtered && isLive(n) && n.kind === 'doc' && !f)) {
      ctx.lineWidth = 1.5 / k; ctx.strokeStyle = '#2d3142';
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 2.5 / k, 0, Math.PI * 2); ctx.stroke();
    }
  });

  // labels fade in as you zoom; the hovered node, its neighbours and hubs always show
  const zoomA = Math.min(1, Math.max(0, (k - 0.85) / 0.6));
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.lineJoin = 'round';
  G.nodes.forEach(n => {
    let a = n.kind === 'cat' ? 1 : zoomA;
    if (f) a = n === f || near.has(n) ? 1 : zoomA * 0.12;
    if (!isLive(n)) a *= 0.2;
    if (a < 0.03) return;
    const fs = n.kind === 'cat' ? 13 : n === f ? 12 : 10.5, sz = Math.max(fs / Math.min(k, 1.6), fs * 0.6);
    ctx.font = `${n.kind === 'cat' || n === f ? 600 : 500} ${sz}px Geist, system-ui, sans-serif`;
    ctx.globalAlpha = a;
    ctx.lineWidth = 3 / k; ctx.strokeStyle = 'rgba(255,255,255,.9)';
    ctx.strokeText(n.label, n.x, n.y + n.r + 3);
    ctx.fillStyle = '#2d3142';
    ctx.fillText(n.label, n.x, n.y + n.r + 3);
  });
  ctx.globalAlpha = 1;
}

function renderMap() {
  buildGraph();
  G.live = new Set(visibleDocs().map(d => d.title));
  const cats = allCats();
  const lg = $('#mapLegend');
  if (lg) lg.innerHTML = cats.map(c =>
    `<button type="button" class="chip legend" data-cat="${esc(c)}" aria-pressed="${state.cat === c}"><span class="sw" style="background:${catColor(c)}"></span>${esc(c)}</button>`).join('');
  if (G.alpha < 0.005 && !G.fitted) {
    // first layout: settle most of it up front so the graph does not explode into view
    G.alpha = 1;
    for (let i = 0; i < (reduceMotion() ? 300 : 160); i++) tick();
  }
  if (G.sized && !G.fitted) fitMap();
  drawGraph();
  if (G.alpha > 0.005) heat(G.alpha);
}

// ---------- graph pan / zoom / drag ----------
function sizeMap() {
  const cv = $('#map'), b = cv.getBoundingClientRect();
  if (!b.width || !b.height) return;
  G.W = b.width; G.H = b.height; G.dpr = window.devicePixelRatio || 1;
  cv.width = Math.round(b.width * G.dpr); cv.height = Math.round(b.height * G.dpr);
  if (!G.sized) { G.sized = true; fitMap(); }
  drawGraph();
}
function fitMap() {
  if (!G.sized || !G.nodes.length) return;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  G.nodes.forEach(n => { x0 = Math.min(x0, n.x); y0 = Math.min(y0, n.y); x1 = Math.max(x1, n.x); y1 = Math.max(y1, n.y); });
  const k = Math.min(G.W / (x1 - x0 + 120), G.H / (y1 - y0 + 120), 2);
  G.view = { k, x: G.W / 2 - ((x0 + x1) / 2) * k, y: G.H / 2 - ((y0 + y1) / 2) * k };
  G.fitted = true;
  drawGraph();
}
function zoomMap(f, cx = G.W / 2, cy = G.H / 2) {
  const v = G.view, k = Math.min(6, Math.max(0.2, v.k * f)), r = k / v.k;
  v.x = cx - (cx - v.x) * r; v.y = cy - (cy - v.y) * r; v.k = k;
  drawGraph();
}
function nodeAt(sx, sy) {
  const { k, x, y } = G.view, wx = (sx - x) / k, wy = (sy - y) / k;
  let best = null, bd = Infinity;
  G.nodes.forEach(n => { const d = Math.hypot(n.x - wx, n.y - wy); if (d < n.r + 5 / k && d < bd) { bd = d; best = n; } });
  return best;
}
function initMapControls() {
  const cv = $('#map');
  const pt = e => { const b = cv.getBoundingClientRect(); return [e.clientX - b.left, e.clientY - b.top]; };
  new ResizeObserver(sizeMap).observe(cv);
  cv.addEventListener('wheel', e => { e.preventDefault(); const [x, y] = pt(e); zoomMap(Math.exp(-e.deltaY * 0.0015), x, y); }, { passive: false });

  let drag = null;
  cv.addEventListener('pointerdown', e => {
    if (e.button) return;
    const [x, y] = pt(e), n = nodeAt(x, y);
    cv.setPointerCapture(e.pointerId);
    drag = { n, sx: x, sy: y, vx: G.view.x, vy: G.view.y, moved: false };
    if (n) { n.fx = n.x; n.fy = n.y; }
  });
  cv.addEventListener('pointermove', e => {
    const [x, y] = pt(e);
    if (!drag) {
      const n = nodeAt(x, y);
      if (n !== G.hover) { G.hover = n; cv.style.cursor = n ? 'pointer' : ''; cv.title = n ? (n.doc ? n.doc.summary : `Filter by ${n.label}`) : ''; drawGraph(); }
      return;
    }
    if (!drag.moved && Math.hypot(x - drag.sx, y - drag.sy) < 4) return;
    drag.moved = true;
    if (drag.n) {
      // drag a node: it stays pinned under the pointer and pulls its neighbours along
      drag.n.fx = (x - G.view.x) / G.view.k; drag.n.fy = (y - G.view.y) / G.view.k;
      G.hover = drag.n; G.alphaTarget = 0.3; heat(0.3);
    } else {
      cv.classList.add('panning');
      G.view.x = drag.vx + x - drag.sx; G.view.y = drag.vy + y - drag.sy; drawGraph();
    }
  });
  const end = e => {
    if (!drag) return;
    const { n, moved } = drag;
    drag = null; cv.classList.remove('panning');
    if (n) { n.fx = n.fy = null; G.alphaTarget = 0; }
    if (!n || moved || e.type === 'pointercancel') return;
    if (n.kind === 'doc') { if (e.metaKey || e.ctrlKey) window.open(n.doc.path, '_blank'); else location.href = n.doc.path; }
    else { state.cat = state.cat === n.cat ? 'All' : n.cat; render(false); }
  };
  cv.addEventListener('pointerup', end);
  cv.addEventListener('pointercancel', end);
  cv.addEventListener('pointerleave', () => { if (!drag && G.hover) { G.hover = null; cv.style.cursor = ''; drawGraph(); } });

  $('#mapIn').addEventListener('click', () => zoomMap(1.25));
  $('#mapOut').addEventListener('click', () => zoomMap(1 / 1.25));
  $('#mapFit').addEventListener('click', fitMap);
  $('#mapHubs').addEventListener('change', e => { G.hubs = e.target.checked; renderMap(); heat(0.8); });
  $('#mapShake').addEventListener('click', () => heat(1));
  $('#mapFull').addEventListener('click', () => setFull(!$('#mapCard').classList.contains('full')));
  document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && $('#mapCard').classList.contains('full')) setFull(false); });
  document.addEventListener('keydown', e => {
    if ($('#viewMap').hidden || e.target.closest('input,select,textarea')) return;
    if (e.key === 'f' || e.key === 'F') setFull(!$('#mapCard').classList.contains('full'));
    else if (e.key === 'Escape' && $('#mapCard').classList.contains('full')) setFull(false);
  });
}
// full screen: the card fills the window (works everywhere) and also asks the browser for real full screen
function setFull(on) {
  const card = $('#mapCard'), b = $('#mapFull');
  card.classList.toggle('full', on);
  document.body.classList.toggle('no-scroll', on);
  b.setAttribute('aria-pressed', on);
  b.textContent = on ? '⤡ Exit full screen' : '⤢ Full screen';
  b.title = on ? 'Exit full screen (Esc)' : 'Full screen (F)';
  try {
    if (on && card.requestFullscreen && !document.fullscreenElement) card.requestFullscreen().catch(() => {});
    if (!on && document.fullscreenElement) document.exitFullscreen().catch(() => {});
  } catch (_) {}
  requestAnimationFrame(() => { sizeMap(); fitMap(); });
}

// ---------- orchestration ----------
function render(full) {
  writeHash();
  if (full) renderControls();
  else {
    document.querySelectorAll('[data-cat].chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === state.cat));
    renderTags();
  }
  $('#clear').hidden = !(state.q || state.tag || state.cat !== 'All' || state.level !== 'All');
  renderList();
  renderToc();
  renderMap();
}

function setView(v) {
  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', b.dataset.view === v));
  $('#viewList').hidden = v !== 'list';
  $('#viewMap').hidden = v !== 'map';
  if (v !== 'map' && $('#mapCard').classList.contains('full')) setFull(false);
  $('#viewToc').hidden = v !== 'toc';
  sessionStorage.setItem('view', v);
}

function init() {
  readHash();
  $('#q').value = state.q;
  render(true);
  setView(sessionStorage.getItem('view') || 'list');
  initMapControls();

  $('#q').addEventListener('input', e => { state.q = e.target.value; render(false); });
  $('#tagq').addEventListener('input', e => { state.tagq = e.target.value; renderTags(); });
  $('#clearTag').addEventListener('click', () => { state.tag = ''; render(false); });
  $('#level').addEventListener('change', e => { state.level = e.target.value; render(false); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; render(false); });
  $('#clear').addEventListener('click', () => {
    Object.assign(state, { q: '', cat: 'All', tag: '', level: 'All' });
    $('#q').value = ''; $('#level').value = 'All'; render(false);
  });
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-cat]'), t = e.target.closest('button[data-tag]'), v = e.target.closest('[data-view]');
    if (v) return setView(v.dataset.view);
    if (c) { state.cat = state.cat === c.dataset.cat && c.tagName !== 'BUTTON' ? 'All' : c.dataset.cat; render(false); }
    if (t) { state.tag = state.tag === t.dataset.tag ? '' : t.dataset.tag; render(false); }
  });
  document.addEventListener('keydown', e => {
    const c = e.target.closest && e.target.closest('g[data-cat]');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); c.dispatchEvent(new MouseEvent('click', { bubbles: true })); }
    if (e.key === '/' && document.activeElement !== $('#q')) { e.preventDefault(); $('#q').focus(); }
    if (e.key === 'Escape' && document.activeElement === $('#q')) { $('#q').value = ''; state.q = ''; render(false); }
  });
  window.addEventListener('hashchange', () => { readHash(); $('#q').value = state.q; render(true); });
}

document.addEventListener('DOMContentLoaded', init);
