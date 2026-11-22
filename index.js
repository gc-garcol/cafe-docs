// Cafe Docs: content registry + search, filter and mindmap.
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
    related: ['Derivatives', 'Integrals'],
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
    related: ['Limits', 'Integrals'],
  },
  {
    title: 'Integrals',
    path: 'content/math/integrals/integrals.html',
    category: 'Mathematics',
    topic: 'Calculus',
    order: 4,
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
    order: 22,
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
    order: 23,
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
    order: 21,
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
    order: 5,
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
    order: 20,
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
    order: 14,
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
    order: 15,
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
    order: 24,
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
    order: 6,
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
    order: 7,
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
    order: 8,
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
    order: 9,
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
    order: 10,
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
    order: 11,
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
    order: 12,
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
    order: 13,
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
    order: 13,
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
    order: 17,
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
    order: 12,
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
    order: 14,
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
    order: 15,
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
    order: 16,
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
    order: 18,
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
    order: 19,
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
    order: 20,
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
    order: 21,
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
    order: 22,
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
    order: 23,
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
    order: 24,
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
    order: 25,
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
    order: 26,
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
    order: 27,
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
    order: 28,
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
    order: 29,
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
    order: 30,
    level: 'Beginner',
    tags: ['overfitting', 'underfitting', 'regularization', 'weight decay', 'ridge', 'validation', 'generalization', 'dropout', 'early stopping'],
    summary: 'Raise the model size and watch training error fall while validation error climbs. Add an L2 penalty to tame the fit, and learn dropout, augmentation and early stopping.',
    related: ['Deep Learning Overview', 'Linear Regression', 'Gradient Descent', 'Backpropagation'],
  },
  {
    title: 'Aeron Transport',
    path: 'content/architecture/aeron/aeron-transport/aeron-transport.html',
    category: 'Architecture',
    topic: 'Messaging',
    order: 1,
    level: 'Intermediate',
    tags: ['aeron', 'messaging', 'low latency', 'log buffer', 'media driver', 'shared memory', 'udp', 'ipc', 'back-pressure'],
    summary: 'Publishers write into a three-term log buffer in shared memory, a media driver moves it over UDP or IPC, and subscribers read by position. Offer, send and poll to see back-pressure.',
    related: ['Aeron Channels and Streams', 'Aeron Reliability and Flow Control'],
  },
  {
    title: 'Aeron Channels and Streams',
    path: 'content/architecture/aeron/aeron-channels/aeron-channels.html',
    category: 'Architecture',
    topic: 'Messaging',
    order: 2,
    level: 'Beginner',
    tags: ['aeron', 'channel', 'stream', 'session', 'uri', 'multicast', 'mdc', 'ipc', 'spy'],
    summary: 'How publishers and subscribers find each other. Build channel URIs for unicast, multicast, multi-destination-cast and IPC, and see how stream and session ids tell flows apart.',
    related: ['Aeron Transport', 'Aeron Reliability and Flow Control'],
  },
  {
    title: 'Aeron Reliability and Flow Control',
    path: 'content/architecture/aeron/aeron-reliability/aeron-reliability.html',
    category: 'Architecture',
    topic: 'Messaging',
    order: 3,
    level: 'Intermediate',
    tags: ['aeron', 'nak', 'loss', 'flow control', 'back-pressure', 'status message', 'reliable', 'multicast'],
    summary: 'Drop packets on a simulated link and watch NAKs repair the gap, or fill it with padding on an unreliable stream. Then see how windows and status messages hold a publisher back.',
    related: ['Aeron Transport', 'Aeron Channels and Streams', 'Aeron Archive'],
  },
  {
    title: 'Aeron Archive',
    path: 'content/architecture/aeron/aeron-archive/aeron-archive.html',
    category: 'Architecture',
    topic: 'Messaging',
    order: 4,
    level: 'Intermediate',
    tags: ['aeron', 'archive', 'recording', 'replay', 'replay merge', 'catalog', 'durability', 'checksum'],
    summary: 'Record a live stream to disk and replay it. Watch a late subscriber replay history, catch up with the live stream, and merge into it with no gap.',
    related: ['Aeron Transport', 'Aeron Cluster'],
  },
  {
    title: 'Aeron Cluster',
    path: 'content/architecture/aeron/aeron/aeron.html',
    category: 'Architecture',
    topic: 'Messaging',
    order: 5,
    level: 'Intermediate',
    tags: ['aeron', 'cluster', 'raft', 'consensus', 'replicated state machine', 'leader election', 'snapshot', 'determinism', 'low latency'],
    summary: 'Fault-tolerant services as replicated state machines. Send bids to a three-node cluster, crash nodes, and watch Raft commit by majority and elect a new leader.',
    related: ['Aeron Transport', 'Aeron Archive', 'Aeron Reliability and Flow Control'],
  },
  {
    title: 'Kubernetes Fundamentals',
    path: 'content/architecture/k8s/k8s-fundamentals/k8s-fundamentals.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 6,
    level: 'Beginner',
    tags: ['kubernetes', 'k8s', 'cluster', 'pod', 'namespace', 'labels', 'kubectl', 'yaml', 'reconciliation'],
    summary: 'Cluster architecture, control plane and nodes, Pods and Namespaces, labels, kubectl, manifests and the reconcile loop. Step one kubectl apply through every component.',
    related: ['Kubernetes Workloads', 'Kubernetes Networking'],
  },
  {
    title: 'Kubernetes Workloads',
    path: 'content/architecture/k8s/k8s-workloads/k8s-workloads.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 7,
    level: 'Beginner',
    tags: ['kubernetes', 'k8s', 'replicaset', 'deployment', 'statefulset', 'daemonset', 'job', 'cronjob', 'rolling update'],
    summary: 'ReplicaSet, Deployment, StatefulSet, DaemonSet, Job and sidecars. Step through a rolling update, break the image on purpose, and roll back.',
    related: ['Kubernetes Fundamentals', 'Kubernetes Scheduling and Scaling'],
  },
  {
    title: 'Kubernetes Networking',
    path: 'content/architecture/k8s/k8s-networking/k8s-networking.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 8,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'service', 'coredns', 'ingress', 'gateway api', 'cni', 'networkpolicy', 'kube-proxy'],
    summary: 'Pod networking, Services, DNS, Ingress, Gateway API, CNI, NetworkPolicy and kube-proxy. Flip Pod readiness and watch a Service rebuild its endpoints.',
    related: ['Kubernetes Workloads', 'Kubernetes Configuration and Security'],
  },
  {
    title: 'Kubernetes Storage',
    path: 'content/architecture/k8s/k8s-storage/k8s-storage.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 9,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'volume', 'pv', 'pvc', 'storageclass', 'csi', 'access modes', 'statefulset'],
    summary: 'Volumes, PV and PVC, StorageClass, CSI and access modes. Make a claim and see it bind to a volume or trigger dynamic provisioning.',
    related: ['Kubernetes Workloads', 'Kubernetes Scheduling and Scaling'],
  },
  {
    title: 'Kubernetes Configuration and Security',
    path: 'content/architecture/k8s/k8s-security/k8s-security.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 10,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'configmap', 'secret', 'rbac', 'serviceaccount', 'securitycontext', 'pod security', 'admission', 'oidc', 'tls'],
    summary: 'ConfigMap and Secret, RBAC, ServiceAccount, SecurityContext, Pod Security Standards, admission and OIDC. Check who may do what.',
    related: ['Kubernetes Networking', 'Kubernetes DevOps and Advanced'],
  },
  {
    title: 'Kubernetes Scheduling and Scaling',
    path: 'content/architecture/k8s/k8s-scheduling-scaling/k8s-scheduling-scaling.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 11,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'requests', 'limits', 'qos', 'affinity', 'taints', 'probes', 'hpa', 'vpa', 'keda', 'pdb'],
    summary: 'Requests and limits, QoS, affinity, taints, probes, HPA, VPA, KEDA and PDB. See how the scheduler filters and scores nodes.',
    related: ['Kubernetes Workloads', 'Kubernetes Observability'],
  },
  {
    title: 'Kubernetes Observability',
    path: 'content/architecture/k8s/k8s-observability/k8s-observability.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 12,
    level: 'Intermediate',
    tags: ['kubernetes', 'k8s', 'prometheus', 'grafana', 'logging', 'opentelemetry', 'tracing', 'alertmanager', 'sli', 'slo'],
    summary: 'Prometheus, Grafana, logging, OpenTelemetry, tracing, Alertmanager and SLOs. Spend an error budget and see what is left.',
    related: ['Kubernetes Scheduling and Scaling', 'Kubernetes DevOps and Advanced'],
  },
  {
    title: 'Kubernetes DevOps and Advanced',
    path: 'content/architecture/k8s/k8s-devops-advanced/k8s-devops-advanced.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 13,
    level: 'Advanced',
    tags: ['kubernetes', 'k8s', 'helm', 'kustomize', 'argo cd', 'gitops', 'etcd', 'informer', 'crd', 'operator', 'webhook', 'troubleshooting', 'disaster recovery'],
    summary: 'Helm, Kustomize, GitOps, etcd, scheduler internals, informers, CRDs and operators, webhooks, troubleshooting and HA. Watch GitOps catch drift.',
    related: ['Kubernetes Observability', 'Kubernetes Configuration and Security'],
  },
  {
    title: 'K9s Terminal UI',
    path: 'content/architecture/k8s/k8s-k9s/k8s-k9s.html',
    category: 'Architecture',
    topic: 'Kubernetes',
    order: 14,
    level: 'Beginner',
    tags: ['kubernetes', 'k8s', 'k9s', 'tui', 'kubectl', 'terminal', 'debugging', 'logs'],
    summary: 'Navigate, filter, describe, read logs and delete from a terminal UI. Drive a simulated K9s with commands, filters and key actions.',
    related: ['Kubernetes Fundamentals', 'Kubernetes DevOps and Advanced'],
  },
  {
    title: 'AWS Fundamentals',
    path: 'content/architecture/aws/aws-fundamentals/aws-fundamentals.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 15,
    level: 'Beginner',
    tags: ['aws', 'regions', 'availability zones', 'global infrastructure', 'iam', 'shared responsibility'],
    summary: 'Global infrastructure, Regions, Availability Zones and IAM basics. Fail a zone and see how much capacity survives.',
    related: ['AWS Compute', 'AWS Security'],
  },
  {
    title: 'AWS Compute',
    path: 'content/architecture/aws/aws-compute/aws-compute.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 16,
    level: 'Beginner',
    tags: ['aws', 'ec2', 'auto scaling', 'lambda', 'ecs', 'eks', 'fargate'],
    summary: 'EC2, Auto Scaling, Lambda, ECS and EKS. Move the load and watch target tracking add and remove instances.',
    related: ['AWS Fundamentals', 'AWS Networking'],
  },
  {
    title: 'AWS Networking',
    path: 'content/architecture/aws/aws-networking/aws-networking.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 17,
    level: 'Intermediate',
    tags: ['aws', 'vpc', 'subnet', 'route table', 'nat gateway', 'alb', 'nlb', 'load balancer'],
    summary: 'VPC, subnets, route tables, NAT, ALB and NLB. Change routes and addresses to see when traffic gets through.',
    related: ['AWS Compute', 'AWS Security'],
  },
  {
    title: 'AWS Storage',
    path: 'content/architecture/aws/aws-storage/aws-storage.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 18,
    level: 'Beginner',
    tags: ['aws', 's3', 'ebs', 'efs', 'fsx', 'object storage', 'block storage'],
    summary: 'S3, EBS, EFS and FSx. Describe how data is used and see which service fits.',
    related: ['AWS Compute', 'AWS Databases'],
  },
  {
    title: 'AWS Databases',
    path: 'content/architecture/aws/aws-database/aws-database.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 19,
    level: 'Intermediate',
    tags: ['aws', 'rds', 'aurora', 'dynamodb', 'elasticache', 'database', 'cache'],
    summary: 'RDS, Aurora, DynamoDB and ElastiCache. Match a workload to the right managed database.',
    related: ['AWS Storage', 'AWS Messaging and Streaming'],
  },
  {
    title: 'AWS Messaging and Streaming',
    path: 'content/architecture/aws/aws-messaging/aws-messaging.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 20,
    level: 'Intermediate',
    tags: ['aws', 'sqs', 'sns', 'eventbridge', 'msk', 'kinesis', 'fan-out', 'queue'],
    summary: 'SQS, SNS, EventBridge, MSK and Kinesis. Publish to a queue and to a topic and see who gets the message.',
    related: ['AWS Databases', 'AWS Monitoring'],
  },
  {
    title: 'AWS Security',
    path: 'content/architecture/aws/aws-security/aws-security.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 21,
    level: 'Intermediate',
    tags: ['aws', 'iam', 'kms', 'secrets manager', 'waf', 'encryption', 'least privilege'],
    summary: 'IAM, KMS, Secrets Manager and WAF. Attach allow and deny policies and see why an explicit deny wins.',
    related: ['AWS Fundamentals', 'AWS Networking'],
  },
  {
    title: 'AWS Monitoring',
    path: 'content/architecture/aws/aws-monitoring/aws-monitoring.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 22,
    level: 'Intermediate',
    tags: ['aws', 'cloudwatch', 'cloudtrail', 'x-ray', 'alarm', 'observability'],
    summary: 'CloudWatch, CloudTrail and X-Ray. Add data points and see when an M of N alarm fires.',
    related: ['AWS Messaging and Streaming', 'AWS DevOps and IaC'],
  },
  {
    title: 'AWS DevOps and IaC',
    path: 'content/architecture/aws/aws-devops-iac/aws-devops-iac.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 23,
    level: 'Intermediate',
    tags: ['aws', 'terraform', 'cloudformation', 'codepipeline', 'iac', 'drift', 'ci/cd'],
    summary: 'Terraform, CloudFormation and CodePipeline. Edit config, cause drift and read the plan.',
    related: ['AWS Monitoring', 'AWS Advanced Architecture'],
  },
  {
    title: 'AWS Advanced Architecture',
    path: 'content/architecture/aws/aws-advanced-architecture/aws-advanced-architecture.html',
    category: 'Architecture',
    topic: 'AWS',
    order: 24,
    level: 'Advanced',
    tags: ['aws', 'high availability', 'disaster recovery', 'multi-region', 'cost optimization', 'rto', 'rpo'],
    summary: 'HA, disaster recovery, multi-region and cost optimization. Pick a recovery time and see the cheapest strategy.',
    related: ['AWS DevOps and IaC', 'AWS Fundamentals'],
  },
  {
    title: 'Kafka Use Cases',
    path: 'content/architecture/kafka/kafka-use-cases/kafka-use-cases.html',
    category: 'Architecture',
    topic: 'Kafka',
    order: 25,
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
    summary: 'A seven-phase study path into quantitative finance: calculus and linear algebra, probability, derivatives pricing, time series, machine learning, and engineering, with a project for each phase.',
    related: ['Bayes\' Theorem', 'Gaussian Distribution', 'Linear Regression', 'Overfitting and Regularization', 'Machine Learning Algorithm Groups'],
  },
  {
    title: 'False Sharing',
    path: 'content/engineering/false-sharing/false-sharing.html',
    category: 'Engineering',
    topic: 'Concurrency',
    order: 1,
    level: 'Intermediate',
    tags: ['false sharing', 'cache line', 'concurrency', 'performance', 'mesi', 'cache coherence', 'padding', 'low latency'],
    summary: 'Two threads write two different variables and still slow each other down, because they share one 64-byte cache line. Step through the MESI ping-pong, then pad the fields apart.',
    related: ['Memory Fence', 'Aeron Transport'],
  },
  {
    title: 'Memory Fence',
    path: 'content/engineering/memory-fence/memory-fence.html',
    category: 'Engineering',
    topic: 'Concurrency',
    order: 2,
    level: 'Advanced',
    tags: ['memory fence', 'memory ordering', 'concurrency', 'atomics', 'store buffer', 'acquire release', 'memory barrier', 'lock-free'],
    summary: 'CPUs buffer stores and let later loads run first. Drive the store buffering test on two cores, get r0 = r1 = 0, then add a fence and see that outcome disappear. Covers acquire and release too.',
    related: ['False Sharing', 'Aeron Transport'],
  },
  {
    title: 'Expectation, Variance and Covariance',
    path: 'content/quant/expectation-variance/expectation-variance.html',
    category: 'Quant',
    topic: 'Probability and statistics',
    order: 2,
    also: [{ category: 'Mathematics', topic: 'Probability', order: 16 }],
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
    also: [{ category: 'Mathematics', topic: 'Probability', order: 17 }],
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
    also: [{ category: 'Mathematics', topic: 'Probability', order: 18 }],
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
    also: [{ category: 'Mathematics', topic: 'Probability', order: 19 }],
    level: 'Intermediate',
    tags: ['hypothesis test', 'p-value', 't-test', 'multiple testing', 'statistics', 'significance', 'bonferroni', 'data snooping'],
    summary: 'Test whether a strategy\'s mean return is really above zero with a t-test, then run hundreds of strategies with no edge at all and watch five percent of them pass by luck.',
    related: ['Law of Large Numbers and the CLT', 'Maximum Likelihood Estimation', 'Backtesting Without Look-Ahead', 'Walk-Forward and Purged Cross-Validation'],
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
const allCats = () => [...new Set(DOCS.flatMap(d => placements(d).map(p => p.category)))];
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
    order: state.cat !== 'All' ? byOrderIn(state.cat) : (a, b) => a.category.localeCompare(b.category) || byOrder(a, b),
    title: (a, b) => a.title.localeCompare(b.title),
    category: (a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title),
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
  $('#toc').innerHTML = Object.keys(tree).sort().map(c =>
    `<li><b>${esc(c)}</b><ul>${Object.keys(tree[c]).sort(byTopic(c)).map(t => tree[c][t].sort(byOrderIn(c)) &&
      `<li><span class="topic">${esc(t)}</span><ul>${tree[c][t].map(d =>
        `<li><a href="${esc(d.path)}">${esc(d.title)}</a></li>`).join('')}</ul></li>`).join('')}</ul></li>`).join('')
    || '<li class="na">Nothing to list</li>';
}

// ---------- mindmap ----------
function buildTree() {
  const root = { label: 'Cafe Docs', kind: 'root', children: [] };
  const cats = allCats().sort();
  cats.forEach(c => {
    const cn = { label: c, kind: 'cat', cat: c, children: [] };
    const here = DOCS.filter(d => inCat(d, c));
    [...new Set(here.map(d => place(d, c).topic))].sort(byTopic(c)).forEach(t => {
      const tn = { label: t, kind: 'topic', cat: c, children: [] };
      here.filter(d => place(d, c).topic === t).sort(byOrderIn(c))
        .forEach(d => tn.children.push({ label: d.title, kind: 'doc', doc: d, cat: c, children: [] }));
      cn.children.push(tn);
    });
    root.children.push(cn);
  });
  return root;
}

function renderMap() {
  const svg = $('#map');
  const root = buildTree();
  // two-sided mind map: root in the centre, categories / topics / docs in columns to its left and right.
  // text is horizontal; leaves are one ROW apart and parents sit at the mean y of their children,
  // so no two labels can overlap.
  const ROW = 22, GAP = 40, RR = 44;
  const tw = (t, k) => t.length * k + 2;                 // text width estimate
  const catW = n => tw(n.label, 7) + 24;
  const cats = root.children;
  cats.forEach(c => { c.leafs = []; (function f(n) { n.children.length ? n.children.forEach(f) : c.leafs.push(n); })(c); });
  const total = cats.reduce((n, c) => n + c.leafs.length, 0);
  let acc = 0, cut = 1, best = Infinity;
  cats.forEach((c, i) => { acc += c.leafs.length; const d = Math.abs(total / 2 - acc); if (i < cats.length - 1 && d < best) { best = d; cut = i + 1; } });
  const sides = [cats.slice(0, cut), cats.slice(cut)];

  const topics = cats.flatMap(c => c.children), docsAll = topics.flatMap(t => t.children);
  const wCat = Math.max(...cats.map(catW)), wTop = Math.max(...topics.map(t => tw(t.label, 7))), wDoc = Math.max(...docsAll.map(d => tw(d.label, 6.4)));
  const dc = RR + GAP + wCat / 2;                        // category column (centre)
  const dt = dc + wCat / 2 + GAP;                        // topic dot
  const dd = dt + 9 + wTop + GAP;                        // doc dot
  const half = dd + 9 + wDoc + 16;
  const rows = Math.max(...sides.map(cs => cs.reduce((n, c) => n + c.leafs.length, 0)));
  const W = half * 2, H = rows * ROW + 50, ox = W / 2, oy = H / 2;
  mapBox = { W, H };

  sides.forEach((cs, si) => {
    const sg = si === 0 ? 1 : -1, ls = cs.flatMap(c => c.leafs);
    ls.forEach((l, j) => { l.y = oy + (j + 0.5 - ls.length / 2) * ROW; });
    cs.forEach(c => {
      c.sg = sg; c.x = ox + sg * dc;
      c.children.forEach(t => {
        t.sg = sg; t.x = ox + sg * dt;
        t.children.forEach(d => { d.sg = sg; d.x = ox + sg * dd; });
        t.y = t.children.reduce((m, d) => m + d.y, 0) / t.children.length;
      });
      c.y = c.children.reduce((m, t) => m + t.y, 0) / c.children.length;
    });
  });
  root.x = ox; root.y = oy;

  const live = new Set(visibleDocs().map(d => d.title));
  const alive = n => n.kind === 'doc' ? live.has(n.label) : n.children.some(alive);
  // where an edge leaves a parent / enters a child
  const outX = n => n.kind === 'root' ? null : n.kind === 'cat' ? n.x + n.sg * catW(n) / 2 : n.x + n.sg * (9 + tw(n.label, 7) + 4);
  const edge = (n, c) => {
    const x1 = n.kind === 'root' ? ox + c.sg * RR : outX(n);
    const x2 = c.kind === 'cat' ? c.x - c.sg * catW(c) / 2 : c.x - c.sg * 3;
    const mx = (x1 + x2) / 2;
    return `<path d="M${x1.toFixed(1)},${n.y.toFixed(1)} C${mx.toFixed(1)},${n.y.toFixed(1)} ${mx.toFixed(1)},${c.y.toFixed(1)} ${x2.toFixed(1)},${c.y.toFixed(1)}" class="edge${alive(c) ? '' : ' off'}"/>`;
  };
  const label = (n, cls, k) => {
    const x = n.x, y = n.y, anchor = n.sg > 0 ? 'start' : 'end';
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" class="dot ${cls}"/>` +
      `<text x="${(x + n.sg * 9).toFixed(1)}" y="${(y + 3.5).toFixed(1)}" text-anchor="${anchor}" class="nt ${cls}">${esc(n.label)}</text>`;
  };

  let edges = '', nodes = '';
  (function walk(n) {
    n.children.forEach(c => { edges += edge(n, c); walk(c); });
    const on = n.kind === 'root' || alive(n);
    if (n.kind === 'root') {
      nodes += `<g class="g"><circle cx="${ox}" cy="${oy}" r="${RR}" class="nd root"/><text x="${ox}" y="${oy + 4}" text-anchor="middle" class="nt root">${esc(n.label)}</text></g>`;
    } else if (n.kind === 'cat') {
      const w = catW(n);
      nodes += `<g class="g${on ? '' : ' off'}" data-cat="${esc(n.cat)}" tabindex="0" role="button" aria-label="Filter by ${esc(n.label)}">` +
        `<rect x="${(n.x - w / 2).toFixed(1)}" y="${(n.y - 14).toFixed(1)}" width="${w.toFixed(1)}" height="28" rx="14" class="nd cat"/>` +
        `<text x="${n.x.toFixed(1)}" y="${(n.y + 4).toFixed(1)}" text-anchor="middle" class="nt cat">${esc(n.label)}</text></g>`;
    } else if (n.kind === 'topic') {
      nodes += `<g class="g${on ? '' : ' off'}">${label(n, 'topic')}</g>`;
    } else {
      nodes += `<a href="${esc(n.doc.path)}" class="g${on ? '' : ' off'}"><title>${esc(n.doc.summary)}</title>${label(n, 'doc')}</a>`;
    }
  })(root);
  svg.innerHTML = `<g id="mapView">${edges}${nodes}</g>`;
  if (!mapView.set) fitMap(); else applyMap();
}

// ---------- mindmap pan / zoom ----------
const VW = 900, VH = 700;
let mapBox = { W: 700, H: 200 };
const mapView = { k: 1, x: 0, y: 0, set: false };
function applyMap() { const g = $('#mapView'); if (g) g.setAttribute('transform', `translate(${mapView.x} ${mapView.y}) scale(${mapView.k})`); }
function fitMap() {
  // scale the whole tree into the frame and centre it (the root sits mid-height)
  const k = Math.min(VW / (mapBox.W + 20), VH / (mapBox.H + 20), 1.4);
  Object.assign(mapView, { k, x: (VW - mapBox.W * k) / 2, y: (VH - mapBox.H * k) / 2, set: true });
  applyMap();
}
function centerMap() {
  // keep the current zoom, just bring the root to the middle of the frame
  mapView.x = VW / 2 - (mapBox.W / 2) * mapView.k;
  mapView.y = VH / 2 - (mapBox.H / 2) * mapView.k;
  applyMap();
}
function zoomMap(f, cx = VW / 2, cy = VH / 2) {
  const k = Math.min(4, Math.max(0.3, mapView.k * f)), r = k / mapView.k;
  mapView.x = cx - (cx - mapView.x) * r; mapView.y = cy - (cy - mapView.y) * r; mapView.k = k;
  applyMap();
}
function initMapControls() {
  const svg = $('#map');
  const pt = e => { const b = svg.getBoundingClientRect(), s = Math.min(b.width / VW, b.height / VH);
    return [(e.clientX - b.left - (b.width - VW * s) / 2) / s, (e.clientY - b.top - (b.height - VH * s) / 2) / s, s]; };
  svg.addEventListener('wheel', e => { e.preventDefault(); const [x, y] = pt(e); zoomMap(e.deltaY < 0 ? 1.12 : 1 / 1.12, x, y); }, { passive: false });
  let drag = null, moved = false;
  svg.addEventListener('pointerdown', e => { if (e.button) return; const [, , s] = pt(e); drag = { sx: e.clientX, sy: e.clientY, x: mapView.x, y: mapView.y, s }; moved = false; });
  window.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (!moved && Math.hypot(dx, dy) < 4) return;
    moved = true; svg.classList.add('panning');
    mapView.x = drag.x + dx / drag.s; mapView.y = drag.y + dy / drag.s; applyMap();
  });
  window.addEventListener('pointerup', () => { drag = null; svg.classList.remove('panning'); });
  // a drag must not count as a click on a node
  svg.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  $('#mapIn').addEventListener('click', () => zoomMap(1.25));
  $('#mapOut').addEventListener('click', () => zoomMap(1 / 1.25));
  $('#mapFit').addEventListener('click', centerMap);
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
